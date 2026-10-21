// Low-volume, read-only probes against the two explicitly allowed local servers.
// Start npm run dev and npm run preview -- --port 4173 before running.
import http from 'node:http';
import { writeFileSync } from 'node:fs';

function request(port, path, headers = {}) {
  return new Promise((resolve, reject) => {
    const req = http.get({ hostname: '127.0.0.1', port, path, headers, timeout: 5000 }, res => {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', chunk => { body += chunk; });
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body }));
    });
    req.on('timeout', () => req.destroy(new Error('timeout')));
    req.on('error', reject);
  });
}

const results = [];
const paths = [
  '/.env.example', '/.env.example?raw', '/.env.example?url',
  '/.git/HEAD', '/.git/config?raw', '/%2egit/HEAD',
  '/docs/security/audit-before.json', '/docs/security/audit-before.json?raw',
  '/@fs/D:/dnclinic/.git/HEAD', '/@fs/D:/dnclinic/.env.example?raw',
  '/assets/../.git/HEAD', '/assets/%2e%2e/.git/HEAD',
  '/assets/%2e%2e%2f.git%2fHEAD', '/%00', '/%', '/%E0%A4%A',
];
for (const port of [3000, 4173]) {
  for (const path of paths) {
    const res = await request(port, path);
    const htmlFallback = res.body.includes('<div id="root">');
    const leaked = /ref: refs\/heads\/|\[core\]|GEMINI_API_KEY|VITE_\*|auditReportVersion/.test(res.body);
    const malformed = ['/%00', '/%', '/%E0%A4%A'].includes(path);
    results.push({ port, path, status: res.status, htmlFallback, leaked,
      // No response bodies are persisted, so secrets cannot leak into reports.
      passed: !leaked && (malformed
        ? res.status === 400 && res.body === 'Bad Request'
        : [400, 403, 404].includes(res.status) || (res.status === 200 && htmlFallback)) });
  }
  const host = await request(port, '/', { Host: 'attacker.invalid' });
  results.push({ port, test: 'DNS rebinding Host', status: host.status, passed: host.status === 403 });
  const cors = await request(port, '/', { Origin: 'https://attacker.invalid' });
  results.push({ port, test: 'cross-origin read', passed: !cors.headers['access-control-allow-origin'] });
}
for (const path of ['/', '/lien-he', '/dich-vu/unknown', '/kien-thuc/unknown']) {
  const res = await request(4173, path);
  results.push({ port: 4173, path, test: 'security headers on SPA routes',
    passed: res.headers['x-frame-options'] === 'DENY'
      && res.headers['x-content-type-options'] === 'nosniff'
      && res.headers['content-security-policy']?.includes("frame-ancestors 'none'") });
}
writeFileSync('docs/security/attack-http.json', JSON.stringify({ date: new Date().toISOString(), results }, null, 2));
console.log(JSON.stringify({ total: results.length, failed: results.filter(r => !r.passed) }, null, 2));
process.exitCode = results.some(r => !r.passed) ? 1 : 0;

import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { contentSecurityPolicy, metaCsp, staticHeadersFile } from '../config/security.mjs';
import { decodeFragment } from '../src/utils/fragment.mjs';
import { requestGuard } from '../config/request-guard.mjs';

test('malformed request targets return a generic 400 instead of a Vite stack trace', () => {
  for (const url of ['/%', '/%E0%A4%A', '/%FF', '/%00', '/?q=%']) {
    let nextCalled = false;
    let body;
    const response = { statusCode: 200, setHeader() {}, end(value) { body = value; } };
    requestGuard({ url }, response, () => { nextCalled = true; });
    assert.equal(nextCalled, false);
    assert.equal(response.statusCode, 400);
    assert.equal(body, 'Bad Request');
  }
  let nextCalled = false;
  requestGuard({ url: '/lien-he?q=%C4%91%E1%BA%B7t' }, {}, () => { nextCalled = true; });
  assert.equal(nextCalled, true);
});

test('fragments tolerate malformed and hostile URL input as plain text', () => {
  for (const value of ['#%', '#%E0%A4%A', '#%FF', '#<img src=x onerror=alert(1)>']) {
    assert.doesNotThrow(() => decodeFragment(value));
  }
  assert.equal(decodeFragment('#li%C3%AAn-h%E1%BB%87'), 'liên-hệ');
});

test('production policy blocks inline code, framing, forms and network connections', () => {
  assert.doesNotMatch(contentSecurityPolicy, /unsafe-inline|unsafe-eval|\*/);
  for (const directive of ["script-src 'self'", "script-src-attr 'none'", "frame-ancestors 'none'", "form-action 'none'", "connect-src 'none'"]) {
    assert.ok(contentSecurityPolicy.includes(directive));
  }
  const html = readFileSync('dist/index.html', 'utf8');
  assert.ok(html.replaceAll('&#39;', "'").includes(metaCsp));
  assert.equal(readFileSync('dist/_headers', 'utf8'), staticHeadersFile);
  assert.doesNotMatch(html, /<script(?![^>]*\bsrc=)[^>]*>[\s\S]+?<\/script>/i);
});

test('published files exclude source maps, credentials and active SVG content', () => {
  const files = readdirSync('dist', { recursive: true }).map(String);
  for (const file of files) {
    assert.doesNotMatch(file, /(^|[\\/])(?:\.env[^\\/]*|\.git(?:[\\/]|$)|node_modules(?:[\\/]|$))|\.(?:map|pem|key)$/i);
    if (file.endsWith('.svg')) {
      assert.doesNotMatch(readFileSync(`dist/${file}`, 'utf8'), /<script|<foreignObject|\son\w+\s*=|javascript:/i);
    }
  }
});

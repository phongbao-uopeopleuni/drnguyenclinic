import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { metaCsp, securityHeaders, staticHeadersFile } from './config/security.mjs';
import { requestGuard } from './config/request-guard.mjs';
export default defineConfig({
  plugins: [react(), tailwindcss(), {
    name: 'reject-malformed-request-target',
    configureServer(server) { server.middlewares.use(requestGuard); },
    configurePreviewServer(server) { server.middlewares.use(requestGuard); },
  }, {
    name: 'static-security-policy',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler: () => [
        { tag: 'meta', attrs: { 'http-equiv': 'Content-Security-Policy', content: metaCsp }, injectTo: 'head-prepend' },
        { tag: 'meta', attrs: { name: 'referrer', content: 'no-referrer' }, injectTo: 'head-prepend' },
      ],
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: '_headers', source: staticHeadersFile });
    },
  }],
  resolve: { alias: { '@': path.resolve(__dirname, '.') } },
  server: {
    host: '127.0.0.1', strictPort: true,
    hmr: process.env.DISABLE_HMR !== 'true',
    cors: false,
    fs: {
      strict: true,
      deny: ['.env', '.env.*', '*.{crt,pem,key}', '**/.git/**', '**/.npm-cache/**', '**/docs/**'],
    },
    headers: { 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'no-referrer' },
  },
  preview: { host: '127.0.0.1', strictPort: true, headers: securityHeaders },
  build: { sourcemap: false },
});

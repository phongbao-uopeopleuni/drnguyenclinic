// Shared by the production HTML, preview server and static hosting artifact.
export const contentSecurityPolicy = [
  "default-src 'none'",
  "script-src 'self'",
  "script-src-attr 'none'",
  "style-src 'self' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self'",
  "connect-src https://formspree.io",
  "object-src 'none'",
  "base-uri 'none'",
  "form-action https://formspree.io",
  "frame-ancestors 'none'",
].join('; ');

// frame-ancestors is enforced only through an HTTP response header.
export const metaCsp = contentSecurityPolicy.replace("; frame-ancestors 'none'", '');
export const securityHeaders = {
  'Content-Security-Policy': contentSecurityPolicy,
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'no-referrer',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
};
export const hostingHeaders = {
  ...securityHeaders,
  'Strict-Transport-Security': 'max-age=31536000',
};
export const staticHeadersFile = '/*\n' + Object.entries(hostingHeaders)
  .map(([name, value]) => `  ${name}: ${value}`).join('\n') + '\n';

// Reject malformed request targets before Vite attempts URI decoding.
export function requestGuard(req, res, next) {
  try {
    const decoded = decodeURI(req.url ?? '/');
    if (/[\u0000-\u001f\u007f]/.test(decoded)) throw new URIError();
  } catch {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Cache-Control', 'no-store');
    res.end('Bad Request');
    return;
  }
  next();
}

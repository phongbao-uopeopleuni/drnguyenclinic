export function decodeFragment(hash) {
  try {
    return decodeURIComponent(hash.replace(/^#/, ''));
  } catch {
    // A malformed URL must not crash the page.
    return hash.replace(/^#/, '');
  }
}

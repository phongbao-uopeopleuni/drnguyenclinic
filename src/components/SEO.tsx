import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { clinic } from '../data/clinic';
export default function SEO({ title, description, noindex = false }: { title: string; description: string; noindex?: boolean }) {
  const { pathname } = useLocation();
  useEffect(() => {
    const fullTitle = title + ' | ' + clinic.doctor;
    document.title = fullTitle;
    const meta = (key: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let el = document.head.querySelector('meta[' + attr + '="' + key + '"]');
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.append(el); }
      el.setAttribute('content', content);
    };
    meta('description', description);
    meta('robots', clinic.draft || noindex ? 'noindex, nofollow' : 'index, follow');
    meta('og:title', fullTitle, true); meta('og:description', description, true);
    meta('og:type', 'website', true); meta('og:locale', 'vi_VN', true);
    document.querySelector('link[rel="canonical"]')?.remove();
    document.querySelector('meta[property="og:url"]')?.remove();
    if (clinic.website) {
      const url = new URL(import.meta.env.BASE_URL + pathname.replace(/^\//, ''), clinic.website).href;
      const link = document.createElement('link'); link.rel = 'canonical'; link.href = url; document.head.append(link);
      meta('og:url', url, true);
    }
  }, [title, description, pathname, noindex]);
  return null;
}

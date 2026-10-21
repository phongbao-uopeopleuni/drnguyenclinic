import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigationType, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Process from './pages/Process';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import { decodeFragment } from './utils/fragment.mjs';
function ScrollToTop() {
 const { pathname, hash, key } = useLocation();
 const navigationType = useNavigationType();
 const initial = useRef(true);
 // key changes on every navigation, including links to the current page.
 useEffect(() => {
  const first = initial.current; initial.current = false;
  // Back/forward keeps the position the browser restores; the first load still honours #anchors.
  if (navigationType === 'POP' && !first) return;
  const target = hash ? document.getElementById(decodeFragment(hash)) : null;
  if (target) { target.scrollIntoView(); return; }
  window.scrollTo(0, 0);
  // Move focus to the new content so keyboard and screen reader users don't restart from the top.
  if (!first) document.getElementById('main')?.focus({ preventScroll: true });
 }, [pathname, hash, key, navigationType]);
 return null;
}
export default function App() {
return <BrowserRouter basename={import.meta.env.BASE_URL}><ScrollToTop /><Header /><main id="main" tabIndex={-1} className="page-content"><Routes>
<Route path="/" element={<Home />} /><Route path="/gioi-thieu" element={<About />} /><Route path="/dich-vu" element={<Services />} /><Route path="/dich-vu/:slug" element={<Services />} /><Route path="/quy-trinh" element={<Process />} /><Route path="/kien-thuc" element={<Blog />} /><Route path="/kien-thuc/:slug" element={<Blog />} /><Route path="/faq" element={<FAQ />} /><Route path="/lien-he" element={<Contact />} /><Route path="/chinh-sach-bao-mat" element={<Privacy />} /><Route path="/dieu-khoan" element={<Terms />} /><Route path="/huong-dan-di-kham" element={<Navigate to="/faq" replace />} /><Route path="*" element={<NotFound />} />
</Routes></main><Footer /></BrowserRouter>;
}

import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { asset, clinic, directionsUrl } from '../data/clinic';
import { clinicGallery } from '../data/clinicGallery';
import QuickContact from './QuickContact';
const navigation = [['/', 'Trang chủ'], ['/gioi-thieu', 'Bác sĩ'], ['/dich-vu', 'Dịch vụ'], ['/quy-trinh', 'Quy trình'], ['/kien-thuc', 'Kiến thức'], ['/lien-he', 'Liên hệ']];
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname, location.hash]);
  useEffect(() => { document.documentElement.classList.toggle('menu-open', open); }, [open]);
  // Transparent over the opening section, frosted glass once the page scrolls.
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <>
    <a className="skip-link" href="#main">Bỏ qua menu, đến nội dung</a>
    <div className="utility-bar"><div className="container"><span>Phòng khám Hiếm muộn - Sản phụ khoa</span><a href={directionsUrl} target="_blank" rel="noopener noreferrer">{clinic.address} <ArrowUpRight size={13} aria-hidden="true" /><span className="sr-only"> (Google Maps, mở tab mới)</span></a></div></div>
    <header className={scrolled ? 'site-header is-scrolled' : 'site-header'} onKeyDown={e => { if (e.key === 'Escape') { setOpen(false); toggle.current?.focus(); } }}>
      <div className="container header-row">
        <Link to="/" className="brand" aria-label={clinic.name + ' — Trang chủ'}><img src={asset('assets/brand/logo-horizontal.svg')} alt={clinic.name} width="1056" height="240" /></Link>
        <button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Đóng menu' : 'Mở menu'} onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
        <nav id="main-navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Điều hướng chính">
          {navigation.map(([to, label]) => <NavLink key={to} end={to === '/'} to={to}>{label}</NavLink>)}
          {clinicGallery.length > 0 && <Link to="/#khong-gian">Không gian</Link>}
        </nav>
      </div>
    </header>
    {open && <div className="nav-backdrop" aria-hidden="true" onClick={() => setOpen(false)} />}
    <QuickContact />
  </>;
}


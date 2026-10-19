import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CalendarDays, Menu, X } from 'lucide-react';
import { asset, clinic } from '../data/clinic';
import { clinicGallery } from '../data/clinicGallery';
const navigation = [['/', 'Trang chủ'], ['/gioi-thieu', 'Bác sĩ'], ['/dich-vu', 'Dịch vụ'], ['/quy-trinh', 'Quy trình'], ['/kien-thuc', 'Kiến thức'], ['/lien-he', 'Liên hệ']];
export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname, location.hash]);
  return <>
    <a className="skip-link" href="#main">Bỏ qua menu, đến nội dung</a>
    {clinic.draft && <div className="draft-bar">Bản xem trước • Thông tin chuyên môn và lịch khám đang được hoàn thiện</div>}
    <header className="site-header" onKeyDown={e => { if (e.key === 'Escape') { setOpen(false); toggle.current?.focus(); } }}>
      <div className="container header-row">
        <Link to="/" className="brand" aria-label={clinic.name + ' — Trang chủ'}><img src={asset('assets/brand/logo-horizontal.svg')} alt={clinic.name} width="270" height="78" /></Link>
        <button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Đóng menu' : 'Mở menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        <nav id="main-navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Điều hướng chính">
          {navigation.map(([to, label]) => <NavLink key={to} end={to === '/'} to={to}>{label}</NavLink>)}
          {clinicGallery.length > 0 && <Link to="/#khong-gian">Không gian</Link>}
          <Link to="/lien-he" className="button nav-cta"><CalendarDays size={17} />Đặt lịch khám</Link>
        </nav>
      </div>
    </header>
  </>;
}

import { Link } from 'react-router-dom';
import { clinic } from '../data/clinic';
import BrandLockup from './BrandLockup';

export default function Footer() {
  return <footer className="footer"><div className="container">
    <div className="footer-summary">
      <BrandLockup className="footer-logo" lazy />
      <div className="footer-customer">
        <p className="footer-customer-title">Dành cho khách hàng</p>
        <nav className="footer-help" aria-label="Thông tin dành cho khách hàng">
          <Link to="/lien-he">Liên hệ</Link>
          <Link to="/faq">Câu hỏi thường gặp</Link>
          <Link to="/chinh-sach-bao-mat-thong-tin">Chính sách bảo mật thông tin</Link>
          <Link to="/chinh-sach-bao-ve-du-lieu-ca-nhan">Chính sách bảo vệ dữ liệu cá nhân</Link>
          <Link to="/quy-dinh-su-dung-website">Quy định sử dụng website</Link>
        </nav>
      </div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {clinic.policyName}</span></div>
  </div></footer>;
}

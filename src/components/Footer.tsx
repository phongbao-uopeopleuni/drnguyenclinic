import { Link } from 'react-router-dom';
import { clinic } from '../data/clinic';
import BrandLockup from './BrandLockup';

export default function Footer() {
  return <footer className="footer"><div className="container">
    <div className="footer-summary">
      <BrandLockup className="footer-logo" lazy />
      <nav className="footer-help" aria-label="Thông tin hỗ trợ">
        <Link to="/lien-he">Liên hệ phòng khám</Link>
        <Link to="/faq">Câu hỏi thường gặp</Link>
      </nav>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {clinic.brandName}</span><nav aria-label="Chính sách website"><Link to="/chinh-sach-bao-mat">Quyền riêng tư</Link><Link to="/dieu-khoan">Điều khoản sử dụng</Link><Link to="/bao-mat">Bảo mật</Link></nav></div>
  </div></footer>;
}

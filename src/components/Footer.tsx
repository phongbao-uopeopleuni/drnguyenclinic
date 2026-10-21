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
    {clinic.draft && <p className="draft-note">Bản xem trước — nội dung đang hoàn thiện, biểu mẫu chưa tiếp nhận đăng ký.</p>}
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {clinic.brandName}</span><div><Link to="/chinh-sach-bao-mat">Quyền riêng tư</Link><Link to="/dieu-khoan">Điều khoản</Link></div></div>
  </div></footer>;
}

import { Link } from 'react-router-dom';
import { asset, clinic } from '../data/clinic';
export default function Footer() {
  return <footer className="footer"><div className="container">
    <div className="footer-grid">
      <div><Link to="/" className="footer-logo"><img src={asset('assets/brand/logo-horizontal.svg')} alt={clinic.name} width="270" height="78" loading="lazy" /></Link><p>Lắng nghe bằng sự thấu hiểu.<br />Đồng hành bằng sự tận tâm.</p></div>
      <div><h2>Khám phá</h2><Link to="/gioi-thieu">Về bác sĩ</Link><Link to="/dich-vu">Nhóm chăm sóc</Link><Link to="/quy-trinh">Quy trình thăm khám</Link><Link to="/kien-thuc">Góc kiến thức</Link></div>
      <div><h2>Thông tin liên hệ</h2><p>{clinic.address || 'Địa chỉ đang chờ xác nhận.'}</p><p>{clinic.hours || 'Lịch làm việc sẽ được cập nhật.'}</p>{clinic.phone && <a href={'tel:' + clinic.phone}>{clinic.phone}</a>}<Link to="/lien-he">Xem thông tin đặt lịch →</Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {clinic.name}</span><div><Link to="/chinh-sach-bao-mat">Quyền riêng tư</Link><Link to="/dieu-khoan">Điều khoản</Link><Link to="/faq">Hỏi đáp</Link></div></div>
  </div></footer>;
}

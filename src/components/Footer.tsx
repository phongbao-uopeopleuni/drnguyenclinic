import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { asset, clinic, directionsUrl, phoneUrl } from '../data/clinic';
export default function Footer() {
  return <footer className="footer"><div className="container">
    <div className="footer-grid">
      <div><Link to="/" className="footer-logo"><img src={asset('assets/brand/logo-horizontal.svg')} alt={clinic.name} width="1056" height="240" loading="lazy" /></Link><p className="footer-doctor">{clinic.doctor}</p><p>Phòng khám Hiếm muộn - Sản phụ khoa<br />Huế, Việt Nam</p></div>
      <div><h2>Thông tin</h2><Link to="/gioi-thieu">Bác sĩ</Link><Link to="/dich-vu">Danh mục chăm sóc</Link><Link to="/quy-trinh">Quy trình thăm khám</Link><Link to="/kien-thuc">Kiến thức sức khỏe</Link><Link to="/faq">Câu hỏi thường gặp</Link></div>
      <div><h2>Đến phòng khám</h2><address>{clinic.address}</address><a className="footer-phone" href={phoneUrl}>{clinic.phoneDisplay}</a><a href={directionsUrl} target="_blank" rel="noopener noreferrer">Chỉ đường Google Maps <ArrowUpRight size={15} aria-hidden="true" /><span className="sr-only"> (mở tab mới)</span></a><p>{clinic.hours || 'Vui lòng gọi để xác nhận lịch khám.'}</p></div>
    </div>
    {clinic.draft && <p className="draft-note">Bản xem trước — thông tin chuyên môn và nội dung bài viết đang được hoàn thiện. Biểu mẫu chưa tiếp nhận đăng ký.</p>}
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Phòng khám TS. BS Nguyễn Đắc Nguyên</span><div><Link to="/chinh-sach-bao-mat">Quyền riêng tư</Link><Link to="/dieu-khoan">Điều khoản</Link></div></div>
  </div></footer>;
}


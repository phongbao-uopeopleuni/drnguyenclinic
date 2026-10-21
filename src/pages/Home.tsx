import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import SafeImage from '../components/SafeImage';
import ContactActions from '../components/ContactActions';
import { asset, clinic } from '../data/clinic';
import { FAQList, Gallery, ProcessSteps, ServiceGrid } from '../sections/Content';

export default function Home() {
  return <>
    <SEO title={clinic.displayName} description={clinic.name + ' — ' + clinic.doctor + ' tại ' + clinic.address + '. Gọi ' + clinic.phoneDisplay + ' để đặt lịch khám.'} />
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{clinic.displayName}</p>
          <h1><span className="doctor-degree">Tiến sĩ, Bác sĩ</span> Nguyễn Đắc Nguyên</h1>
          <p className="hero-description">Liên hệ để trao đổi nhu cầu và xác nhận lịch khám trước khi đến.</p>
          <ContactActions consultation />
          <Link className="text-link doctor-link" to="/gioi-thieu">Thông tin bác sĩ <ArrowRight size={17} aria-hidden="true" /></Link>
          <ul className="hero-facts">
            <li><MapPin size={19} aria-hidden="true" /><address>{clinic.address}</address></li>
            <li><Clock size={19} aria-hidden="true" /><span>{clinic.hours || 'Giờ khám đang cập nhật — vui lòng gọi trước khi đến.'}</span></li>
          </ul>
        </div>
        <figure className="hero-portrait">
          <div className="portrait-image">
            <SafeImage src={asset('assets/images/doctor/drpic.jpg?v=1b20f66af31c')} alt={'Chân dung ' + clinic.doctor} width={960} height={960} fetchPriority="high" />
          </div>
          <figcaption className="portrait-caption">
            <div><span className="portrait-label">Bác sĩ của phòng khám</span><span className="portrait-name">{clinic.doctor}</span><span className="portrait-specialty">{clinic.specialty}</span></div>
            <Link className="portrait-profile" to="/gioi-thieu" aria-label={'Tìm hiểu về ' + clinic.doctor}><ArrowRight size={22} aria-hidden="true" /></Link>
          </figcaption>
        </figure>
      </div>
    </section>
    <section className="section container care-layout" id="dich-vu">
      <div className="section-intro"><span className="eyebrow">Nội dung thăm khám</span><h2>Bạn cần<br className="desktop-only" /> tìm hiểu gì?</h2><p>Các nhóm chăm sóc để bạn tham khảo trước khi liên hệ phòng khám.</p>{clinic.draft && <p className="editorial-note">Danh mục dự kiến.<br />Phạm vi dịch vụ đang được xác nhận.</p>}<Link className="text-link" to="/dich-vu">Xem danh mục <ArrowRight size={17} aria-hidden="true" /></Link></div>
      <ServiceGrid />
    </section>
    <aside className="container consultation-corner" aria-labelledby="consultation-corner-title">
      <div><h2 id="consultation-corner-title">Bạn cần tư vấn trước khi thăm khám?</h2><p>Trao đổi nhu cầu và thời gian khám mong muốn với phòng khám.</p></div>
      <Link className="text-link" to="/lien-he#tu-van">Đăng ký tư vấn <ArrowRight size={18} aria-hidden="true" /></Link>
    </aside>
    <section className="process-section"><div className="section container"><div className="section-heading"><div><span className="eyebrow">Hẹn khám</span><h2>Từ đặt lịch đến thăm khám</h2></div><Link className="text-link" to="/quy-trinh">Xem quy trình <ArrowRight size={17} aria-hidden="true" /></Link></div><ProcessSteps /></div></section>
    <Gallery />
    <section className="section container faq-layout"><div><span className="eyebrow">Thông tin cần biết</span><h2>Trước buổi khám</h2><p>Địa chỉ, lịch hẹn và những câu hỏi thường gặp.</p><Link className="text-link" to="/faq">Tất cả câu hỏi <ArrowRight size={17} aria-hidden="true" /></Link><div className="knowledge-link"><span>Góc kiến thức sức khỏe</span><p>Các chủ đề đang được biên soạn.</p><Link className="text-link" to="/kien-thuc">Xem các chủ đề <ArrowRight size={17} aria-hidden="true" /></Link></div></div><FAQList /></section>
  </>;
}

import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Heart, ShieldCheck, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import SafeImage from '../components/SafeImage';
import { asset, clinic } from '../data/clinic';
import { ArticleGrid, ContactCTA, FAQList, Gallery, ProcessSteps, ServiceGrid } from '../sections/Content';
const values = [{icon: Heart, title: 'Lắng nghe tận tâm', text: 'Trân trọng từng câu chuyện'}, {icon: MessageCircle, title: 'Trao đổi cởi mở', text: 'Để bạn hiểu và chủ động'}, {icon: ShieldCheck, title: 'Tôn trọng riêng tư', text: 'Không gian cho sự sẻ chia'}];
export default function Home() {
  return <>
    <SEO title="Sản phụ khoa & sức khỏe sinh sản" description="Phòng khám TS.BS. Đắc Nguyên: định hướng sản phụ khoa và sức khỏe sinh sản. Tìm hiểu bác sĩ, nhóm chăm sóc và thông tin đặt lịch khám." />
    <section className="hero"><div className="container hero-grid"><div className="hero-copy">
      <span className="eyebrow"><span className="small-line" />Lắng nghe · Thấu hiểu · Đồng hành</span>
      <h1>Đồng hành cùng<br />sức khỏe <em>phụ nữ.</em></h1>
      <p>Mỗi giai đoạn trong cuộc sống đều xứng đáng được quan tâm. Cùng bạn lắng nghe cơ thể, sẻ chia những băn khoăn và tìm hướng chăm sóc phù hợp.</p>
      <div className="hero-actions"><Link className="button" to="/lien-he"><CalendarDays size={18} />Đặt lịch khám</Link><Link className="text-link" to="/gioi-thieu">Tìm hiểu bác sĩ <ArrowRight size={18} /></Link></div>
      <div className="hero-note"><span className="outline-heart"><Heart size={21} strokeWidth={1.3} /></span><span>Một cuộc trò chuyện cởi mở.<br /><strong>Một khởi đầu nhẹ nhàng.</strong></span></div>
    </div><div className="hero-visual"><div className="portrait-frame"><SafeImage src={asset('assets/images/doctor/drpic.jpg')} alt="Chân dung TS.BS. Đắc Nguyên" width={960} height={960} fetchPriority="high" /><div className="portrait-label"><span>Người đồng hành cùng bạn</span><h2>{clinic.doctor}</h2></div></div><span className="portrait-decoration" aria-hidden="true">CHĂM SÓC TỪ SỰ THẤU HIỂU</span></div></div></section>
    <div className="values-strip"><div className="container values-grid">{values.map(({icon: Icon, title, text}) => <div key={title}><Icon strokeWidth={1.3} /><div><strong>{title}</strong><span>{text}</span></div></div>)}</div></div>
    <section className="section container" id="dich-vu"><div className="section-heading"><div><span className="eyebrow">Quan tâm ở từng giai đoạn</span><h2>Chăm sóc dành riêng cho bạn</h2></div><Link className="text-link" to="/dich-vu">Khám phá dịch vụ <ArrowRight size={18} /></Link></div>{clinic.draft && <p className="section-caption">Các nhóm chăm sóc dự kiến, đang chờ xác nhận phạm vi hoạt động.</p>}<ServiceGrid /></section>
    <section className="doctor-intro"><div className="container doctor-intro-grid"><div><span className="eyebrow">Về người bác sĩ</span><h2>Chuyên môn là nền tảng.<br /><em>Thấu hiểu là khởi đầu.</em></h2></div><div><h3>{clinic.doctor}</h3><p>Định hướng xây dựng một nơi để phụ nữ và gia đình có thể cởi mở chia sẻ, hiểu rõ hơn về nhu cầu chăm sóc sức khỏe của mình.</p><p className="muted">Hồ sơ chuyên môn và quá trình công tác đang được hoàn thiện.</p><Link className="text-link" to="/gioi-thieu">Tìm hiểu về bác sĩ <ArrowRight size={18} /></Link></div></div></section>
    <section className="section container"><div className="section-heading"><div><span className="eyebrow">Từng bước, cùng bạn</span><h2>Để buổi khám nhẹ nhàng hơn</h2></div><p>Từ yêu cầu đầu tiên đến hướng dẫn theo dõi,<br className="desktop-only" /> mỗi bước đều cần được trao đổi rõ ràng.</p></div><ProcessSteps /></section>
    <Gallery />
    <section className="section articles-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">Hiểu hơn, an tâm hơn</span><h2>Góc kiến thức sức khỏe</h2></div><Link className="text-link" to="/kien-thuc">Tất cả bài viết <ArrowRight size={18} /></Link></div><ArticleGrid /></div></section>
    <section className="section container faq-layout"><div><span className="eyebrow">Giải đáp cùng bạn</span><h2>Những điều<br />bạn muốn biết</h2><p>Một vài thông tin trước khi<br className="desktop-only" /> sắp xếp cuộc hẹn.</p><Link className="text-link" to="/faq">Xem tất cả câu hỏi <ArrowRight size={18} /></Link></div><FAQList /></section>
    <ContactCTA />
  </>;
}

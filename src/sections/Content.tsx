import { Link } from 'react-router-dom';
import { ArrowUpRight, Baby, Heart, HeartHandshake, Stethoscope, ArrowRight, BookOpen, CalendarDays } from 'lucide-react';
import { articles, asset, clinic, faqs, steps, visibleServices } from '../data/clinic';
import { clinicGallery } from '../data/clinicGallery';
import SafeImage from '../components/SafeImage';
export function ServiceGrid() {
  const icons = [Stethoscope, Baby, Heart, HeartHandshake];
  return <div className="service-grid">{visibleServices().map((s, i) => { const Icon = icons[i]; return <Link to={'/dich-vu/' + s.slug} className="service-card" key={s.slug}><div className="card-top"><span className="icon-box"><Icon strokeWidth={1.4} /></span><span className="index">0{i + 1}</span></div><h3>{s.title}</h3><p>{s.description}</p><div className="card-bottom"><span>{s.confirmed ? 'Tìm hiểu thêm' : 'Nội dung dự kiến'}</span><ArrowUpRight size={20} /></div></Link>; })}</div>;
}
export function ProcessSteps() {
  return <ol className="steps">{steps.map((s, i) => <li key={s.title}><span className="step-number">0{i + 1}</span><h3>{s.title}</h3><p>{s.text}</p></li>)}</ol>;
}
export function FAQList({ query = '' }: { query?: string }) {
  const result = faqs.filter(f => (f.q + ' ' + f.a).toLocaleLowerCase('vi').includes(query.toLocaleLowerCase('vi')));
  return <div className="faq-list">{result.length ? result.map(f => <details key={f.q}><summary>{f.q}<span aria-hidden="true">+</span></summary><p>{f.a}</p></details>) : <p role="status">Không tìm thấy câu hỏi phù hợp. Hãy thử từ khóa khác.</p>}</div>;
}
export function ArticleGrid() {
  if (!clinic.draft) return <p>Các bài viết sẽ được cập nhật sau khi duyệt chuyên môn.</p>;
  return <div className="article-grid">{articles.map((a, i) => <article className="article-card" key={a.slug}><Link to={'/kien-thuc/' + a.slug} className={'article-art art-' + i} aria-label={a.title}>{i === 0 ? <CalendarDays /> : i === 1 ? <Heart /> : <BookOpen />}<span>GÓC CHIA SẺ / 0{i + 1}</span></Link><div className="article-body"><span className="eyebrow">{a.category} · Bản nháp</span><h3><Link to={'/kien-thuc/' + a.slug}>{a.title}</Link></h3><Link className="text-link" to={'/kien-thuc/' + a.slug}>Xem đề cương <ArrowRight size={17} /></Link></div></article>)}</div>;
}
export function Gallery() {
  if (!clinicGallery.length) return null;
  return <section id="khong-gian" className="section container"><span className="eyebrow">Không gian phòng khám</span><h2>Một không gian dành cho sự an tâm</h2><div className="gallery-grid">{[...clinicGallery].sort((a,b) => a.order-b.order).map(im => <figure key={im.src}><SafeImage src={asset(im.src)} alt={im.alt} loading="lazy" width={640} height={480} /><figcaption>{im.caption}</figcaption></figure>)}</div></section>;
}
export function ContactCTA() {
  return <section className="cta-section"><div className="container cta-inner"><div><span className="eyebrow">Bắt đầu từ một cuộc trò chuyện</span><h2>Sự an tâm của bạn,<br />là điều chúng tôi hướng đến.</h2></div><Link className="button button-light" to="/lien-he">Thông tin đặt lịch <ArrowUpRight size={20} /></Link></div></section>;
}

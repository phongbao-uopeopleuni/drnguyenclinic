import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { articles, asset, clinic, faqs, steps, visibleServices } from '../data/clinic';
import { clinicGallery } from '../data/clinicGallery';
import SafeImage from '../components/SafeImage';
import ContactActions from '../components/ContactActions';

export function ServiceGrid() {
  return <div className="service-list">{visibleServices().map((s, i) => <Link to={'/dich-vu/' + s.slug} className="service-row" key={s.slug}>
    <span className="service-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
    <div><h3>{s.title}</h3><p>{s.description}</p></div>
    <ArrowRight className="row-arrow" size={22} strokeWidth={1.5} aria-hidden="true" />
  </Link>)}</div>;
}
export function ProcessSteps() {
  return <ol className="steps">{steps.map((s, i) => <li key={s.title}><span className="step-number">{String(i + 1).padStart(2, '0')}</span><h3>{s.title}</h3><p>{s.text}</p></li>)}</ol>;
}
export function FAQList({ query = '' }: { query?: string }) {
  const result = faqs.filter(f => (f.q + ' ' + f.a).toLocaleLowerCase('vi').includes(query.toLocaleLowerCase('vi')));
  return <div className="faq-list">{result.length ? result.map(f => <details key={f.q}><summary>{f.q}<span aria-hidden="true">+</span></summary><p>{f.a}</p></details>) : <p role="status">Không tìm thấy câu hỏi phù hợp. Hãy thử từ khóa khác.</p>}</div>;
}
export function ArticleGrid() {
  if (!clinic.draft) return <p>Các bài viết sẽ được cập nhật sau khi duyệt chuyên môn.</p>;
  return <div className="article-list">{articles.map((a, i) => <article className="article-row" key={a.slug}><span className="article-index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span><div><span className="eyebrow">{a.category} · Bản nháp</span><h3><Link to={'/kien-thuc/' + a.slug}>{a.title}</Link></h3><p>{a.text}</p><Link className="text-link" to={'/kien-thuc/' + a.slug}>Xem đề cương <ArrowRight size={17} aria-hidden="true" /></Link></div></article>)}</div>;
}
export function Gallery() {
  if (!clinicGallery.length) return null;
  return <section id="khong-gian" className="section container"><span className="eyebrow">Hình ảnh thực tế</span><h2>Không gian phòng khám</h2><div className="gallery-grid">{[...clinicGallery].sort((a,b) => a.order-b.order).map(im => <figure key={im.src}><SafeImage src={asset(im.src)} alt={im.alt} loading="lazy" width={640} height={480} /><figcaption>{im.caption}</figcaption></figure>)}</div></section>;
}
export function ContactCTA() {
  return <section className="cta-section"><div className="container cta-inner"><div><span className="eyebrow">Liên hệ phòng khám</span><h2>Đặt lịch thăm khám</h2><p>{clinic.address}</p><p className="cta-note">Gọi trước để xác nhận thời gian phù hợp.</p></div><ContactActions light /></div></section>;
}


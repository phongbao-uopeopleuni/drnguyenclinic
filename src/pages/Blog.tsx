import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';
import { articles, clinic } from '../data/clinic';
import { ArticleGrid } from '../sections/Content';
import NotFound from './NotFound';
export default function Blog() {
const { slug } = useParams(); const article = articles.find(a => a.slug === slug);
if (slug && (!article || !clinic.draft)) return <NotFound />;
return <><SEO title={article?.title || 'Kiến thức sức khỏe phụ nữ'} description="Góc chia sẻ về sức khỏe phụ nữ và sức khỏe sinh sản. Nội dung bản nháp, đang chờ duyệt chuyên môn." noindex /><PageHeading label="Hiểu hơn, an tâm hơn" title={article?.title || 'Góc kiến thức sức khỏe'} description="Dành một chút thời gian để tìm hiểu và chuẩn bị cho những cuộc trò chuyện với bác sĩ." /><section className="section container">{article ? <article className="prose narrow"><span className="eyebrow">{article.category} · Bản nháp</span><h2>Đề cương bài viết</h2><p>{article.text}</p><p className="notice">Chưa được bác sĩ duyệt. Đây là đề cương xem trước, không phải hướng dẫn chẩn đoán hay điều trị.</p><Link className="text-link" to="/kien-thuc">← Quay lại góc kiến thức</Link></article> : <ArticleGrid />}</section></>;
}

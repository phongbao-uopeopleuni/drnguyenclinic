import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';
import { clinic, visibleServices } from '../data/clinic';
import { ServiceGrid, ContactCTA } from '../sections/Content';
import NotFound from './NotFound';
export default function Services() {
const { slug } = useParams(); const service = visibleServices().find(s => s.slug === slug);
if (slug && !service) return <NotFound />;
return <><SEO title={service?.title || 'Sản phụ khoa & tư vấn sức khỏe sinh sản'} description={service?.description || 'Các nhóm chăm sóc dự kiến: khám phụ khoa, chăm sóc thai kỳ, tư vấn sức khỏe sinh sản và tư vấn hiếm muộn tại phòng khám Đắc Nguyên.'} noindex={!!service && !service.confirmed} />
<PageHeading label="Chăm sóc dành riêng cho bạn" title={service?.title || 'Quan tâm ở từng giai đoạn'} description={service?.description || 'Tìm hiểu những nhóm chăm sóc phù hợp với nhu cầu của bạn.'} />
<section className="section container">{clinic.draft && <p className="notice">Bản nháp: các nhóm chăm sóc đang chờ xác nhận phạm vi hoạt động. Chưa công bố thực hiện IVF/IUI tại phòng khám.</p>}{service ? <div className="prose narrow"><h2>Trao đổi để hiểu nhu cầu của bạn</h2><p>Thông tin chi tiết, phạm vi dịch vụ và chi phí sẽ được bổ sung sau khi phòng khám xác nhận.</p><Link className="button" to="/lien-he">Xem thông tin liên hệ</Link><p><Link className="text-link" to="/dich-vu"><ArrowLeft size={17} aria-hidden="true" />Tất cả nhóm chăm sóc</Link></p></div> : <ServiceGrid />}</section><ContactCTA /></>;
}

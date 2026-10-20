import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';
import SafeImage from '../components/SafeImage';
import { asset, clinic } from '../data/clinic';
import { ContactCTA } from '../sections/Content';
export default function About() { return <>
<SEO title="Giới thiệu bác sĩ Đắc Nguyên" description="Tìm hiểu TS. BS Nguyễn Đắc Nguyên và định hướng chăm sóc sức khỏe phụ nữ, sức khỏe sinh sản. Hồ sơ chuyên môn đang được hoàn thiện." />
<PageHeading label="Về người bác sĩ" title={clinic.doctor} description="Lắng nghe câu chuyện của bạn, cùng hướng đến sự chăm sóc phù hợp." />
<section className="section container about-grid"><SafeImage className="about-photo" src={asset('assets/images/doctor/drpic.jpg')} alt="Chân dung TS. BS Nguyễn Đắc Nguyên" width={960} height={960} loading="lazy" /><div className="prose"><span className="eyebrow">Sự quan tâm bắt đầu từ thấu hiểu</span><h2>Mỗi người là một câu chuyện riêng</h2><p>Phòng khám hướng đến sự tận tâm và trao đổi cởi mở trong chăm sóc sức khỏe phụ nữ và sức khỏe sinh sản.</p><h2>Hồ sơ chuyên môn</h2><p>{clinic.biography || 'Tiểu sử và quá trình công tác đang chờ xác nhận.'}</p>{clinic.qualifications.length > 0 ? <ul>{clinic.qualifications.map(q => <li key={q}>{q}</li>)}</ul> : <p>Thông tin đào tạo và bằng cấp sẽ được bổ sung sau khi xác minh.</p>}<Link className="text-link" to="/lien-he">Thông tin đặt lịch <ArrowRight size={17} aria-hidden="true" /></Link></div></section><ContactCTA />
</>; }

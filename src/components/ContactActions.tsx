import { Link } from 'react-router-dom';
import { Phone, ArrowUpRight, MessageCircle } from 'lucide-react';
import { clinic, directionsUrl, phoneUrl } from '../data/clinic';
export default function ContactActions({ light = false, consultation = false }: { light?: boolean; consultation?: boolean }) {
  return <div className="contact-actions">
    <a className={light ? 'button button-light cta-attention' : 'button cta-attention'} href={phoneUrl}><Phone size={17} aria-hidden="true" />Gọi {clinic.phoneDisplay}</a>
    {consultation && <Link className="button button-consultation" to="/lien-he#tu-van"><MessageCircle size={18} aria-hidden="true" />Đăng ký tư vấn</Link>}
    <a className={light ? 'directions-link directions-light' : 'directions-link'} href={directionsUrl} target="_blank" rel="noopener noreferrer">Chỉ đường <ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> Google Maps (mở tab mới)</span></a>
  </div>;
}


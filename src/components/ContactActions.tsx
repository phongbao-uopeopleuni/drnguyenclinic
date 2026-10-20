import { Phone, ArrowUpRight } from 'lucide-react';
import { clinic, directionsUrl, phoneUrl } from '../data/clinic';
export default function ContactActions({ light = false }: { light?: boolean }) {
  return <div className="contact-actions">
    <a className={light ? 'button button-light' : 'button'} href={phoneUrl}><Phone size={17} aria-hidden="true" />Gọi {clinic.phoneDisplay}</a>
    <a className={light ? 'directions-link directions-light' : 'directions-link'} href={directionsUrl} target="_blank" rel="noopener noreferrer">Chỉ đường <ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> Google Maps (mở tab mới)</span></a>
  </div>;
}


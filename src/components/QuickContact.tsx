import { Facebook, MapPin, MessageCircle, Phone } from 'lucide-react';
import { clinic, directionsUrl, phoneUrl } from '../data/clinic';

const newTab = <span className="sr-only"> (mở tab mới)</span>;

// Floating stack on larger screens, fixed bottom bar on phones; Zalo/Facebook render only when their links are set.
export default function QuickContact() {
  return <>
    <nav className="floating-contact" aria-label="Liên hệ nhanh">
      {clinic.facebook && <a className="float-button float-facebook" href={clinic.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook phòng khám (mở tab mới)"><Facebook size={22} aria-hidden="true" /><span className="float-label" aria-hidden="true">Facebook</span></a>}
      {clinic.zalo && <a className="float-button float-zalo cta-attention cta-attention-delayed" href={clinic.zalo} target="_blank" rel="noopener noreferrer" aria-label="Nhắn Zalo (mở tab mới)"><span className="zalo-mark" aria-hidden="true">Zalo</span><span className="float-label" aria-hidden="true">Nhắn Zalo</span></a>}
      <a className="float-button float-call cta-attention" href={phoneUrl} aria-label={'Gọi ngay ' + clinic.phoneDisplay}><Phone size={22} aria-hidden="true" /><span className="float-label" aria-hidden="true">Gọi ngay {clinic.phoneDisplay}</span></a>
    </nav>
    <nav className="mobile-contact" aria-label="Liên hệ nhanh">
      <a className="mobile-call cta-attention" href={phoneUrl}><Phone size={20} aria-hidden="true" /><span>Gọi ngay<span className="sr-only"> {clinic.phoneDisplay}</span></span></a>
      {clinic.zalo && <a href={clinic.zalo} target="_blank" rel="noopener noreferrer"><MessageCircle className="icon-zalo" size={20} aria-hidden="true" /><span>Zalo{newTab}</span></a>}
      {clinic.facebook && <a href={clinic.facebook} target="_blank" rel="noopener noreferrer"><Facebook className="icon-facebook" size={20} aria-hidden="true" /><span>Facebook{newTab}</span></a>}
      <a href={directionsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={20} aria-hidden="true" /><span>Chỉ đường<span className="sr-only"> Google Maps (mở tab mới)</span></span></a>
    </nav>
  </>;
}

import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';
import ContactActions from '../components/ContactActions';
import { clinic } from '../data/clinic';
export default function Contact() {
const [message, setMessage] = useState('');
const isoDate = (d: Date) => [d.getFullYear(), String(d.getMonth()+1).padStart(2,'0'), String(d.getDate()).padStart(2,'0')].join('-');
const now = new Date(); const today = isoDate(now); const latest = isoDate(new Date(now.getFullYear() + 1, now.getMonth(), now.getDate()));
// Clear first so screen readers announce the status again on a repeated submit.
function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setMessage(''); window.setTimeout(() => setMessage('Bạn đã kiểm tra biểu mẫu. Chưa có thông tin nào được gửi và chưa có lịch hẹn được xác nhận.'), 120); }
return <><SEO title="Liên hệ và đặt lịch khám" description={clinic.name + " — " + clinic.doctor + ". Địa chỉ: " + clinic.address + ". Gọi " + clinic.phoneDisplay + " để đặt lịch hoặc mở Google Maps để chỉ đường."} /><PageHeading label="Phòng khám tại Huế" title="Liên hệ & đặt lịch" description="Gọi điện để trao đổi nhu cầu và xác nhận thời gian trước khi đến khám." />
<section className="section container contact-grid"><div><span className="eyebrow">Thông tin phòng khám</span><h2>{clinic.displayName}</h2><p className="contact-doctor">{clinic.doctor}</p><dl className="contact-info"><dt>Địa chỉ</dt><dd>{clinic.address || 'Đang chờ xác nhận.'}</dd><dt>Giờ làm việc</dt><dd>{clinic.hours || 'Lịch làm việc sẽ được cập nhật.'}</dd>{clinic.zalo && <><dt>Zalo</dt><dd><a href={clinic.zalo} target="_blank" rel="noopener noreferrer">Nhắn Zalo {clinic.phoneDisplay}<span className="sr-only"> (mở tab mới)</span></a></dd></>}{clinic.facebook && <><dt>Facebook</dt><dd><a href={clinic.facebook} target="_blank" rel="noopener noreferrer">Trang Facebook phòng khám<span className="sr-only"> (mở tab mới)</span></a></dd></>}</dl><ContactActions /><p>Lịch khám cần được phòng khám xác nhận trước khi bạn đến.</p></div>
<div className="consultation-panel" id="tu-van"><form className="appointment-form consultation-form" onSubmit={submit} onChange={() => setMessage('')} autoComplete="off" aria-labelledby="consultation-title" aria-describedby="preview-note">
<span className="eyebrow">Đăng ký tư vấn</span>
<h2 id="consultation-title">Thông tin cần tư vấn</h2>
<p className="form-intro">Chia sẻ nhu cầu của bạn để phòng khám liên hệ trao đổi và xác nhận thời gian thăm khám.</p>
<p id="preview-note" className="notice">Bản xem trước — chưa gửi thông tin. Vui lòng dùng dữ liệu mẫu để thử biểu mẫu.</p>
<p className="field-hint required-note">Các trường có dấu * là bắt buộc.</p>
<div className="field"><label htmlFor="full-name">Họ và tên *</label><input id="full-name" name="fullName" required minLength={2} maxLength={80} pattern=".*\S.*" placeholder="Nhập họ và tên của bạn" /></div>
<div className="field"><label htmlFor="address">Địa chỉ *</label><input id="address" name="address" required maxLength={200} pattern=".*\S.*" placeholder="Phường/xã, tỉnh/thành phố" aria-describedby="address-hint" /><p id="address-hint" className="field-hint">Bạn có thể chỉ ghi phường/xã và tỉnh/thành phố.</p></div>
<div className="consultation-row"><div className="field"><label htmlFor="phone">Số điện thoại *</label><input id="phone" name="phone" type="tel" inputMode="tel" required maxLength={20} pattern="(?:[ +\(\)\-]*[0-9]){9,15}[ \(\)\-]*" title="Nhập số điện thoại liên hệ, có thể kèm mã quốc gia, khoảng trắng hoặc dấu gạch ngang." placeholder="Ví dụ: 0912 345 678" /></div>
<div className="field"><label htmlFor="date">Ngày mong muốn thăm khám *</label><input id="date" name="date" type="date" min={today} max={latest} required /></div></div>
<div className="field"><label htmlFor="request">Yêu cầu thăm khám *</label><textarea id="request" name="request" rows={4} required minLength={5} maxLength={1000} placeholder="Ví dụ: Tôi muốn tư vấn trước khi mang thai và mong được khám vào buổi chiều." aria-describedby="request-hint" /><p id="request-hint" className="field-hint">Mô tả ngắn nhu cầu của bạn (tối đa 1.000 ký tự). Không gửi bệnh án hoặc thông tin sức khỏe chi tiết.</p></div>
<label className="consent"><input type="checkbox" required name="consent" /><span>Tôi đã đọc <Link to="/chinh-sach-bao-mat">thông tin quyền riêng tư</Link> và hiểu đây là biểu mẫu xem trước, chưa gửi dữ liệu.</span></label>
<button className="button" type="submit">Kiểm tra biểu mẫu <ArrowRight size={18} aria-hidden="true" /></button>
<p className="field-hint appointment-note">Ngày bạn chọn là ngày mong muốn. Lịch hẹn chỉ được xác nhận sau khi phòng khám liên hệ.</p>
<p className="form-status" role="status" aria-live="polite">{message}</p>
</form></div></section></>;
}


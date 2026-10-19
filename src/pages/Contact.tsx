import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';
import { clinic, visibleServices } from '../data/clinic';
export default function Contact() {
const [message, setMessage] = useState('');
const now = new Date(); const today = [now.getFullYear(), String(now.getMonth()+1).padStart(2,'0'), String(now.getDate()).padStart(2,'0')].join('-');
function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setMessage('Bạn đã kiểm tra biểu mẫu. Chưa có thông tin nào được gửi và chưa có lịch hẹn được xác nhận.'); }
return <><SEO title="Liên hệ và đặt lịch khám" description="Thông tin liên hệ phòng khám TS.BS. Đắc Nguyên và biểu mẫu xem trước để đăng ký lịch khám sản phụ khoa, tư vấn sức khỏe sinh sản." /><PageHeading label="Bắt đầu từ một cuộc trò chuyện" title="Chúng tôi lắng nghe bạn" description="Tìm hiểu thông tin liên hệ và cách sắp xếp cuộc hẹn với phòng khám." />
<section className="section container contact-grid"><div><span className="eyebrow">Thông tin phòng khám</span><h2>{clinic.name}</h2><dl className="contact-info"><dt>Địa chỉ</dt><dd>{clinic.address || 'Đang chờ xác nhận.'}</dd><dt>Giờ làm việc</dt><dd>{clinic.hours || 'Lịch làm việc sẽ được cập nhật.'}</dd><dt>Liên hệ đặt lịch</dt><dd>{clinic.phone ? <a href={'tel:' + clinic.phone}>{clinic.phone}</a> : 'Kênh liên hệ chính thức đang được hoàn thiện.'}</dd>{clinic.zalo && <><dt>Zalo</dt><dd><a href={clinic.zalo} target="_blank" rel="noreferrer">Liên hệ qua Zalo</a></dd></>}</dl><p>Lịch khám cần được phòng khám xác nhận trước khi bạn đến.</p></div>
<form className="appointment-form" onSubmit={submit} autoComplete="off" aria-describedby="preview-note"><h2>Yêu cầu đặt lịch khám</h2><p id="preview-note" className="notice">Biểu mẫu đang ở chế độ xem trước, chưa gửi thông tin. Vui lòng chỉ dùng dữ liệu mẫu để thử giao diện.</p>
<div className="form-grid"><div className="field"><label htmlFor="full-name">Họ và tên *</label><input id="full-name" name="fullName" required minLength={2} maxLength={80} pattern=".*\S.*" placeholder="Nhập họ và tên" /></div><div className="field"><label htmlFor="phone">Số điện thoại *</label><input id="phone" name="phone" type="tel" inputMode="tel" required pattern="(?:0[0-9]{9}|\+84[0-9]{9})" title="Nhập 10 chữ số bắt đầu bằng 0 hoặc +84 và 9 chữ số." placeholder="Số điện thoại liên hệ" /></div></div>
<div className="field"><label htmlFor="need">Nhóm nhu cầu (không bắt buộc)</label><select id="need" name="need"><option value="">Chọn nhóm nhu cầu</option>{visibleServices().map(s => <option value={s.slug} key={s.slug}>{s.title}</option>)}</select></div>
<div className="field"><label htmlFor="date">Ngày mong muốn *</label><input id="date" name="date" type="date" min={today} required /></div>
<label className="consent"><input type="checkbox" required name="consent" /><span>Tôi đã đọc và đồng ý với <Link to="/chinh-sach-bao-mat">chính sách quyền riêng tư</Link>. Tôi hiểu đây là biểu mẫu xem trước.</span></label>
<button className="button" type="submit">Kiểm tra biểu mẫu xem trước <ArrowRight size={18} /></button><p className="form-status" role="status" aria-live="polite">{message}</p>
</form></section></>;
}

import { useRef, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';
import ContactActions from '../components/ContactActions';
import { clinic } from '../data/clinic';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [message, setMessage] = useState('');
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const submissionInProgress = useRef(false);
  const isoDate = (date: Date) => [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-');
  const now = new Date();
  const today = isoDate(now);
  const latest = isoDate(new Date(now.getFullYear() + 1, now.getMonth(), now.getDate()));

  function clearStatus() {
    if (!submissionInProgress.current && submitState !== 'idle') {
      setSubmitState('idle');
      setMessage('');
    }
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (submissionInProgress.current || !form.reportValidity()) return;

    submissionInProgress.current = true;
    setSubmitState('submitting');
    setMessage('Đang gửi thông tin đến phòng khám…');

    try {
      const response = await fetch(clinic.consultationEndpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
        credentials: 'omit',
      });

      if (response.ok) {
        form.reset();
        setSubmitState('success');
        setMessage('Đã gửi thông tin. Phòng khám sẽ liên hệ để trao đổi và xác nhận thời gian phù hợp; đây chưa phải là lịch hẹn đã được xác nhận.');
      } else if (response.status === 422) {
        setSubmitState('error');
        setMessage('Thông tin chưa được Formspree chấp nhận. Vui lòng kiểm tra lại các trường rồi thử gửi lại.');
      } else {
        setSubmitState('error');
        setMessage('Hiện chưa thể gửi biểu mẫu. Vui lòng thử lại sau hoặc liên hệ phòng khám qua điện thoại/Zalo.');
      }
    } catch {
      setSubmitState('error');
      setMessage('Không thể kết nối để gửi biểu mẫu. Vui lòng kiểm tra mạng rồi thử lại hoặc liên hệ phòng khám qua điện thoại/Zalo.');
    } finally {
      submissionInProgress.current = false;
    }
  }

  return <>
    <SEO title="Liên hệ và đặt lịch khám" description={`${clinic.name} - ${clinic.doctor}. Địa chỉ: ${clinic.address}. Gọi ${clinic.phoneDisplay} để đặt lịch hoặc mở Google Maps để chỉ đường.`} />
    <PageHeading label="Phòng khám tại Huế" title="Liên hệ & đặt lịch" description="Gọi điện hoặc gửi thông tin để phòng khám trao đổi nhu cầu và xác nhận thời gian trước khi bạn đến khám." />
    <section className="section container contact-grid">
      <div>
        <span className="eyebrow">Thông tin phòng khám</span>
        <h2>{clinic.displayName}</h2>
        <p className="contact-doctor">{clinic.doctor}</p>
        <dl className="contact-info">
          <dt>Địa chỉ</dt><dd>{clinic.address || 'Đang chờ xác nhận.'}</dd>
          <dt>Giờ làm việc</dt><dd>{clinic.hours || 'Lịch làm việc sẽ được cập nhật.'}</dd>
          {clinic.zalo && <><dt>Zalo</dt><dd><a href={clinic.zalo} target="_blank" rel="noopener noreferrer">Nhắn Zalo {clinic.phoneDisplay}<span className="sr-only"> (mở tab mới)</span></a></dd></>}
          {clinic.facebook && <><dt>Facebook</dt><dd><a href={clinic.facebook} target="_blank" rel="noopener noreferrer">Trang Facebook phòng khám<span className="sr-only"> (mở tab mới)</span></a></dd></>}
        </dl>
        <ContactActions />
        <p>Lịch khám cần được phòng khám xác nhận trước khi bạn đến.</p>
      </div>

      <div className="consultation-panel" id="tu-van">
        <form
          className="appointment-form consultation-form"
          action={clinic.consultationEndpoint}
          method="POST"
          onSubmit={submit}
          onChange={clearStatus}
          autoComplete="on"
          aria-labelledby="consultation-title"
          aria-describedby="form-data-note"
          aria-busy={submitState === 'submitting'}
        >
          <span className="eyebrow">Đăng ký tư vấn</span>
          <h2 id="consultation-title">Thông tin cần tư vấn</h2>
          <p className="form-intro">Để lại thông tin để phòng khám liên hệ trao đổi và xác nhận thời gian thăm khám phù hợp.</p>
          <p id="form-data-note" className="notice">Thông tin được gửi đến phòng khám qua Formspree. Vui lòng không nhập bệnh án hoặc thông tin sức khỏe chi tiết.</p>
          <p className="field-hint required-note">Các trường có dấu * là bắt buộc.</p>

          <input type="hidden" name="_subject" value="Yêu cầu tư vấn mới từ website phòng khám" />
          <div className="form-honeypot" aria-hidden="true">
            <label htmlFor="consultation-website">Nếu bạn là người dùng, hãy để trống trường này</label>
            <input id="consultation-website" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="field">
            <label htmlFor="full-name">Họ và tên *</label>
            <input id="full-name" name="fullName" autoComplete="name" required minLength={2} maxLength={80} pattern=".*\S.*" placeholder="Nhập họ và tên của bạn" />
          </div>
          <div className="field">
            <label htmlFor="address">Địa chỉ *</label>
            <input id="address" name="address" autoComplete="street-address" required maxLength={200} pattern=".*\S.*" placeholder="Phường/xã, tỉnh/thành phố" aria-describedby="address-hint" />
            <p id="address-hint" className="field-hint">Bạn có thể chỉ ghi phường/xã và tỉnh/thành phố.</p>
          </div>
          <div className="consultation-row">
            <div className="field">
              <label htmlFor="phone">Số điện thoại *</label>
              <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required maxLength={20} pattern="(?:[ +\(\)\-]*[0-9]){9,15}[ \(\)\-]*" title="Nhập số điện thoại liên hệ, có thể kèm mã quốc gia, khoảng trắng hoặc dấu gạch ngang." placeholder="Ví dụ: 0912 345 678" />
            </div>
            <div className="field">
              <label htmlFor="date">Ngày mong muốn thăm khám *</label>
              <input id="date" name="preferredDate" type="date" min={today} max={latest} required />
            </div>
          </div>
          <div className="field">
            <label htmlFor="request">Yêu cầu thăm khám *</label>
            <textarea id="request" name="consultationRequest" rows={4} required minLength={5} maxLength={1000} placeholder="Ví dụ: Tôi muốn tư vấn trước khi mang thai và mong được khám vào buổi chiều." aria-describedby="request-hint" />
            <p id="request-hint" className="field-hint">Mô tả ngắn nhu cầu của bạn (tối đa 1.000 ký tự). Không gửi bệnh án hoặc thông tin sức khỏe chi tiết.</p>
          </div>
          <label className="consent">
            <input type="checkbox" required name="consent" value="Đã đồng ý" />
            <span>Tôi đã đọc <Link to="/chinh-sach-bao-mat">thông tin quyền riêng tư</Link> và đồng ý để phòng khám sử dụng thông tin trên nhằm liên hệ tư vấn.</span>
          </label>
          <button className="button" type="submit" disabled={submitState === 'submitting'}>
            {submitState === 'submitting' ? 'Đang gửi…' : 'Gửi đăng ký tư vấn'} <ArrowRight size={18} aria-hidden="true" />
          </button>
          <p className="field-hint appointment-note">Ngày bạn chọn là ngày mong muốn. Lịch hẹn chỉ được xác nhận sau khi phòng khám liên hệ.</p>
          <p className={`form-status form-status-${submitState}`} role={submitState === 'error' ? 'alert' : 'status'} aria-live={submitState === 'error' ? 'assertive' : 'polite'}>{message}</p>
        </form>
      </div>
    </section>
  </>;
}

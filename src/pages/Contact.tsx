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
        setMessage('Thông tin chưa được tiếp nhận. Vui lòng kiểm tra lại các trường rồi thử gửi lại.');
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
    <SEO title="Liên hệ và đặt lịch khám" description={`${clinic.name} — ${clinic.doctor}. Địa chỉ: ${clinic.address}. Gọi ${clinic.phoneDisplay} để đặt lịch hoặc mở chỉ đường.`} />
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
          <h2 id="consultation-title">Đặt lịch hẹn</h2>
          <p className="form-intro">Để lại thông tin và chọn nhu cầu tổng quát để phòng khám liên hệ trao đổi, xác nhận thời gian phù hợp.</p>
          {clinic.draft && <p className="notice"><strong>Bản thử nghiệm:</strong> chưa gửi dữ liệu thật qua biểu mẫu cho đến khi phòng khám thay hoặc xác nhận nhà cung cấp được phép xử lý dữ liệu sức khỏe nhạy cảm. Vui lòng gọi điện/Zalo nếu cần liên hệ.</p>}
          <p id="form-data-note" className="notice">Thông tin được chuyển đến phòng khám để liên hệ với bạn. Nhóm nhu cầu bạn chọn có thể phản ánh dữ liệu sức khỏe nhạy cảm; chỉ chọn nhóm tổng quát và không cung cấp bệnh án, kết quả xét nghiệm hoặc thông tin sức khỏe chi tiết.</p>
          <p className="field-hint required-note">Các trường có dấu * là bắt buộc.</p>

          <input type="hidden" name="_subject" value="Yêu cầu tư vấn mới từ website phòng khám" />
          <input type="hidden" name="privacyPolicyDate" value="03/11/2026" />
          <div className="form-honeypot" aria-hidden="true">
            <label htmlFor="consultation-website">Nếu bạn là người dùng, hãy để trống trường này</label>
            <input id="consultation-website" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="field">
            <label htmlFor="full-name">Họ và tên *</label>
            <input id="full-name" name="fullName" autoComplete="name" required minLength={2} maxLength={80} pattern=".*\S.*" placeholder="Nhập họ và tên của bạn" />
          </div>
          <div className="consultation-row">
            <div className="field">
              <label htmlFor="phone">Số điện thoại *</label>
              <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required maxLength={20} pattern="(?:[ +\(\)\-]*[0-9]){9,15}[ \(\)\-]*" title="Nhập số điện thoại liên hệ, có thể kèm mã quốc gia, khoảng trắng hoặc dấu gạch ngang." placeholder="Ví dụ: 0912 345 678" />
            </div>
            <div className="field">
              <label htmlFor="date">Ngày hẹn *</label>
              <input id="date" name="preferredDate" type="date" min={today} max={latest} required />
            </div>
          </div>
          <div className="field">
            <label htmlFor="consultation-type">Nhu cầu tư vấn *</label>
            <select id="consultation-type" name="consultationType" required defaultValue="">
              <option value="" disabled>Chọn nhu cầu tư vấn</option>
              <option value="Khám phụ khoa">Khám phụ khoa</option>
              <option value="Thai kỳ">Thai kỳ</option>
              <option value="Sức khỏe sinh sản">Sức khỏe sinh sản</option>
              <option value="Hiếm muộn">Hiếm muộn</option>
              <option value="Khác">Khác</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="note">Ghi chú ngắn (không bắt buộc)</label>
            <textarea id="note" name="note" rows={3} maxLength={500} placeholder="Ví dụ: Tôi mong được liên hệ vào buổi chiều." aria-describedby="note-hint" />
            <p id="note-hint" className="field-hint">Không nhập bệnh án, kết quả xét nghiệm hoặc thông tin sức khỏe chi tiết. Tối đa 500 ký tự.</p>
          </div>
          <label className="consent">
            <input type="checkbox" required name="consent" value="Đồng ý xử lý thông tin để phòng khám liên hệ và sắp xếp lịch theo Chính sách bảo vệ dữ liệu cá nhân" />
            <span>Tôi đã đọc <Link to="/chinh-sach-bao-ve-du-lieu-ca-nhan">Chính sách bảo vệ dữ liệu cá nhân</Link> và đồng ý để phòng khám xử lý thông tin đã cung cấp. Thông tin này không nhằm mục đích chẩn đoán, điều trị trực tuyến hoặc thay thế việc thăm khám; chỉ giúp phòng khám liên hệ, trao đổi nhu cầu và xác nhận lịch tư vấn hoặc thăm khám với tôi.</span>
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

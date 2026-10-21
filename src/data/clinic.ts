export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
export const clinic = {
  name: 'Phòng khám Hiếm muộn & Sản phụ khoa tại Huế', displayName: 'Phòng khám Hiếm muộn & Sản phụ khoa tại Huế',
  // Wordmark printed in the logo artwork and the specialty line set beside it.
  brandName: 'Phòng khám TS.BS. Đắc Nguyên', specialty: 'Hiếm muộn & Sản Phụ Khoa',
  doctor: 'TS.BS. Nguyễn Đắc Nguyên', doctorFull: 'Tiến sĩ, Bác sĩ Nguyễn Đắc Nguyên', draft: true,
  website: null as string | null, phone: '0774534766', phoneDisplay: '0774 534 766', zalo: 'https://zalo.me/0774534766' as string | null,
  // Facebook button appears automatically once the page link is filled in.
  facebook: null as string | null,
  // Separate hotline shown in the header, written like '09xxxxxxxx' or '1900xxxx'; null hides the button.
  hotline: null as string | null,
  consultationEndpoint: 'https://formspree.io/f/mvkzjdro',
  address: '184 Phạm Văn Đồng, phường Mỹ Thượng, TP Huế', hours: '17:30–19:30 hằng ngày', biography: null as string | null,
  qualifications: [] as string[],
};
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clinic.address + ', Việt Nam')}`;
// Mobile/landline numbers start with 0 and dial as +84; 1800/1900 numbers are domestic-only.
export const telUrl = (number: string) => {
  const digits = number.replace(/\D/g, '');
  if (number.trim().startsWith('+')) return 'tel:+' + digits;
  return 'tel:' + (digits.startsWith('0') ? '+84' + digits.slice(1) : digits);
};
export const formatPhone = (number: string) => {
  const digits = number.replace(/\D/g, '');
  const d = number.trim().startsWith('+84') ? '0' + digits.slice(2) : digits;
  if (d.length === 8) return `${d.slice(0, 4)} ${d.slice(4)}`;
  if (d.length === 10) return `${d.slice(0, 4)} ${d.slice(4, 7)} ${d.slice(7)}`;
  return number;
};
export const phoneUrl = telUrl(clinic.phone);
export const services = [
  { slug: 'kham-phu-khoa', title: 'Khám phụ khoa', description: 'Thông tin về thăm khám và các vấn đề sức khỏe phụ khoa.', confirmed: false },
  { slug: 'cham-soc-thai-ky', title: 'Chăm sóc thai kỳ', description: 'Các nội dung cần trao đổi khi lên kế hoạch theo dõi thai kỳ.', confirmed: false },
  { slug: 'suc-khoe-sinh-san', title: 'Sức khỏe sinh sản', description: 'Tìm hiểu nhu cầu tư vấn và kế hoạch chăm sóc sức khỏe sinh sản.', confirmed: false },
  { slug: 'tu-van-hiem-muon', title: 'Tư vấn hiếm muộn', description: 'Thông tin chuẩn bị cho buổi tư vấn về vấn đề mong con.', confirmed: false },
];
export const visibleServices = () => services.filter(s => clinic.draft || s.confirmed);
export const steps = [
  { title: 'Liên hệ đặt lịch', text: `Gọi ${clinic.phoneDisplay} hoặc gửi biểu mẫu tư vấn để trao đổi nhu cầu và thời gian dự kiến.` },
  { title: 'Xác nhận lịch hẹn', text: 'Phòng khám liên hệ để thống nhất thời gian trước khi bạn đến.' },
  { title: 'Thăm khám & tư vấn', text: 'Trao đổi trực tiếp với bác sĩ về nhu cầu chăm sóc của bạn.' },
  { title: 'Hướng dẫn theo dõi', text: 'Nhận hướng dẫn phù hợp và lịch theo dõi nếu có chỉ định.' },
];
export const faqs = [
  { q: 'Tôi có thể đặt lịch khám bằng cách nào?', a: `Bạn có thể gọi ${clinic.phoneDisplay} hoặc gửi biểu mẫu tư vấn trên website. Phòng khám sẽ liên hệ lại để trao đổi và xác nhận lịch; việc gửi biểu mẫu chưa phải là xác nhận lịch khám.` },
  { q: 'Tìm phòng khám sản gần tôi tại Huế: phòng khám ở đâu?', a: `Phòng khám ở ${clinic.address}. Bạn có thể mở Google Maps từ nút Chỉ đường trên website. Vui lòng gọi ${clinic.phoneDisplay} để xác nhận lịch trước khi đến.` },
  { q: 'Phòng khám chuyên khoa sinh sản có những dịch vụ nào?', a: 'Các nhóm chăm sóc trên website đang là nội dung dự kiến, chờ xác nhận phạm vi hoạt động. Website chưa công bố phòng khám thực hiện IVF hoặc IUI.' },
  { q: 'Tôi cần chuẩn bị gì trước buổi khám?', a: 'Sau khi lịch hẹn được xác nhận, hãy hỏi phòng khám về giấy tờ và các chuẩn bị phù hợp với buổi khám của bạn. Không gửi bệnh án hoặc thông tin sức khỏe chi tiết qua biểu mẫu công khai.' },
  { q: 'Phòng khám làm việc vào thời gian nào?', a: `Phòng khám tiếp nhận thăm khám ${clinic.hours}. Vui lòng liên hệ xác nhận lịch trước khi đến.` },
];
export const articles = [
  { slug: 'chuan-bi-buoi-kham', category: 'Trước buổi khám', title: 'Chuẩn bị cho một cuộc hẹn với bác sĩ', text: 'Bản nháp đề cương: xác nhận thời gian, địa điểm và ghi lại những câu hỏi muốn trao đổi. Nội dung chi tiết đang chờ bác sĩ duyệt.' },
  { slug: 'lang-nghe-co-the', category: 'Sức khỏe phụ nữ', title: 'Dành thời gian lắng nghe cơ thể', text: 'Bản nháp đề cương về việc chủ động trao đổi những băn khoăn sức khỏe với bác sĩ. Chưa có hướng dẫn y khoa được công bố.' },
  { slug: 'hanh-trinh-mong-con', category: 'Sức khỏe sinh sản', title: 'Bắt đầu câu chuyện trên hành trình mong con', text: 'Bản nháp đề cương về các câu hỏi cho buổi tư vấn sức khỏe sinh sản. Nội dung đang chờ biên soạn và duyệt chuyên môn.' },
];


export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
export const clinic = {
  name: 'PHÒNG KHÁM HIẾM MUỘN - SẢN PHỤ KHOA', displayName: 'Phòng khám Hiếm muộn - Sản phụ khoa', doctor: 'TS. BS Nguyễn Đắc Nguyên', draft: true,
  website: null as string | null, phone: '0774534766', phoneDisplay: '0774 534 766', zalo: 'https://zalo.me/0774534766' as string | null,
  // Facebook button appears automatically once the page link is filled in.
  facebook: null as string | null,
  address: '184 Phạm Văn Đồng, phường Mỹ Thượng, TP Huế', hours: null as string | null, biography: null as string | null,
  qualifications: [] as string[],
};
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clinic.address + ', Việt Nam')}`;
export const phoneUrl = `tel:+84${clinic.phone.slice(1)}`;
export const services = [
  { slug: 'kham-phu-khoa', title: 'Khám phụ khoa', description: 'Thông tin về thăm khám và các vấn đề sức khỏe phụ khoa.', confirmed: false },
  { slug: 'cham-soc-thai-ky', title: 'Chăm sóc thai kỳ', description: 'Các nội dung cần trao đổi khi lên kế hoạch theo dõi thai kỳ.', confirmed: false },
  { slug: 'suc-khoe-sinh-san', title: 'Sức khỏe sinh sản', description: 'Tìm hiểu nhu cầu tư vấn và kế hoạch chăm sóc sức khỏe sinh sản.', confirmed: false },
  { slug: 'tu-van-hiem-muon', title: 'Tư vấn hiếm muộn', description: 'Thông tin chuẩn bị cho buổi tư vấn về vấn đề mong con.', confirmed: false },
];
export const visibleServices = () => services.filter(s => clinic.draft || s.confirmed);
export const steps = [
  { title: 'Liên hệ đặt lịch', text: `Gọi ${clinic.phoneDisplay} để trao đổi nhu cầu và thời gian dự kiến.` },
  { title: 'Xác nhận lịch hẹn', text: 'Phòng khám liên hệ để thống nhất thời gian trước khi bạn đến.' },
  { title: 'Thăm khám & tư vấn', text: 'Trao đổi trực tiếp với bác sĩ về nhu cầu chăm sóc của bạn.' },
  { title: 'Hướng dẫn theo dõi', text: 'Nhận hướng dẫn phù hợp và lịch theo dõi nếu có chỉ định.' },
];
export const faqs = [
  { q: 'Tôi có thể đặt lịch khám bằng cách nào?', a: `Bạn có thể gọi ${clinic.phoneDisplay} để trao đổi và xác nhận lịch khám. Biểu mẫu trên website hiện chỉ dùng để xem trước, chưa tiếp nhận yêu cầu.` },
  { q: 'Tìm phòng khám sản gần tôi tại Huế: phòng khám ở đâu?', a: `Phòng khám ở ${clinic.address}. Bạn có thể mở Google Maps từ nút Chỉ đường trên website. Vui lòng gọi ${clinic.phoneDisplay} để xác nhận lịch trước khi đến.` },
  { q: 'Phòng khám chuyên khoa sinh sản có những dịch vụ nào?', a: 'Các nhóm chăm sóc trên website đang là nội dung dự kiến, chờ xác nhận phạm vi hoạt động. Website chưa công bố phòng khám thực hiện IVF hoặc IUI.' },
  { q: 'Tôi cần chuẩn bị gì trước buổi khám?', a: 'Sau khi lịch hẹn được xác nhận, hãy hỏi phòng khám về giấy tờ và các chuẩn bị phù hợp với buổi khám của bạn. Không gửi bệnh án hoặc thông tin sức khỏe chi tiết qua biểu mẫu công khai.' },
  { q: 'Phòng khám làm việc vào thời gian nào?', a: 'Giờ làm việc đang chờ xác nhận. Vui lòng kiểm tra lại mục liên hệ trước khi sắp xếp đến khám.' },
];
export const articles = [
  { slug: 'chuan-bi-buoi-kham', category: 'Trước buổi khám', title: 'Chuẩn bị cho một cuộc hẹn với bác sĩ', text: 'Bản nháp đề cương: xác nhận thời gian, địa điểm và ghi lại những câu hỏi muốn trao đổi. Nội dung chi tiết đang chờ bác sĩ duyệt.' },
  { slug: 'lang-nghe-co-the', category: 'Sức khỏe phụ nữ', title: 'Dành thời gian lắng nghe cơ thể', text: 'Bản nháp đề cương về việc chủ động trao đổi những băn khoăn sức khỏe với bác sĩ. Chưa có hướng dẫn y khoa được công bố.' },
  { slug: 'hanh-trinh-mong-con', category: 'Sức khỏe sinh sản', title: 'Bắt đầu câu chuyện trên hành trình mong con', text: 'Bản nháp đề cương về các câu hỏi cho buổi tư vấn sức khỏe sinh sản. Nội dung đang chờ biên soạn và duyệt chuyên môn.' },
];


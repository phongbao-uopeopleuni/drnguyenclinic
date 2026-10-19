export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
export const clinic = {
  name: 'Phòng khám TS.BS. Đắc Nguyên', doctor: 'TS.BS. Đắc Nguyên', draft: true,
  website: null as string | null, phone: null as string | null, zalo: null as string | null,
  address: null as string | null, hours: null as string | null, biography: null as string | null,
  qualifications: [] as string[],
};
export const services = [
  { slug: 'kham-phu-khoa', title: 'Khám phụ khoa', description: 'Quan tâm sức khỏe phụ nữ qua từng giai đoạn của cuộc sống.', confirmed: false },
  { slug: 'cham-soc-thai-ky', title: 'Chăm sóc thai kỳ', description: 'Một hành trình nhiều thay đổi, cần sự lắng nghe và đồng hành.', confirmed: false },
  { slug: 'suc-khoe-sinh-san', title: 'Sức khỏe sinh sản', description: 'Chủ động hơn với kế hoạch chăm sóc sức khỏe của bạn.', confirmed: false },
  { slug: 'tu-van-hiem-muon', title: 'Tư vấn hiếm muộn', description: 'Chia sẻ những băn khoăn trên hành trình mong con của gia đình.', confirmed: false },
];
export const visibleServices = () => services.filter(s => clinic.draft || s.confirmed);
export const steps = [
  { title: 'Gửi yêu cầu đặt lịch', text: 'Chọn thời gian mong muốn và thông tin để phòng khám liên hệ.' },
  { title: 'Xác nhận lịch hẹn', text: 'Phòng khám liên hệ để thống nhất thời gian trước khi bạn đến.' },
  { title: 'Thăm khám & tư vấn', text: 'Trao đổi trực tiếp với bác sĩ về nhu cầu chăm sóc của bạn.' },
  { title: 'Hướng dẫn theo dõi', text: 'Nhận hướng dẫn phù hợp và lịch theo dõi nếu có chỉ định.' },
];
export const faqs = [
  { q: 'Tôi có thể đặt lịch khám bằng cách nào?', a: 'Biểu mẫu hiện ở chế độ xem trước và chưa tiếp nhận yêu cầu. Kênh đặt lịch chính thức sẽ được cập nhật sau khi xác nhận. Lịch hẹn chỉ có hiệu lực khi phòng khám liên hệ xác nhận.' },
  { q: 'Tìm phòng khám sản gần tôi: cần xem thông tin gì?', a: 'Bạn có thể đối chiếu địa chỉ, giờ làm việc và phạm vi chuyên môn trước khi lựa chọn. Địa chỉ của phòng khám đang chờ xác nhận; hãy kiểm tra thông tin liên hệ chính thức trước khi đến.' },
  { q: 'Phòng khám chuyên khoa sinh sản có những dịch vụ nào?', a: 'Các nhóm chăm sóc trên website đang là nội dung dự kiến, chờ xác nhận phạm vi hoạt động. Website chưa công bố phòng khám thực hiện IVF hoặc IUI.' },
  { q: 'Tôi cần chuẩn bị gì trước buổi khám?', a: 'Sau khi lịch hẹn được xác nhận, hãy hỏi phòng khám về giấy tờ và các chuẩn bị phù hợp với buổi khám của bạn. Không gửi bệnh án hoặc thông tin sức khỏe chi tiết qua biểu mẫu công khai.' },
  { q: 'Phòng khám làm việc vào thời gian nào?', a: 'Giờ làm việc đang chờ xác nhận. Vui lòng kiểm tra lại mục liên hệ trước khi sắp xếp đến khám.' },
];
export const articles = [
  { slug: 'chuan-bi-buoi-kham', category: 'Trước buổi khám', title: 'Chuẩn bị cho một cuộc hẹn với bác sĩ', text: 'Bản nháp đề cương: xác nhận thời gian, địa điểm và ghi lại những câu hỏi muốn trao đổi. Nội dung chi tiết đang chờ bác sĩ duyệt.' },
  { slug: 'lang-nghe-co-the', category: 'Sức khỏe phụ nữ', title: 'Dành thời gian lắng nghe cơ thể', text: 'Bản nháp đề cương về việc chủ động trao đổi những băn khoăn sức khỏe với bác sĩ. Chưa có hướng dẫn y khoa được công bố.' },
  { slug: 'hanh-trinh-mong-con', category: 'Sức khỏe sinh sản', title: 'Bắt đầu câu chuyện trên hành trình mong con', text: 'Bản nháp đề cương về các câu hỏi cho buổi tư vấn sức khỏe sinh sản. Nội dung đang chờ biên soạn và duyệt chuyên môn.' },
];

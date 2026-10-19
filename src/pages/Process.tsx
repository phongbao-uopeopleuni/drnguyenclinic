import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';
import { ProcessSteps, ContactCTA } from '../sections/Content';
export default function Process() { return <><SEO title="Quy trình đặt lịch và thăm khám" description="Tìm hiểu bốn bước dự kiến: gửi yêu cầu, xác nhận lịch hẹn, thăm khám và tư vấn, hướng dẫn theo dõi." /><PageHeading label="Từng bước, cùng bạn" title="Để buổi khám nhẹ nhàng hơn" description="Một quy trình rõ ràng giúp bạn chủ động sắp xếp thời gian và chuẩn bị cho cuộc hẹn." /><section className="section container"><ProcessSteps /><p className="notice">Gửi yêu cầu không đồng nghĩa với lịch khám đã được xác nhận. Biểu mẫu hiện chỉ dùng để xem trước.</p></section><ContactCTA /></>; }

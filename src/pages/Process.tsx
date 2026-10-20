import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';
import { ProcessSteps, ContactCTA } from '../sections/Content';
export default function Process() { return <><SEO title="Quy trình đặt lịch và thăm khám" description="Tìm hiểu bốn bước dự kiến: gọi đặt lịch, xác nhận lịch hẹn, thăm khám và tư vấn, hướng dẫn theo dõi." /><PageHeading label="Từng bước, cùng bạn" title="Để buổi khám nhẹ nhàng hơn" description="Một quy trình rõ ràng giúp bạn chủ động sắp xếp thời gian và chuẩn bị cho cuộc hẹn." /><section className="section container"><ProcessSteps /><p className="notice">Lịch khám chỉ chính thức khi phòng khám gọi lại xác nhận. Biểu mẫu trực tuyến hiện chỉ dùng để xem trước.</p></section><ContactCTA /></>; }

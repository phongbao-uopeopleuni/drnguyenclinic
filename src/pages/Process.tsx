import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';
import { ProcessSteps, ContactCTA } from '../sections/Content';

export default function Process() {
  return <>
    <SEO title="Quy trình đặt lịch và thăm khám" description="Tìm hiểu bốn bước dự kiến: liên hệ đặt lịch, xác nhận lịch hẹn, thăm khám và tư vấn, hướng dẫn theo dõi." />
    <PageHeading label="Từng bước, cùng bạn" title="Để buổi khám nhẹ nhàng hơn" description="Một quy trình rõ ràng giúp bạn chủ động sắp xếp thời gian và chuẩn bị cho cuộc hẹn." />
    <section className="section container">
      <ProcessSteps />
      <p className="notice">Biểu mẫu trực tuyến gửi yêu cầu để phòng khám liên hệ lại; lịch khám chỉ chính thức sau khi được phòng khám xác nhận.</p>
    </section>
    <ContactCTA />
  </>;
}

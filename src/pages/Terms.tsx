import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';
import { clinic, phoneUrl } from '../data/clinic';

export default function Terms() {
  return <>
    <SEO title="Quy định sử dụng website" description={`Quy định sử dụng website và biểu mẫu đặt lịch của ${clinic.policyName}.`} noindex />
    <PageHeading label="Dành cho khách hàng" title="Quy định sử dụng website" description="Quyền và trách nhiệm của khách hàng khi xem nội dung, liên hệ và gửi yêu cầu đặt lịch qua website." />
    <section className="section container">
      <article className="narrow prose legal-document">
        <div className="legal-meta" aria-label="Ngày cập nhật quy định"><span>Cập nhật: <time dateTime="2026-11-03">03/11/2026</time></span></div>

        <h2>1. Phạm vi và sự chấp thuận</h2>
        <p>Website được vận hành cho <strong>{clinic.policyName}</strong>, địa chỉ {clinic.address}, điện thoại <a href={phoneUrl}>{clinic.phoneDisplay}</a>. Quy định này áp dụng cho việc truy cập website, đọc nội dung, sử dụng liên kết liên hệ và gửi biểu mẫu đặt lịch.</p>
        <p>Khi tiếp tục sử dụng website hoặc gửi biểu mẫu, khách hàng xác nhận đã đọc và đồng ý với Quy định này, <Link to="/chinh-sach-bao-mat-thong-tin">Chính sách bảo mật thông tin</Link> và <Link to="/chinh-sach-bao-ve-du-lieu-ca-nhan">Chính sách bảo vệ dữ liệu cá nhân</Link>. Nếu không đồng ý, khách hàng không nên gửi biểu mẫu và có thể liên hệ trực tiếp để được giải đáp.</p>

        <h2>2. Chức năng của website</h2>
        <p>Website cung cấp thông tin chung về Phòng khám, bác sĩ, nhóm dịch vụ dự kiến, thời gian làm việc, nội dung tham khảo và phương thức liên hệ; đồng thời hỗ trợ khách hàng gửi yêu cầu để Phòng khám liên hệ sắp xếp lịch. Website không phải ứng dụng khám bệnh từ xa, không có tài khoản bệnh nhân, hồ sơ bệnh án điện tử, thanh toán trực tuyến hoặc chức năng trả kết quả xét nghiệm.</p>

        <h2>3. Nội dung y khoa và trường hợp cấp cứu</h2>
        <ul>
          <li>Nội dung trên website chỉ có tính thông tin chung, không phải chẩn đoán, đơn thuốc, chỉ định điều trị hoặc lời khuyên y khoa cá nhân hóa.</li>
          <li>Việc xem nội dung hoặc gửi biểu mẫu không tự tạo quan hệ bác sĩ–người bệnh và không thay thế việc thăm khám trực tiếp hoặc hình thức khám chữa bệnh đáp ứng đầy đủ điều kiện pháp luật.</li>
          <li>Khách hàng không nên trì hoãn việc tìm kiếm chăm sóc y tế chỉ vì thông tin trên website.</li>
        </ul>
        <p><strong>Trong trường hợp cấp cứu hoặc có dấu hiệu đe dọa tính mạng, sức khỏe, không sử dụng biểu mẫu.</strong> Hãy gọi 115 hoặc đến cơ sở cấp cứu phù hợp gần nhất.</p>

        <h2>4. Yêu cầu đặt lịch</h2>
        <p>Biểu mẫu chỉ ghi nhận ngày mong muốn và thông tin để Phòng khám liên hệ. Thông báo gửi thành công không đồng nghĩa với việc giữ chỗ hoặc xác nhận lịch khám. Lịch chỉ được xác nhận sau khi Phòng khám liên hệ và hai bên thống nhất ngày, giờ, địa điểm cùng thông tin cần thiết.</p>
        <p>Phòng khám có thể đề nghị đổi lịch, yêu cầu bổ sung thông tin tối thiểu, từ chối yêu cầu ngoài phạm vi chuyên môn hoặc hướng dẫn khách hàng đến cơ sở phù hợp. Khách hàng nên gọi lại nếu chưa nhận được xác nhận trong thời gian hợp lý.</p>

        <h2>5. Dịch vụ, phạm vi chuyên môn và chi phí</h2>
        <p>Chỉ dịch vụ phù hợp với giấy phép hoạt động, phạm vi hành nghề và được Phòng khám xác nhận mới được xem là thông tin chính thức. Nội dung website không phải cam kết chắc chắn về kết quả chuyên môn, khả năng tiếp nhận hoặc thời điểm cung cấp dịch vụ.</p>
        <p>Chi phí, phương thức thanh toán, điều kiện đổi hoặc hủy lịch và khoản phát sinh, nếu có, được thông báo hoặc thỏa thuận trước khi cung cấp dịch vụ. Quy định này không hạn chế quyền bắt buộc của người bệnh và người tiêu dùng.</p>

        <h2>6. Trách nhiệm của khách hàng</h2>
        <p>Khi sử dụng website, khách hàng đồng ý:</p>
        <ul>
          <li>cung cấp thông tin chính xác, thuộc về mình hoặc thuộc phạm vi được phép cung cấp;</li>
          <li>không gửi bệnh án, kết quả xét nghiệm, ảnh y khoa, số định danh, dữ liệu tài chính, mật khẩu hoặc thông tin sức khỏe chi tiết qua biểu mẫu công khai;</li>
          <li>không mạo danh, quấy rối, lừa đảo, gửi nội dung trái pháp luật hoặc xâm phạm quyền của người khác;</li>
          <li>không dò quét, chèn mã độc, khai thác lỗ hổng, vượt biện pháp bảo vệ, gây quá tải hoặc truy cập trái phép;</li>
          <li>không sao chép hoặc sử dụng nội dung, hình ảnh hay dấu hiệu nhận diện theo cách gây nhầm lẫn về nguồn gốc, sự bảo trợ hoặc tư cách chuyên môn.</li>
        </ul>

        <h2>7. Bảo vệ thông tin và dữ liệu cá nhân</h2>
        <p>Thông tin gửi qua website được xử lý theo <Link to="/chinh-sach-bao-ve-du-lieu-ca-nhan">Chính sách bảo vệ dữ liệu cá nhân</Link>. Khách hàng không được cung cấp dữ liệu của người khác nếu chưa có thẩm quyền hoặc căn cứ hợp pháp. Khi gửi thay cho trẻ em hoặc người cần đại diện, khách hàng xác nhận mình có tư cách đại diện phù hợp.</p>

        <h2>8. Quyền sở hữu trí tuệ</h2>
        <p>Trừ khi có ghi chú khác, bố cục, văn bản, hình ảnh, dấu hiệu nhận diện và tài liệu trên website thuộc Phòng khám hoặc được sử dụng hợp pháp. Khách hàng có thể xem, in hoặc lưu một bản cho mục đích cá nhân, phi thương mại. Việc sửa đổi, tái xuất bản, khai thác thương mại hoặc sử dụng gây nhầm lẫn cần được chủ sở hữu cho phép trước bằng văn bản.</p>

        <h2>9. Liên kết ngoài và dịch vụ hỗ trợ</h2>
        <p>Website có thể chứa liên kết hỗ trợ liên lạc, chỉ đường hoặc truy cập nội dung của bên khác. Khi rời website, khách hàng chịu sự điều chỉnh của điều khoản và chính sách của trang đích. Phòng khám cố gắng lựa chọn liên kết phù hợp nhưng không kiểm soát mọi thay đổi về nội dung hoặc tính sẵn sàng của trang bên ngoài.</p>

        <h2>10. Tính chính xác và tính sẵn sàng</h2>
        <p>Phòng khám nỗ lực duy trì thông tin chính xác và website ổn định, nhưng nội dung có thể thay đổi do lịch làm việc, phạm vi chuyên môn, quy định pháp luật, bảo trì hoặc sự cố ngoài khả năng kiểm soát hợp lý. Nếu thông tin trên website khác với xác nhận trực tiếp, giấy phép, bảng giá hoặc hướng dẫn chuyên môn hiện hành, tài liệu hoặc xác nhận chính thức được ưu tiên áp dụng.</p>

        <h2>11. Trách nhiệm và giới hạn hợp pháp</h2>
        <p>Trong phạm vi pháp luật cho phép, Phòng khám không chịu trách nhiệm cho thiệt hại phát sinh từ việc khách hàng tự chẩn đoán, tự điều trị, sử dụng website trái Quy định, cung cấp dữ liệu sai hoặc từ sự kiện bất khả kháng ngoài khả năng kiểm soát hợp lý.</p>
        <p>Không nội dung nào tại đây nhằm loại trừ hoặc hạn chế trách nhiệm mà pháp luật không cho phép loại trừ, bao gồm nghĩa vụ bảo vệ quyền lợi người bệnh, người tiêu dùng, dữ liệu cá nhân và trách nhiệm bồi thường thiệt hại theo pháp luật.</p>

        <h2>12. Phản ánh và giải quyết tranh chấp</h2>
        <p>Khách hàng có thể gửi phản ánh qua số <a href={phoneUrl}>{clinic.phoneDisplay}</a>, tại {clinic.address}, hoặc qua <Link to="/lien-he">trang Liên hệ</Link>. Hai bên ưu tiên trao đổi thiện chí; nếu không giải quyết được, tranh chấp được xử lý theo pháp luật Việt Nam tại cơ quan có thẩm quyền.</p>

        <h2>13. Cập nhật và hiệu lực từng phần</h2>
        <p>Quy định có thể được cập nhật khi chức năng website, hoạt động của Phòng khám hoặc pháp luật thay đổi. Bản có hiệu lực được công bố tại trang này kèm ngày cập nhật. Nếu một điều khoản bị xác định không hợp lệ, các điều khoản còn lại vẫn có hiệu lực trong phạm vi pháp luật cho phép.</p>

        <h2>14. Căn cứ pháp lý chính</h2>
        <ul>
          <li>Luật Khám bệnh, chữa bệnh số 15/2023/QH15.</li>
          <li>Luật Bảo vệ quyền lợi người tiêu dùng số 19/2023/QH15.</li>
          <li>Luật Giao dịch điện tử số 20/2023/QH15.</li>
          <li>Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 và Nghị định số 356/2025/NĐ-CP.</li>
        </ul>
      </article>
    </section>
  </>;
}

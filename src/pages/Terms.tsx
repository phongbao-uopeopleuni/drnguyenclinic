import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';
import { clinic, phoneUrl } from '../data/clinic';

export default function Terms() {
  return <>
    <SEO
      title="Điều khoản sử dụng"
      description={`Điều khoản sử dụng website và biểu mẫu tư vấn của ${clinic.brandName}.`}
      noindex
    />
    <PageHeading
      label="Điều kiện sử dụng website"
      title="Điều khoản sử dụng"
      description="Quy định về nội dung y khoa, yêu cầu tư vấn, lịch hẹn, quyền và trách nhiệm khi sử dụng website."
    />
    <section className="section container">
      <article className="narrow prose legal-document">
        <div className="legal-meta" aria-label="Thông tin phiên bản điều khoản">
          <span>Cập nhật: <time dateTime="2026-11-01">01/11/2026</time></span>
        </div>
        <p className="notice"><strong>Trạng thái pháp lý:</strong> đây là bản điều khoản hoàn chỉnh cho website đang ở chế độ nháp/noindex. Trước khi công bố chính thức, chủ phòng khám phải bổ sung và xác nhận tên pháp lý, giấy phép hoạt động, phạm vi chuyên môn, giá dịch vụ, chính sách thanh toán/hủy lịch và đầu mối khiếu nại.</p>

        <h2>1. Chủ thể và phạm vi áp dụng</h2>
        <p>Website này được vận hành cho <strong>{clinic.brandName}</strong>, địa chỉ liên hệ tại {clinic.address}, điện thoại <a href={phoneUrl}>{clinic.phoneDisplay}</a>. Điều khoản áp dụng cho việc truy cập, đọc nội dung, sử dụng liên kết liên hệ và gửi yêu cầu tư vấn qua website.</p>
        <p>Bằng việc tiếp tục sử dụng website hoặc gửi biểu mẫu, bạn xác nhận đã đọc và đồng ý với Điều khoản này cùng <Link to="/chinh-sach-bao-mat">Chính sách quyền riêng tư</Link>. Nếu không đồng ý, vui lòng không gửi biểu mẫu và có thể liên hệ trực tiếp để được giải đáp.</p>

        <h2>2. Website không thay thế khám, chẩn đoán hoặc cấp cứu</h2>
        <ul>
          <li>Nội dung trên website chỉ nhằm cung cấp thông tin chung và hỗ trợ liên hệ. Nội dung không phải chẩn đoán, đơn thuốc, chỉ định điều trị hoặc lời khuyên y khoa được cá nhân hóa.</li>
          <li>Việc đọc nội dung hoặc gửi biểu mẫu không tự tạo quan hệ bác sĩ–người bệnh, không thay thế việc khám trực tiếp hoặc khám từ xa đáp ứng đầy đủ điều kiện pháp luật.</li>
          <li>Không trì hoãn việc tìm kiếm chăm sóc y tế chỉ vì thông tin trên website.</li>
        </ul>
        <p><strong>Trường hợp cấp cứu hoặc có dấu hiệu đe dọa tính mạng/sức khỏe, không sử dụng biểu mẫu.</strong> Hãy gọi 115 hoặc đến cơ sở cấp cứu phù hợp gần nhất.</p>

        <h2>3. Yêu cầu tư vấn và xác nhận lịch hẹn</h2>
        <p>Biểu mẫu chỉ ghi nhận yêu cầu để phòng khám liên hệ. Thông báo “đã gửi” chỉ xác nhận hệ thống đã tiếp nhận dữ liệu, không xác nhận bác sĩ sẵn sàng, không giữ chỗ và không tạo lịch khám.</p>
        <p>Lịch hẹn chỉ có hiệu lực khi phòng khám liên hệ và hai bên thống nhất rõ ngày, giờ, địa điểm cùng thông tin cần thiết. Phòng khám có thể đề nghị đổi lịch, từ chối tiếp nhận ngoài phạm vi hoạt động hoặc hướng dẫn bạn đến cơ sở phù hợp. Bạn nên gọi lại nếu chưa nhận được xác nhận.</p>

        <h2>4. Dịch vụ, phạm vi chuyên môn và giá</h2>
        <p>Chỉ thông tin đã được chủ phòng khám xác nhận và phù hợp với giấy phép hoạt động/phạm vi hành nghề mới được xem là thông tin chính thức. Các mục đang ghi “dự kiến”, “bản nháp”, “đang chờ duyệt” không phải cam kết cung cấp dịch vụ.</p>
        <p>Giá, phương thức thanh toán, điều kiện hủy/đổi lịch và chi phí phát sinh phải được thông báo hoặc thỏa thuận riêng trước khi cung cấp dịch vụ. Điều khoản này không loại trừ quyền được cung cấp thông tin đầy đủ, chính xác và các quyền bắt buộc khác của người bệnh, người tiêu dùng.</p>

        <h2>5. Nghĩa vụ của người sử dụng</h2>
        <p>Khi sử dụng website, bạn đồng ý:</p>
        <ul>
          <li>cung cấp thông tin liên hệ chính xác, thuộc về bạn hoặc được bạn có thẩm quyền hợp pháp cung cấp;</li>
          <li>không gửi bệnh án, kết quả xét nghiệm, hình ảnh y khoa, dữ liệu định danh, tài chính hoặc thông tin sức khỏe chi tiết qua biểu mẫu công khai;</li>
          <li>không mạo danh, gửi nội dung trái pháp luật, quấy rối, lừa đảo, chứa mã độc hoặc xâm phạm quyền của người khác;</li>
          <li>không dò quét, vượt biện pháp bảo vệ, gây quá tải, can thiệp hoạt động hoặc truy cập trái phép vào website, tài khoản hay dữ liệu;</li>
          <li>không sao chép hoặc sử dụng nội dung, nhãn hiệu, hình ảnh của phòng khám theo cách gây nhầm lẫn về nguồn gốc, bảo trợ hoặc tư cách chuyên môn.</li>
        </ul>

        <h2>6. Dữ liệu cá nhân</h2>
        <p>Việc xử lý dữ liệu cá nhân khi bạn gửi biểu mẫu được điều chỉnh bởi <Link to="/chinh-sach-bao-mat">Chính sách quyền riêng tư</Link>. Bạn chịu trách nhiệm không cung cấp dữ liệu của người khác khi chưa có quyền hoặc căn cứ hợp pháp. Nếu gửi thay cho trẻ em hoặc người cần đại diện, bạn xác nhận mình là người đại diện hợp pháp hoặc đã được ủy quyền phù hợp.</p>

        <h2>7. Quyền sở hữu trí tuệ</h2>
        <p>Trừ khi có ghi chú khác, bố cục, văn bản, logo, hình ảnh và tài liệu trên website thuộc phòng khám hoặc được sử dụng hợp pháp. Bạn có thể xem, in hoặc lưu một bản cho mục đích cá nhân, phi thương mại. Mọi hành vi sao chép hàng loạt, sửa đổi, tái xuất bản, khai thác thương mại hoặc sử dụng dấu hiệu nhận diện cần được chủ sở hữu cho phép trước bằng văn bản.</p>

        <h2>8. Liên kết và dịch vụ của bên thứ ba</h2>
        <p>Website có thể mở dịch vụ liên lạc, chỉ đường hoặc sử dụng đơn vị hỗ trợ vận hành và tiếp nhận yêu cầu. Khi rời website hoặc dùng dịch vụ của bên thứ ba, bạn chịu sự điều chỉnh của điều khoản và chính sách riêng của họ. Phòng khám không kiểm soát toàn bộ tính sẵn sàng, nội dung hoặc thay đổi của các dịch vụ đó, nhưng vẫn chịu trách nhiệm trong phạm vi pháp luật bắt buộc đối với việc lựa chọn và sử dụng bên xử lý dữ liệu.</p>

        <h2>9. Tính chính xác và tính sẵn sàng</h2>
        <p>Phòng khám cố gắng cập nhật thông tin chính xác và duy trì website ổn định, nhưng nội dung có thể cần điều chỉnh do thay đổi lịch làm việc, nhân sự, phạm vi chuyên môn, pháp luật hoặc sự cố kỹ thuật. Website có thể tạm ngừng để bảo trì, bảo mật hoặc do nguyên nhân ngoài khả năng kiểm soát hợp lý.</p>
        <p>Nếu thông tin trên website khác với xác nhận trực tiếp, giấy phép, bảng giá hoặc hướng dẫn chuyên môn hiện hành, văn bản/xác nhận chính thức và quy định pháp luật được ưu tiên áp dụng.</p>

        <h2>10. Giới hạn trách nhiệm hợp pháp</h2>
        <p>Trong phạm vi pháp luật cho phép, phòng khám không chịu trách nhiệm cho thiệt hại phát sinh do người dùng tự chẩn đoán, tự điều trị, sử dụng website trái Điều khoản, cung cấp dữ liệu sai, hoặc do dịch vụ bên thứ ba/sự kiện bất khả kháng ngoài khả năng kiểm soát hợp lý.</p>
        <p>Không nội dung nào trong Điều khoản nhằm loại trừ hoặc hạn chế trách nhiệm mà pháp luật không cho phép loại trừ, bao gồm trách nhiệm do lỗi cố ý/lỗi nặng, nghĩa vụ bảo vệ quyền lợi người bệnh, người tiêu dùng, bảo vệ dữ liệu cá nhân và bồi thường thiệt hại theo pháp luật.</p>

        <h2>11. Phản ánh, khiếu nại và giải quyết tranh chấp</h2>
        <p>Bạn có thể gửi phản ánh qua số <a href={phoneUrl}>{clinic.phoneDisplay}</a>, tại {clinic.address}, hoặc qua <Link to="/lien-he">trang Liên hệ</Link>. Vui lòng nêu thông tin liên hệ, nội dung vụ việc, thời điểm và tài liệu liên quan; không gửi thêm dữ liệu sức khỏe không cần thiết.</p>
        <p>Phòng khám xác nhận đã nhận phản ánh trong tối đa 03 ngày làm việc và dự kiến trả lời ban đầu trong 07 ngày làm việc. Nếu vụ việc phức tạp hoặc cần xác minh với bên thứ ba, phòng khám sẽ thông báo lý do và thời gian dự kiến tiếp theo. Các bên ưu tiên thương lượng, hòa giải; nếu không giải quyết được, mỗi bên có quyền yêu cầu cơ quan bảo vệ người tiêu dùng, cơ quan quản lý chuyên ngành, trọng tài (khi có thỏa thuận hợp lệ) hoặc tòa án có thẩm quyền theo pháp luật Việt Nam.</p>

        <h2>12. Sửa đổi, hiệu lực từng phần và luật áp dụng</h2>
        <p>Phòng khám có thể cập nhật Điều khoản để phản ánh thay đổi của website hoặc pháp luật. Phiên bản mới được ghi ngày và áp dụng từ khi công bố, không làm mất các quyền đã phát sinh của người dùng. Nếu một điều khoản bị xác định vô hiệu, các phần còn lại vẫn được áp dụng trong phạm vi pháp luật cho phép.</p>
        <p>Điều khoản được điều chỉnh bởi pháp luật Việt Nam. Quy định bắt buộc về bảo vệ người bệnh, người tiêu dùng và dữ liệu cá nhân được ưu tiên khi có khác biệt.</p>

        <h2>13. Căn cứ pháp lý chính</h2>
        <ul className="legal-sources">
          <li><a href="https://vanban.chinhphu.vn/?docid=217232&pageid=27160" target="_blank" rel="noopener noreferrer">Văn bản hợp nhất 47/VBHN-VPQH về Luật Bảo vệ quyền lợi người tiêu dùng<span className="sr-only"> (mở tab mới)</span></a>.</li>
          <li><a href="https://vanban.chinhphu.vn/?docid=210254&pageid=27160" target="_blank" rel="noopener noreferrer">Nghị định 55/2024/NĐ-CP hướng dẫn Luật Bảo vệ quyền lợi người tiêu dùng<span className="sr-only"> (mở tab mới)</span></a>.</li>
          <li><a href="https://vanban.chinhphu.vn/?docid=217083&pageid=27160" target="_blank" rel="noopener noreferrer">Văn bản hợp nhất 26/VBHN-VPQH về Luật Khám bệnh, chữa bệnh<span className="sr-only"> (mở tab mới)</span></a>.</li>
          <li><a href="https://vanban.chinhphu.vn/?classid=1&docid=208421&pageid=27160&typegroupid=3" target="_blank" rel="noopener noreferrer">Luật Giao dịch điện tử số 20/2023/QH15<span className="sr-only"> (mở tab mới)</span></a>.</li>
          <li><a href="https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=" target="_blank" rel="noopener noreferrer">Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15<span className="sr-only"> (mở tab mới)</span></a>.</li>
        </ul>
      </article>
    </section>
  </>;
}

import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';
import { clinic, phoneUrl } from '../data/clinic';

export default function Security() {
  return <>
    <SEO title="Chính sách bảo mật thông tin" description={`Nguyên tắc bảo mật thông tin khi sử dụng website của ${clinic.policyName}.`} noindex />
    <PageHeading label="Dành cho khách hàng" title="Chính sách bảo mật thông tin" description="Cam kết và nguyên tắc bảo vệ thông tin khách hàng trong quá trình truy cập website, liên hệ và gửi yêu cầu đặt lịch." />
    <section className="section container">
      <article className="narrow prose legal-document">
        <div className="legal-meta" aria-label="Ngày cập nhật chính sách"><span>Cập nhật: <time dateTime="2026-11-03">03/11/2026</time></span></div>
        <p className="notice">Chính sách này trình bày cách <strong>{clinic.policyName}</strong> bảo vệ thông tin trong phạm vi website và biểu mẫu đặt lịch. Quyền của khách hàng đối với dữ liệu cá nhân được trình bày riêng tại <Link to="/chinh-sach-bao-ve-du-lieu-ca-nhan">Chính sách bảo vệ dữ liệu cá nhân</Link>.</p>

        <h2>1. Phạm vi áp dụng</h2>
        <p>Chính sách áp dụng cho thông tin khách hàng chủ động cung cấp qua biểu mẫu đặt lịch, các cuộc liên hệ phát sinh từ yêu cầu đó và dữ liệu kỹ thuật tối thiểu cần thiết để website vận hành an toàn. Website không phải cổng hồ sơ bệnh án, không có chức năng xem kết quả xét nghiệm, thanh toán trực tuyến hoặc chẩn đoán và điều trị trực tuyến.</p>

        <h2>2. Nguyên tắc bảo mật</h2>
        <ul>
          <li>Chỉ thu thập thông tin cần thiết cho mục đích liên hệ và sắp xếp lịch hẹn.</li>
          <li>Chỉ người có nhiệm vụ phù hợp mới được tiếp cận thông tin theo nguyên tắc cần biết.</li>
          <li>Không bán, cho thuê hoặc dùng thông tin đặt lịch cho quảng cáo khi chưa có sự đồng ý riêng.</li>
          <li>Không yêu cầu khách hàng cung cấp mật khẩu, mã xác thực, dữ liệu tài chính hoặc hồ sơ sức khỏe chi tiết qua biểu mẫu.</li>
          <li>Duy trì biện pháp phòng ngừa, phát hiện, ứng phó và khắc phục tương xứng với rủi ro.</li>
        </ul>

        <h2>3. Thông tin được tiếp nhận</h2>
        <p>Biểu mẫu chỉ yêu cầu họ tên, số điện thoại, ngày hẹn và nhóm nhu cầu tổng quát; ghi chú ngắn là không bắt buộc. Nhóm nhu cầu có thể gián tiếp phản ánh tình trạng sức khỏe nên được bảo vệ ở mức thận trọng phù hợp. Khách hàng không nên nhập bệnh án, kết quả xét nghiệm, hình ảnh y khoa, chẩn đoán, đơn thuốc, số căn cước hoặc dữ liệu thanh toán.</p>

        <h2>4. Biện pháp bảo vệ</h2>
        <div className="legal-data-list security-controls">
          <div><strong>Giảm thiểu dữ liệu</strong><span>Giới hạn trường thông tin, nội dung và độ dài phù hợp với mục đích đặt lịch.</span></div>
          <div><strong>Bảo vệ khi truyền tải</strong><span>Sử dụng kết nối an toàn và các biện pháp thích hợp nhằm giảm nguy cơ nghe lén hoặc sửa đổi dữ liệu.</span></div>
          <div><strong>Kiểm soát truy cập</strong><span>Phân quyền theo nhiệm vụ, hạn chế chia sẻ và rà soát quyền tiếp cận định kỳ.</span></div>
          <div><strong>Phòng chống lạm dụng</strong><span>Kiểm tra dữ liệu đầu vào, giới hạn yêu cầu bất thường và theo dõi dấu hiệu spam hoặc truy cập trái phép.</span></div>
          <div><strong>Quản lý vòng đời</strong><span>Giữ thông tin trong thời gian cần thiết, sau đó xóa, hủy hoặc ẩn danh theo quy định.</span></div>
          <div><strong>Ứng phó sự cố</strong><span>Ghi nhận, đánh giá, cô lập, khắc phục và thông báo khi sự cố thuộc trường hợp pháp luật yêu cầu.</span></div>
        </div>
        <p>Các biện pháp bảo vệ được rà soát khi website, phạm vi dịch vụ hoặc mức độ rủi ro thay đổi. Vì lý do an toàn, Phòng khám không công bố chi tiết có thể làm suy yếu khả năng bảo vệ hệ thống.</p>

        <h2>5. Tiếp cận và cung cấp thông tin</h2>
        <p>Thông tin chỉ được cung cấp cho người được Phòng khám phân công, đơn vị hỗ trợ cần thiết để vận hành dịch vụ hoặc cơ quan có thẩm quyền theo yêu cầu hợp pháp. Các bên hỗ trợ phải bảo mật, chỉ xử lý theo phạm vi được giao và không được tự sử dụng thông tin cho mục đích riêng.</p>

        <h2>6. Trách nhiệm của khách hàng</h2>
        <ul>
          <li>Kiểm tra đúng địa chỉ website trước khi nhập thông tin.</li>
          <li>Chỉ cung cấp thông tin cần thiết, chính xác và thuộc quyền cung cấp của mình.</li>
          <li>Không gửi mật khẩu, mã xác thực, thông tin tài chính hoặc hồ sơ sức khỏe chi tiết.</li>
          <li>Không thực hiện hành vi dò quét, gây quá tải, chèn mã độc, vượt biện pháp bảo vệ hoặc truy cập trái phép.</li>
          <li>Liên hệ trực tiếp với Phòng khám nếu nghi ngờ giả mạo hoặc phát hiện thông tin bị sử dụng sai mục đích.</li>
        </ul>

        <h2>7. Tiếp nhận thông báo về sự cố</h2>
        <p>Nếu phát hiện dấu hiệu giả mạo, nội dung bất thường, lỗ hổng hoặc nguy cơ lộ thông tin, vui lòng gọi <a href={phoneUrl}>{clinic.phoneDisplay}</a> hoặc gửi thông tin qua <Link to="/lien-he">trang Liên hệ</Link>. Nội dung thông báo nên gồm địa chỉ trang, thời điểm, mô tả ngắn và ảnh chụp đã che dữ liệu cá nhân. Không truy cập, sao chép, sửa đổi hoặc công bố dữ liệu của người khác để chứng minh sự cố.</p>
        <p>Phòng khám sẽ xác minh, hạn chế tác động và phối hợp xử lý trong thời gian hợp lý; đồng thời thực hiện nghĩa vụ thông báo theo Luật An ninh mạng số 24/2018/QH14, Luật An ninh mạng số 116/2025/QH15, Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 và quy định liên quan.</p>

        <h2>8. Giới hạn hợp lý</h2>
        <p>Không biện pháp truyền hoặc lưu trữ nào bảo đảm an toàn tuyệt đối. Phòng khám cam kết áp dụng biện pháp phù hợp và có trách nhiệm nhưng không thể loại trừ mọi rủi ro phát sinh từ thiết bị của khách hàng, hành vi lừa đảo, sự kiện bất khả kháng hoặc hành vi trái pháp luật của bên thứ ba. Nội dung này không loại trừ trách nhiệm mà pháp luật không cho phép loại trừ.</p>

        <h2>9. Cập nhật và liên hệ</h2>
        <p>Chính sách được cập nhật khi có thay đổi về phạm vi hoạt động, biện pháp bảo vệ hoặc pháp luật. Bản có hiệu lực được công bố tại trang này kèm ngày cập nhật. Mọi câu hỏi được tiếp nhận qua số <a href={phoneUrl}>{clinic.phoneDisplay}</a>, tại {clinic.address}, hoặc qua <Link to="/lien-he">trang Liên hệ</Link>.</p>
        <p>Xem thêm <Link to="/chinh-sach-bao-ve-du-lieu-ca-nhan">Chính sách bảo vệ dữ liệu cá nhân</Link> và <Link to="/quy-dinh-su-dung-website">Quy định sử dụng website</Link>.</p>
      </article>
    </section>
  </>;
}

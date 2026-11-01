import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';
import { clinic, phoneUrl } from '../data/clinic';

export default function Security() {
  return <>
    <SEO
      title="Bảo mật website"
      description={`Biện pháp bảo mật, hướng dẫn sử dụng an toàn và quy trình báo cáo lỗ hổng của website ${clinic.brandName}.`}
      noindex
    />
    <PageHeading
      label="An toàn thông tin"
      title="Bảo mật website"
      description="Các lớp bảo vệ đang áp dụng, giới hạn của hệ thống và cách báo cáo sự cố hoặc lỗ hổng một cách có trách nhiệm."
    />
    <section className="section container">
      <article className="narrow prose legal-document">
        <div className="legal-meta" aria-label="Thông tin phiên bản chính sách bảo mật">
          <span>Cập nhật: <time dateTime="2026-11-01">01/11/2026</time></span>
        </div>
        <p className="notice">Trang này giới thiệu các nguyên tắc bảo vệ thông tin và hướng dẫn sử dụng website an toàn. Không có biện pháp nào loại bỏ hoàn toàn rủi ro; hồ sơ bệnh án, nếu phát sinh trong quá trình khám chữa bệnh, được bảo vệ theo quy trình riêng của cơ sở y tế.</p>

        <h2>1. Phạm vi</h2>
        <p>Chính sách áp dụng cho website và biểu mẫu tư vấn. Website hiện không có tài khoản người dùng, thanh toán trực tuyến, tải tệp, cổng hồ sơ bệnh án hoặc chức năng xem kết quả xét nghiệm.</p>

        <h2>2. Các biện pháp đang áp dụng</h2>
        <div className="legal-data-list security-controls">
          <div><strong>Giảm thiểu dữ liệu</strong><span>Biểu mẫu chỉ yêu cầu thông tin liên hệ, ngày mong muốn và nhu cầu tổng quát; khu vực và ghi chú là tùy chọn.</span></div>
          <div><strong>Bảo vệ kết nối</strong><span>Thông tin được truyền qua kết nối mã hóa và chỉ đến địa chỉ tiếp nhận đã được cấu hình.</span></div>
          <div><strong>Giới hạn chức năng</strong><span>Website không yêu cầu quyền truy cập camera, microphone, vị trí, thanh toán hoặc thiết bị ngoại vi.</span></div>
          <div><strong>Bảo vệ biểu mẫu</strong><span>Thông tin nhập vào được kiểm tra, giới hạn độ dài và có biện pháp giảm gửi tự động hoặc gửi lặp.</span></div>
          <div><strong>Hạn chế theo dõi</strong><span>Không có công cụ quảng cáo hoặc phân tích hành vi; nội dung biểu mẫu không được lưu thành bản sao trên thiết bị của bạn.</span></div>
          <div><strong>Rà soát định kỳ</strong><span>Các biện pháp bảo vệ và thành phần công khai được kiểm tra trước khi cập nhật website.</span></div>
        </div>

        <h2>3. Trách nhiệm chung với nhà cung cấp</h2>
        <p>Một số đơn vị có thể hỗ trợ vận hành website và tiếp nhận yêu cầu. Phòng khám vẫn phải quản lý quyền truy cập, thời hạn xóa, thỏa thuận xử lý dữ liệu và đánh giá việc chuyển dữ liệu xuyên biên giới; việc thuê đơn vị hỗ trợ không làm giảm trách nhiệm tuân thủ pháp luật Việt Nam.</p>

        <h2>4. Hạn chế và việc còn phải hoàn thiện</h2>
        <ul>
          <li>Nhóm nhu cầu tư vấn có thể phản ánh dữ liệu sức khỏe; trước khi công bố chính thức, phòng khám phải bảo đảm mọi bên tham gia xử lý đều được phép tiếp nhận loại dữ liệu này và có thỏa thuận phù hợp.</li>
          <li>Các biện pháp chống gửi tự động hiện tại không thể ngăn chặn mọi hành vi lạm dụng.</li>
          <li>Phòng khám cần duy trì quy trình phân quyền, xóa dữ liệu và rà soát định kỳ đối với các bản thông báo đã tiếp nhận.</li>
          <li>Tài khoản quản trị, tên miền và hộp thư liên hệ cần được bảo vệ bằng xác thực nhiều lớp, quyền truy cập tối thiểu và phương án khôi phục.</li>
          <li>Các biện pháp hiện tại không thay thế kiểm thử bảo mật độc lập hoặc chứng nhận tuân thủ.</li>
        </ul>

        <h2>5. Hướng dẫn sử dụng an toàn</h2>
        <ul>
          <li>Kiểm tra đúng tên miền và biểu tượng HTTPS trước khi nhập thông tin.</li>
          <li>Không gửi bệnh án, kết quả xét nghiệm, ảnh y khoa, số căn cước, dữ liệu tài chính hoặc mật khẩu qua biểu mẫu.</li>
          <li>Không tin vào yêu cầu chuyển tiền, cung cấp mã OTP hoặc mật khẩu dưới danh nghĩa phòng khám qua website.</li>
          <li>Nếu nghi ngờ giả mạo, hãy dừng thao tác và gọi trực tiếp <a href={phoneUrl}>{clinic.phoneDisplay}</a>.</li>
        </ul>

        <h2>6. Báo cáo lỗ hổng hoặc sự cố</h2>
        <p>Nếu phát hiện lỗ hổng, hành vi giả mạo, trang bị sửa đổi bất thường hoặc dữ liệu bị lộ, vui lòng gọi <a href={phoneUrl}>{clinic.phoneDisplay}</a> hoặc gửi thông tin qua <Link to="/lien-he">trang Liên hệ</Link>. Chỉ cung cấp URL, thời điểm, mô tả, bước tái hiện tối thiểu và ảnh chụp đã che dữ liệu cá nhân. Không gửi dữ liệu sức khỏe hoặc tải lên dữ liệu của người khác để chứng minh.</p>
        <p>Phòng khám sẽ ghi nhận, phân loại mức độ, cô lập rủi ro, phối hợp nhà cung cấp, khắc phục và thông báo theo quy định. Thời gian xử lý phụ thuộc mức độ và khả năng tái hiện; báo cáo hợp lệ sẽ được xác nhận trong thời gian hợp lý.</p>

        <h2>7. Nguyên tắc công bố có trách nhiệm</h2>
        <p>Để việc kiểm tra được xem là thiện chí, người báo cáo không được:</p>
        <ul>
          <li>truy cập, sao chép, sửa, xóa hoặc công bố dữ liệu cá nhân;</li>
          <li>thực hiện tấn công từ chối dịch vụ, spam, dò mật khẩu, lừa đảo hoặc kỹ nghệ xã hội;</li>
          <li>cài mã độc, duy trì truy cập, thay đổi nội dung hoặc làm gián đoạn hoạt động;</li>
          <li>tiếp tục khai thác sau khi đã chứng minh được lỗ hổng ở mức tối thiểu;</li>
          <li>công bố chi tiết trước khi phòng khám có thời gian hợp lý để xác minh và khắc phục.</li>
        </ul>
        <p>Chính sách này không cấp quyền thực hiện hành vi bị pháp luật cấm và không phải cam kết miễn trừ trách nhiệm. Nếu cần kiểm thử vượt quá quan sát thụ động, phải có sự chấp thuận trước bằng văn bản của chủ hệ thống.</p>

        <h2>8. Ứng phó sự cố dữ liệu</h2>
        <p>Khi có dấu hiệu vi phạm dữ liệu cá nhân, đơn vị vận hành cần bảo toàn bằng chứng, hạn chế truy cập, đánh giá loại dữ liệu và chủ thể bị ảnh hưởng, khắc phục nguyên nhân, ghi nhận quyết định và thực hiện nghĩa vụ báo cáo/thông báo theo Luật Bảo vệ dữ liệu cá nhân, Nghị định 356/2025/NĐ-CP và pháp luật chuyên ngành. Dữ liệu sức khỏe phải được coi là dữ liệu nhạy cảm và áp dụng phân quyền, quy trình, biện pháp bảo mật chặt chẽ.</p>

        <h2>9. Căn cứ và tài liệu liên quan</h2>
        <ul className="legal-sources">
          <li><a href="https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=" target="_blank" rel="noopener noreferrer">Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15<span className="sr-only"> (mở tab mới)</span></a>.</li>
          <li><a href="https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160" target="_blank" rel="noopener noreferrer">Nghị định 356/2025/NĐ-CP<span className="sr-only"> (mở tab mới)</span></a>.</li>
          <li><a href="https://vanban.chinhphu.vn/?classid=&docid=216499&pageid=27160" target="_blank" rel="noopener noreferrer">Luật An ninh mạng số 116/2025/QH15<span className="sr-only"> (mở tab mới)</span></a> — hiệu lực từ 01/07/2026.</li>
          <li><a href="https://vanban.chinhphu.vn/?docid=183196&pageid=27160" target="_blank" rel="noopener noreferrer">Luật An toàn thông tin mạng số 86/2015/QH13<span className="sr-only"> (mở tab mới)</span></a>.</li>
          <li><Link to="/chinh-sach-bao-mat">Chính sách quyền riêng tư</Link> và <Link to="/dieu-khoan">Điều khoản sử dụng</Link>.</li>
        </ul>
      </article>
    </section>
  </>;
}

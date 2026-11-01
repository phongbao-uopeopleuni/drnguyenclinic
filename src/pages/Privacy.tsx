import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';
import { clinic, phoneUrl } from '../data/clinic';

export default function Privacy() {
  return <>
    <SEO
      title="Chính sách quyền riêng tư"
      description={`Chính sách bảo vệ dữ liệu cá nhân khi sử dụng website và biểu mẫu tư vấn của ${clinic.brandName}.`}
      noindex
    />
    <PageHeading
      label="Bảo vệ dữ liệu cá nhân"
      title="Chính sách quyền riêng tư"
      description="Thông tin minh bạch về dữ liệu được thu thập, mục đích xử lý, bên nhận dữ liệu và cách bạn thực hiện quyền của mình."
    />
    <section className="section container">
      <article className="narrow prose legal-document">
        <div className="legal-meta" aria-label="Thông tin phiên bản chính sách">
          <span>Cập nhật: <time dateTime="2026-11-01">01/11/2026</time></span>
        </div>

        <p className="notice"><strong>Lưu ý trước khi công bố chính thức:</strong> website đang ở trạng thái bản nháp và không được lập chỉ mục. Chủ phòng khám cần bổ sung tên pháp lý đầy đủ của đơn vị vận hành, số giấy phép hoạt động, mã số thuế/đăng ký, email phụ trách dữ liệu cá nhân và hoàn tất phương án phù hợp để xử lý dữ liệu nhạy cảm trước khi gỡ trạng thái này.</p>

        <nav className="legal-toc" aria-label="Mục lục chính sách quyền riêng tư">
          <strong>Nội dung chính</strong>
          <ol>
            <li><a href="#pham-vi">Phạm vi và đơn vị kiểm soát dữ liệu</a></li>
            <li><a href="#du-lieu">Dữ liệu được xử lý</a></li>
            <li><a href="#muc-dich">Mục đích và căn cứ xử lý</a></li>
            <li><a href="#chia-se">Bên nhận dữ liệu và chuyển dữ liệu xuyên biên giới</a></li>
            <li><a href="#luu-tru">Thời hạn lưu trữ</a></li>
            <li><a href="#quyen">Quyền của bạn</a></li>
            <li><a href="#lien-he">Liên hệ và khiếu nại</a></li>
          </ol>
        </nav>

        <h2 id="pham-vi">1. Phạm vi và đơn vị kiểm soát dữ liệu</h2>
        <p>Chính sách này áp dụng khi bạn truy cập website, gửi biểu mẫu đăng ký tư vấn hoặc liên hệ với phòng khám thông qua thông tin được công bố trên website. Trong phạm vi các hoạt động đó, <strong>{clinic.brandName}</strong> là bên quyết định mục đích và phương thức xử lý dữ liệu mà bạn chủ động cung cấp.</p>
        <div className="legal-contact-card">
          <p><strong>Tên đang hiển thị:</strong> {clinic.brandName}</p>
          <p><strong>Địa chỉ liên hệ:</strong> {clinic.address}</p>
          <p><strong>Điện thoại:</strong> <a href={phoneUrl}>{clinic.phoneDisplay}</a></p>
          <p><strong>Email phụ trách dữ liệu:</strong> Chưa được chủ phòng khám cung cấp.</p>
        </div>
        <p>Chính sách không thay thế quy định riêng áp dụng cho hồ sơ bệnh án được lập trong quá trình khám, chữa bệnh. Hồ sơ bệnh án, nếu phát sinh, được quản lý theo pháp luật khám bệnh, chữa bệnh, dữ liệu y tế và quy trình chuyên môn của cơ sở khám bệnh, chữa bệnh.</p>

        <h2 id="du-lieu">2. Dữ liệu được xử lý</h2>
        <h3>2.1. Dữ liệu bạn chủ động cung cấp</h3>
        <ul>
          <li><strong>Bắt buộc:</strong> họ và tên, số điện thoại, ngày mong muốn thăm khám, nhóm nhu cầu tư vấn tổng quát và xác nhận đồng ý với việc xử lý dữ liệu. Nhóm nhu cầu có thể cho phép suy ra thông tin về sức khỏe và được phòng khám đối xử như dữ liệu nhạy cảm.</li>
          <li><strong>Không bắt buộc:</strong> khu vực/phường, xã và ghi chú ngắn.</li>
          <li><strong>Dữ liệu về yêu cầu:</strong> thời điểm gửi, trạng thái tiếp nhận và nội dung trao đổi cần thiết để phòng khám liên hệ, xử lý yêu cầu.</li>
        </ul>
        <h3>2.2. Dữ liệu kỹ thuật</h3>
        <p>Khi bạn truy cập website hoặc gửi biểu mẫu, nhà cung cấp hạ tầng có thể tự động xử lý dữ liệu kỹ thuật cần thiết để truyền tải, bảo vệ và vận hành dịch vụ, như địa chỉ IP, loại trình duyệt/thiết bị, thời điểm yêu cầu, URL được truy cập, mã trạng thái và thông tin chống lạm dụng. Việc xử lý này tuân theo cấu hình của website và chính sách của từng nhà cung cấp.</p>
        <h3>2.3. Dữ liệu sức khỏe và dữ liệu nhạy cảm</h3>
        <p>Tình trạng sức khỏe, đời sống riêng tư và dữ liệu tiết lộ đời sống tình dục là dữ liệu cá nhân nhạy cảm theo Nghị định 356/2025/NĐ-CP. Ngay cả nhóm nhu cầu tổng quát như “Thai kỳ” hoặc “Hiếm muộn” cũng có thể cho phép suy ra thông tin sức khỏe; phòng khám chỉ xử lý nhóm này để phân luồng yêu cầu liên hệ. Biểu mẫu công khai <strong>không được thiết kế để tiếp nhận bệnh án, kết quả xét nghiệm, hình ảnh y khoa, chẩn đoán, đơn thuốc, số định danh, dữ liệu tài chính hoặc thông tin sức khỏe chi tiết</strong>. Bạn không nên nhập các nội dung đó vào ô ghi chú.</p>
        <p>Nếu bạn vẫn tự nguyện gửi thông tin nhạy cảm ngoài phạm vi được yêu cầu, phòng khám sẽ hạn chế sử dụng, xóa hoặc yêu cầu bạn chuyển sang kênh phù hợp, trừ khi việc lưu giữ/xử lý là cần thiết và có căn cứ pháp luật.</p>

        <h2 id="muc-dich">3. Mục đích và căn cứ xử lý</h2>
        <p>Dữ liệu được xử lý trong phạm vi cần thiết để:</p>
        <ul>
          <li>tiếp nhận yêu cầu, xác minh thông tin liên hệ và trao đổi nhu cầu tư vấn tổng quát;</li>
          <li>đề xuất, điều chỉnh và xác nhận thời gian phù hợp; việc gửi biểu mẫu chưa tạo thành lịch hẹn;</li>
          <li>trả lời câu hỏi, tiếp nhận phản ánh, thực hiện quyền về dữ liệu và giải quyết tranh chấp;</li>
          <li>phát hiện thư rác, hành vi lạm dụng, bảo vệ website và điều tra sự cố;</li>
          <li>tuân thủ nghĩa vụ pháp lý hoặc yêu cầu hợp pháp của cơ quan có thẩm quyền.</li>
        </ul>
        <p>Căn cứ xử lý chủ yếu là sự đồng ý rõ ràng của bạn khi đánh dấu ô đồng ý và gửi biểu mẫu; việc thực hiện yêu cầu do chính bạn khởi tạo; nghĩa vụ pháp lý; và các trường hợp xử lý không cần sự đồng ý mà pháp luật cho phép. Phòng khám phải lưu được bằng chứng về nội dung và thời điểm đồng ý.</p>
        <p>Bạn có thể rút lại sự đồng ý bất cứ lúc nào. Việc rút lại không làm mất tính hợp pháp của hoạt động đã thực hiện trước đó và có thể khiến phòng khám không thể tiếp tục xử lý yêu cầu tư vấn của bạn.</p>

        <h2 id="chia-se">4. Bên nhận dữ liệu và chuyển dữ liệu xuyên biên giới</h2>
        <p>Phòng khám không bán, cho thuê hoặc trao đổi dữ liệu cá nhân cho mục đích quảng cáo. Dữ liệu chỉ được tiếp cận theo nguyên tắc cần biết bởi người phụ trách của phòng khám và các bên sau:</p>
        <div className="legal-data-list">
          <div><strong>Bộ phận phụ trách của phòng khám</strong><span>Tiếp nhận và xử lý yêu cầu trong phạm vi công việc được giao.</span></div>
          <div><strong>Đơn vị hỗ trợ vận hành</strong><span>Hỗ trợ phân phối website, tiếp nhận biểu mẫu, chống lạm dụng và chuyển thông báo đến phòng khám trong phạm vi cần thiết.</span></div>
          <div><strong>Cơ quan có thẩm quyền</strong><span>Nhận dữ liệu khi có yêu cầu hợp pháp hoặc khi việc cung cấp là cần thiết để bảo vệ quyền, lợi ích hợp pháp theo pháp luật.</span></div>
        </div>
        <p>Một số đơn vị hỗ trợ có thể xử lý dữ liệu ngoài Việt Nam. Trước khi công bố chính thức, đơn vị vận hành phải xác nhận vị trí xử lý, đánh giá điều khoản bảo vệ dữ liệu, lập và lưu hồ sơ đánh giá tác động xử lý dữ liệu và chuyển dữ liệu xuyên biên giới khi pháp luật yêu cầu.</p>
        <p><strong>Vấn đề phải xử lý trước khi vận hành chính thức:</strong> nhóm nhu cầu trên biểu mẫu có thể phản ánh dữ liệu sức khỏe. Đơn vị vận hành phải bảo đảm mọi bên tham gia xử lý đều được phép tiếp nhận loại dữ liệu này, có thỏa thuận phù hợp và chỉ xử lý trong phạm vi cần thiết. Trong thời gian website còn là bản nháp, người kiểm thử không được gửi dữ liệu thật.</p>

        <h2 id="luu-tru">5. Thời hạn lưu trữ và xóa dữ liệu</h2>
        <ul>
          <li><strong>Yêu cầu tư vấn:</strong> được giữ trong thời gian xử lý và tối đa 90 ngày kể từ lần liên hệ cuối hoặc ngày yêu cầu được đóng, tùy thời điểm nào đến sau.</li>
          <li><strong>Bằng chứng đồng ý, yêu cầu thực hiện quyền, khiếu nại hoặc tranh chấp:</strong> được giữ trong thời gian cần thiết để chứng minh tuân thủ, giải quyết vụ việc hoặc theo thời hạn pháp luật bắt buộc.</li>
          <li><strong>Nhật ký kỹ thuật:</strong> do nhà cung cấp lưu theo chính sách, cấu hình bảo mật và thời hạn hợp lý cần thiết cho phòng chống lạm dụng.</li>
        </ul>
        <p>Khi hết mục đích và thời hạn lưu trữ, dữ liệu sẽ được xóa, hủy hoặc khử nhận dạng, bao gồm bản tại dịch vụ tiếp nhận yêu cầu và bản sao làm việc của phòng khám, trừ trường hợp pháp luật yêu cầu hoặc cho phép tiếp tục lưu giữ. Bản sao lưu có thể tồn tại thêm trong chu kỳ sao lưu nhưng phải được cô lập và không dùng cho mục đích khác.</p>

        <h2 id="quyen">6. Quyền của bạn và cách thực hiện</h2>
        <p>Theo pháp luật Việt Nam, trong phạm vi áp dụng và có ngoại lệ theo luật, bạn có quyền:</p>
        <ul>
          <li>được biết về hoạt động xử lý dữ liệu;</li>
          <li>đồng ý, không đồng ý hoặc rút lại sự đồng ý;</li>
          <li>xem, yêu cầu cung cấp, chỉnh sửa hoặc yêu cầu chỉnh sửa dữ liệu;</li>
          <li>yêu cầu xóa, hạn chế xử lý hoặc phản đối xử lý;</li>
          <li>khiếu nại, tố cáo, khởi kiện, yêu cầu bồi thường và yêu cầu áp dụng biện pháp bảo vệ theo pháp luật.</li>
        </ul>
        <p>Để thực hiện quyền, hãy gọi <a href={phoneUrl}>{clinic.phoneDisplay}</a> hoặc gửi yêu cầu bằng văn bản đến địa chỉ phòng khám, ghi rõ họ tên, số điện thoại đã dùng, quyền muốn thực hiện và thông tin đủ để xác minh yêu cầu. Không gửi thêm bệnh án hoặc dữ liệu sức khỏe chi tiết.</p>
        <p>Phòng khám phản hồi ban đầu trong 02 ngày làm việc. Theo Nghị định 356/2025/NĐ-CP, thời hạn thực hiện thông thường là 10 ngày đối với xem/chỉnh sửa/cung cấp dữ liệu, 15 ngày đối với rút lại đồng ý/hạn chế/phản đối, và 20 ngày đối với xóa; thời hạn có thể dài hơn khi phải phối hợp bên xử lý hoặc được gia hạn hợp lý theo luật. Yêu cầu có thể bị từ chối hoặc giới hạn nếu không xác minh được danh tính, xâm phạm quyền của người khác hoặc thuộc trường hợp pháp luật không cho phép.</p>

        <h2>7. Trẻ em và người cần đại diện</h2>
        <p>Người đại diện theo pháp luật thực hiện quyền về dữ liệu thay cho trẻ em, người mất hoặc hạn chế năng lực hành vi dân sự, hoặc người có khó khăn trong nhận thức, làm chủ hành vi theo quy định. Nếu bạn chưa đủ 16 tuổi, vui lòng không tự gửi biểu mẫu; hãy nhờ cha, mẹ hoặc người đại diện liên hệ trực tiếp với phòng khám.</p>

        <h2>8. Biện pháp bảo vệ và sự cố dữ liệu</h2>
        <p>Website áp dụng biện pháp giảm thiểu dữ liệu, bảo vệ kết nối, giới hạn quyền truy cập, kiểm tra thông tin nhập vào và phòng chống gửi tự động. Hướng dẫn sử dụng an toàn được trình bày tại trang <Link to="/bao-mat">Bảo mật website</Link>.</p>
        <p>Không hệ thống nào an toàn tuyệt đối. Khi phát hiện sự cố, phòng khám sẽ cô lập, đánh giá phạm vi, phối hợp nhà cung cấp, khắc phục và thông báo cho chủ thể dữ liệu/cơ quan có thẩm quyền trong trường hợp và thời hạn pháp luật quy định.</p>

        <h2>9. Cookie, lưu trữ trình duyệt và theo dõi</h2>
        <p>Website hiện không cài công cụ quảng cáo hoặc phân tích hành vi, không lưu bản sao nội dung biểu mẫu trên thiết bị của bạn và không nhúng bản đồ theo dõi. Đơn vị hỗ trợ vận hành vẫn có thể sử dụng cơ chế thực sự cần thiết để bảo vệ và cung cấp dịch vụ. Nếu website bổ sung công cụ theo dõi không thiết yếu, chính sách này và cơ chế lựa chọn của người dùng phải được cập nhật trước khi kích hoạt.</p>

        <h2 id="lien-he">10. Liên hệ, phản ánh và khiếu nại</h2>
        <p>Yêu cầu về dữ liệu, phản ánh về quyền riêng tư hoặc thông báo sự cố có thể gửi qua:</p>
        <ul>
          <li>Điện thoại: <a href={phoneUrl}>{clinic.phoneDisplay}</a></li>
          <li>Địa chỉ: {clinic.address}</li>
          <li>Trang liên hệ: <Link to="/lien-he">Liên hệ phòng khám</Link></li>
        </ul>
        <p>Nếu không hài lòng với kết quả xử lý, bạn có quyền khiếu nại, tố cáo hoặc yêu cầu cơ quan có thẩm quyền, tòa án bảo vệ quyền theo quy định pháp luật.</p>

        <h2>11. Thay đổi chính sách</h2>
        <p>Chính sách có thể được cập nhật khi hoạt động xử lý, nhà cung cấp hoặc pháp luật thay đổi. Phiên bản mới sẽ ghi ngày cập nhật và được công bố tại URL này. Nếu thay đổi làm phát sinh mục đích hoặc loại dữ liệu mới cần sự đồng ý, phòng khám sẽ thông báo và xin lại sự đồng ý trước khi áp dụng.</p>

        <h2>12. Căn cứ pháp lý chính</h2>
        <ul className="legal-sources">
          <li><a href="https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=" target="_blank" rel="noopener noreferrer">Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15<span className="sr-only"> (mở tab mới)</span></a> — hiệu lực từ 01/01/2026.</li>
          <li><a href="https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160" target="_blank" rel="noopener noreferrer">Nghị định 356/2025/NĐ-CP<span className="sr-only"> (mở tab mới)</span></a> — quy định chi tiết Luật Bảo vệ dữ liệu cá nhân và thay thế Nghị định 13/2023/NĐ-CP từ 01/01/2026.</li>
          <li><a href="https://vanban.chinhphu.vn/?docid=217083&pageid=27160" target="_blank" rel="noopener noreferrer">Văn bản hợp nhất 26/VBHN-VPQH về Luật Khám bệnh, chữa bệnh<span className="sr-only"> (mở tab mới)</span></a>.</li>
          <li><a href="https://vanban.chinhphu.vn/?docid=213607&pageid=27160" target="_blank" rel="noopener noreferrer">Nghị định 102/2025/NĐ-CP về quản lý dữ liệu y tế<span className="sr-only"> (mở tab mới)</span></a>.</li>
          <li><a href="https://vanban.chinhphu.vn/?docid=217232&pageid=27160" target="_blank" rel="noopener noreferrer">Văn bản hợp nhất 47/VBHN-VPQH về Luật Bảo vệ quyền lợi người tiêu dùng<span className="sr-only"> (mở tab mới)</span></a>.</li>
        </ul>
      </article>
    </section>
  </>;
}

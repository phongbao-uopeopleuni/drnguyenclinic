import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';
import { clinic, phoneUrl } from '../data/clinic';

export default function Privacy() {
  return <>
    <SEO title="Chính sách bảo vệ dữ liệu cá nhân" description={`Chính sách bảo vệ dữ liệu cá nhân khi sử dụng website và biểu mẫu đặt lịch của ${clinic.policyName}.`} noindex />
    <PageHeading label="Dành cho khách hàng" title="Chính sách bảo vệ dữ liệu cá nhân" description="Thông tin minh bạch về dữ liệu được thu thập, mục đích xử lý, thời gian lưu giữ và cách khách hàng thực hiện quyền của mình." />
    <section className="section container">
      <article className="narrow prose legal-document">
        <div className="legal-meta" aria-label="Ngày cập nhật chính sách"><span>Cập nhật: <time dateTime="2026-11-03">03/11/2026</time></span></div>
        <p className="notice"><strong>Thông tin quan trọng:</strong> biểu mẫu trên website chỉ dùng để phòng khám liên hệ và sắp xếp lịch hẹn. Biểu mẫu không phải hồ sơ bệnh án, không dùng để chẩn đoán hoặc điều trị trực tuyến. Vui lòng không nhập bệnh án, kết quả xét nghiệm, hình ảnh y khoa hoặc thông tin sức khỏe chi tiết.</p>

        <nav className="legal-toc" aria-label="Mục lục chính sách bảo vệ dữ liệu cá nhân">
          <strong>Nội dung chính</strong>
          <ol>
            <li><a href="#pham-vi">Phạm vi và chủ thể chịu trách nhiệm</a></li>
            <li><a href="#du-lieu">Dữ liệu được xử lý</a></li>
            <li><a href="#thu-thap">Nguồn và cách thức thu thập</a></li>
            <li><a href="#muc-dich">Mục đích và căn cứ xử lý</a></li>
            <li><a href="#chia-se">Bên được tiếp cận dữ liệu</a></li>
            <li><a href="#luu-tru">Thời gian lưu giữ</a></li>
            <li><a href="#quyen">Quyền và nghĩa vụ của khách hàng</a></li>
            <li><a href="#lien-he">Liên hệ và khiếu nại</a></li>
          </ol>
        </nav>

        <h2 id="pham-vi">1. Phạm vi và chủ thể chịu trách nhiệm</h2>
        <p>Chính sách này áp dụng khi khách hàng truy cập website, gửi biểu mẫu đặt lịch hoặc liên hệ thông qua các thông tin được công bố trên website của <strong>{clinic.policyName}</strong> (“Phòng khám”). Trong phạm vi đó, Phòng khám quyết định mục đích và cách thức xử lý dữ liệu do khách hàng cung cấp.</p>
        <div className="legal-contact-card">
          <p><strong>Đơn vị tiếp nhận:</strong> {clinic.policyName}</p>
          <p><strong>Địa chỉ liên hệ:</strong> {clinic.address}</p>
          <p><strong>Điện thoại:</strong> <a href={phoneUrl}>{clinic.phoneDisplay}</a></p>
          <p><strong>Kênh yêu cầu:</strong> <Link to="/lien-he">Trang Liên hệ</Link></p>
        </div>
        <p>Chính sách này không thay thế quy định áp dụng cho hồ sơ bệnh án phát sinh trong quá trình khám, chữa bệnh. Hồ sơ bệnh án được quản lý theo pháp luật chuyên ngành và quy trình chuyên môn của cơ sở khám bệnh, chữa bệnh.</p>

        <h2 id="du-lieu">2. Dữ liệu được xử lý</h2>
        <h3>2.1. Dữ liệu khách hàng chủ động cung cấp</h3>
        <ul>
          <li><strong>Thông tin liên hệ:</strong> họ và tên, số điện thoại.</li>
          <li><strong>Thông tin đặt lịch:</strong> ngày hẹn mong muốn và nhóm nhu cầu tổng quát như khám phụ khoa, thai kỳ, sức khỏe sinh sản, hiếm muộn hoặc nhu cầu khác.</li>
          <li><strong>Thông tin không bắt buộc:</strong> phường/xã và ghi chú ngắn do khách hàng tự nguyện cung cấp.</li>
          <li><strong>Thông tin về yêu cầu:</strong> thời điểm gửi, nội dung trao đổi cần thiết và trạng thái xử lý yêu cầu.</li>
        </ul>
        <h3>2.2. Dữ liệu có tính chất nhạy cảm</h3>
        <p>Nhóm nhu cầu như “Thai kỳ” hoặc “Hiếm muộn” có thể gián tiếp phản ánh tình trạng sức khỏe. Phòng khám giới hạn việc xử lý thông tin này ở mức cần thiết để phân loại yêu cầu và liên hệ sắp xếp lịch. Phòng khám không yêu cầu khách hàng gửi chẩn đoán, bệnh án, kết quả xét nghiệm, đơn thuốc, ảnh y khoa, số định danh hoặc dữ liệu tài chính qua biểu mẫu công khai.</p>
        <h3>2.3. Dữ liệu kỹ thuật</h3>
        <p>Khi khách hàng truy cập website, một số dữ liệu kỹ thuật tối thiểu có thể được xử lý tự động để truyền tải nội dung, bảo đảm an toàn và ngăn chặn lạm dụng, chẳng hạn địa chỉ mạng, loại trình duyệt hoặc thiết bị, thời điểm truy cập và nhật ký lỗi. Dữ liệu này không được dùng để lập hồ sơ quảng cáo cá nhân.</p>

        <h2 id="thu-thap">3. Nguồn và cách thức thu thập</h2>
        <p>Dữ liệu được thu thập trực tiếp khi khách hàng nhập và gửi biểu mẫu, gọi điện hoặc chủ động liên hệ với Phòng khám; và được tạo tự động ở mức cần thiết trong quá trình website vận hành. Website không yêu cầu quyền truy cập camera, micro, danh bạ hoặc vị trí chính xác của thiết bị.</p>
        <p>Nếu khách hàng cung cấp dữ liệu của người khác, khách hàng phải có thẩm quyền hoặc căn cứ hợp pháp để thực hiện việc đó và phải thông báo cho người có dữ liệu về Chính sách này.</p>

        <h2 id="muc-dich">4. Mục đích, hoạt động và căn cứ xử lý</h2>
        <p>Phòng khám chỉ xử lý dữ liệu trong phạm vi cần thiết để:</p>
        <ul>
          <li>tiếp nhận yêu cầu, xác minh thông tin liên hệ và trao đổi nhu cầu ở mức tổng quát;</li>
          <li>đề xuất, thay đổi hoặc xác nhận ngày giờ hẹn;</li>
          <li>trả lời câu hỏi, tiếp nhận phản ánh, thực hiện quyền về dữ liệu và giải quyết khiếu nại;</li>
          <li>bảo vệ website, phát hiện thư rác, gian lận, hành vi xâm nhập hoặc lạm dụng;</li>
          <li>tuân thủ nghĩa vụ pháp lý và yêu cầu hợp pháp của cơ quan có thẩm quyền.</li>
        </ul>
        <p>Các hoạt động có thể bao gồm thu thập, ghi nhận, sắp xếp, lưu giữ, truy cập, sử dụng, đối chiếu, chỉnh sửa, cung cấp có kiểm soát, hạn chế, xóa hoặc hủy dữ liệu. Phòng khám áp dụng nguyên tắc đúng mục đích, tối thiểu, chính xác, giới hạn thời gian và có trách nhiệm giải trình.</p>
        <p>Căn cứ xử lý chủ yếu là sự đồng ý rõ ràng của khách hàng khi gửi biểu mẫu; việc thực hiện yêu cầu do chính khách hàng khởi tạo; nghĩa vụ pháp lý; và các trường hợp khác mà pháp luật cho phép. Dữ liệu không được dùng để chẩn đoán, điều trị trực tuyến hoặc tiếp thị nếu chưa có căn cứ và sự đồng ý riêng phù hợp.</p>

        <h2 id="chia-se">5. Bên được tiếp cận dữ liệu</h2>
        <p>Phòng khám <strong>không bán, cho thuê hoặc trao đổi dữ liệu cá nhân</strong>. Dữ liệu chỉ được tiếp cận theo nguyên tắc cần biết bởi:</p>
        <div className="legal-data-list">
          <div><strong>Người được Phòng khám phân công</strong><span>Tiếp nhận, liên hệ và xử lý yêu cầu trong phạm vi nhiệm vụ.</span></div>
          <div><strong>Đơn vị hỗ trợ vận hành</strong><span>Hỗ trợ truyền tải website, tiếp nhận biểu mẫu, liên lạc, lưu trữ hoặc bảo vệ dịch vụ theo chỉ dẫn và trong phạm vi cần thiết.</span></div>
          <div><strong>Cơ quan có thẩm quyền</strong><span>Nhận dữ liệu khi có yêu cầu hợp pháp hoặc khi việc cung cấp được pháp luật quy định.</span></div>
        </div>
        <p>Phòng khám yêu cầu bên hỗ trợ bảo mật dữ liệu, chỉ xử lý theo mục đích được giao và xóa hoặc hoàn trả dữ liệu khi kết thúc công việc. Nếu việc vận hành dẫn đến chuyển dữ liệu ra ngoài lãnh thổ Việt Nam, Phòng khám thực hiện các nghĩa vụ đánh giá, hồ sơ và biện pháp bảo vệ theo pháp luật hiện hành.</p>

        <h2 id="luu-tru">6. Thời gian lưu giữ và xóa dữ liệu</h2>
        <p>Dữ liệu đặt lịch được lưu cho đến khi yêu cầu được giải quyết và trong khoảng thời gian hợp lý cần thiết để xác minh việc liên hệ, xử lý phản ánh hoặc thực hiện nghĩa vụ pháp lý. Nhật ký kỹ thuật được lưu trong thời gian phù hợp với mục đích bảo mật. Khi hết mục đích hoặc hết thời hạn phải lưu theo pháp luật, dữ liệu được xóa, hủy hoặc ẩn danh bằng biện pháp phù hợp.</p>
        <p>Việc rút lại sự đồng ý không ảnh hưởng đến tính hợp pháp của hoạt động đã thực hiện trước thời điểm rút lại. Phòng khám có thể tiếp tục lưu một phần dữ liệu nếu pháp luật yêu cầu hoặc cần thiết để bảo vệ quyền và lợi ích hợp pháp trong tranh chấp.</p>

        <h2 id="quyen">7. Quyền và nghĩa vụ của khách hàng</h2>
        <p>Trong phạm vi pháp luật áp dụng, khách hàng có quyền được biết, đồng ý hoặc không đồng ý, truy cập, xem, chỉnh sửa, yêu cầu cung cấp, rút lại sự đồng ý, yêu cầu xóa hoặc hạn chế xử lý, phản đối xử lý, khiếu nại, tố cáo, khởi kiện và yêu cầu bồi thường khi quyền dữ liệu bị xâm phạm.</p>
        <p>Để thực hiện quyền, khách hàng có thể gọi <a href={phoneUrl}>{clinic.phoneDisplay}</a> hoặc gửi yêu cầu qua <Link to="/lien-he">trang Liên hệ</Link>. Yêu cầu nên nêu họ tên, số điện thoại đã sử dụng, quyền cần thực hiện và thông tin đủ để xác định yêu cầu. Phòng khám có thể xác minh danh tính ở mức cần thiết nhưng không yêu cầu thêm hồ sơ sức khỏe.</p>
        <p>Phòng khám phản hồi trong thời hạn pháp luật quy định. Trong trường hợp không thể thực hiện toàn bộ yêu cầu do nghĩa vụ lưu trữ, quyền của người khác, an toàn hệ thống hoặc căn cứ pháp luật khác, Phòng khám sẽ giải thích lý do trong phạm vi được phép.</p>
        <p>Khách hàng có nghĩa vụ cung cấp thông tin chính xác, tôn trọng dữ liệu của người khác, không lợi dụng quyền dữ liệu để gây cản trở trái pháp luật và thông báo khi phát hiện thông tin bị sử dụng sai mục đích.</p>

        <h2>8. Dữ liệu của trẻ em và người cần đại diện</h2>
        <p>Người đại diện chỉ cung cấp dữ liệu của trẻ em hoặc người cần đại diện khi có thẩm quyền hợp pháp và việc cung cấp là vì lợi ích của người đó. Sự đồng ý của trẻ em và người đại diện được thực hiện theo độ tuổi, năng lực và điều kiện do pháp luật quy định. Phòng khám có quyền tạm dừng xử lý để xác minh tư cách đại diện.</p>

        <h2>9. Bảo vệ dữ liệu và xử lý sự cố</h2>
        <p>Phòng khám áp dụng các biện pháp quản lý và kỹ thuật phù hợp với mức độ rủi ro, gồm giảm thiểu dữ liệu, phân quyền truy cập, bảo vệ kết nối, kiểm soát biểu mẫu, lưu vết cần thiết, rà soát quyền truy cập và quy trình ứng phó sự cố. Không phương thức truyền hoặc lưu trữ nào an toàn tuyệt đối; vì vậy khách hàng không nên gửi thông tin vượt quá phạm vi biểu mẫu yêu cầu.</p>
        <p>Khi xảy ra sự cố có khả năng ảnh hưởng đến dữ liệu cá nhân, Phòng khám sẽ đánh giá, hạn chế tác động, khắc phục và thực hiện nghĩa vụ thông báo cho cơ quan có thẩm quyền hoặc người bị ảnh hưởng theo pháp luật.</p>

        <h2>10. Thay đổi Chính sách</h2>
        <p>Chính sách có thể được cập nhật khi phạm vi dịch vụ, cách thức xử lý dữ liệu hoặc pháp luật thay đổi. Bản đang có hiệu lực được công bố trên trang này kèm ngày cập nhật. Với thay đổi quan trọng, Phòng khám sẽ thông báo bằng cách phù hợp và xin lại sự đồng ý khi pháp luật yêu cầu.</p>

        <h2 id="lien-he">11. Liên hệ và khiếu nại</h2>
        <p>Mọi câu hỏi hoặc yêu cầu liên quan đến dữ liệu cá nhân được tiếp nhận qua số <a href={phoneUrl}>{clinic.phoneDisplay}</a>, tại {clinic.address}, hoặc qua <Link to="/lien-he">trang Liên hệ</Link>. Khách hàng cũng có quyền gửi khiếu nại đến cơ quan nhà nước có thẩm quyền theo quy định.</p>

        <h2>12. Căn cứ pháp lý chính</h2>
        <ul>
          <li>Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15, có hiệu lực từ ngày 01/01/2026.</li>
          <li>Nghị định số 356/2025/NĐ-CP quy định chi tiết một số điều và biện pháp thi hành Luật Bảo vệ dữ liệu cá nhân.</li>
          <li>Luật Khám bệnh, chữa bệnh số 15/2023/QH15.</li>
          <li>Luật Bảo vệ quyền lợi người tiêu dùng số 19/2023/QH15 và các văn bản hướng dẫn có liên quan.</li>
        </ul>
        <p>Xem thêm <Link to="/chinh-sach-bao-mat-thong-tin">Chính sách bảo mật thông tin</Link> và <Link to="/quy-dinh-su-dung-website">Quy định sử dụng website</Link>.</p>
      </article>
    </section>
  </>;
}

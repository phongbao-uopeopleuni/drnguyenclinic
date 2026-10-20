# Nội dung cần bổ sung và SEO

## Cần chủ phòng khám xác nhận

- Vị trí ghim chính xác hoặc Google Place ID nếu muốn dẫn đường theo ghim thay vì địa chỉ.
- Giờ làm việc và quy trình xác nhận lịch.
- Link trang Facebook: điền `clinic.facebook` trong src/data/clinic.ts, nút Facebook (cụm nút nổi, thanh mobile, trang Liên hệ) tự hiện. Zalo đã xác nhận dùng số 0774 534 766.
- Tiểu sử bác sĩ, quá trình công tác, bằng cấp và chuyên môn được xác nhận.
- Phạm vi hoạt động được cấp phép và dịch vụ thực sự cung cấp; giá nếu muốn công bố.
- Giấy phép và thông tin đơn vị chịu trách nhiệm khi cần hiển thị.
- Ảnh thật được phép sử dụng.
- Bài viết hoàn chỉnh và người duyệt chuyên môn.
- Tên miền chính thức.
- Đơn vị tiếp nhận dữ liệu, thời hạn lưu trữ, đầu mối liên hệ, chính sách riêng tư/điều khoản đã duyệt.
- Backend tiếp nhận lịch, kiểm tra dữ liệu phía server, chống spam, giới hạn tần suất, bảo vệ dữ liệu và trạng thái gửi/thành công/thất bại thật.

## Đã triển khai

- lang=vi, title và description theo trang, đúng một H1 mỗi trang được kiểm tra.
- Nội dung tự nhiên chứa “phòng khám sản gần tôi”, “phòng khám chuyên khoa sinh sản” trong FAQ; thêm ngữ cảnh khám phụ khoa, chăm sóc thai kỳ, sức khỏe sinh sản, tư vấn hiếm muộn.
- Internal links đến trang có thật; trang chi tiết theo slug; giao diện 404 có noindex.
- Alt ảnh, kích thước ảnh, hero fetchPriority=high, ảnh dưới màn hình đầu tải lazy.
- Open Graph title/description/type/locale; canonical và og:url chỉ tạo khi clinic.website có giá trị thật.
- Không có schema chứa địa chỉ, tọa độ, bằng cấp hoặc dịch vụ giả.
- Không nhồi meta keywords hoặc tạo trang hàng loạt theo địa phương chưa được xác nhận.

## Trước khi công khai

1. Hoàn thiện dữ liệu thực tế và duyệt nội dung. Chỉ đặt service.confirmed=true cho dịch vụ được xác nhận.
2. Đặt clinic.website thành origin HTTPS thật. Cấu hình base tương ứng nếu có thư mục con.
3. Chỉnh FAQ cho kênh liên hệ và lịch hoạt động thật. Thay các trang điều khoản/quyền riêng tư bản nháp.
4. Sau khi kiểm tra hoàn tất mới đổi clinic.draft=false **và** sửa robots trong index.html sang index, follow. Bài nháp vẫn không được công bố; cần triển khai cơ chế bài đã duyệt trước khi mở nội dung chính thức.
5. Tạo sitemap.xml bằng tên miền thật và URL nội dung đã duyệt; robots.txt trỏ đến sitemap thật.
6. Sau khi có địa chỉ/phạm vi đã xác minh, thêm MedicalClinic/Physician JSON-LD phù hợp dữ liệu thực, không tự điền tọa độ hoặc giờ mở cửa.
7. Kiểm tra hosting: route trực tiếp, canonical, HTTP 404 cho đường dẫn không tồn tại; không để mọi URL rác trả 200.
8. App hiện render phía client. Với SEO công khai, nên bổ sung prerender/SSR cho các trang nội dung và metadata để crawler không chạy JavaScript vẫn đọc đầy đủ; chưa thực hiện trong bản thiết kế này.
9. Xác minh Google Business Profile và Search Console bằng tài khoản của chủ phòng khám khi được yêu cầu. Thông tin tên/địa chỉ/điện thoại cần nhất quán.

Đã bổ sung ngữ cảnh địa phương Huế bằng địa chỉ do chủ phòng khám cung cấp. Không có bảo đảm thứ hạng.

Nguồn đối chiếu:
- Google, tiêu đề tìm kiếm: https://developers.google.com/search/docs/appearance/title-link
- Google, structured data doanh nghiệp địa phương: https://developers.google.com/search/docs/appearance/structured-data/local-business


## Thông tin chủ phòng khám đã cung cấp

- PHÒNG KHÁM HIẾM MUỘN - SẢN PHỤ KHOA
- TS. BS Nguyễn Đắc Nguyên
- 184 Phạm Văn Đồng, phường Mỹ Thượng, TP Huế
- Số điện thoại: 0774534766; liên kết gọi dùng tel:+84774534766.
- Chỉ đường Google Maps dùng địa chỉ trên làm destination, không gán tọa độ hoặc Place ID chưa xác minh. Người dùng có thể chọn điểm xuất phát trên Google Maps.
- Tài liệu Maps URLs: https://developers.google.com/maps/documentation/urls/get-started

# Giả lập tấn công ECC — 20/10/2026

Áp dụng kỹ năng ECC `security-review` và `security-bounty-hunter`.
Chỉ thử website và server local của `D:\dnclinic`, cổng 3000 và 4173.
Không gửi payload tới hosting thật, Google, Zalo hoặc dịch vụ của người khác.
Các thử nghiệm dùng dữ liệu mẫu, tốc độ thấp, không thử DoS.

## Bug xác nhận và đã sửa

**SEC-01 — URL mã hóa sai gây HTTP 500 (mức thấp, dev/preview).**

- Gửi request target nguyên dạng `/%` hoặc `/%E0%A4%A` tới server dev
  hoặc preview: cả bốn trường hợp trả 500. Middleware fallback Vite ném
  `URIError`; terminal in stack trace. Chưa chứng minh stack được lộ cho
  client, chưa chứng minh crash tiến trình hay ảnh hưởng hosting tĩnh thật.
- PowerShell/trình duyệt có thể tự mã hóa lại `%`; để tái hiện đúng phải dùng
  HTTP raw path như `tests/attack-simulation.mjs`.
- Sửa bằng middleware `config/request-guard.mjs` dùng cho cả dev và preview:
  từ chối URI không hợp lệ/ký tự điều khiển, trả 400 với body `Bad Request`,
  không cache và không kèm stack.
- Bằng chứng trước: `attack-http-before.json`; sau: `attack-http.json`.
  Bản kiểm tra sau còn yêu cầu chính xác mã 400 và body cố định.
- Middleware này không được đưa vào static bundle: hosting thật cần tự xử lý
  request target sai. Không gọi đây là lỗ hổng RCE, XSS hoặc DoS production.

## Các phép thử còn lại

40 trường hợp HTTP gồm:

- Đọc `.env.example`, Git metadata, docs qua URL thường, `?raw`, `?url`,
  `@fs`, đường dẫn `..` và mã hóa phần đường dẫn.
- Host giả `attacker.invalid`: 403; Origin giả không nhận quyền CORS.
- URL lỗi và null byte.
- Header CSP, chống iframe và nosniff trên trang chủ, liên hệ và route chi tiết.

Các request file nhạy cảm bị từ chối hoặc nhận HTML fallback, không nhận nội
dung file. Bộ thử chỉ lưu trạng thái và boolean, không lưu response chứa bí mật.
Không đọc file dự án khác. Không phát hiện vượt đường dẫn trong các payload đã thử.

Thử trực tiếp trên Chrome thông qua công cụ ECC:

1. Query và fragment trang liên hệ chứa `<img src=x onerror=window.__attack=1>`
   / `<script>window.__attack=1</script>`: trang render, marker không chạy,
   không tạo ảnh chèn.
2. Đặt payload img vào ô họ tên, dùng số/ngày mẫu và submit hợp lệ: marker
   không chạy, không tạo DOM chèn, URL không đổi, hiển thị thông báo chỉ xem trước.
   Việc input chấp nhận ký tự `<` tự nó không phải lỗ hổng XSS.
3. Slug dịch vụ chứa `<svg onload=window.__attack=1>` và query
   `redirect=https://attacker.invalid`: hiện trang Không tìm thấy, marker không
   chạy, origin vẫn là local. Không tìm thấy open redirect qua tham số này.
4. Tất cả liên kết mở tab mới trên trang liên hệ có `noopener noreferrer`.
5. Kiểm tra riêng lớp CSP: tạo script nội tuyến/onclick và fetch qua DevTools:
   cả ba bị chặn. Đây là kiểm tra chính sách phòng vệ, **không phải bằng chứng**
   tồn tại đường chèn mã từ người dùng hoặc lỗ hổng self-XSS.
6. Đã thử iframe từ trang trắng nhưng công cụ không cung cấp bằng chứng browser
   rõ ràng; không tính là clickjacking test đạt. HTTP X-Frame-Options/CSP được
   kiểm tra riêng trong bộ HTTP.

Kaspersky trên máy sửa CSP trong browser và gây cảnh báo cú pháp. Vì thế
kiểm thử browser cần lặp lại trên môi trường sạch và hosting thật; không sửa
chính sách website để cho phép các domain Kaspersky.

## Chạy lại

Trong hai terminal tại dự án, chạy `npm run dev` và
`npm run preview -- --port 4173`; sau đó chạy:

```text
npm run lint
npm run build
npm run test:security
node tests/attack-simulation.mjs
```

Tắt cả hai server sau kiểm thử. Bộ HTTP giới hạn đích cứng về loopback và
chỉ gửi tổng cộng 40 request. Bốn bài kiểm tra hồi quy bảo mật đều đạt.

Không có API/backend/database/upload/login nên không giả vờ kiểm tra SQLi,
SSRF hay vượt đăng nhập. Chưa thấy lỗ hổng chèn mã có thể khai thác qua những
đầu vào hiện có được thử; điều này không bảo đảm website tuyệt đối an toàn.

## Thay đổi và tác dụng phụ

- Thêm middleware, bộ thử HTTP và báo cáo; bổ sung bài hồi quy trong
  `tests/security.test.mjs`; sửa cấu hình Vite.
- Build ghi đè nội dung `dist`; Vite có cập nhật cache/tệp tạm trong
  `node_modules`. Không cài thêm package; không sửa lockfile ở đợt này.
- Lưu hai báo cáo HTTP JSON; mở hai tab kiểm thử và đóng chúng sau khi thử.
- Các file ghi có mtime mới. Hai server kiểm thử được dừng và kiểm tra
  netstat cuối phiên; không triển khai lên hosting.

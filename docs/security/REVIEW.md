# Rà soát bảo mật — 20/10/2026

Phạm vi: mã nguồn website tĩnh React/Vite trong `D:\dnclinic`, thư viện npm,
bản build và hai server kiểm thử local. Không kiểm thử hạ tầng hosting, DNS,
tài khoản GitHub hoặc website production. Các sửa đổi UI có sẵn được giữ nguyên.

## Kết quả và thay đổi

- `npm audit` trước: 15 cảnh báo (1 critical, 9 high, 3 moderate, 2 low).
  Sau cập nhật: 0 cảnh báo theo cơ sở dữ liệu npm tại thời điểm kiểm tra.
  Xem `audit-before.json` và `audit-after.json`.
  Đây là cảnh báo theo dependency, không có nghĩa tất cả đều khai thác được
  trên website tĩnh. Nhiều cảnh báo thuộc công cụ dev hoặc thư viện máy chủ.
- Loại bỏ các gói không dùng: Google GenAI SDK, Express, dotenv, motion,
  typings Express, autoprefixer và tsx. Cập nhật dependency qua lockfile,
  không dùng nâng cấp bắt buộc `--force`.
- Không tìm thấy sink HTML động (`dangerouslySetInnerHTML`, `innerHTML`,
  `document.write`, `eval`) trong ứng dụng. Nội dung được React render dưới dạng
  text. Không có API nhận biểu mẫu, upload, đăng nhập hoặc database.
- Quét mẫu private key, AWS access key, GitHub/OpenAI token trên file mã nguồn/
  tài liệu được Git theo dõi: 0 kết quả. Đây không phải chứng minh không có
  mọi loại bí mật; không quét toàn bộ lịch sử Git hoặc nội dung `.env` riêng.
- CSP bản build chỉ cho phép JavaScript cùng origin, cấm script nội tuyến,
  event handler nội tuyến, eval, nhúng object, base URL thay thế, gửi form
  và kết nối fetch/XHR/WebSocket. Chỉ cho CSS/font từ Google Fonts và tài nguyên
  ảnh cùng origin. Điện thoại, Google Maps và Zalo vẫn là liên kết điều hướng.
- Bổ sung HTTP headers chống nhúng iframe, MIME sniffing, rò referrer và truy
  cập camera/microphone/geolocation/payment/USB.
- Server dev mặc định chỉ bind `127.0.0.1`, tắt CORS, từ chối truy cập `.env`,
  Git metadata, private keys, cache npm và docs. Không dùng dev server làm hosting.
- Sửa lỗi giải mã URL fragment sai (ví dụ `/#%`) có thể gây lỗi trang.

## Bằng chứng kiểm thử

- TypeScript: `npm run lint` đạt.
- Production: `npm run build` đạt.
- `npm run test:security`: 3/3 đạt, kiểm tra fragment sai, chính sách CSP,
  tính đồng nhất header với artifact và không xuất source map/private key/
  `.env`/Git metadata/active SVG trong `dist`.
- HTTP preview trả CSP, X-Frame-Options DENY, nosniff, no-referrer và
  Permissions-Policy đúng cấu hình.
- Trình duyệt tại `http://127.0.0.1:4173/#%`: trang render, tiêu đề đúng;
  3 ảnh đều tải sau khi kích hoạt ảnh lazy; font Be Vietnam Pro tải.
- Thử chèn script nội tuyến và onclick: cả hai không thực thi.
  Thử fetch cùng origin: bị CSP chặn theo thiết kế.
- Kaspersky trên máy sửa CSP trong trình duyệt và tạo cảnh báo cú pháp.
  Header HTTP đọc trực tiếp vẫn đúng cấu hình. Kết quả trình duyệt là bằng
  chứng trên môi trường local này; cần kiểm tra lại trên browser sạch khi deploy.
- Dev server: `/.env.example`, `/.git/HEAD`,
  `/docs/security/audit-before.json` đều trả **403**.

## Cấu hình triển khai cần áp dụng

1. Dùng `npm ci` để cài đúng lockfile, rồi `npm run lint`, `npm run build`,
   `npm run test:security`. Chỉ publish thư mục **dist**, tuyệt đối không publish
   toàn bộ repository, `.npm-cache`, `node_modules` hoặc `dist-subpath` cũ.
2. Build tự tạo `dist/_headers` cho static hosting có hỗ trợ định dạng này
   (Netlify/Cloudflare Pages static assets). Nếu dùng Nginx, Apache, Vercel
   hoặc hosting khác, cấu hình HTTP headers tương đương từ
   `config/security.mjs` theo tài liệu của hosting.
   File `_headers` không tự có hiệu lực trên mọi nền tảng hoặc response từ
   Functions/Workers; phải kiểm tra response thực tế của trang và các route.
3. CSP meta trong HTML là lớp dự phòng; **không thay thế** HTTP headers,
   nhất là `frame-ancestors`. Cấu hình SPA fallback tới `index.html` riêng
   theo nền tảng, đồng thời áp dụng headers trên tất cả route.
4. Bật HTTPS và redirect HTTP sang HTTPS. HSTS của hosting có thời hạn một năm,
   không bật includeSubDomains/preload. Chỉ áp dụng sau khi HTTPS hoạt động ổn định.
5. Bật MFA cho GitHub/hosting, giới hạn quyền deploy, bảo vệ nhánh và giữ bản
   rollback. CSP không ngăn được kẻ đã chiếm tài khoản deploy và sửa cả chính sách
   lẫn mã nguồn. Đây là việc cấu hình tài khoản, chưa thực hiện trong đợt này.
6. Kiểm tra lại header, ảnh, font, điều hướng và CSP trên tên miền thật. Duy trì
   `npm audit` định kỳ và sau khi thêm thư viện. Nếu thêm API, analytics, bản đồ
   nhúng hoặc form thật, mở đúng domain/directive cần thiết và bổ sung validation,
   rate limit cùng bảo vệ dữ liệu ở backend; không bật `unsafe-inline`/`unsafe-eval`.

## Tác dụng phụ của đợt rà soát

- Sửa `package.json`, `package-lock.json`, `vite.config.ts`, `src/App.tsx`.
  Thêm `config/security.mjs`, `src/utils/fragment.mjs`,
  `tests/security.test.mjs` và tài liệu/bằng chứng trong `docs/security/`.
- Cài/gỡ/cập nhật các gói trong `node_modules`; cache `.npm-cache` và cache
  tối ưu dependency của Vite trong `node_modules` được cập nhật.
- Build **xoá/tạo lại nội dung dist**, ghi đè bản build trước; không build
  hoặc ghi đè `dist-subpath`.
- Đã chạy hai tiến trình kiểm thử dev/preview tại cổng 3000/4173 và gửi lệnh
  dừng sau kiểm thử; kiểm tra netstat cuối phiên được báo riêng.
- Thay đổi nội dung đồng thời đổi mtime các file liên quan; không hoàn tác mtime.
- Không cấu hình hoặc triển khai lên hosting trong đợt này.

## Tham khảo

- [Vite: server options, giới hạn file và host](https://vite.dev/config/server-options)
- [MDN: Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP)
- [MDN: frame-ancestors cần HTTP header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors)
- [Netlify: custom headers](https://docs.netlify.com/manage/routing/headers/)

Không có cấu hình nào bảo đảm tuyệt đối website không bị chèn mã độc.
Kết quả này giảm bề mặt tấn công và bổ sung các lớp phòng vệ có thể kiểm chứng.

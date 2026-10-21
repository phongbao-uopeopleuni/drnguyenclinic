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

## Rà soát ECC — 21/10/2026

Công cụ: skill `ecc:security-review` (checklist), agent `ecc:security-reviewer` (bảo mật) và `ecc:react-reviewer` (bug React), cùng kiểm tra trực tiếp production https://drnguyenclinic.vercel.app.

Bảo mật: không có lỗi Critical/High/Medium.
- Header trên production (trang, ảnh, svg, 404): đủ CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy; HSTS do Vercel gửi (`max-age=63072000; includeSubDomains; preload`), không thêm vào vercel.json để tránh ghi đè bằng giá trị yếu hơn.
- `.env`, `.git`, `package.json`, `vercel.json`, `src/`, `config/`, `tests/`, `docs/` và source map đều 404. `/_headers` công khai nhưng chỉ chứa đúng các header đã gửi.
- HTTP chuyển 308 sang HTTPS; không có mixed content. URL lỗi định dạng (`/%`, `/%E0%A4%A`) trả 400; payload trong đường dẫn không bị phản chiếu.
- `npm audit` (prod và toàn bộ, 157 package): 0 lỗ hổng. Lịch sử git: không có key/token; file môi trường duy nhất từng commit là `.env.example`.
- Không có sink XSS (`dangerouslySetInnerHTML`, `innerHTML`, `eval`…); link ngoài đều `rel="noopener noreferrer"`; không có open redirect.
- Đã dọn `.env.example` (còn biến Gemini/AI Studio không dùng nữa).

Bug đã sửa (tái hiện trước, kiểm lại sau khi sửa):
- Bấm link tới chính trang đang mở khi menu mobile đang mở: menu không đóng và trang bị khóa cuộn. Header đóng menu theo `location.key`.
- Bấm logo ở trang chủ khi đã cuộn: không về đầu trang. ScrollToTop chạy theo `location.key`; Back/Forward giữ vị trí trình duyệt khôi phục; lần tải đầu vẫn cuộn tới `#anchor`; hash không tồn tại thì về đầu trang; sau khi chuyển trang focus về `main`.
- Mở menu ở tablet rồi xoay/kéo rộng ≥1024px: mất nút Gọi/Zalo nổi, không còn nút đóng menu. Menu tự đóng qua `matchMedia`, và các style của trạng thái menu mở chỉ áp dụng dưới 1024px.
- Ô số điện thoại chấp nhận chuỗi không có chữ số ("---------"): pattern mới bắt buộc 9–15 chữ số.
- Ô ngày không có giới hạn trên: thêm `max` = hôm nay + 1 năm.
- Gửi biểu mẫu lần hai thì trình đọc màn hình không đọc lại thông báo: xóa rồi đặt lại thông báo.
- `SafeImage`: khung thay thế không có tên khi thiếu `alt` (nay dùng "Ảnh"); lỗi một lần thì đổi `src` cũng không tải lại (nay ghi nhớ theo `src`).
- `package.json`: đổi tên `react-example` thành `drnguyenclinic`, bỏ `vite` khai báo trùng ở dependencies; lockfile cập nhật, không package nào đổi phiên bản, `npm ci --dry-run` đạt.
- `tests/attack-simulation.mjs`: thêm dấu hiệu `VITE_*` để vẫn phát hiện lộ `.env.example` sau khi file này đổi nội dung.

Debug bản build:
- `node tests/attack-simulation.mjs` trên dev (3000) và preview (4173): 40/40 đạt (không lộ file, URL lỗi định dạng 400, Host giả 403, không CORS, header đủ trên các route SPA).
- Lighthouse (bản build, trang chủ mobile, Liên hệ mobile và desktop): Accessibility 100. Các mục còn báo đều không phải lỗi của site: noindex có chủ ý; `robots.txt` do server preview cục bộ trả HTML (production trả 404 đúng chuẩn); `llms.txt` không áp dụng; HTTPS, lỗi console CSP và request HTTP đều do phần mềm Kaspersky trên máy thử chèn script và sửa CSP (CSP gốc từ server, bản build và production giống hệt nhau, không chỉ thị nào trộn `'none'`).
- Build đường dẫn con `/phong-kham/` (`MSYS_NO_PATHCONV=1` khi chạy trong Git Bash): trang con, ảnh `?v=`, logo, link nội bộ và `#tu-van` đều đúng, console sạch.

Ghi nhận, có chủ ý:
- Biểu mẫu tư vấn gửi tới Formspree bằng `fetch`, dùng native validation và `autocomplete` phù hợp; CSP chỉ cho phép `connect-src`/`form-action` tới `https://formspree.io`. Form có honeypot `_gotcha`, khóa gửi lặp và không lưu dữ liệu vào Web Storage. Cloudflare Turnstile và giới hạn tần suất riêng vẫn chưa có; chỉ tích hợp Turnstile sau khi có Site Key và cấu hình Secret Key trong Formspree.

# Phòng khám TS.BS. Đắc Nguyên

Website tiếng Việt, React 19 + TypeScript + Vite + React Router, SPA tĩnh không có backend. Thiết kế navy/ngà/hồng phấn (token màu ở đầu `src/index.css`), font Lora và Be Vietnam Pro.

Đang chạy bản xem trước: https://drnguyenclinic.vercel.app (noindex). Trạng thái và việc còn lại: [docs/HANDOFF.md](docs/HANDOFF.md) (mục đầu tiên).

## Chạy tại máy

- Node.js 22 trở lên.
- Cài đúng lockfile: `npm ci --cache .npm-cache`.
- Chạy: `npm run dev -- --host 127.0.0.1`.
- Kiểm tra TypeScript: `npm run lint`.
- Build: `npm run build`. Vite **xóa và tạo lại nội dung dist/**.
- Xem build: `npm run preview -- --host 127.0.0.1`.
- Test bảo mật (đọc `dist/`, chạy sau build): `npm run test:security`. Vercel chạy lệnh này sau mỗi lần build.
- Dò tấn công cục bộ (cần dev 3000 và preview 4173 đang chạy): `node tests/attack-simulation.mjs`; ghi kết quả vào `docs/security/attack-http.json`.
- Dừng server bằng Ctrl+C.

Website không cần Gemini API key. Cấu hình Vite không đưa khóa API vào bundle trình duyệt. Không đọc hoặc thay đổi các file .env thật.

## Nội dung

- `src/data/clinic.ts`: nguồn duy nhất cho tên phòng khám, tên trên logo, chuyên khoa, bác sĩ, địa chỉ, điện thoại, Zalo, giờ khám, dịch vụ, FAQ, đề cương bài viết. Trường để `null` (`hotline`, `facebook`, `website`) thì nút/thẻ tương ứng tự ẩn; điền giá trị thật là tự hiện.
- `src/components/`: `Header` (menu, header trong suốt/kính mờ, nút Hotline), `BrandLockup` (logo + dòng chuyên khoa), `QuickContact` (nút nổi Gọi/Zalo/Facebook và thanh đáy điện thoại), `ContactActions` (nút Gọi/Tư vấn/Chỉ đường trong nội dung), `SEO`, `SafeImage`, `Footer`.
- `src/data/clinicGallery.ts`: ảnh thật của phòng khám; ban đầu rỗng.
- `src/sections/Content.tsx`: các khối nội dung dùng chung.
- `src/pages/`: giữ các đường dẫn hiện có, thêm trang chi tiết dịch vụ, bài viết và điều khoản.
- `src/index.css`: thiết kế và responsive.
- [Hướng dẫn ảnh](docs/ASSETS.md), [Thông tin cần xác nhận và SEO](docs/CONTENT-SEO.md), [Kiểm tra và tác dụng phụ](docs/HANDOFF.md).

## Giới hạn bản xem trước

`clinic.draft = true`; noindex/nofollow ở HTML gốc và metadata từng trang. Bản xem trước chạy trên Vercel (https://drnguyenclinic.vercel.app), vẫn noindex.
Dịch vụ chưa xác nhận có nhãn dự kiến. Đề cương bài viết có nhãn bản nháp, chưa được bác sĩ duyệt.
Biểu mẫu chỉ kiểm tra dữ liệu; không gọi API, không lưu localStorage, không giả lập lịch thành công.
Không có backend, analytics, bản đồ nhúng, địa chỉ/điện thoại giả, đánh giá hoặc cam kết kết quả điều trị.
Google Fonts là kết nối ngoài để tải font; ảnh/logo phục vụ tại website.
Không thêm manifest/icon khác nếu chưa có tài sản thật.

## Đường dẫn con và hosting

Asset dùng `import.meta.env.BASE_URL`, Router dùng cùng basename, favicon dùng `%BASE_URL%`.
Ví dụ kiểm tra: `npm run build -- --base=/phong-kham/ --outDir=dist-subpath`. Trong Git Bash trên Windows phải thêm `MSYS_NO_PATHCONV=1` phía trước, nếu không `/phong-kham/` bị đổi thành `/Program Files/Git/phong-kham/`.
Xem bằng `npm run preview -- --base=/phong-kham/ --outDir=dist-subpath --host 127.0.0.1 --port 4173`.
Đây là SPA: hosting cần fallback các đường dẫn hợp lệ về index.html. Không trả HTML cho file ảnh bị thiếu.

Vercel: project `drnguyenclinic` nối với GitHub; mỗi lần push lên `main` tự deploy production. `vercel.json` chỉ rewrite đường dẫn không có phần mở rộng về index.html (file thiếu vẫn 404), gửi security header lấy từ `config/security.mjs` (Vercel không đọc `_headers`) và chạy `npm run test:security` sau build. Đổi header thì sửa cả hai nơi; test sẽ báo nếu lệch.
Chưa cấu hình domain/sitemap vì chưa có tên miền chính thức. Xem CONTENT-SEO.md trước khi xuất bản.


## Git repository

Repository: https://github.com/phongbao-uopeopleuni/drnguyenclinic
Nhánh chính: `main`. Push lên `main` là deploy production, nên làm trên nhánh riêng, chạy `npm run lint`, `npm run build` và `npm run test:security`, rồi merge `--no-ff` vào `main` và push. Kiểm tra lại trên https://drnguyenclinic.vercel.app sau khi Vercel báo Ready.
Các thư mục build, dependencies, cache và file .env thật được loại khỏi Git.
`.gitkeep` giữ các thư mục ảnh trống để người khác clone dự án vẫn có cấu trúc cần thiết.

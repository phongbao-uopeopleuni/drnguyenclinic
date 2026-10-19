# Phòng khám TS.BS. Đắc Nguyên

Website tiếng Việt, React 19 + TypeScript + Vite + React Router, giữ nguyên package.json và package-lock.json. Thiết kế navy/trắng ngọc trai/hồng, Lora và Be Vietnam Pro.

## Chạy tại máy

- Node.js 22 trở lên.
- Cài đúng lockfile: `npm ci --cache .npm-cache`.
- Chạy: `npm run dev -- --host 127.0.0.1`.
- Kiểm tra TypeScript: `npm run lint`.
- Build: `npm run build`. Vite **xóa và tạo lại nội dung dist/**.
- Xem build: `npm run preview -- --host 127.0.0.1`.
- Dừng server bằng Ctrl+C.

Website không cần Gemini API key. Cấu hình Vite không đưa khóa API vào bundle trình duyệt. Không đọc hoặc thay đổi các file .env thật.

## Nội dung

- `src/data/clinic.ts`: thương hiệu, bác sĩ, địa chỉ, hotline, Zalo, giờ khám, danh sách dịch vụ, FAQ, đề cương bài viết.
- `src/data/clinicGallery.ts`: ảnh thật của phòng khám; ban đầu rỗng.
- `src/sections/Content.tsx`: các khối nội dung dùng chung.
- `src/pages/`: giữ các đường dẫn hiện có, thêm trang chi tiết dịch vụ, bài viết và điều khoản.
- `src/index.css`: thiết kế và responsive.
- [Hướng dẫn ảnh](docs/ASSETS.md), [Thông tin cần xác nhận và SEO](docs/CONTENT-SEO.md), [Kiểm tra và tác dụng phụ](docs/HANDOFF.md).

## Giới hạn bản xem trước

`clinic.draft = true`; noindex/nofollow ở HTML gốc và metadata từng trang. Chưa triển khai/publish.
Dịch vụ chưa xác nhận có nhãn dự kiến. Đề cương bài viết có nhãn bản nháp, chưa được bác sĩ duyệt.
Biểu mẫu chỉ kiểm tra dữ liệu; không gọi API, không lưu localStorage, không giả lập lịch thành công.
Không có backend, analytics, bản đồ nhúng, địa chỉ/điện thoại giả, đánh giá hoặc cam kết kết quả điều trị.
Google Fonts là kết nối ngoài để tải font; ảnh/logo phục vụ tại website.
Không thêm manifest/icon khác nếu chưa có tài sản thật.

## Đường dẫn con và hosting

Asset dùng `import.meta.env.BASE_URL`, Router dùng cùng basename, favicon dùng `%BASE_URL%`.
Ví dụ kiểm tra: `npm run build -- --base=/phong-kham/ --outDir=dist-subpath`.
Xem bằng `npm run preview -- --base=/phong-kham/ --outDir=dist-subpath --host 127.0.0.1 --port 4173`.
Đây là SPA: hosting cần fallback các đường dẫn hợp lệ về index.html. Không trả HTML cho file ảnh bị thiếu.
Chưa cấu hình domain/sitemap vì chưa có tên miền chính thức. Xem CONTENT-SEO.md trước khi xuất bản.


## Git repository

Repository: https://github.com/phongbao-uopeopleuni/drnguyenclinic
Nhánh chính: `main`.
Các thư mục build, dependencies, cache và file .env thật được loại khỏi Git.
`.gitkeep` giữ các thư mục ảnh trống để người khác clone dự án vẫn có cấu trúc cần thiết.

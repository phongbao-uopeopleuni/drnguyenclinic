# Bàn giao thiết kế — 19/10/2026

## Phạm vi

Làm việc trong D:\dnclinic. Đọc tài liệu người dùng chỉ định tại C:\Users\Phong Bao\Downloads\website-prompt.txt, không sửa tài liệu đó.
Dự án không có .git: lần kiểm tra ban đầu trả về “fatal: not a git repository”.
Giữ stack, package.json, package-lock.json và ba file tài sản gốc. Không triển khai website ra hosting.

## File thay đổi

- .gitignore: bổ sung .npm-cache/ và dist-subpath/.
- index.html: tiếng Việt, title/meta, noindex bản nháp, favicon và preconnect font.
- metadata.json: tên thương hiệu và mô tả bản nháp.
- vite.config.ts: giữ plugin/alias/HMR; bỏ đưa GEMINI_API_KEY vào mã trình duyệt.
- src/App.tsx: base URL, các route chi tiết, điều khoản và điều hướng.
- src/index.css: thiết kế responsive và tương phản.
- src/components/Header.tsx, Footer.tsx, SEO.tsx.
- src/pages/Home.tsx, About.tsx, Services.tsx, Process.tsx, Blog.tsx, FAQ.tsx, Contact.tsx, Privacy.tsx, NotFound.tsx.
- README.md: thay hướng dẫn mẫu bằng hướng dẫn vận hành thực tế.

## File/thư mục mới

- src/vite-env.d.ts
- src/components/PageHeading.tsx, SafeImage.tsx
- src/data/clinic.ts, clinicGallery.ts
- src/sections/Content.tsx
- src/pages/Terms.tsx
- public/assets/brand/logo-horizontal.svg
- public/assets/images/doctor/drpic.jpg
- public/favicon.ico
- public/assets/images/clinic/, services/, articles/: thư mục trống.
- docs/ASSETS.md, CONTENT-SEO.md, HANDOFF.md

## Kiểm chứng thực tế

- npm run lint: đạt (tsc --noEmit).
- npm run build: đạt.
- Build với base=/phong-kham/ và outDir=dist-subpath: đạt.
- Trình duyệt 360px, 768px, 1440px: 11 route kiểm tra không tràn ngang, mỗi route 1 H1.
- Route kiểm tra: /, /gioi-thieu, /dich-vu, /quy-trinh, /kien-thuc, /faq, /lien-he, /dich-vu/kham-phu-khoa, /kien-thuc/chuan-bi-buoi-kham, /chinh-sach-bao-mat, /dieu-khoan.
- Xem trực quan desktop và mobile: ảnh bác sĩ giữ đầu/khuôn mặt, logo đúng tỷ lệ; không đảo màu logo.
- Menu mobile mở/đóng; đóng khi điều hướng; Escape đóng và giữ focus nút.
- FAQ mở được bằng summary; ô tìm kiếm lọc theo dữ liệu.
- Form trống không hợp lệ; số điện thoại abc bị chặn; bộ dữ liệu mẫu hợp lệ qua kiểm tra; thông báo không gửi/không xác nhận lịch; 0 yêu cầu mạng mới khi submit và localStorage.length=0.
- Gallery rỗng không xuất hiện.
- Logo, ảnh bác sĩ và favicon trả HTTP 200 với MIME đúng ở /phong-kham/. Ảnh trình duyệt có naturalWidth 1056 (logo), 960 (bác sĩ). Điều hướng /phong-kham/lien-he mở form đúng.
- Bản sao ba tài sản có SHA256 trùng với gốc.
- Không thấy console error/warn trong các lần kiểm tra dev và bản build đường dẫn con.
- Lighthouse snapshot trang chủ sau chỉnh tương phản: Accessibility 100, Best Practices 100, SEO 83. Đây là kiểm tra tự động tại máy, không phải chứng nhận WCAG đầy đủ hay đo hiệu năng. Bản nháp cố ý noindex; chưa hoàn tất SEO xuất bản.
- Không đo Core Web Vitals thực tế, chưa kiểm thử backend vì chưa có backend.

## Tác dụng phụ ngoài source

- npm ci tạo mới node_modules/ (222 packages), gồm cache Vite khi chạy dev.
- Tạo mới .npm-cache/ (cache tải gói và log npm), giữ lại trong dự án.
- Lần build đầu tạo mới dist/. Các lần build sau **xóa và ghi lại nội dung dist/**.
- Tạo mới dist-subpath/ cho kiểm tra base URL; lần build kiểm tra cuối **xóa và ghi lại nội dung dist-subpath/**.
- Các file được viết/sửa có mtime mới; không hoàn tác mtime.
- Chạy dev port 3000 và preview port 4173 để kiểm tra; xem bằng chứng tắt tiến trình ở phần kết thúc.
- Mở một tab Chrome kiểm thử riêng dnclinic-design, có tải/cache Google Fonts.
- Công cụ Lighthouse tự sinh report JSON/HTML trong thư mục tạm của công cụ:
  C:\Users\PHONGB~1\AppData\Local\Temp\chrome-devtools-mcp-*
  (các cặp 1NwIg8/ruuNo4, UjutgS/cZM9nI, sOFL8W/n6MSVy).
  Chúng không nằm trong Git/dự án. Không sửa dự án khác; không truy cập hoặc xóa thủ công các thư mục tạm này.
- Yêu cầu lưu audit vào docs/audit bị công cụ từ chối; không có báo cáo ở đường dẫn đó.

## Việc còn thiếu trước công bố

Xem CONTENT-SEO.md: địa chỉ/hotline/Zalo/giờ khám, hồ sơ bác sĩ, phạm vi dịch vụ, ảnh thật, bài viết đã duyệt, tên miền, chính sách chính thức, backend đặt lịch.
Giữ noindex đến khi duyệt. App hiện là SPA render phía client; prerender/SSR, sitemap và schema địa phương cần hoàn thiện ở giai đoạn đưa lên tên miền thật.


## Kết thúc kiểm thử

Đã gửi Ctrl+C cho cả hai tiến trình kiểm thử; đã đóng tab Chrome dnclinic-design.
Kiểm tra lại ngay khi bàn giao:

```text
netstat -ano | Select-String ':(3000|4173)\s'
(không có dòng kết quả)
```

Sau chỉnh cỡ chữ/tương phản, kiểm tra lại trang chủ ở 360/768/1440px không tràn ngang.
FAQ tìm “phòng khám sản gần tôi” trả đúng 1 câu hỏi.

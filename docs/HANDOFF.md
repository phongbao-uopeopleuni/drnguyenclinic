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

## Cập nhật thông tin liên hệ

Cập nhật cấu hình trung tâm với tên phòng khám, tên đầy đủ bác sĩ, địa chỉ Huế và số điện thoại do chủ phòng khám cung cấp. Thêm ContactActions dùng chung cho nút gọi và Google Maps; cập nhật header/footer, trang chủ, trang liên hệ, CTA cuối trang, FAQ, metadata và nội dung SEO liên quan. Logo gốc không chỉnh sửa.
Google Maps mở qua liên kết ngoài khi người dùng bấm, không nhúng bản đồ theo dõi và không cần API key. Không thực hiện cuộc gọi trong quá trình kiểm thử.
Build lần này xóa và ghi lại dist/. node_modules/.vite-temp có thể được Vite cập nhật. Các file sửa có mtime mới; không build lại dist-subpath nên đây vẫn là bản kiểm thử cũ.

## Rà soát UI/UX — 19/10/2026

Giữ hướng thiết kế trong design-review/CONTRACT.md; chỉnh các điểm gây cản trở người dùng:

- Cỡ chữ tối thiểu: nhãn/ghi chú từ 10–12px lên 13–14px (thanh trên cùng, menu 15px, nhãn mục, ghi chú nháp, footer, thanh liên hệ mobile).
- Số điện thoại hiển thị theo nhóm `clinic.phoneDisplay` (0774 534 766); liên kết tel: không đổi.
- Trang chủ: bỏ dải "Liên hệ đặt lịch / Trước khi đến khám / Đến phòng khám" vì lặp lại số điện thoại và Google Maps ngay dưới hero; địa chỉ và giờ khám nằm cạnh nút gọi. Bỏ chú thích ảnh lặp tên bác sĩ.
- Bỏ số thứ tự ở nhãn mục (01/02/03) để không chồng với số thứ tự dịch vụ và các bước.
- Mũi tên ↗ chỉ dùng cho liên kết ra ngoài (Google Maps); liên kết nội bộ dùng →/←, thay ký tự mũi tên bằng icon.
- Trang Liên hệ: tên phòng khám dạng thường (`clinic.displayName`), bỏ dòng số điện thoại trùng với nút gọi.
- FAQ, Quyền riêng tư, Điều khoản: cột nội dung thẳng lề trái với tiêu đề trang.
- Menu mobile/tablet: lớp phủ nền, bấm ra ngoài để đóng, khóa cuộn trang khi mở; Escape vẫn đóng và trả focus.
- Header desktop 88px → 80px.

Kiểm chứng: `npm run lint` và `npm run build` đạt; 11 route × 360/768/1440px không tràn ngang, mỗi route 1 H1, không còn chữ hiển thị dưới 12px; header 1024/1100/1280px không vỡ; menu mobile mở/đóng bằng lớp phủ và Escape; không có lỗi console khi tải lại sạch. Build xóa và ghi lại dist/.

### Bảng màu nền ấm

Giữ cặp màu logo (navy #1E3A5F, hồng #D4A09A); thay các nền xám lạnh bằng tông ấm, khai báo token trong :root của src/index.css:

- Nền trang ngà `--ivory` #FBF8F4, dải xen kẽ lanh `--linen` #F4EDE5, nền hồng nhạt `--blush-wash` #F8EDE8, nền form `--warm-white` #FFFDFA.
- Đường kẻ ấm `--rule` #E7DED4 / `--rule-strong` #CDBFB1 (thay #D5D8DC / #B8BEC7).
- Nhãn mục (eyebrow), hover menu và viền focus dùng hồng trầm `--rose-deep` #86514D.
- Hero: vầng sáng hồng phấn sau ảnh bác sĩ và tấm nền hồng lệch sau ảnh; tiêu đề trang con có vầng sáng tương tự.
- CTA navy có ánh hồng ở góc; footer và thanh trên cùng dùng navy sâu `--navy-deep` #172E4B.
- Header trong suốt/kính mờ và thanh liên hệ mobile nền đặc: xem mục "Header trong suốt" bên dưới.
- Viền ô nhập `--field-border` #958777 đạt 3.4:1 (trước đây #AAB2BC khoảng 2:1).

Kiểm chứng: tương phản chữ trên mọi nền mới ≥ 4.5:1, kể cả ở điểm đậm nhất của vầng sáng; 11 route × 360/768/1024/1440px không tràn ngang, mỗi route 1 H1.

### Nút liên hệ nhanh (Gọi ngay, Zalo, Facebook)

- src/components/QuickContact.tsx, render trong Header thay cho thanh liên hệ mobile cũ.
- Từ 640px: cụm nút tròn nổi góc phải dưới (Facebook, Zalo, Gọi ngay), nhãn hiện khi rê chuột/focus bàn phím. Footer chừa lề phải 88px ở 640–1399px để nút không che nội dung cuối trang. Ẩn khi menu mobile/tablet mở.
- Dưới 640px: thanh đáy Gọi ngay | Zalo | (Facebook) | Chỉ đường.
- Zalo: `clinic.zalo` = https://zalo.me/0774534766 (chủ phòng khám xác nhận cùng số hotline). Trang Liên hệ hiện dòng Zalo.
- Facebook: `clinic.facebook` đang null nên nút ẩn; điền link là nút tự hiện ở cả ba nơi.

Kiểm chứng: 11 route × 320/360/768/1024/1440px không tràn ngang; mô phỏng đủ 4 mục trên thanh mobile ở 320/360px không cắt chữ; cuối trang không có nội dung footer nằm dưới nút nổi (768/1024/1440px); link Zalo/tel/Maps đúng. Trạng thái rê chuột kiểm bằng quy tắc CSS và vị trí tính toán, chưa chụp ảnh.

### Header trong suốt

- Header nằm đè lên section đầu trang: `main` kéo lên `-var(--header-h)`, `.hero` và `.page-heading` bù lại padding-top bằng `--header-h` (80px; 75px dưới 640px). Trang mới phải bắt đầu bằng hero hoặc PageHeading, nếu không nội dung đầu trang sẽ nằm dưới header.
- Đầu trang: nền trong suốt, không viền. Cuộn quá 8px (class `is-scrolled`, Header.tsx): nền ngà 80% + backdrop blur 16px + viền/bóng nhẹ. Khi mở menu mobile/tablet: nền ngà đặc.
- Thanh liên hệ mobile: nền đặc `--warm-white`, bỏ blur, thêm bóng nhẹ phía trên.

Kiểm chứng: chiều cao header bằng `--header-h` ở 320/360/768/1024/1440px; 12 route (gồm 404) × 5 độ rộng không tràn ngang, 1 H1, H1 cách đáy header ≥ 16px; chữ menu trên kính mờ tương phản thấp nhất 7.4:1 (trên footer navy); trạng thái trong suốt/kính mờ/menu mở đo bằng computed style.

### Bỏ nút "Gọi đặt lịch" ở header

Mỗi màn hình giữ một CTA trong nội dung (nút gọi ở hero, khối CTA cuối trang) và một CTA cố định: cụm nút nổi từ 640px, thanh đáy dưới 640px. Nút "Gọi đặt lịch" trong header và trong menu ☰ bị trùng với CTA cố định nên đã bỏ (cùng CSS `.nav-cta`).

Kiểm chứng: 12 route × 320/360/768/1024/1440px không có link tel: trong header, không tràn ngang, 1 H1; menu ☰ còn 6 mục điều hướng; nút gọi hero, cụm nút nổi và thanh đáy hiển thị đúng theo độ rộng; lint và build đạt.

## UI refinement review

Applied frontend-design-direction and make-interfaces-feel-better: clinical/editorial hero with doctor identity, real portrait and contact facts; numbered care list instead of icon cards; removed repeated slogan blocks and large draft article illustrations; contact preview form collapsed behind a labelled summary. Existing shared working-tree refinements were preserved.

Before/after: decorative arch and repeated slogans → factual doctor introduction; card grid → numbered service list; competing preview form → phone/directions first and expandable preview; decorative illustration cards → compact article list.

Evidence: docs/design-review/CONTRACT.md and evidence.json with rendered browser records at 360x900, 768x900, 1440x1000. Home accessibility 100 and best practices 100 in snapshot audit, SEO 83 with draft noindex retained. TypeScript and build passed. Existing unrelated/concurrent working-tree edits were not reverted.

Side effects: build overwrote dist/; Vite may update node_modules/.vite and .vite-temp. Created docs/design-review artifacts. Lighthouse generated temporary reports chrome-devtools-mcp-v6tRTj and chrome-devtools-mcp-NiBvgc in the tool's temp directory. No image/logo edits or package installs by this UI pass. Browser tests used sample data; closed dedicated QA tab after testing. Local dev server is intentionally left running on port 3000 at the user's request.

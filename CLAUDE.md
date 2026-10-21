# CLAUDE.md — website Phòng khám TS.BS. Đắc Nguyên

Website tiếng Việt cho phòng khám Hiếm muộn & Sản phụ khoa tại Huế. React 19 + TypeScript + Vite 6 + React Router 7, SPA tĩnh, không backend. Bản xem trước đang chạy ở https://drnguyenclinic.vercel.app (noindex).

Bắt đầu mỗi phiên bằng mục "Trạng thái hiện tại" đầu `docs/HANDOFF.md`, gồm việc còn lại, quyết định đang mở và những gì chưa kiểm chứng.

## Lệnh

- `npm run dev` (127.0.0.1:3000), `npm run lint` (tsc), `npm run build`, `npm run preview -- --port 4173`.
- `npm run test:security`: đọc `dist/`, phải chạy sau build. Vercel chạy `npm run build && npm run test:security`.
- `node tests/attack-simulation.mjs`: dò dev 3000 và preview 4173, ghi đè `docs/security/attack-http.json`.
- Build đường dẫn con: `MSYS_NO_PATHCONV=1 npm run build -- --base=/phong-kham/ --outDir=dist-subpath`. Trong Git Bash, thiếu biến này thì `/phong-kham/` bị đổi thành đường dẫn Windows.
- `.claude/launch.json` có sẵn `dnclinic-dev` (3000), `dnclinic-preview` (4173), `dnclinic-subpath` (4174, mở `/phong-kham/`) cho `preview_start`.

## Kiến trúc

- `src/data/clinic.ts`: nguồn duy nhất cho tên, logo wordmark (`brandName`), chuyên khoa, bác sĩ, địa chỉ, điện thoại, Zalo, giờ khám, dịch vụ, FAQ, bài viết. Có các helper `telUrl`, `formatPhone`, `phoneUrl`, `directionsUrl`, `asset`. Trường `null` (`hotline`, `facebook`, `website`) làm nút/thẻ tương ứng tự ẩn.
- `src/App.tsx`: routes và `ScrollToTop` (theo `location.key`, giữ vị trí khi Back/Forward, focus `main` sau khi chuyển trang).
- `src/components/`:
  - `Header`: menu mobile, header trong suốt rồi kính mờ khi cuộn, nút Hotline.
  - `BrandLockup`: logo kèm dòng chuyên khoa bằng chữ HTML.
  - `QuickContact`: nút nổi từ 640px, thanh đáy dưới 640px.
  - `ContactActions`, `SEO`, `SafeImage`, `Footer`.
- `src/index.css`: token màu ở `:root` (navy, rose-deep, ivory, linen…), rồi tới style theo khối, cuối cùng là các breakpoint 1180/1023/639/359px.
- Bảo mật: `config/security.mjs` (CSP và header), `vercel.json` (rewrite SPA và header, phải khớp `security.mjs`, có test so khớp), `config/request-guard.mjs`, `vite.config.ts`.

## Quy ước bắt buộc

- **Không bịa dữ liệu thật.** Số điện thoại, link, giờ khám, bằng cấp, dịch vụ phải do chủ phòng khám cung cấp. Chưa có thì để `null`, hỏi người dùng, ghi vào `docs/CONTENT-SEO.md`. Số mẫu dùng để test phải xóa trước khi commit.
- Tên và số liệu lấy từ `clinic.ts`, không ghi cứng. Riêng `index.html` (title, description, meta robots) và `metadata.json` là chữ tĩnh: đổi `clinic.ts` thì sửa cả hai file này.
- CSP rất chặt: `default-src 'none'`; `connect-src` và `form-action` hiện chỉ mở cho `https://formspree.io`; không có `unsafe-inline`. Không dùng thuộc tính `style` trong HTML, script inline hoặc `dangerouslySetInnerHTML`. Khi thêm dịch vụ ngoài (Turnstile, analytics, backend, bản đồ), phải sửa đồng bộ `config/security.mjs`, `vercel.json` và kiểm thử bảo mật.
- Header trong suốt đè lên khối đầu trang (`main` có margin-top âm). Trang mới phải mở đầu bằng `.hero` hoặc `PageHeading`, nếu không nội dung bị header che.
- Giao diện: chữ hiển thị ≥ 12px, tương phản ≥ 4.5:1, mỗi trang đúng 1 H1, không tràn ngang ở 320/360/768/1024/1440px. Mỗi màn hình chỉ một CTA cố định (nút nổi hoặc thanh đáy) cộng CTA trong nội dung.
- Thuộc tính `pattern` của input phải hợp lệ với cờ regex `v` mà trình duyệt dùng, tức phải escape `(` `)` `-` trong `[...]`. Test sẽ báo nếu sai.
- Thay ảnh bác sĩ thì cập nhật `?v=` và `width`/`height` ở `Home.tsx` và `About.tsx` (xem `docs/ASSETS.md`).

## Git và deploy

- Push lên `main` là Vercel tự deploy production. Làm trên nhánh riêng, chạy `npm run lint`, `npm run build && npm run test:security`, rồi merge `--no-ff` vào `main` và push.
- Sau deploy: `vercel ls drnguyenclinic`, rồi `vercel inspect <url> --wait`. Dùng `curl` kiểm tra trang con trả 200, ảnh thiếu trả 404, đủ 6 security header.
- Thư mục có thể đang được sửa song song (phiên khác hoặc chủ dự án). Trước khi commit luôn chạy `git status` và `git diff`, rà mọi thay đổi không phải của mình, và báo lại cho người dùng.

## Mẹo kiểm thử trong Claude desktop

- Khung Browser bị ẩn thì `requestAnimationFrame`, sự kiện scroll và media query không chạy, transition đứng yên. Hãy đọc `getComputedStyle` (tắt transition nếu cần) và tự phát sự kiện `scroll`, đừng kết luận là lỗi.
- Production chặn mọi iframe (`frame-ancestors 'none'`), nên chỉ đo bằng iframe trên dev/preview. Trên production thì thao tác ở tab chính.
- Ảnh chụp ở độ rộng nhỏ: Chrome headless có độ rộng cửa sổ tối thiểu, nên render trang trong iframe có kích thước cố định để chụp chính xác.

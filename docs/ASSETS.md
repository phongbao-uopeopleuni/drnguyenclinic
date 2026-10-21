# Quản lý ảnh và thương hiệu

## Tài sản đã sử dụng
- Gốc `logo-horizontal.svg` → `public/assets/brand/logo-horizontal.svg`
- Gốc `favicon.ico` → `public/favicon.ico`
- Ảnh bác sĩ đang dùng: `public/assets/images/doctor/drpic.jpg`, JPEG dọc 1440×2560, khoảng 167 KB. Đây là ảnh mới đã thay ảnh gốc; file `drpic.jpg` ở thư mục gốc dự án vẫn là ảnh cũ 960×960, không được website dùng.

Logo và favicon là bản sao giữ nguyên byte của file gốc, không chỉnh nội dung.
Ảnh bác sĩ được gọi kèm `?v=<12 ký tự đầu của SHA-256>` (hiện là `?v=1b20f66af31c`) ở `src/pages/Home.tsx` và `src/pages/About.tsx` để trình duyệt tải ảnh mới. Khi thay ảnh: cập nhật giá trị `?v=` và `width`/`height` ở cả hai nơi. Trang chủ cắt ảnh vuông, trang Giới thiệu cắt 4:5 (`object-position` giữ khuôn mặt); xem lại cả hai sau khi thay.
Logo SVG hiển thị contain, không invert; footer đặt trên nền ngà. Logo gốc không có dòng chuyên khoa: dòng "Hiếm muộn & Sản phụ khoa" là chữ HTML trong `src/components/BrandLockup.tsx`, đặt ở 25,1% chiều rộng và 70% chiều cao logo (đo từ file SVG). Nếu thay file logo phải đo lại hai giá trị này trong `.brand-specialty` (`src/index.css`).
URL public không chứa /public. Dùng hàm asset() với đường dẫn tương đối để hỗ trợ base URL.

## Thêm ảnh thật phòng khám

1. Chuẩn bị ảnh có quyền sử dụng, không lộ thông tin người bệnh. Định dạng jpg/jpeg/png/webp/avif; ưu tiên WebP/AVIF đã tối ưu, kiểm tra chất lượng và xoay đúng chiều.
2. Chép vào `public/assets/images/clinic/`. Tên không dấu, chữ thường, gạch nối.
3. Mở `src/data/clinicGallery.ts` và thêm mục vào mảng clinicGallery.
4. Chạy lint, build; xem ảnh, caption và menu ở điện thoại/desktop.
5. Triển khai lại khi đã được chủ phòng khám cho phép. Chép ảnh vào public **không tự cập nhật gallery**.

Ví dụ cấu hình (chỉ dùng sau khi file thật tồn tại):

```ts
export const clinicGallery: ClinicImage[] = [{
  src: 'assets/images/clinic/clinic-exterior-01.webp',
  alt: 'Mặt tiền phòng khám nhìn từ lối vào',
  caption: 'Lối vào phòng khám',
  category: 'Không gian',
  order: 1,
}];
```

Tên gợi ý, chưa phải file hiện có:
- clinic-exterior-01.webp
- clinic-reception-01.webp
- clinic-consultation-01.webp
- clinic-ultrasound-01.webp

Gallery rỗng sẽ ẩn cả khối ảnh và mục điều hướng. Ảnh được sắp theo order; tải lazy, có khung thay thế nếu tải lỗi.
Các thư mục images/services/ và images/articles/ đang trống để bổ sung sau.
Hình trang trí ở thẻ bài viết là icon minh họa, không phải ảnh cơ sở hoặc ảnh người bệnh.

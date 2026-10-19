# Quản lý ảnh và thương hiệu

## Tài sản đã sử dụng
- Gốc `logo-horizontal.svg` → `public/assets/brand/logo-horizontal.svg`
- Gốc `drpic.jpg` → `public/assets/images/doctor/drpic.jpg`
- Gốc `favicon.ico` → `public/favicon.ico`

Các file gốc được giữ lại. Bản sao giữ nguyên byte, không chỉnh nội dung ảnh hoặc logo.
Ảnh bác sĩ JPEG 960×960 chỉ khoảng 54 KB nên giữ nguyên, chưa chuyển WebP/AVIF.
Logo SVG hiển thị contain, không invert; footer đặt trên nền trắng ngọc trai.
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

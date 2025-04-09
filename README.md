# 💊 HỆ THỐNG BÁN THUỐC HUY PHÚC — FRONTEND

Đây là giao diện người dùng (frontend) cho hệ thống quản lý bán thuốc HUY PHÚC, được xây dựng bằng **React 19**, **Vite**, **TailwindCSS**, và **React Router v7**.

---

## 🚀 Công nghệ sử dụng

- [React 19](https://react.dev)
- [Vite](https://vitejs.dev)
- [TailwindCSS](https://tailwindcss.com)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Router v7](https://reactrouter.com/)

---

## ⚙️ Yêu cầu hệ thống

Cần cài đặt trước:

- **Node.js** phiên bản 18 hoặc cao hơn  
- **npm** (hoặc `pnpm` / `yarn` nếu bạn thích)

---

## 🧰 Cài đặt dự án

```bash
# 1. Clone repository về máy
git clone https://github.com/TEN_GITHUB_CUA_BAN/ten-repo-frontend.git
cd frontend

# 2. Cài đặt thư viện
npm install

# 3. Chạy server dev
npm run dev
Sau đó truy cập: http://localhost:5173

📦 Các lệnh thường dùng
Lệnh	Chức năng
npm run dev	Chạy server phát triển (dev server)
npm run build	Build dự án cho production
npm run preview	Xem trước bản production
npm run lint	Kiểm tra lỗi lint code (ESLint)
📁 Cấu trúc thư mục (rút gọn)
bash
Sao chép
Chỉnh sửa
frontend/
├── assets/            # Hình ảnh, logo, tài nguyên tĩnh
├── components/        # Các component dùng chung (Sidebar, Header, ...)
│   └── shared/
├── pages/             # Các trang chính (Home, Auth, Orders, ...)
├── App.jsx            # Layout tổng
├── main.jsx           # Điểm bắt đầu của ứng dụng
├── tailwind.config.js # Cấu hình Tailwind
🧑‍💻 Ghi chú cho nhóm
Mỗi người nên tạo branch riêng khi làm việc

Khi commit nhớ ghi rõ nội dung thay đổi

Có thể dùng prettier để định dạng mã nguồn đồng bộ

Nếu cần hỗ trợ, liên hệ TAO hoặc mở issue trong repo.

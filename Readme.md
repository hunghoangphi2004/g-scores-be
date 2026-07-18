# G-Scores Backend

## Giới thiệu

Backend của **G-Scores** được xây dựng bằng **Node.js**, **Express.js** và **MongoDB Atlas**, cung cấp API để:

* Tra cứu điểm theo số báo danh.
* Thống kê điểm theo từng môn học.
* Lấy Top 10 thí sinh khối A.
* Import dữ liệu từ file CSV vào MongoDB.

## Demo

- Backend API: https://g-scores-be-1l4i.onrender.com/
- Ví dụ: https://g-scores-be-1l4i.onrender.com/api/scores/01000001

## Công nghệ sử dụng

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

## Cấu trúc thư mục

```text
Backend
├── src
│   ├── config/         # Cấu hình kết nối MongoDB
│   ├── controllers/    # Xử lý request và response
│   ├── data/           # Chứa file dữ liệu CSV
│   ├── models/         # Định nghĩa Model Mongoose
│   ├── routes/         # Khai báo API
│   ├── scripts/        # Script import dữ liệu CSV
│   ├── services/       # Xử lý logic nghiệp vụ
│   └── index.js        # Điểm khởi động ứng dụng
├── .env
├── package.json
└── README.md
```

## Hướng dẫn chạy dự án

### 1. Clone repository

```bash
git clone https://github.com/hunghoangphi2004/g-scores-be.git
cd g-scores-be
```

### 2. Cài đặt thư viện

```bash
npm install
```

### 3. Cấu hình biến môi trường

Tạo file `.env`:

```env
PORT=3000

MONGO_URL=YOUR_MONGO_DATABASE_URL
```

### 4. Import dữ liệu

File `diem_thi_thpt_2024.csv` đã được đặt sẵn vào thư mục `src/data/` và bạn chỉ cần chạy:

```bash
npm run seed
```
<img width="223" height="66" alt="image" src="https://github.com/user-attachments/assets/ef667fa6-01ef-48f8-a855-20b785145f78" />

### 5. Khởi động server

```bash
npm run dev
```

Hoặc:

```bash
npm start
```

Mặc định server chạy tại:

```text
http://localhost:3000
```

## API

| Phương thức | Endpoint                             | Mô tả                  |
| ----------- | ------------------------------------ | ---------------------- |
| GET         | `/api/scores/:sbd`                   | Tra cứu điểm theo SBD  |
| GET         | `/api/statistics/:subject`           | Thống kê điểm theo môn |
| GET         | `/api/statistics/get-top-10-group-A` | Top 10 thí sinh khối A |


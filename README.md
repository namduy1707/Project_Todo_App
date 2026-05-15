# 📝 Todo App - React Project

Một ứng dụng Todo List đơn giản được xây dựng bằng React, Vite, và Axios. Project này giúp bạn học cách xây dựng ứng dụng React hiện đại với API integration.

## 🎯 Mục tiêu học tập

Project này được thiết kế để học:

- React Hooks (useState, useEffect)
- Component-based architecture
- API integration với Axios
- State management
- CSS styling và responsive design
- Modern JavaScript (ES6+)

## 📁 Cấu trúc thư mục

```
todo-app/
├── public/
│   └── favicon.svg          # Icon của ứng dụng
├── src/
│   ├── components/          # Các component React
│   │   ├── TodoForm.jsx     # Form thêm todo mới
│   │   ├── TodoList.jsx     # Danh sách todos
│   │   └── TodoItem.jsx     # Item todo riêng lẻ
│   ├── services/
│   │   └── api.js           # API service (Axios)
│   ├── TodoApp.css          # Styles cho toàn bộ app
│   ├── index.css            # Global styles
│   ├── App.jsx              # Component chính
│   └── main.jsx             # Entry point
├── package.json             # Dependencies và scripts
├── vite.config.js           # Cấu hình Vite
├── eslint.config.js         # Cấu hình ESLint
└── README.md                # Tài liệu này
```

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống

- Node.js (version 16+)
- npm hoặc yarn

### Các bước cài đặt

1. **Cài đặt dependencies:**

   ```bash
   cd todo-app
   npm install
   ```

2. **Chạy development server:**

   ```bash
   npm run dev
   ```

3. **Mở trình duyệt:**
   - Truy cập `http://localhost:5173`
   - Ứng dụng sẽ tự động reload khi bạn sửa code

## 🔧 Công nghệ sử dụng

### Frontend Framework

- **React 19** - Library JavaScript hiện đại cho UI
- **Vite** - Build tool nhanh và hiện đại
- **ESLint** - Code linting và formatting

### HTTP Client

- **Axios** - Thư viện HTTP client cho JavaScript

### API

- **JSONPlaceholder** - Fake REST API miễn phí cho testing

**Học được:**

- Rendering lists với map()
- Key prop trong React
- Props passing
- Component composition

### 4. TodoItem.jsx - Item todo riêng lẻ

```jsx
function TodoItem({ todo, setTodos }) {
  const handleDelete = () => {
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
  };

  const handleToggle = () => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t,
      ),
    );
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed || false}
        onChange={handleToggle}
        className="todo-checkbox"
      />
      <span className="todo-text">{todo.title}</span>
      <button onClick={handleDelete} className="todo-delete-btn">
        X
      </button>
    </li>
  );
}

export default TodoItem;
```

**Học được:**

- Conditional rendering với className
- Array methods (filter, map)
- Immutability trong React state
- Event handling

### 5. api.js - API service

```jsx
import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/todos";

export const getTodos = () => axios.get(API);
```

**Học được:**

- Axios HTTP client
- Promise-based API calls
- Separation of concerns (tách API logic)

## 🎨 Styling (TodoApp.css)

```css
/* Container chính */
.todo-app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

/* Form thêm todo */
.todo-form-container {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.todo-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.todo-add-btn {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.todo-add-btn:hover {
  background-color: #45a049;
}

/* Danh sách todos */
.todo-list h2 {
  margin-bottom: 15px;
  color: #555;
}

/* Item todo */
.todo-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  transition: background-color 0.3s;
}

.todo-item.completed {
  background-color: #f0f0f0;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #888;
}

.todo-delete-btn {
  background-color: #ff4444;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.todo-delete-btn:hover {
  background-color: #cc0000;
}
```

**Học được:**

- CSS class naming conventions
- Flexbox layout
- CSS transitions
- Conditional styling với class modifiers

## 🔄 Luồng hoạt động

1. **Khởi động app:**
   - App.jsx mount → useEffect chạy → gọi API getTodos()
   - Hiển thị loading trong khi chờ API

2. **API response:**
   - Thành công: Lưu 5 todos đầu vào state
   - Lỗi: Hiển thị thông báo lỗi

3. **Thêm todo mới:**
   - Nhập text vào TodoForm
   - Click "Thêm" hoặc nhấn Enter
   - Todo mới được thêm vào state (local)

4. **Toggle completed:**
   - Click checkbox → cập nhật completed status
   - UI thay đổi (line-through, màu sắc)

5. **Xóa todo:**
   - Click nút "X" → filter todo khỏi state

## 📚 Kiến thức React quan trọng

### State Management

- **Local state:** useState cho từng component
- **Lifting state up:** setTodos được truyền từ App xuống child components
- **Immutability:** Luôn tạo array/object mới khi update state

### Component Lifecycle

- **Mount:** useEffect với dependency array rỗng chạy 1 lần
- **Update:** Re-render khi state thay đổi
- **Cleanup:** Không cần trong project này

### Props vs State

- **Props:** Data từ parent component (read-only)
- **State:** Data internal của component (read-write)

### Event Handling

- **Synthetic events:** React events (onClick, onChange)
- **Event handlers:** Functions xử lý events
- **Prevent default:** Không cần trong project này

## 🚀 Mở rộng project

### Tính năng có thể thêm:

1. **Local Storage:** Lưu todos vào localStorage
2. **Edit todo:** Double-click để edit
3. **Filter:** All/Active/Completed
4. **Categories/Tags:** Phân loại todos
5. **Due dates:** Thời hạn hoàn thành
6. **Drag & drop:** Sắp xếp todos
7. **Dark mode:** Chế độ tối
8. **Animations:** Smooth transitions

### Backend integration:

1. **REST API:** Tạo backend với Express.js
2. **Database:** MongoDB/PostgreSQL
3. **Authentication:** JWT tokens
4. **Real-time:** Socket.io

## 🐛 Troubleshooting

### Lỗi thường gặp:

1. **"Cannot resolve module 'axios'"**
   - Chạy `npm install` để cài axios

2. **API không load:**
   - Kiểm tra network tab trong DevTools
   - JSONPlaceholder có thể down, thử refresh

3. **Styles không áp dụng:**
   - Kiểm tra file TodoApp.css được import trong App.jsx
   - Clear cache trình duyệt

4. **Component không re-render:**
   - Đảm bảo state được update immutably
   - Kiểm tra key props trong map()

## 📖 Tài liệu tham khảo

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [Axios Documentation](https://axios-http.com/docs/intro)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com)

## 🎓 Bài học chính

1. **Component Thinking:** Chia UI thành components nhỏ
2. **State Flow:** Hiểu data flow trong React app
3. **Separation of Concerns:** Tách logic, UI, và styles
4. **Modern JavaScript:** ES6+ features (arrow functions, destructuring)
5. **Developer Experience:** Hot reload, linting, error boundaries

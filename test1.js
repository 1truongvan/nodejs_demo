// Hàm hiển thị thông tin
function showInfo(name, age) {
  if (!name) name = "Unknown";
  if (!age) age = "Chưa rõ";
  console.log(`Tên: ${name}, Tuổi: ${age}`);
}

// Lấy tham số từ dòng lệnh
// Cú pháp chạy: node app.js "truong" 20
const args = process.argv.slice(2);

if (args.length >= 2) {
  showInfo(args[0], args[1]);
} else {
  // Nếu không có tham số, gọi mặc định
  showInfo("Truong", 20);
}

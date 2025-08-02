const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Phục vụ file tĩnh từ thư mục hiện tại
app.use(express.static(__dirname));

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/check-date', (req, res) => {
  const { day, month, year } = req.body;

  if (day === undefined) return res.status(400).json({ message: 'Missing required field: day' });
  if (month === undefined) return res.status(400).json({ message: 'Missing required field: month' });
  if (year === undefined) return res.status(400).json({ message: 'Missing required field: year' });

  const d = parseInt(day, 10);
  const m = parseInt(month, 10);
  const y = parseInt(year, 10);

  if (isNaN(d) || isNaN(m) || isNaN(y)) {
    return res.status(400).json({ message: 'Invalid input: day, month, and year must be numbers' });
  }

  if (d < 1 || d > 31 || m < 1 || m > 12 || y < 1 || y > 9999) {
    return res.status(400).json({ message: 'Invalid date range' });
  }

  const isValidDate = (d, m, y) => {
    const date = new Date(y, m - 1, d);
    return date.getFullYear() === y && date.getMonth() === m - 1 && date.getDate() === d;
  };

  if (!isValidDate(d, m, y)) {
    return res.json({ isValid: false, message: 'is not a valid date' });
  }
  return res.json({ isValid: true, message: 'is a valid date' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`✅ API server running on http://localhost:${PORT}`);
});
//cách chạy mở terminal gõ lệnh: node server.js để chạy server
// mơ terminal khác gõ lệnh: npx codeceptjs run --steps làm từng bước
// PS D:\ThuMucTam\SWTendtoend> npx codeceptjs run chạy end to end 1 phát một

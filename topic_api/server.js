// server.js
const express = require('express');      // ✅ Phải có
const app = express();                   // ✅ Tạo đối tượng app
app.use(express.json());                // ✅ Middleware để đọc JSON body

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/check-date', (req, res) => {
  const { day, month, year } = req.body;

  if (day === undefined) return res.status(400).json({ message: 'Missing required field: day' });
  if (month === undefined) return res.status(400).json({ message: 'Missing required field: month' });
  if (year === undefined) return res.status(400).json({ message: 'Missing required field: year' });

  // ⚠️ Thêm kiểm tra year âm
  if (year <= 0) return res.json({ isValid: false, message: `${day}/${month}/${year} is not a valid date` });

  const isValidDate = (d, m, y) => {
    const date = new Date(y, m - 1, d);
    return date.getFullYear() === y && date.getMonth() === m - 1 && date.getDate() === d;
  };

  if (!isValidDate(day, month, year)) {
    return res.json({ isValid: false, message: `${day}/${month}/${year} is not a valid date` });
  }

  return res.json({ isValid: true, message: `${day}/${month}/${year} is a valid date` });
});

app.listen(3000, () => {
  console.log('✅ API server running on http://localhost:3000');
});
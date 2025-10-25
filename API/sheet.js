export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    console.log("Dữ liệu nhận được:", data);
    res.status(200).json({ message: 'Đã nhận dữ liệu', data });
  } else {
    res.status(200).json({ message: 'API hoạt động!' });
  }
}

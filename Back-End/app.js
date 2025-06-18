const express = require('express');
const app = express();
const port = 3000; // คุณสามารถเปลี่ยน port ได้ตามต้องการ

// ข้อมูลสินค้า (Hardcoded 10 ชิ้น)
const products = [
  {
    id: 1,
    name: 'สมาร์ทโฟน X1',
    description: 'สมาร์ทโฟนรุ่นใหม่ล่าสุด กล้อง 108MP, แบตเตอรี่ 5000mAh',
    price: 15999.00,
    category: 'อิเล็กทรอนิกส์',
    stock: 50,
    imageUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Product+1'
  },
  {
    id: 2,
    name: 'หูฟังบลูทูธ Pro',
    description: 'หูฟังไร้สายคุณภาพสูง ตัดเสียงรบกวนได้ดีเยี่ยม',
    price: 2499.00,
    category: 'อิเล็กทรอนิกส์',
    stock: 120,
    imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Product+2'
  },
  {
    id: 3,
    name: 'แล็ปท็อป Gaming Z',
    description: 'โน้ตบุ๊กสำหรับเล่นเกม ประสิทธิภาพสูง จอ 144Hz',
    price: 35000.00,
    category: 'คอมพิวเตอร์',
    stock: 30,
    imageUrl: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Product+3'
  },
  {
    id: 4,
    name: 'เมาส์ไร้สาย Ergonomic',
    description: 'เมาส์ออกแบบตามหลักสรีรศาสตร์ ใช้งานสบายมือ',
    price: 799.00,
    category: 'คอมพิวเตอร์',
    stock: 200,
    imageUrl: 'https://via.placeholder.com/150/00FFFF/FFFFFF?text=Product+4'
  },
  {
    id: 5,
    name: 'คีย์บอร์ด Mechanical RGB',
    description: 'คีย์บอร์ดเกมมิ่ง Mechanical ไฟ RGB ปรับแต่งได้',
    price: 1990.00,
    category: 'คอมพิวเตอร์',
    stock: 80,
    imageUrl: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Product+5'
  },
  {
    id: 6,
    name: 'จอภาพ 27 นิ้ว 4K',
    description: 'จอแสดงผลความละเอียด 4K ขนาด 27 นิ้ว สีสันสดใส',
    price: 9800.00,
    category: 'คอมพิวเตอร์',
    stock: 45,
    imageUrl: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Product+6'
  },
  {
    id: 7,
    name: 'ลำโพงบลูทูธพกพา',
    description: 'ลำโพงขนาดเล็ก พกพาง่าย เสียงดี เบสแน่น',
    price: 1200.00,
    category: 'เครื่องเสียง',
    stock: 150,
    imageUrl: 'https://via.placeholder.com/150/800080/FFFFFF?text=Product+7'
  },
  {
    id: 8,
    name: 'นาฬิกา Smartwatch Fit',
    description: 'นาฬิกาอัจฉริยะ ติดตามกิจกรรม ฟังก์ชันสุขภาพครบครัน',
    price: 4500.00,
    category: 'อุปกรณ์สวมใส่',
    stock: 90,
    imageUrl: 'https://via.placeholder.com/150/008080/FFFFFF?text=Product+8'
  },
  {
    id: 9,
    name: 'กล้อง DSLR เริ่มต้น',
    description: 'กล้อง DSLR สำหรับมือใหม่ ถ่ายภาพสวยงามง่ายๆ',
    price: 18000.00,
    category: 'กล้องถ่ายภาพ',
    stock: 25,
    imageUrl: 'https://via.placeholder.com/150/ADD8E6/FFFFFF?text=Product+9'
  },
  {
    id: 10,
    name: 'โดรนติดกล้อง Full HD',
    description: 'โดรนถ่ายภาพมุมสูง ความละเอียด Full HD',
    price: 7500.00,
    category: 'โดรน',
    stock: 60,
    imageUrl: 'https://via.placeholder.com/150/FFC0CB/FFFFFF?text=Product+10'
  }
];

// Middleware สำหรับจัดการ CORS (Cross-Origin Resource Sharing)
// สำคัญมากถ้า Frontend ของคุณรันอยู่บนโดเมน/port ที่ต่างจาก Backend
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // อนุญาตให้ทุกโดเมนเข้าถึงได้ (*). ใน production ควรระบุโดเมนที่แน่นอน
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Endpoint สำหรับดึงข้อมูลสินค้าทั้งหมด
app.get('/products', (req, res) => {
  console.log('Request received for /products');
  res.json(products);
});

// เริ่มต้น Server
app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
  console.log(`API Endpoint: http://localhost:${port}/products`);
});
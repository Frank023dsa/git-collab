const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// ───── MOCK DATA ─────
let products = [
  {
    id: 1,
    name: 'สมาร์ทโฟน X1',
    description: 'กล้อง 108MP, แบตเตอรี่ 5000mAh',
    price: 15999.00,
    category: 'อิเล็กทรอนิกส์',
    stock: 50,
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
  },
  {
    id: 2,
    name: 'หูฟังบลูทูธ Pro',
    description: 'หูฟังไร้สายคุณภาพสูง ตัดเสียงรบกวน',
    price: 2499.00,
    category: 'อิเล็กทรอนิกส์',
    stock: 120,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
  },
  {
    id: 3,
    name: 'แล็ปท็อป Gaming Z',
    description: 'ประสิทธิภาพสูง จอ 144Hz',
    price: 35000.00,
    category: 'คอมพิวเตอร์',
    stock: 30,
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
  },
  {
    id: 4,
    name: 'เมาส์ไร้สาย Ergonomic',
    description: 'ออกแบบตามหลักสรีรศาสตร์',
    price: 799.00,
    category: 'คอมพิวเตอร์',
    stock: 200,
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
  },
  {
    id: 5,
    name: 'คีย์บอร์ด Mechanical RGB',
    description: 'Mechanical ไฟ RGB ปรับแต่งได้',
    price: 1990.00,
    category: 'คอมพิวเตอร์',
    stock: 80,
    imageUrl: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
  },
  {
    id: 6,
    name: 'จอภาพ 27 นิ้ว 4K',
    description: 'จอแสดงผลความละเอียด 4K สีสดใส',
    price: 9800.00,
    category: 'คอมพิวเตอร์',
    stock: 45,
    imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
  },
  {
    id: 7,
    name: 'ลำโพงบลูทูธพกพา',
    description: 'เสียงดี เบสแน่น พกพาสะดวก',
    price: 1200.00,
    category: 'เครื่องเสียง',
    stock: 150,
    imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
  },
  {
    id: 8,
    name: 'นาฬิกา Smartwatch Fit',
    description: 'ติดตามสุขภาพครบ ฟังก์ชันแน่น',
    price: 4500.00,
    category: 'อุปกรณ์สวมใส่',
    stock: 90,
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
  },
  {
    id: 9,
    name: 'กล้อง DSLR เริ่มต้น',
    description: 'เหมาะสำหรับมือใหม่ ถ่ายง่าย สวยงาม',
    price: 18000.00,
    category: 'กล้องถ่ายภาพ',
    stock: 25,
    imageUrl: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
  },
  {
    id: 10,
    name: 'โดรนติดกล้อง Full HD',
    description: 'ถ่ายมุมสูง คมชัดระดับ Full HD',
    price: 7500.00,
    category: 'โดรน',
    stock: 60,
    imageUrl: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
  }
];
app.use(express.static('public'));
// ───── CORS Middleware ─────
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});
// ───── MySQL Connection ─────
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',         // แก้ให้ตรงกับ MySQL ของคุณ
  password: '',         // รหัสผ่าน
  database: 'productdb'
});

db.connect((err) => {
  if (err) throw err;
  console.log('✅ MySQL connected');
});

// ───── ROUTES ─
// ───── ROUTES ─────

// GET: สินค้าทั้งหมด
app.get('/products', (req, res) => {
  res.json(products);
});

// GET: สินค้าตาม ID
app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  product ? res.json(product) : res.status(404).json({ error: 'ไม่พบสินค้า' });
});

// POST: เพิ่มสินค้าใหม่
app.post('/products', (req, res) => {
  const newProduct = req.body;
  newProduct.id = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT: แก้ไขข้อมูลสินค้า
app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...req.body };
    res.json(products[index]);
  } else {
    res.status(404).json({ error: 'ไม่พบสินค้าเพื่อแก้ไข' });
  }
});

// DELETE: ลบสินค้า
app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    const deleted = products.splice(index, 1);
    res.json(deleted[0]);
  } else {
    res.status(404).json({ error: 'ไม่พบสินค้าเพื่อลบ' });
  }
});

// ───── START SERVER ─────
app.listen(port, () => {
  console.log(`✅ Server is running at: http://localhost:${port}`);
  console.log(`📦 Products API: http://localhost:${port}/products`);
});
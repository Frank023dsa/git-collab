const sqlite3 = require('sqlite3').verbose();

// เชื่อมต่อและสร้างฐานข้อมูล
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) return console.error(err.message);
  console.log('✅ Connected to SQLite and creating schema...');
});

// สร้างตาราง products
db.serialize(() => {
  db.run(`DROP TABLE IF EXISTS products`);
  
  db.run(`
    CREATE TABLE products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      price REAL,
      category TEXT,
      stock INTEGER,
      imageUrl TEXT
    )
  `);

  const products = [
    ['สมาร์ทโฟน X1', 'กล้อง 108MP, แบตเตอรี่ 5000mAh', 15999.00, 'อิเล็กทรอนิกส์', 50, 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?...'],
    ['หูฟังบลูทูธ Pro', 'หูฟังไร้สายคุณภาพสูง ตัดเสียงรบกวน', 2499.00, 'อิเล็กทรอนิกส์', 120, 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?...'],
    ['แล็ปท็อป Gaming Z', 'ประสิทธิภาพสูง จอ 144Hz', 35000.00, 'คอมพิวเตอร์', 30, 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?...'],
    ['เมาส์ไร้สาย Ergonomic', 'ออกแบบตามหลักสรีรศาสตร์', 799.00, 'คอมพิวเตอร์', 200, 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?...'],
    ['คีย์บอร์ด Mechanical RGB', 'Mechanical ไฟ RGB ปรับแต่งได้', 1990.00, 'คอมพิวเตอร์', 80, 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?...'],
    ['จอภาพ 27 นิ้ว 4K', 'จอแสดงผลความละเอียด 4K สีสดใส', 9800.00, 'คอมพิวเตอร์', 45, 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?...'],
    ['ลำโพงบลูทูธพกพา', 'เสียงดี เบสแน่น พกพาสะดวก', 1200.00, 'เครื่องเสียง', 150, 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?...'],
    ['นาฬิกา Smartwatch Fit', 'ติดตามสุขภาพครบ ฟังก์ชันแน่น', 4500.00, 'อุปกรณ์สวมใส่', 90, 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?...'],
    ['กล้อง DSLR เริ่มต้น', 'เหมาะสำหรับมือใหม่ ถ่ายง่าย สวยงาม', 18000.00, 'กล้องถ่ายภาพ', 25, 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?...'],
    ['โดรนติดกล้อง Full HD', 'ถ่ายมุมสูง คมชัดระดับ Full HD', 7500.00, 'โดรน', 60, 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?...']
  ];

  const stmt = db.prepare(`
    INSERT INTO products (name, description, price, category, stock, imageUrl)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  for (const p of products) {
    stmt.run(p);
  }

  stmt.finalize();
});

db.close(() => {
  console.log('✅ Database initialized and closed.');
});
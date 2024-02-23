const express = require('express');
const cors = require('cors');
const app = express();

// CORS設定
app.use(cors());

// ミドルウェアの設定例
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ルーティングの設定例
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// サーバーの起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


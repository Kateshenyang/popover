import express from 'express';
import path from 'path';

const app = express();
const port = 9000;

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
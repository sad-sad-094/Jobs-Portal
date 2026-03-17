import 'dotenv/config';
import app from './app';

const PORT: number = process.env.BACKEND_PORT ? parseInt(process.env.BACKEND_PORT, 10) : 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import 'dotenv/config';
import app from './app';

const PORT = parseInt(process.env.BACKEND_PORT ?? '3000', 10);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

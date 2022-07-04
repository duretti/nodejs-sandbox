import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev')); // logger

app.get('/', async (req, res) => {
  res.json({ hello: 'world' });
});

const port = Number(process.env.PORT ?? 8000);

// we need to run the app on 0.0.0.0 for docker
app.listen(port, '0.0.0.0', () => {
  console.log(`\n\n🚀 Server running at http://localhost:${port}\n\n`);
});

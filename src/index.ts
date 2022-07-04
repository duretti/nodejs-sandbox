import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import prisma from './prismaClient';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// connect the to the db
const connectDB = async () => {
  let maxRetries = 3;
  await prisma
    .$connect()
    .catch((e) => {
      // if the db is not up yet, retry bc...docker
      if (e.code === 'P1001' && maxRetries) {
        maxRetries--;
        setTimeout(prisma.$connect, 2000);
      }
    })
    .then(() => console.log('\n🐘 Successfully connected to DB!'));
};
connectDB();

app.get('/', async (req, res) => {
  res.json({ hello: 'world' });
});

const port = Number(process.env.PORT ?? 8000);

// we need to run the app on 0.0.0.0 for docker
app.listen(port, '0.0.0.0', () => {
  console.log(`\n🚀 Server running at http://localhost:${port}`);
});

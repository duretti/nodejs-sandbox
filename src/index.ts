import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import prisma from '../prisma/prismaClient';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// connect the to the db
const startDB = async () => {
  await prisma.$connect();
};
startDB();

app.get('/', async (req, res) => {
  res.json({ hello: 'world' });
});

const port = Number(process.env.PORT ?? 8000);

// we need to run the app on 0.0.0.0 for docker
app.listen(port, '0.0.0.0', () => {
  console.log(`\n\n🚀 Server running at http://localhost:${port}\n\n`);
});

import prisma from '../src/prismaClient';
import { nanoid } from 'nanoid';

const genId = () => nanoid(16);

async function main() {
  await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      id: genId(),
      email: 'alice@prisma.io',
    },
  });

  await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      id: genId(),
      email: 'bob@prisma.io',
    },
  });
}

main()
  .catch((e) => {
    console.error('ERROR: Seed script failed with:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

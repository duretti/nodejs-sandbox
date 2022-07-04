import prisma from './prismaClient';
import { nanoid } from 'nanoid';

const genId = () => nanoid(16);

async function main() {
  console.log(`\n\n🌱 Seed script starting....`);

  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      id: genId(),
      email: 'alice@prisma.io',
    },
  });

  const bob = await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      id: genId(),
      email: 'bob@prisma.io',
    },
  });

  console.log({ alice, bob });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .then(() =>
    console.log(`The creation of a thousand forests is in one seed 🌱\n\n`),
  )
  .finally(async () => {
    await prisma.$disconnect();
  });

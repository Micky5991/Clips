import { PrismaClient, User } from "@prisma/client";
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

/**
 * @returns {User}
 */
function createRandomClip(uploaders: User[]) {
    return {
        title: faker.lorem.sentence(),
        uploaderId: uploaders[faker.number.int({ min: 0, max: uploaders.length -1 })].id,
        slug: faker.lorem.slug(),
        path: faker.system.filePath(),
    };
}

async function main() {
    const user = await prisma.user.upsert({
        where: { email: "user@test.de" },
        update: {},
        create: {
            email: "user@test.de",
            active: true,
            admin: false
        },
    });

    const admin = await prisma.user.upsert({
        where: { email: "admin@test.de" },
        update: {},
        create: {
            email: "admin@test.de",
            active: true,
            admin: true
        },
    });

    const clips = [...new Array(32)].map(() => createRandomClip([ user, admin ]));

    await prisma.clip.createMany({
        data: clips,
    })
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit();
    });

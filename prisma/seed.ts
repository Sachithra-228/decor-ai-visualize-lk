import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await hash("Password123!", 12);

  const researcher = await prisma.user.upsert({
    where: { email: "researcher@example.com" },
    update: {},
    create: {
      name: "S.A. Wijesinghe",
      email: "researcher@example.com",
      passwordHash,
      role: "RESEARCHER"
    }
  });

  await prisma.user.upsert({
    where: { email: "supervisor@example.com" },
    update: {},
    create: {
      name: "Research Supervisor",
      email: "supervisor@example.com",
      passwordHash,
      role: "SUPERVISOR"
    }
  });

  await prisma.questionnaire.upsert({
    where: { id: "phase-1-default-questionnaire" },
    update: {},
    create: {
      id: "phase-1-default-questionnaire",
      title: "Default MBA Research Questionnaire",
      kind: "PILOT",
      status: "DRAFT",
      creatorId: researcher.id,
      versions: {
        create: {
          versionNumber: 1,
          sections: {
            create: [
              {
                code: "A",
                title: "Business Profile",
                order: 1
              },
              {
                code: "B",
                title: "AI-Generated Design Visualization",
                order: 2
              }
            ]
          }
        }
      }
    }
  });

  await prisma.theme.upsert({
    where: { name: "Adoption Conditions" },
    update: {},
    create: {
      name: "Adoption Conditions",
      description: "Device access, connectivity, cost, skills, trust, and privacy factors."
    }
  });

  await prisma.theme.upsert({
    where: { name: "Workflow Integration" },
    update: {},
    create: {
      name: "Workflow Integration",
      description: "How owners combine AI outputs with feasible production decisions."
    }
  });

  await prisma.theme.upsert({
    where: { name: "Business Performance" },
    update: {},
    create: {
      name: "Business Performance",
      description: "Reported changes in efficiency, satisfaction, conversion, and repeat orders."
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });

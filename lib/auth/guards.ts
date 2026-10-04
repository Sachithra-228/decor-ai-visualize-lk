import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import type { Role } from "@prisma/client";

export async function requireUser() {
  const session = await auth();

  if (!session?.user) {
    redirect("/en/sign-in");
  }

  return session.user;
}

export async function requireRole(roles: Role[]) {
  const user = await requireUser();

  if (!roles.includes(user.role)) {
    redirect("/en");
  }

  return user;
}

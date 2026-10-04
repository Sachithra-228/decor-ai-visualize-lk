"use server";

import { hash } from "bcryptjs";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { Prisma } from "@prisma/client";
import { signIn } from "@/lib/auth";
import { db } from "@/lib/db";
import { registerSchema, signInSchema } from "@/lib/validation/auth";

type FormState = {
  ok: boolean;
  message: string;
};

const databaseUnavailableMessage =
  "The database is not reachable. Start PostgreSQL and check DATABASE_URL before creating accounts.";

function isDatabaseConnectionError(error: unknown) {
  return (
    error instanceof Prisma.PrismaClientInitializationError ||
    error instanceof Prisma.PrismaClientKnownRequestError
  );
}

export async function registerOwnerAction(
  _previousState: FormState | undefined,
  formData: FormData
): Promise<FormState> {
  const parsed = registerSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return { ok: false, message: parsed.error.issues[0]?.message ?? "Invalid registration details." };
  }

  try {
    const existing = await db.user.findUnique({ where: { email: parsed.data.email } });

    if (existing) {
      return { ok: false, message: "An account already exists for this email address." };
    }

    await db.user.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        passwordHash: await hash(parsed.data.password, 12),
        role: "BUSINESS_OWNER"
      }
    });
  } catch (error) {
    if (isDatabaseConnectionError(error)) {
      return { ok: false, message: databaseUnavailableMessage };
    }

    throw error;
  }

  redirect("/en/sign-in");
}

export async function signInAction(
  _previousState: FormState | undefined,
  formData: FormData
): Promise<FormState> {
  const parsed = signInSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return { ok: false, message: parsed.error.issues[0]?.message ?? "Invalid sign-in details." };
  }

  try {
    await signIn("credentials", {
      email: parsed.data.email,
      password: parsed.data.password,
      redirectTo: "/en/owner"
    });
    return { ok: true, message: "" };
  } catch (error) {
    if (error instanceof AuthError) {
      return { ok: false, message: "Email or password is incorrect." };
    }

    if (isDatabaseConnectionError(error)) {
      return { ok: false, message: databaseUnavailableMessage };
    }

    throw error;
  }
}

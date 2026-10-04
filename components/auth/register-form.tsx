"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { registerOwnerAction } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function SubmitButton() {
  const { pending } = useFormStatus();
  return <Button disabled={pending}>{pending ? "Creating..." : "Create account"}</Button>;
}

export function RegisterForm() {
  const [state, action] = useActionState(registerOwnerAction, { ok: true, message: "" });

  return (
    <form action={action} className="mt-6 space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" autoComplete="name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" autoComplete="new-password" required />
      </div>
      {!state.ok && <p className="text-sm text-destructive">{state.message}</p>}
      <SubmitButton />
    </form>
  );
}

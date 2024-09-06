import { signUpAction } from "@/utils/auth-helpers/actions";
import { FormMessage, Message } from "@/components/ui/form-message";
import Link from "next/link";
import { SubmitButton } from "@/components/ui/submit-button";

export default function Example({ searchParams }: { searchParams: Message }) {
  return (
    <form className="flex-1 flex flex-col min-w-64">
      <h1 className="text-2xl font-medium">Sign up</h1>
      <p className="text-sm text text-foreground">
        Already have an account?{" "}
        <Link className="text-foreground font-medium underline" href="/sign-in">
          Sign in
        </Link>
      </p>
      <FormMessage message={searchParams} />
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-3">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            name="email"
            type="text"
            placeholder="you@example.com"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            name="password"
            type="text"
            placeholder="Your password"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </label>
        <SubmitButton
          pendingText="Signing Up..."
          formAction={signUpAction}
          className="btn max-w-xs mt-3"
        >
          Sign up
        </SubmitButton>
      </div>
    </form>
  );
}

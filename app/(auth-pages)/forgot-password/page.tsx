import Link from "next/link";

export default function Example() {
  return (
    <>
      <form className="flex-1 flex flex-col min-w-64">
        <div>
          <h1 className="text-2xl font-medium">Reset Password</h1>
          <p className="text-sm text-secondary-foreground">
            Already have an account?{" "}
            <Link
              className="text-foreground font-medium underline"
              href="/sign-in"
            >
              Sign in
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <button className="btn max-w-xs mt-3">Reset Password</button>
        </div>
      </form>
    </>
  );
}

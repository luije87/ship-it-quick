import "@/app/globals.css";
import { signOutAction } from "@/utils/auth-helpers/actions";
import { APPLICATION_NAME } from "@/config";
import { SubmitButton } from "@/components/ui/submit-button";
import Link from "next/link";

export const metadata = {
  title: "Ship it quick ⚡️",
  description: "Generated by Next.js",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="navbar bg-base-100 mx-auto flex items-center justify-between px-2 sm:px-4 lg:max-w-7xl">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl" href={"/"}>
            {APPLICATION_NAME}
          </Link>
        </div>
        <div className="flex-none">
          <form>
            <SubmitButton
              pendingText="Logging out..."
              formAction={signOutAction}
              className="btn"
            >
              Log out
            </SubmitButton>
          </form>
        </div>
      </div>
      <main>{children}</main>
    </>
  );
}

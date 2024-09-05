import "@/app/globals.css";
import { APPLICATION_NAME } from "@/config";
import { signOutAction } from "@/utils/auth-helpers/actions";
import { createClient } from "@/utils/supabase/server";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ship it Quick",
  description: "The fastest way to ship your projects",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <>
      <div className="navbar bg-base-100 fixed">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            {APPLICATION_NAME}
          </Link>
        </div>
        <div className="flex-none">
          <ul className="px-3 gap-5 flex mr-5">
            <li className="hover:link">
              <a
                target="_blank"
                href="https://github.com/luije87/ship-it-quick"
                className="hover:link flex items-center justify-center gap-1"
              >
                Github
                <ArrowUpRightIcon className="h-5 w-5" />
              </a>
            </li>
            <li className="hover:link">
              <Link href="/pricing" className="hover:link">
                Pricing
              </Link>
            </li>
            <li className="hover:link">
              <Link href="/dashboard" className="hover:link">
                Dashboard
              </Link>
            </li>
          </ul>
          {user ? (
            <>
              <form>
                <button formAction={signOutAction} className="btn">
                  Sign out
                </button>
              </form>
            </>
          ) : (
            <>
              {" "}
              <Link href="/sign-in" className="btn">
                Sign in
              </Link>
            </>
          )}
        </div>
      </div>
      <main>{children}</main>
    </>
  );
}

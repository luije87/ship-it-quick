import "@/app/globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ship it Quick",
  description: "The fastest way to ship your projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="navbar bg-base-100 fixed">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            Ship It Quick ⚡️
          </Link>
        </div>
        <div className="flex-none">
          <ul className="px-3 gap-5 flex mr-5">
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
          <Link href="/sign-in" className="btn">
            Sign in
          </Link>
        </div>
      </div>
      <main>{children}</main>
    </>
  );
}

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
            Just Ship It ⚡️
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/pricing">Pricing</a>
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

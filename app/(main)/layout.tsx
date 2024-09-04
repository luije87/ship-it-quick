import "@/app/globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Just Ship It ⚡️</a>
        </div>
        <div className="flex-none">
          <Link href="/sign-in" className="btn">
            Sign in
          </Link>
        </div>
      </div>
      <main>{children}</main>
    </>
  );
}

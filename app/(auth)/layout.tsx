import "@/app/globals.css";
import { APPLICATION_NAME } from "@/config";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ship it quick ⚡️",
  description: "Generated by create next app",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="navbar bg-base-100 mx-auto flex items-center justify-between px-2 sm:px-4 lg:max-w-7xl">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl" href={"/"}>
            {APPLICATION_NAME}
          </Link>
        </div>
      </div>
      <div className="flex max-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">{children}</div>
      </div>
    </>
  );
}

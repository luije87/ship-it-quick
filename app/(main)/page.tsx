import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-5xl">
          <h1 className="text-5xl font-bold">Launch Your Startup</h1>
          <h1 className="text-3xl font-bold">Faster, Smarter and Easier</h1>
          <p className="py-6">
            In the fast-paced world of shipping startups, speed is everything.
            "Ship it Quick" empowers you to launch your startup with lightning
            speed using cutting-edge technology. Our platform combines the power
            of Next.js, Supabase, Tailwind CSS, DaisyUI, and Resend, so you can
            focus on innovation while we handle the heavy lifting.
          </p>
          <Link className="btn btn-primary" href={"/dashboard"}>
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

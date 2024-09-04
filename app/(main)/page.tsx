import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-5xl">
          <h1 className="text-5xl font-bold mb-5">🚀</h1>
          <h1 className="text-5xl font-bold">Launch Your Startup today</h1>
          <h1 className="text-3xl font-bold">
            Faster, Smarter, Easier and Free
          </h1>
          <p className="py-6">
            In the fast-paced world of shipping startups, speed is everything.
            Ship it Quick empowers you to launch your startup with lightning
            speed using cutting-edge technology. Our platform combines the power
            of Supabase, Resend, Next.js, Tailwind CSS and Stripe, so you can
            focus on innovation while we handle the heavy lifting.
          </p>
          <div className="flex items-center justify-center gap-10 mt-10">
            <Image
              src={"/supabase-logo-wordmark--light.png"}
              width={100}
              alt={""}
              height={100}
            />
            <Image
              src={"/resend-wordmark-black.png"}
              width={100}
              alt={""}
              height={100}
            />
            <Image
              src={"/vercel-logotype-dark.png"}
              width={100}
              alt={""}
              height={100}
            />
            <Image
              src={"/tailwindcss-logotype.svg"}
              width={100}
              alt={""}
              height={100}
            />
            <Image
              src={"/Stripe_id7qRMcZ8P_2.png"}
              width={100}
              alt={""}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

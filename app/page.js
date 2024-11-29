import Image from "next/image";
import logo from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={logo}
        className="object-cover"
        fill
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className=" text-6xl md:text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <a
          href="/cabins"
          className="bg-accent-500 px-6 py-4 md:px-8 md:py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </a>
      </div>
    </main>
  );
}

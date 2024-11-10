import Image from "next/image";
import img1 from "@/public/about-1.jpg";
import img2 from "@/public/about-2.jpg";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-12 lg:gap-y-32 lg:gap-x-24 text-lg items-center px-4 sm:px-8">
      {/* First Image on Top for Mobile/Tablets */}
      <div className="lg:col-span-2 order-1 lg:order-none">
        <Image
          src={img1}
          alt="Family sitting around a fire pit in front of cabin"
          className="w-full h-auto"
        />
      </div>

      {/* Introductory Text Section */}
      <div className="lg:col-span-3 order-2 lg:order-none">
        <h1 className="text-4xl mb-6 lg:mb-10 text-accent-400 font-medium text-center lg:text-left">
          Welcome to Cozy Cabins
        </h1>

        <div className="space-y-8 text-center lg:text-left">
          <p>
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Bandarban Hills or Sajek Valley,
            this is your paradise away from home. But it&apos;s not just about
            the luxury cabins. It&apos;s about the experience of reconnecting
            with nature and enjoying simple pleasures with family.
          </p>
          <p>
            Our 8 luxury cabins provide a cozy base, but the real freedom and
            peace you&apos;ll find in the surrounding mountains. Wander through
            lush forests, breathe in the fresh air, and watch the stars twinkle
            above from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      {/* Second Image */}
      <div className="lg:col-span-2 order-3 lg:order-none">
        <Image
          src={img2}
          alt="Family that manages The Wild Oasis"
          className="w-full h-auto"
        />
      </div>

      {/* Family Management Text Section */}
      <div className="lg:col-span-3 order-4 lg:order-none">
        <h1 className="text-4xl mb-6 lg:mb-10 text-accent-400 font-medium text-center lg:text-left">
          Managed by our family since 1962
        </h1>

        <div className="space-y-8 text-center lg:text-left">
          <p>
            Since 1962, The Cozy Cabins has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&apos;ve maintained the essence of The Cozy
            Cabins, blending the timeless beauty of the mountains with the
            personal touch only a family business can offer. Here, you&apos;re
            not just a guest; you&apos;re part of our extended family. So join
            us at The Cozy Cabins soon, where tradition meets tranquility, and
            every visit is like coming home.
          </p>

          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

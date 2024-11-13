import CabinCard from "../_components/CabinCard";
import Navigation from "../_components/Navigation";
import { getCabins } from "../_lib/data-service";

export const metadata = {
  title: "Cabins",
};

export default async function Page() {
  const cabins = await getCabins();
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl mb-4 md:mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-base md:text-lg mb-6 md:mb-10">
        Cozy and luxurious cabins nestled in the heart of the Bandarban Hills or
        Sajek Valley. Picture yourself waking up to stunning mountain views,
        exploring nearby forests, or unwinding in a private hot tub under a
        starlit sky. Experience the beauty of nature in your own little home
        away from home. It&apos;s the perfect place for a peaceful and relaxing
        vacation. Welcome to your paradise.
      </p>

      {cabins.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {cabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}

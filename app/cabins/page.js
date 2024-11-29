import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Navigation from "../_components/Navigation";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";
export const revalidate = 0;
export const metadata = {
  title: "Cabins",
};

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl mb-4 md:mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-base text-sm md:text-lg mb-6 md:mb-10">
        Cozy and luxurious cabins nestled in the heart of the Bandarban Hills or
        Sajek Valley. Picture yourself waking up to stunning mountain views,
        exploring nearby forests, or unwinding in a private hot tub under a
        starlit sky. Experience the beauty of nature in your own little home
        away from home. It&apos;s the perfect place for a peaceful and relaxing
        vacation. Welcome to your paradise.
      </p>
      <div className="flex justify-end mb-8">
        <Filter></Filter>
      </div>
      <Suspense fallback={<Spinner></Spinner>} key={filter}>
        <CabinList filter={filter}></CabinList>
        <ReservationReminder></ReservationReminder>
      </Suspense>
    </div>
  );
}

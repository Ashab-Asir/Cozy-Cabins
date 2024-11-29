import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import TextExpander from "@/app/_components/TextExpander";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinid);
  return { title: `Cabin ${name}` };
}
export async function generateStaticParams() {
  const cabins = await getCabins();

  const ids = cabins.map((cabin) => ({ cabinid: String(cabin.id) }));
  return ids;
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinid);
  console.log(cabin);
  const baseUrl =
    "https://quspfurlhyjelrremzah.supabase.co/storage/v1/object/public/cabin-images/";
  const match = cabin.image.match(/imageUrl\s*\+\s*"([^"]+)"/);
  const filename = match ? match[1] : null;
  const newImg = cabin.image.replace(
    /imageUrl\s*\+\s*"([^"]+)"/g,
    (_, filename) => `${baseUrl}${filename}`
  );

  return (
    <div className="max-w-6xl mx-auto mt-8 px-3 sm:px-6 lg:px-8">
      <Cabin cabin={cabin} newImg={newImg}></Cabin>
      <div>
        <h2 className="text-2xl md:text-5xl font-semibold text-center mb-10 text-accent-400 text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner></Spinner>}>
          <Reservation cabin={cabin}></Reservation>
        </Suspense>
      </div>
    </div>
  );
}

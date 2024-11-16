import TextExpander from "@/app/_components/TextExpander";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

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
  const { name, maxCapacity, image, description } = cabin;
  const baseUrl =
    "https://quspfurlhyjelrremzah.supabase.co/storage/v1/object/public/cabin-images/";
  const match = image.match(/imageUrl\s*\+\s*"([^"]+)"/);
  const filename = match ? match[1] : null;
  const newImg = image.replace(
    /imageUrl\s*\+\s*"([^"]+)"/g,
    (_, filename) => `${baseUrl}${filename}`
  );

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-10 md:gap-20 border border-primary-800 py-3 px-6 sm:px-10 mb-12 md:mb-24">
        <div className="relative h-64 sm:h-70 md:h-[380px] w-full scale-100 md:scale-[1.15] -translate-x-1 md:-translate-x-3">
          <Image
            src={newImg}
            alt={`Cabin ${name}`}
            layout="fill"
            className="object-cover rounded-lg"
          />
        </div>

        <div>
          <h3 className="text-accent-100 font-black text-4xl sm:text-5xl md:text-7xl mb-5 translate-x-0 md:translate-x-[-254px] bg-primary-950 p-3 md:p-6 pb-1 w-full md:w-[150%]">
            Cabin {name}
          </h3>

          <p className="text-base sm:text-lg text-primary-300 mb-6 md:mb-10">
            <TextExpander>{description}</TextExpander>
          </p>

          <ul className="flex flex-col gap-3 sm:gap-4 mb-6 md:mb-7">
            <li className="flex gap-2 sm:gap-3 items-center">
              <UsersIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
              <span className="text-base sm:text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-2 sm:gap-3 items-center">
              <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
              <span className="text-base sm:text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex gap-2 sm:gap-3 items-center">
              <EyeSlashIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
              <span className="text-base sm:text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}

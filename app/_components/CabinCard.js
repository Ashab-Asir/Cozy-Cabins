import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;
  const baseUrl =
    "https://quspfurlhyjelrremzah.supabase.co/storage/v1/object/public/cabin-images/";
  const match = image.match(/imageUrl\s*\+\s*"([^"]+)"/);

  const filename = match ? match[1] : null;
  const newImg = image.replace(
    /imageUrl\s*\+\s*"([^"]+)"/g,
    (_, filename) => `${baseUrl}${filename}`
  );

  return (
    <div className="flex flex-col md:flex-row border border-primary-800 rounded-lg overflow-hidden bg-primary-950 shadow-lg">
      <div className="relative h-48 md:h-60 lg:h-68  md:w-1/2 lg:w-1/3">
        <Image
          src={newImg}
          fill
          alt={`Cabin ${name}`}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow p-4">
        <div>
          <h3 className="text-accent-500 font-semibold text-xl lg:text-2xl mb-2">
            Cabin {name}
          </h3>
          <div className="flex gap-3 items-center mb-2">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <p className="text-sm lg:text-lg text-primary-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>
          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-xl lg:text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-600">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-xl lg:text-3xl font-[350]">
                ${regularPrice}
              </span>
            )}
            <span className="text-primary-200 text-sm lg:text-base">
              / night
            </span>
          </p>
        </div>

        <div className="text-right mt-4">
          <a
            href={`/cabins/${id}`}
            className="inline-block py-2 px-4 border border-primary-800 rounded hover:bg-accent-600 transition-all hover:text-primary-900 text-sm lg:text-base"
          >
            Details & reservation &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;

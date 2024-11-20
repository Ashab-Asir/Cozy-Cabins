import Image from "next/image";
import React from "react";
import TextExpander from "./TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

export default function Cabin({ cabin, newImg }) {
  const { name, maxCapacity, image, description } = cabin;
  return (
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
              For up to <span className="font-bold">{maxCapacity}</span> guests
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
  );
}

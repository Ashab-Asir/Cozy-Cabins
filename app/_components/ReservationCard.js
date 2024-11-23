import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  const baseUrl =
    "https://quspfurlhyjelrremzah.supabase.co/storage/v1/object/public/cabin-images/";
  const match = image.match(/imageUrl\s*\+\s*"([^"]+)"/);
  const filename = match ? match[1] : null;
  const newImg = image.replace(
    /imageUrl\s*\+\s*"([^"]+)"/g,
    (_, filename) => `${baseUrl}${filename}`
  );

  return (
    <div className="flex flex-col md:flex-row border border-primary-800 rounded-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative h-40 md:h-32 w-full md:w-1/3">
        <Image
          fill
          src={newImg}
          alt={`Cabin ${name}`}
          className="object-cover border-b md:border-b-0 md:border-r border-primary-800"
        />
      </div>

      {/* Content Section */}
      <div className="flex-grow px-4 md:px-6 py-4 flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-lg md:text-xl font-semibold">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 h-6 md:h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 h-6 md:h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              upcoming
            </span>
          )}
        </div>

        <p className="text-sm md:text-lg text-primary-300">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex flex-col md:flex-row gap-3 md:gap-5 mt-auto items-baseline">
          <p className="text-lg md:text-xl font-semibold text-accent-400">
            ${totalPrice}
          </p>
          <p className="hidden md:block text-primary-300">&bull;</p>
          <p className="text-sm md:text-lg text-primary-300">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="ml-auto text-xs md:text-sm text-primary-400">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-row md:flex-col border-t md:border-t-0 md:border-l border-primary-800 w-full md:w-[100px]">
        {!isPast(startDate) && (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex items-center gap-2 justify-center uppercase text-xs font-bold text-primary-300 border-b md:border-b-0 md:border-r border-primary-800 px-3 py-2 hover:bg-accent-600 transition-colors hover:text-primary-900"
            >
              <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
              <span>Edit</span>
            </Link>
            <DeleteReservation bookingId={id} />
          </>
        )}
      </div>
    </div>
  );
}

export default ReservationCard;

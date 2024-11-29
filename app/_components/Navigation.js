import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session = await auth();
  return (
    <nav className="z-10 text-lg sm:text-xl mt-4 sm:mt-0">
      <ul className="flex gap-4 sm:gap-10 md:gap-16 items-center justify-center sm:justify-end">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors text-sm md:text-base"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors text-sm md:text-base"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-1 text-sm md:text-base"
            >
              <img
                className="h-6 md:h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

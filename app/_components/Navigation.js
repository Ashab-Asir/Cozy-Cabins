import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="z-10 text-lg sm:text-xl mt-4 sm:mt-0">
      <ul className="flex gap-4 sm:gap-10 md:gap-16 items-center justify-center sm:justify-end">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors"
          >
            Guest area
          </Link>
        </li>
      </ul>
    </nav>
  );
}

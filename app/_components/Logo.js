import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 sm:gap-4 z-10">
      <img
        src="/logo4.png"
        height="48"
        width="48"
        alt="The Wild Oasis logo"
        className="h-10 w-10 sm:h-12 sm:w-12"
      />
      <span className="text-lg sm:text-xl font-semibold text-primary-100">
        The Cozy Cabins
      </span>
    </Link>
  );
}

export default Logo;

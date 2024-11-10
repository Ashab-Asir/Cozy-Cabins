import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 sm:gap-4 z-10">
      <Image
        src="/logo4.png"
        height="80"
        width="80"
        quality={100}
        alt="The Wild Oasis logo"
        className="h-15 w-15 sm:h-15 sm:w-15"
      />
      <span className="text-lg sm:text-xl font-semibold text-primary-100">
        The Cozy Cabins
      </span>
    </Link>
  );
}

export default Logo;

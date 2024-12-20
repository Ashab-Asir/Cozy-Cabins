import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header() {
  return (
    <header className="border-b border-primary-900 px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center max-w-7xl mx-auto w-full">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;

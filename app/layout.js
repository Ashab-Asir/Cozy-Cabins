import Header from "./_components/Header";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s - Coszy Cabins",
    default: "Welcome To Cozy Cabins",
  },
  description: "The is a cabin booking site",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 flex flex-col relative min-h-screen`}
      >
        <Header></Header>
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}

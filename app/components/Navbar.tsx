import Image from "next/image";
import Link from "next/link";
import DesktopLogo from "../../public/airbnb-desktop.png";
import MobileLogo from "../../public/airbnb-mobile.webp";
import { UserNav } from "./UserNav";

export function Navbar() {
  return (
    <nav className=" w-full border-b">
      <div className="flex  items-center justify-between container mx-auto px-5 py-5 lg:px-10">
        <Link href={"/"}>
          <Image
            src={DesktopLogo}
            alt={"airbnb logo"}
            className="w-32 hidden lg:block"
          />
          <Image
            src={MobileLogo}
            alt={"airbnb  mobile logo"}
            className="w-12 lg:hidden block"
          />
        </Link>

        <div className=" rounded-full border px-5 py-2">
          <h1>Hello from the search</h1>
        </div>
        <UserNav/>
      </div>
    </nav>
  );
}

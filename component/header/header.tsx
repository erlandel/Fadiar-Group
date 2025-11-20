import Menu from "@/component/menu/menu";
import Serchbar from "@/component/searchBar/searchBar";
import { TablerShoppingCart, TablerUserCircle } from "@/icons/icons";
import Image from "next/image";
import "@fontsource/just-me-again-down-here";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="pt-4 flex justify-between px-4 md:px-0 md:justify-around items-start">
        <div className="hidden md:block">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="h-10 w-32"
            priority 
          />
        </div>

        <div className="hidden md:block">
          <Serchbar />
        </div>

        <div className=" md:hidden">
          <Menu />
        </div>

        <div className="flex">
          <Link href="/cart1">
            <TablerShoppingCart className="mr-4 cursor-pointer" />
          </Link>
          <TablerUserCircle className="cursor-pointer" />
        </div>
      </div>

      <div className="hidden md:block">
        <Menu />
      </div>

      <div className="md:hidden px-4">
        <Serchbar />
      </div>
    </>
  );
}

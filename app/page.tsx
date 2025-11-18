import Menu from "@/component/menu/menu";
import Serchbar from "@/component/searchBar/searchBar";
import { TablerShoppingCart, TablerUserCircle } from "@/icons/icons";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-white  w-screen h-screen">
        <div className="pt-4 flex justify-around items-start">
          <div>
            <Image src="/images/logo.svg" alt="Logo" width={100} height={100} />
          </div>

          <div>
            <Serchbar />
          </div>

          <div className="flex ">
            <div>
              <TablerShoppingCart className="mr-4" />
            </div>

            <div>
              <TablerUserCircle />
            </div>
          </div>
        </div>

        <div>
          <Menu />
        </div>

        <div id="blanco"className="bg-white w-full h-80 relative">
          <div id="azul" className="bg-[#062D54] w-full h-60 py-4 flex justify-center items-center">       
            

              <div className="flex h-full w-4xl justify-center">
              <div id="lorem" className="flex justify-center items-center w-2/4">lorem</div>
              <div id="sazon" className="w-2/4">
              <h1>echakle sason a la olla</h1>
              <div id="img" className="absolute top-0 left-24 h-full w-full flex justify-center items-center">
          <Image
            src="/images/pot.svg"
            alt="Logo"
            width={0}
            height={0}
            className="h-full w-auto block"
          />
        </div>
              </div>


              </div>

          </div>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import "@fontsource/just-me-again-down-here";

export default function SectionPromoHome2() {
  return (
    <>
      <div className="bg-[#022854] w-full h-52 py-4 mb-4 flex justify-end items-center ">
        <div className="mx-20">
          <span className="text-[#D69F04] font-bold text-2xl">
            Próximamente
            <h3 className="text-white text-lg font-bold">en nuestra Tienda</h3>
          </span>
        </div>

        <div className="bg-[#022854] w-full h-52 py-4 relative flex justify-center items-center overflow-visible">
            
          <div className="absolute bottom-0 xl:mr-100 ">
            <Image
              src="/images/Rectangle.png"
              alt="icon"
              width={1000}
              height={1000}
              className="md:w-300 md:h-10 xl:w-130 xl:h-10 "
            />
          </div>

            <div className="absolute bottom-0 ml-40  xl:ml-60 ">
            <Image
              src="/images/Vector15.png"
              alt="icon"
              width={1000}
              height={1000}
              className="md:w-190 md:h-15 xl:w-230  "
            />
          </div>

          <div className="absolute bottom-0 mb-1 ml-19 xl:ml-35 ">
            <Image
              src="/images/Vector16.png"
              alt="icon"
              width={200}
              height={200}
              className="md:w-230 md:h-20 "
            />
          </div>

     

          <div className="absolute  xl:ml-20">
            <Image
              src="/images/productos.png"
              alt="icon"
              width={200}
              height={600}
              className="scale-150 md:scale-[1.8] lg:scale-[2.3] xl:scale-[2.5]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

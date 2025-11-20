
import { CheckoutStepper } from "@/component/ui/stepper";


export default function Cart() {

  return (
   <div className="px-4 md:px-25 2xl:px-35">
        <div className="mt-5">
          <p className="text-xs text-gray-400 mb-4">
            <span className="text-gray-400">Home -  </span>
            <span className="text-primary font-semibold">Carrito de Compras</span>
          </p>
          <h1 className="text-3xl text-primary font-bold ">Carrito</h1>
        </div>

        <div className="flex justify-center items-center ">
          <div className=" w-140  ml-15">
        <CheckoutStepper currentStep={0}  />
          </div>
        </div>

     
    </div>
  );
}
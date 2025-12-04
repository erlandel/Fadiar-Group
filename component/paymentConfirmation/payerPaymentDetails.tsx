"use client";

import BuyerDetailsStore from "@/store/buyerDetailsStore";
import BeneficiaryDetailsStore from "@/store/beneficiaryDetailsStore";
import { useRouter } from "next/navigation";

export default function PayerPaymentDetails() {
  const router = useRouter();
  const buyerDetails = BuyerDetailsStore((state) => state.buyerDetails);
  const beneficiaryDetails = BeneficiaryDetailsStore((state) => state.beneficiaryDetails);

  return (
    <div className="max-w-90" style={{ wordWrap: 'break-word' }}>
      <div>
        <h5 className="text-primary font-bold text-xl ml-4 pb-1">
          DATOS DE PAGO
        </h5>
        <div className="w-full  border-b-2 border-gray"></div>
      </div>

      <div className="space-y-3 mt-4 ">
        <div className="ml-4">
          <p className="text-[gray] ">
            Método de pago:{" "}
            <span className="text-primary break-all">{buyerDetails.paymentMethod}</span>
          </p>
        </div>

        <div className="w-full bg-[#F5F7FA] ">
          <p className="ml-4 text-primary ">Datos de beneficiario</p>
        </div>

        <div className="ml-4">
          <p className="text-[gray] ">
            Nombre: <span className="text-primary break-all">{buyerDetails.firstName}</span>
          </p>
        </div>

        <div className="ml-4">
          <p className="text-[gray] ">
            Apellidos: <span className="text-primary break-all">{buyerDetails.lastName}</span>
          </p>
        </div>

        <div className="ml-4">
          <p className="text-[gray] ">
            Teléfono: <span className="text-primary break-all">{buyerDetails.phoneCountry} {buyerDetails.phoneValue}</span>
          </p>
        </div>

        <div className="ml-4">
          <p className="text-[gray] ">
            Correo electrónico:{" "}
            <span className="text-primary break-all">{buyerDetails.email}</span>
          </p>
        </div>
        <div className="w-full bg-[#F5F7FA] ">
          <p className="ml-4 text-primary ">Dirección de entrega</p>
        </div>

        <div className="ml-4">
          <p className="text-[gray] ">
            Dirección:{" "}
            <span className="text-primary break-all">
              {buyerDetails.address}
            </span>
          </p>
        </div>

        <div className="w-full  border-b-2 border-gray"></div>

        <div className="ml-4">
          <p className="text-accent cursor-pointer" onClick={() => router.push('/cart2')}>Editar datos de pago</p>
        </div>
      </div>
    </div>
  );
}

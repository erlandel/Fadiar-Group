"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const [qty, setQty] = useState(1);

  const product = {
    id,
    category: "Cocinas y Hornos",
    title: "Freidora de Aire 5.5 L",
    brand: "Marca Eko",
    description:
      "Cocina más saludable y sin complicaciones. Disfruta de tus comidas favoritas con menos aceite gracias a esta freidora de aire de 5.5 litros. Con un diseño moderno en color negro, ofrece potencia de 1500W, control de temperatura de 80°C a 200°C y temporizador de hasta 60 minutos. Ideal para preparar alimentos crujientes y deliciosos.",
    warranty: "Garantía 1 Año",
    price: 63,
    oldPrice: 80,
    image: "/images/pot.png",
    images: ["/images/pot.png", "/images/pot.png", "/images/pot.png"],
    properties: [
      { key: "CAPACIDAD", value: "5.5 Litros" },
      { key: "POTENCIA", value: "1500W" },
      { key: "VOLTAJE", value: "120 V" },
      { key: "TEMPERATURA", value: "80°C a 200°C" },
      { key: "TEMPORIZADOR", value: "60 Min" },
      { key: "COLOR", value: "Negro" },
    ],
  };

  return (
    <>
      <div className="px-4 md:px-20 2xl:px-36 mt-10">

        <div id={"list"} className="mt-10">
          <p className="text-xs text-gray-400 mb-4">
            <span className="text-gray-400">Home - </span>
            <span className="text-gray-400">Products - </span>
            <span className="text-primary font-semibold">{id}</span>
          </p>
          <h1 className="text-3xl text-primary font-bold">Detalles del Producto</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-16 mt-10">

          <div className="md:w-1/3">
            {/* Imagen Principal */}
            <Image
              src={product.image}
              alt="producto"
              width={500}
              height={500}
              className="w-full h-auto rounded-xl object-cover"
            />

            {/* Miniaturas */}
            <div className="flex gap-2 mt-3">
              {product.images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt="thumb"
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-md object-cover border cursor-pointer hover:border-blue-500 duration-150"
                />
              ))}
            </div>
          </div>

          {/* 📌 INFORMACIÓN */}
          <div className="md:w-2/3">
            <p className="text-xs text-gray-500">{product.category}</p>
            <h2 className="text-3xl font-bold text-[#1A2B49]">{product.title}</h2>
            <p className="text-sm text-gray-600">Marca: <span className="text-[#1A2B49] font-medium">{product.brand}</span></p>

            {/* Garantía */}
            <p className="text-yellow-500 font-semibold text-sm mt-1">{product.warranty}</p>

            {/* Precios */}
            <div className="mt-3 flex items-center gap-4">
              <p className="text-3xl font-bold text-primary">${product.price} USD</p>
              <p className="text-gray-400 line-through text-lg">${product.oldPrice} USD</p>
            </div>

            {/* Descripción */}
            <p className="text-gray-600 text-sm mt-3 max-w-xl leading-relaxed">
              {product.description}
            </p>

            {/* Cantidad */}
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => qty > 1 && setQty(qty - 1)}
                className="h-9 w-9 rounded-md border bg-gray-100 text-primary text-xl flex justify-center items-center"
              >
                -
              </button>
              <span className="text-lg font-medium">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="h-9 w-9 rounded-md border bg-gray-100 text-primary text-xl flex justify-center items-center"
              >
                +
              </button>
            </div>

            {/* Tabla de propiedades */}
            <div className="mt-8 bg-white shadow-sm rounded-xl p-5 border">
              <h3 className="font-semibold text-[#1A2B49] mb-3">Propiedades</h3>
              <table className="w-full text-sm text-gray-600">
                <tbody>
                  {product.properties.map((p, i) => (
                    <tr key={i} className="border-b last:border-none">
                      <td className="py-2 font-medium">{p.key}</td>
                      <td className="py-2 text-right">{p.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

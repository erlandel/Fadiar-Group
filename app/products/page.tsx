
"use client";
import BottomShadow from "@/component/ui/bottomShadow";
import SectionPromoHome1 from "@/section/sectionPromoHome1";
import { FilterSection } from "@/component/ui/filterModal";
import { useState } from "react";

export default function Products(){
    const [category, setCategory] = useState<string[]>([]);
    const [price, setPrice] = useState([0, 200]);
    const [brands, setBrands] = useState<string[]>([]);
    const [relevant, setRelevant] = useState<string[]>([]);
    return(
        <main className="flex w-full h-auto">

            <div id="Sidebar" className="w-1/4 mx-4">

            {/* Categorías */}
      <FilterSection
        title="Categorías"
        type="checkbox"
        selected={category}
        onChange={setCategory}
        options={[
          { label: "Refrigeradores y Neveras", value: "neveras" },
          { label: "Cocinas y Hornos", value: "cocinas" },
          { label: "Lavadoras y Secadoras", value: "lavadoras" },
        ]}
      />

      {/* Precio */}
      <FilterSection
        title="Precio"
        type="range"
        min={0}
        max={200}
        valueMin={price[0]}
        valueMax={price[1]}
        onChange={setPrice}
      />

      {/* Marcas */}
      <FilterSection
        title="Marcas"
        type="checkbox"
        selected={brands}
        onChange={setBrands}
        options={[
          { label: "Ecko", value: "ecko" },
          { label: "Midea", value: "midea" },
          { label: "Columbia", value: "columbia" },
        ]}
      />

      {/* Relevantes */}
      <FilterSection
        title="Relevantes"
        type="radio"
        selected={relevant}
        onChange={(value) => setRelevant(value as string[])}
        options={[
          { label: "Ofertas", value: "ofertas" },
          { label: "Más vendidos", value: "masVendidos" },
          { label: "Próximamente", value: "proximamente" },
        ]}
      />

            </div>



            <div id="content" className="w-3/4 relative overflow-hidden">
                <div className="relative overflow-hidden">
                    <SectionPromoHome1 />
                </div>

                <div id="shadow-arrocera" className="flex justify-center relative left-44 top-[-110px]">
                    <BottomShadow width="200px" height="80px" opacity={0.6} />
                </div>

                <div id="shadow-reina" className="flex justify-center relative left-92 top-[-120px]">
                    <BottomShadow width="200px" height="80px" opacity={0.6} />
                </div>
            </div>



        </main>
    );
}
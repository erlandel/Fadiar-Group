"use client";
import { IcSharpSearch } from "@/icons/icons";
import { useState, useMemo } from "react";
import { allHouseholdAppliances } from "@/data/allHouseholdAppliances";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Serchbar() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  // Filtrar productos basándose en el query
  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];

    const searchTerm = query.toLowerCase().trim();
    
    return allHouseholdAppliances.filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(searchTerm);
      const brandMatch = product.brand.toLowerCase().includes(searchTerm);
      const categoryMatch = product.categoria?.name.toLowerCase().includes(searchTerm);
      
      return nameMatch || brandMatch || categoryMatch;
    });
  }, [query]);

  const handleProductClick = (productId: number) => {
    setQuery("");
    setIsFocused(false);
    router.push(`/products/${productId}`);
  };

  return (
    <>
      <div>
        <div className="flex justify-center w-full lg:w-160">
          <div className="relative w-full md:min-w-120 lg:max-w-160">
            <input
              type="text"
              placeholder="Buscar producto"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              className="w-full outline-none text-base text-black placeholder-gray-400 bg-transparent px-4 pb-1 border-b border-[#022954]"
            />
            <button className="absolute right-3 top-0 cursor-pointer">
              <IcSharpSearch className="w-7 h-7 text-gray-800" />
            </button>

            {/* Dropdown de resultados */}
            {isFocused && query.trim() && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                {filteredProducts.length > 0 ? (
                  <div className="py-2">
                    {filteredProducts.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => handleProductClick(product.id)}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors text-left cursor-pointer"
                      >
                        <div className="relative w-16 h-16 shrink-0">
                          <Image
                            src={product.img}
                            alt={product.name}
                            fill
                            className="object-contain rounded"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {product.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {product.brand} • {product.categoria?.name}
                          </p>
                          <p className="text-sm font-semibold text-[#022954] mt-1">
                            ${product.temporal_price || product.price}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-8 text-center text-gray-500">
                    No se encontraron productos
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

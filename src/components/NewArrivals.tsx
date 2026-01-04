const products = [
  {
    id: 1,
    name: "Stealth Hoodie",
    price: "$85.00",
    description: "Lightweight thermal control",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0y8k86nJAUGEVciFyR6PD5_wquhLbFHPDnqr-oExYUmy_9p8GwLwMLjVY8HM8JcSvgPdx7GegVoxB-d6ztzvn0RcEpf_CMemWW80umVHpq3vwS0EAHU8fNhtM2Ovt8ml6YWbw0swPyPz1VFaTdPUdF9C_54NVDVTSoTvTItT5N6RiXOP3udxFCPi4oXGIeA9bNdN0NpR1crUNC-P5FkJsG2jB86P7Ubnn3tmBUYTm6ghI7T9d4B5_0qsjK40bZbMvDhvws6ntS4Sj",
    isNew: true,
  },
  {
    id: 2,
    name: "Velocity Leggings",
    price: "$68.00",
    description: "High-compression fit",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBXKSHnHZylSeJS56-SQm9qCNkvhGMj60PscFeNt0GFO-P9JWIf5pNnhKGpCmer67qdtCdEvlsc1hpGh52_Xz559jGsQkGUPdB62c0atOgmX_qsIPcBymKauYcDJPfU-IrnTGfo7iiTNHPl7dTD7hAiRbFKAupNcrDyZ3RFh2B1voh2TE6cVMRc0caUX92p9hBkq0uNqqQkjwQTgN3nkVwwpg5f95Prol-eGIQfvTuX4Lz61naSvB93zU_ltvuCkd7p7KVXEXqHhjUG",
    isNew: false,
  },
  {
    id: 3,
    name: "Core Compression Tee",
    price: "$45.00",
    description: "Muscle support technology",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCxkHC_NcvBPf0JGAXMNdKVyllvkfJhFL3_ISjnkvUdigpw5VzvU3x3e5IPjfrDV5eFrXVC7Clys4VE2F6qyCUAam0eym-h3p75FXpWpqhnjQNFSVUImP4czcRwQ5mrD09gJDoGkDOOl2xn_AiVvqrYcvdfI7HluI3rAxqxAvAQhQnJcTfmCcVHxxKf41wx6YyUcUuwEcc4hKQ7Cv-hmx1kPaPbs2cCxCDCHnbXVLhyZ2ccytms0rRm4rbjV6DVcYmFvY0cuI3EZ3yO",
    isNew: false,
  },
  {
    id: 4,
    name: "Aero Sports Bra",
    price: "$52.00",
    description: "Maximum breathability",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0Cc9L8WLXPP4nghJEUOe0b5HASTF3gcps1JRH2RQnGJNJPNNiOtQBLe1Ofwk_BNT0FOdFkIqPV43gcTTMUbgnp-Z_AoIX4_ZUtXRfVqdL54UBQS1ICVDeQQyOQDlOIOoZow3R8Xt6o1LK-DrV7sfKl99y9DPd-pI-IC7CZGd4wJduNv6L3ph1dQoAnUW_8dhNDZRChFL1qeLqltfoYa7lkbvx-gnmsu7sHkPRKxeTWHa_nvgcghkzvP9F_w1J_MDYPZQhMl2eLmwV",
    isNew: false,
  },
];

export default function NewArrivals() {
  return (
    <section>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div className="animate-fade-in-up">
          <h2 className="text-white text-3xl font-display font-bold uppercase tracking-tight">
            New Arrivals
          </h2>
          <p className="text-text-secondary mt-1">
            Fresh gear to elevate your workout.
          </p>
        </div>
        <a
          className="text-white text-sm font-bold border-b border-primary pb-0.5 hover:text-primary transition-colors animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
          href="#"
        >
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="group flex flex-col gap-3 animate-fade-in-up"
            style={{ animationDelay: `${index * 150 + 200}ms` }}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-surface-dark cursor-pointer">
              <img
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={product.image}
                alt={product.name}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
              <button className="absolute bottom-4 right-4 bg-primary text-black p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-white shadow-lg z-10 cursor-pointer">
                <span className="material-symbols-outlined w-8">
                  add_shopping_cart
                </span>
              </button>
              {product.isNew && (
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-white uppercase animate-pulse">
                  New
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <h3 className="text-white font-bold text-lg group-hover:text-primary transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-text-secondary text-sm">
                {product.description}
              </p>
              <p className="text-primary font-bold mt-1">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

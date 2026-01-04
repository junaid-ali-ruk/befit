import { useRef } from 'react';

const bestSellers = [
  {
    id: 1,
    name: "Phantom Shorts",
    price: "$42.00",
    description: "Running essential",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByIlV8azWwRfOlY_CfQ9MvqxX_ucmCWlXTkc2G6Jo_RMgQlZ66mhvFipwE6x6-Gui0BCNb0XINoDyTfoX9qwVsCv3xBiMgpQsSjOdjRo9sFV9VKTpGEhxexBu40pgKKfExbnHZ9LJaIE4z5DtM2LjvaaYAXPpkq0k-8am6PbLo6MDXcQ2B1BVylni23-GddiCbWjWrqSe0EwrPspZYwQh3jXHl1HtTSecHF280uKIo6gmYcdYbwIJoVxbJRR4xsPTy-ZgA4tCsyRbW",
    tag: "#1 Rated"
  },
  {
    id: 2,
    name: "Pro-Grip Gloves",
    price: "$35.00",
    description: "Enhanced durability",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX2FR9uHdqX0-mZlW0FcInzBmAat-x3piaB7YWXOqDET0pw2-j3Fd1XHFPJ-ged-pff8dKOkj3G5tX2Xe6FDDGr234XtI5Z0mCf0UXiY8E2099ufJyBvWkdslfsCsPyPHbKaq-JauTqb1oNW-VO0hyV1Ol8g4CBmWRWWc3mdKO1gGrVwJ3K42G5IfZfyZvzcq7MOXC1nCMaSqGHL5E7p47LNPdqoAOkm-K7TUQKCh-cM8KQsH_dYg8h-C0xHIlx9JB4BnZ32oDwJ9j",
    tag: null
  },
  {
    id: 3,
    name: "Titan Tank",
    price: "$38.00",
    description: "Breathable mesh",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMzbDKfpDClAWfsHpGahnNsQIsvNlbH1hXRIR3TLVMweWtAcg5sGwjhIDyRBblFstnH9Ert-3R06hTRQMn-iChz_uNbbi6-w5RgqM4rV8g6py6IV6b7dESiAvtotO9keGrKh-RWCeImnCNkSOgZ-CUMLQYY4UYq17C6byZiz0J8dMTId4WcwQJKpDJavwW7pNg8-ToXPLiSp8OJJnWTQx4q8P1ltqhr8bkxccLdEs4x3083lthcwxwsIp5mOsm472jAnsBNG5WiI7p",
    tag: null
  },
  {
    id: 4,
    name: "Sprint Runners",
    price: "$120.00",
    description: "Ultra-lightweight",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVql1a5W-oWHzvmsOgfUZj5m-eA5RTtTqnlmdewhqmz8EwGlhRno-PdOiqbUnOkDueuT6RVonrbjXXGjyW5BeBxqyVmi6SLNfqXSfuMcNvDrWConBJWHQ-wZVJbGsmEKzFejzi9jbI79-AatKQ1fz2Y8otw2dGI3mEQu2PinQFL3tNP6f-bXcZlTTflrnNTqBHO8cHSFvlllc_Ft4KEt01M4SImuYjK7Kb-Mfu0wBlqgIwP_4XdBtJ2nC6uUdSlhH4qX48UvcFaRG6",
    tag: "Trending"
  }
];

export default function BestSellers() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth > 768 ? 400 : 300;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-8">
        <div className="animate-fade-in-up">
          <h2 className="text-white text-3xl font-display font-bold uppercase tracking-tight">
            Best Sellers
          </h2>
        </div>
        <div className="flex gap-2 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full border border-border-dark hover:bg-surface-dark text-white transition-all hover:border-primary group/btn cursor-pointer"
          >
            <span className="material-symbols-outlined group-hover/btn:text-primary transition-colors w-8 flex justify-center items-center">arrow_back</span>
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full border border-border-dark hover:bg-surface-dark text-white transition-all hover:border-primary group/btn cursor-pointer"
          >
            <span className="material-symbols-outlined group-hover/btn:text-primary transition-colors w-8 flex justify-center items-center">arrow_forward</span>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 snap-x"
      >
        {bestSellers.map((item, index) => (
          <div
            key={item.id}
            className="min-w-[280px] md:min-w-[320px] snap-start group cursor-pointer animate-slide-in-right"
            style={{ animationDelay: `${index * 150 + 200}ms` }}
          >
            <div className="relative aspect-square rounded-xl bg-surface-dark overflow-hidden mb-4">
              <img
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={item.image}
                alt={item.name}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              {item.tag && (
                <div className="absolute top-3 left-3 bg-primary text-black text-xs font-bold px-2 py-1 rounded shadow-lg">
                  {item.tag}
                </div>
              )}
              <button className="absolute cursor-pointer inset-0 m-auto size-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 border border-white/20">
                <span className="material-symbols-outlined text-white">visibility</span>
              </button>
            </div>
            <div className="flex justify-between items-start group">
              <div>
                <h3 className="text-white font-bold text-lg group-hover:text-primary transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-text-secondary text-sm">{item.description}</p>
              </div>
              <span className="text-primary font-bold">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
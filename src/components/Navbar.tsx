export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border-dark bg-[#121212]/90 backdrop-blur-md
      animate-[navEnter_0.6s_ease-out]">

            <div className="flex items-center justify-between px-6 py-4 max-w-[1280px] mx-auto w-full">

                <a href="#" className="group">
                    <div className="flex items-center gap-2 select-none">
                        <div className="size-8 text-primary flex items-center justify-center
              transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                            <span
                                className="material-symbols-outlined text-4xl"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                bolt
                            </span>
                        </div>

                        <h2 className="text-white text-2xl font-black tracking-tighter font-display italic
              transition-all duration-300 group-hover:text-primary group-hover:tracking-tight">
                            BeFit
                        </h2>
                    </div>
                </a>
                <nav className="hidden md:flex items-center gap-10">
                    {["Men", "Women", "Accessories"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="relative text-white text-sm font-bold uppercase tracking-widest
              transition-colors duration-300 hover:text-primary
              after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
              after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    {["search", "shopping_bag", "account_circle"].map((icon, i) => (
                        <button
                            key={icon}
                            className={`text-white transition-all duration-300 cursor-pointer
                hover:text-primary hover:scale-110 active:scale-95
                ${i === 2 ? "hidden sm:block" : ""}`}
                        >
                            <span className="material-symbols-outlined">{icon}</span>
                        </button>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes navEnter {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </header>
    );
}

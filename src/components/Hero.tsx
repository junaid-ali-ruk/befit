export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden">
       
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://lh3.googleusercontent.com/aida-public/AB6AXuCPlQHbYREem0OFF7buMPIdTAYOgDSi7JWK4nlys_RbLI3hRPRUwrRfeagGOgHs18H7Pd0v4Ev8bUroiOIfg9ya8QFLGebgspA6xh4Ou5ZEfFqga_jbxAvMeDgIUq04YbRpumEs8Ar5KZJ7ejtcpAhio6Xqcv1Er5_U0uwoDACIPFDaI5OAtJlCdgrAcHLuTxSi4HxDCQrPb0VTydnaOrGrKWqnahZtL74znKWXnw3PJwqkZBd1-ifNfR0dyLscTgx2plwdkFw1pVHL"
      >
        <source
          src="/v1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
 
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-black/40"></div>
      <div className="absolute inset-0 bg-black/30"></div>
 
      <div className="relative z-10 px-6 max-w-[1280px] w-full flex flex-col items-start gap-6 mt-16">
        <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm animate-fade-in">
          Premium Athletic Gear
        </span>
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] font-display italic tracking-tighter max-w-4xl">
          UNLEASH YOUR <br />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            POTENTIAL
          </span>
        </h1>
        <p className="text-text-secondary text-lg max-w-xl font-medium leading-relaxed">
          Engineered for the elite. Designed for the relentless. Experience the
          next evolution in performance apparel.
        </p>
        <div className="flex gap-4 pt-4">
          <button className="bg-primary hover:bg-[#b0db05] text-black h-12 px-8 rounded-lg font-bold uppercase tracking-wide transition-all transform hover:scale-105 flex items-center gap-2 cursor-pointer">
            Shop Men
            <span className="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </button>
          <button className="bg-surface-dark border border-border-dark hover:border-white text-white h-12 px-8 rounded-lg font-bold uppercase tracking-wide transition-all cursor-pointer">
            Shop Women
          </button>
        </div>
      </div>
    </section>
  );
}

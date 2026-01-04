export default function Footer() {
  return (
    <footer className="bg-surface-dark border-t border-border-dark pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-primary text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                bolt
              </span>
              <h2 className="text-white text-2xl font-black font-display italic">
                BeFit
              </h2>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              Empowering your fitness journey with high-performance apparel
              designed to last.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                className="w-10 h-10 rounded-full bg-background-dark flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all"
                href="#"
              >
                <span className="font-bold">IG</span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-background-dark flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all"
                href="#"
              >
                <span className="font-bold">X</span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-background-dark flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all"
                href="#"
              >
                <span className="font-bold">YT</span>
              </a>
            </div>
          </div>
          {/* Links 1 */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Shop
            </h4>
            <ul className="flex flex-col gap-3 text-text-secondary text-sm">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  New Arrivals
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Men's Collection
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Women's Collection
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Accessories
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>
          {/* Links 2 */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Support
            </h4>
            <ul className="flex flex-col gap-3 text-text-secondary text-sm">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Help Center
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Shipping Info
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Size Guide
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Stay in the loop
            </h4>
            <p className="text-text-secondary text-sm mb-4">
              Subscribe for exclusive drops and early access.
            </p>
            <form className="flex flex-col gap-3">
              <input
                className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="Enter your email"
                type="email"
              />
              <button
                className="bg-white hover:bg-gray-200 text-black font-bold uppercase py-3 rounded-lg tracking-wide transition-colors cursor-pointer"
                type="button"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-border-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-xs">
            © 2026 BeFit Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-text-secondary text-xs">
            <a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

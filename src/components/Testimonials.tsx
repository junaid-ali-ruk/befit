export default function Testimonials() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-surface-dark p-8 md:p-12 rounded-2xl relative overflow-hidden animate-fade-in-up">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
      <div className="flex flex-col justify-center gap-6">
        <h2 className="text-white text-3xl md:text-4xl font-display font-black uppercase italic leading-tight">
          Trusted by <br />
          <span className="text-primary">Elite Athletes</span>
        </h2>
        <p className="text-text-secondary text-lg">
          Join thousands of professionals who trust BeFit for their daily grind.
          Quality that withstands the toughest workouts.
        </p>
        <div className="flex items-center gap-8 mt-4">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white">15k+</span>
            <span className="text-sm text-text-secondary">Reviews</span>
          </div>
          <div className="w-px h-10 bg-border-dark"></div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white">4.9</span>
            <div className="flex text-primary text-sm">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "16px", fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "16px", fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "16px", fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "16px", fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "16px", fontVariationSettings: "'FILL' 1" }}
              >
                star_half
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {/* Testimonial Card 1 */}
        <div className="bg-background-dark p-6 rounded-xl border border-border-dark hover:border-primary/30 transition-colors">
          <div className="flex text-primary mb-3">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="material-symbols-outlined"
                style={{ fontSize: "20px", fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            ))}
          </div>
          <p className="text-gray-300 italic mb-4">
            "The compression gear is absolutely top-tier. I've washed my
            leggings 50 times and they still fit like day one. Unmatched
            durability."
          </p>
          <div className="flex items-center gap-3">
            <img
              className="w-10 h-10 rounded-full border border-border-dark"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbv1B9303BWqrtNfVSWLBuZrTKsL4TNvu4ijHaP4ToLa9M1WN2n9MmB_iDLVJE7AhvXYmewFCBBxlgJw3ONMlZ89MdMJnlrNEwLw1knVzZHbKM4QCHHU8Ppi836d4w9o65omVprYoVx976Z7wm0c527RkK4YEhg02TBYWjl2XtbBe00fJ4DNnGq4ACqYaKU80q63u1huN6MmS9TaihwK1W9U9cCitfUazms0skvqqlmsfOnKhHN_o-vNZgRfnkEhRAdCGutVXmhICG"
              alt="Sarah Jenkins"
            />
            <div>
              <h4 className="text-white font-bold text-sm">Sarah Jenkins</h4>
              <p className="text-text-secondary text-xs">CrossFit Trainer</p>
            </div>
          </div>
        </div>
        {/* Testimonial Card 2 */}
        <div className="bg-background-dark p-6 rounded-xl border border-border-dark hover:border-primary/30 transition-colors md:ml-8">
          <div className="flex text-primary mb-3">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="material-symbols-outlined"
                style={{ fontSize: "20px", fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            ))}
          </div>
          <p className="text-gray-300 italic mb-4">
            "Finally found a hoodie that moves with me. The cut is perfect for
            lifting and the style is clean enough for street wear."
          </p>
          <div className="flex items-center gap-3">
            <img
              className="w-10 h-10 rounded-full border border-border-dark"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5k-iJ0LLBm0n-gdacIMwT1HrHVuoQ-cVNJEbt983VfUMCarTvpxb_worWrm8LdS_SiK0xXQYDjtb1FJWaQan58IqgvC9TKQ36uuOUv5BJSCKy1wWMJCZgV7fNPSxVxfVjmdl7uU2IpgW9YfILuNZ_3Jne_pwcf9wXXhaiqZLIQSU77P1DkM96xZjnZUaOIOmybnm-fUwqxjVaYIjrcDt5J-gnlv7icvQ4grjRlwiMiXWWLI2BaxGDSTtQf3sXAkF6cW7yMJF79xr0"
              alt="Marcus Reid"
            />
            <div>
              <h4 className="text-white font-bold text-sm">Marcus Reid</h4>
              <p className="text-text-secondary text-xs">Pro Athlete</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

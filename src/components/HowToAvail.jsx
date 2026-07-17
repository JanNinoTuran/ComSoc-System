const STEPS = [
  {
    no: "01",
    title: "Browse the Services",
    desc: "Explore available printing services—sublimation, pigmentation, and document printing—with prices and processing times.",
  },
  {
    no: "02",
    title: "Book an Appointment",
    desc: "Select your service, product, quantity, and preferred date. Upload your design and add any special notes.",
  },
  {
    no: "03",
    title: "Wait for Approval",
    desc: "Our admin and staff review your booking. Track your status in real time: pending, approved, or completed.",
  },
  {
    no: "04",
    title: "Visit the Organization",
    desc: "Once approved, visit the Computing Society office on your scheduled date to process your order.",
  },
  {
    no: "05",
    title: "Process Payment",
    desc: "Pay via Cash or GCash. The system automatically computes your total based on service and quantity.",
  },
  {
    no: "06",
    title: "Get Your Receipt",
    desc: "Receive a digital receipt you can print or download as PDF once your transaction is complete.",
  },
];

export default function HowToAvail() {
  return (
    <section id="how-to-avail" className="relative overflow-hidden bg-navy-950 py-20 text-white">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-navy-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-4 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-navy-300">
            How to Avail
          </span>
        </div>
        <h2 className="text-center text-2xl font-extrabold uppercase tracking-wide sm:text-3xl">
          COMSOC Printing Services &amp; Systems
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-white/60">
          Getting your prints done is simple. Follow these six steps from booking to receipt.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.no} className="group relative pl-2">
              <span className="block text-5xl font-extrabold text-white/10 transition group-hover:text-brand-blue/50">
                {step.no}
              </span>
              <h3 className="mt-2 text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{step.desc}</p>
              <span className="mt-4 block h-0.5 w-12 rounded-full bg-brand-blue transition-all duration-300 group-hover:w-20" />
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a href="#signup" className="btn-primary px-8 py-3 text-base">
            Get Started — Book Now
          </a>
        </div>
      </div>
    </section>
  );
}

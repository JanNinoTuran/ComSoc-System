const EQUIPMENT = [
  {
    name: "Sublimation Printer",
    category: "Sublimation Printing",
    desc: "High-resolution dye-sublimation printing for lanyards, mugs, and fabric.",
    icon: "printer",
  },
  {
    name: "Heat Press Machine",
    category: "Sublimation Printing",
    desc: "Transfers vibrant designs onto shirts, fans, and flat surfaces with heat.",
    icon: "press",
  },
  {
    name: "Mug Press",
    category: "Sublimation Printing",
    desc: "Wraps and bakes full-color designs onto ceramic mugs and tumblers.",
    icon: "mug",
  },
  {
    name: "Button Pin Maker",
    category: "Pigmentation Printing",
    desc: "Produces custom button pins in various sizes for events and orgs.",
    icon: "pin",
  },
  {
    name: "PVC ID / Card Printer",
    category: "Sublimation Printing",
    desc: "Prints durable ID cards and PVC lanyards with crisp detail.",
    icon: "card",
  },
  {
    name: "Document Printer",
    category: "Document Printing",
    desc: "Black & white and colored document printing for any paper size.",
    icon: "doc",
  },
  {
    name: "Photocopier",
    category: "Document Printing",
    desc: "Fast, high-volume photocopying for documents and requirements.",
    icon: "copy",
  },
  {
    name: "Document Scanner",
    category: "Document Printing",
    desc: "Digitizes documents into high-quality PDF and image files.",
    icon: "scan",
  },
];

function Icon({ type }) {
  const common = {
    className: "h-14 w-14 text-brand-blue",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
  };
  const paths = {
    printer: <><path d="M6 9V3h12v6" /><rect x="4" y="9" width="16" height="8" rx="1.5" /><path d="M7 17h10v4H7z" /><circle cx="17.5" cy="12" r="0.6" fill="currentColor" /></>,
    press: <><path d="M4 18h16" /><path d="M6 18v-3h12v3" /><rect x="5" y="6" width="14" height="4" rx="1" /><path d="M12 10v3" /></>,
    mug: <><path d="M5 8h11v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8Z" /><path d="M16 10h2.5a2.5 2.5 0 0 1 0 5H16" /></>,
    pin: <><circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="2.5" /></>,
    card: <><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M3 10h18" /><path d="M7 14h5" /></>,
    doc: <><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v4h4" /><path d="M9.5 12h5M9.5 15h5" /></>,
    copy: <><rect x="6" y="3" width="12" height="6" rx="1" /><rect x="4" y="9" width="16" height="8" rx="1.5" /><path d="M8 17h8v4H8z" /></>,
    scan: <><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" /><path d="M4 12h16" /></>,
  };
  return <svg {...common}>{paths[type]}</svg>;
}

export default function Equipment() {
  return (
    <section id="equipment" className="bg-navy-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-4 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">
            Our Facilities
          </span>
        </div>
        <h2 className="section-title">Our Equipment</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-navy-500">
          Professional-grade printing and production equipment powering the services of the
          Computing Society.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {EQUIPMENT.map((item) => (
            <article
              key={item.name}
              className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-brand-blue/30 hover:shadow-xl"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-navy-50 transition group-hover:bg-brand-blue/10">
                <Icon type={item.icon} />
              </div>
              <h3 className="mt-5 text-base font-bold text-navy-800">{item.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">{item.desc}</p>
              <span className="mt-4 inline-flex items-center justify-center rounded-full bg-brand-blue/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-blue">
                {item.category}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

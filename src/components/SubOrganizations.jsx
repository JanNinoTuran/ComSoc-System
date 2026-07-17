import { useState } from "react";

const SUB_ORGS = [
  {
    id: "animedia",
    name: "Animedia",
    icon: "/assets/suborgs/animedia.png",
    color: "#1fc7c7",
    tagline: "Multimedia & Creatives",
    desc: "The creative arm behind photo, video, and multimedia production for events, animation, and digital storytelling.",
  },
  {
    id: "game-developers",
    name: "Game Developers",
    icon: "/assets/suborgs/game-developers.png",
    color: "#f5c542",
    tagline: "Game Design & Dev",
    desc: "Building interactive games and immersive experiences while mastering game engines, mechanics, and design.",
  },
  {
    id: "networking-geeks",
    name: "Networking Geeks",
    icon: "/assets/suborgs/networking-geeks.png",
    color: "#43c463",
    tagline: "Networks & Security",
    desc: "Exploring network infrastructure, cybersecurity, and systems administration through hands-on projects.",
  },
  {
    id: "fullstack-masters",
    name: "Fullstack Masters",
    icon: "/assets/suborgs/fullstack.png",
    color: "#e08a1e",
    tagline: "Web & Software",
    desc: "Developing end-to-end web and software applications, from front-end interfaces to back-end systems.",
  },
];

export default function SubOrganizations() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    if (open && activeId === id) {
      setOpen(false);
      setActiveId(null);
    } else {
      setOpen(true);
      setActiveId(id);
    }
  };

  return (
    <section id="sub-organizations" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-4 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">
            Explore
          </span>
        </div>
        <h2 className="section-title">Sub-Organizations</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-navy-500">
          Four specialized groups under the Computing Society. Click any card to reveal what each
          one does.
        </p>

        <div className="mt-12 grid grid-cols-2 items-start gap-5 sm:grid-cols-4">
          {SUB_ORGS.map((org) => {
            const isActive = open && activeId === org.id;
            return (
              <div
                key={org.id}
                className={`overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ${
                  isActive ? "-translate-y-2 ring-4 ring-white/60" : "hover:-translate-y-2"
                }`}
              >
                {/* Clickable header card */}
                <button
                  type="button"
                  onClick={() => handleClick(org.id)}
                  aria-expanded={isActive}
                  className="group flex w-full flex-col items-center p-6 text-center focus:outline-none"
                  style={{ backgroundColor: org.color }}
                >
                  <img
                    src={org.icon}
                    alt={org.name}
                    className="h-20 w-20 rounded-full bg-white/20 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-white drop-shadow">
                    {org.name}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-white/80">
                    {isActive ? "Hide" : "View"}
                    <svg
                      viewBox="0 0 24 24"
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>

                {/* Description attached directly below, same color, no gap */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                  style={{ backgroundColor: org.color }}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-7 pt-1 text-center text-white">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85">
                        {org.tagline}
                      </p>
                      <span className="mx-auto mt-2 block h-px w-10 bg-white/40" />
                      <p className="mt-3 text-sm leading-relaxed text-white/95">{org.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

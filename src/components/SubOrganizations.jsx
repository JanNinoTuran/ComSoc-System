const SUB_ORGS = [
  {
    name: "Animedia",
    icon: "/assets/suborgs/animedia.png",
    color: "#1fc7c7",
    tagline: "Multimedia & Creatives",
    desc: "The creative arm behind photo, video, and multimedia production for events, animation, and digital storytelling.",
  },
  {
    name: "Game Developers",
    icon: "/assets/suborgs/game-developers.png",
    color: "#f5c542",
    tagline: "Game Design & Dev",
    desc: "Building interactive games and immersive experiences while mastering game engines, mechanics, and design.",
  },
  {
    name: "Networking Geeks",
    icon: "/assets/suborgs/networking-geeks.png",
    color: "#43c463",
    tagline: "Networks & Security",
    desc: "Exploring network infrastructure, cybersecurity, and systems administration through hands-on projects.",
  },
  {
    name: "Fullstack Masters",
    icon: "/assets/suborgs/fullstack.png",
    color: "#e08a1e",
    tagline: "Web & Software",
    desc: "Developing end-to-end web and software applications, from front-end interfaces to back-end systems.",
  },
];

export default function SubOrganizations() {
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
          Four specialized groups under the Computing Society, each focused on a unique field
          of computing and technology.
        </p>

        {/* Compact icon row */}
        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {SUB_ORGS.map((org) => (
            <div
              key={org.name}
              className="group flex flex-col items-center rounded-2xl p-6 text-center shadow-lg transition-transform duration-300 hover:-translate-y-2"
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
            </div>
          ))}
        </div>

        {/* Detailed cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SUB_ORGS.map((org) => (
            <article
              key={org.name}
              className="flex flex-col overflow-hidden rounded-2xl text-white shadow-xl transition-transform duration-300 hover:-translate-y-2"
              style={{ backgroundColor: org.color }}
            >
              <div className="flex flex-col items-center px-6 pt-8">
                <img
                  src={org.icon}
                  alt={org.name}
                  className="h-24 w-24 rounded-full bg-white/25 object-contain p-1 shadow-inner"
                />
                <h3 className="mt-5 text-lg font-extrabold uppercase tracking-wide drop-shadow">
                  {org.name}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  {org.tagline}
                </p>
              </div>
              <p className="px-6 pb-8 pt-4 text-center text-sm leading-relaxed text-white/95">
                {org.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

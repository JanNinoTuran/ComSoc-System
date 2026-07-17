export default function Logo({ light = false, className = "" }) {
  const textColor = light ? "text-white" : "text-navy-800";
  const subColor = light ? "text-white/70" : "text-navy-500";

  return (
    <a href="#home" className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="/assets/comsoc-logo.jpg"
        alt="Computing Society logo"
        className="h-11 w-11 rounded-full object-cover ring-2 ring-white/40 shadow-sm"
      />
      <span className="flex flex-col leading-none">
        <span className={`text-sm font-extrabold uppercase tracking-wide ${textColor}`}>
          Computing Society
        </span>
        <span className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${subColor}`}>
          Computer Science Dept.
        </span>
      </span>
    </a>
  );
}

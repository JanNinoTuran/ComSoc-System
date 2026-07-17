import Logo from "./Logo.jsx";

const HOURS = [
  { day: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
  { day: "Saturday", time: "8:00 AM – 12:00 NN" },
  { day: "Sunday & Holidays", time: "Closed" },
];

export default function LocationHours() {
  return (
    <footer id="location" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-4 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">
            Visit Us
          </span>
        </div>
        <h2 className="section-title">Location &amp; Hours</h2>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-navy-50 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.5-7-11a7 7 0 1 1 14 0c0 4.5-7 11-7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-navy-800">Address</h3>
                <p className="mt-1 text-sm text-navy-600">
                  Computing Society Office, Computer Science Department
                  <br />
                  Bohol Island State University – Bilar Campus
                  <br />
                  Zamora, Bilar, Bohol, Philippines
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-navy-50 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-navy-800">Office Hours</h3>
              </div>
              <dl className="mt-4 divide-y divide-navy-100">
                {HOURS.map((h) => (
                  <div key={h.day} className="flex items-center justify-between py-2.5 text-sm">
                    <dt className="text-navy-600">{h.day}</dt>
                    <dd className="font-semibold text-navy-800">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="mailto:csdcos@bisu.edu.ph" className="flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-brand-blue">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 9 6 9-6" />
                </svg>
                csdcos@bisu.edu.ph
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-brand-blue">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M14 9h3l.5-3H14V4.5c0-.9.3-1.5 1.6-1.5H17V.2C16.6.1 15.6 0 14.5 0 12 0 10.3 1.5 10.3 4.2V6H7.5v3h2.8v9H14V9Z" />
                </svg>
                Computing Society
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-navy-100 shadow-sm">
            <iframe
              title="BISU Bilar Campus Location"
              src="https://www.google.com/maps?q=Bohol%20Island%20State%20University%20Bilar%20Campus&output=embed"
              className="h-full min-h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-navy-950 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-8">
          <Logo light />
          <p className="text-center text-xs text-white/60 sm:text-right">
            © {new Date().getFullYear()} Computing Society Management System · BISU Bilar Campus.
            <br className="sm:hidden" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

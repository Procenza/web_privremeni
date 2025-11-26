const Contact = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="mb-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-sky-500">
              05/CONTACT
            </span>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-slate-900 dark:text-white mb-6">
            Kontaktirajte Nas<span className="text-sky-500">.</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl font-medium leading-relaxed">
            Spremni transformirati svoj posao? Započnimo razgovor.
          </p>
        </div>

        {/* Contact Info Cards - Neo-Brutalist */}
        <div className="space-y-0 max-w-3xl mx-auto">
          <div className="bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-white rounded-none p-8 flex items-start gap-6">
            <div className="w-14 h-14 bg-sky-500 border-2 border-slate-900 dark:border-white rounded-none flex items-center justify-center shrink-0">
              <span className="text-2xl font-extrabold text-white">@</span>
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-2">
                Email
              </h3>
              <a
                href="mailto:info@procenza.hr"
                className="text-lg font-bold text-slate-900 dark:text-white hover:text-sky-500 transition-colors"
              >
                info@procenza.hr
              </a>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-white border-t-0 rounded-none p-8 flex items-start gap-6">
            <div className="w-14 h-14 bg-sky-500 border-2 border-slate-900 dark:border-white rounded-none flex items-center justify-center shrink-0">
              <span className="text-2xl font-extrabold font-mono text-white">M</span>
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-2">
                Telefon
              </h3>
              <a
                href="https://wa.me/385976786391"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-slate-900 dark:text-white hover:text-sky-500 transition-colors"
              >
                +385 97 678 6391
              </a>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-white border-t-0 rounded-none p-8 flex items-start gap-6">
            <div className="w-14 h-14 bg-sky-500 border-2 border-slate-900 dark:border-white rounded-none flex items-center justify-center shrink-0">
              <span className="text-2xl font-extrabold font-mono text-white">A</span>
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-2">
                Ured
              </h3>
              <a
                href="https://maps.google.com/?q=Vrbani+4,+10110+Zagreb,+Croatia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-slate-900 dark:text-white hover:text-sky-500 transition-colors block"
              >
                Vrbani 4 (1.kat)<br />
                10110 Zagreb
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

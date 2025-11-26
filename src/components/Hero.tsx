import { motion } from "framer-motion";

const Hero = () => {
  const keywords = ["STRATEGIJA", "PROCESI", "RAST", "ANALIZA", "OPTIMIZACIJA"];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 min-h-[70vh] items-center">

            {/* LEFT: Massive Headline */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="col-span-12 lg:col-span-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-sky-500">
                  00/U_RAZVOJU
                </span>
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
              </div>

              <h1 className="text-[3.6rem] sm:text-[4.8rem] md:text-[6.4rem] lg:text-[8rem] xl:text-[9.6rem] font-extrabold tracking-tighter leading-[0.85] text-slate-900 dark:text-white">
                Uskoro<span className="text-sky-500">.</span>
                <br />
                Dolazimo<span className="text-sky-500">.</span>
              </h1>
            </motion.div>

            {/* RIGHT: Subtext */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="col-span-12 lg:col-span-4 lg:col-start-9"
            >
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Gradimo nešto posebno za vaš posao.
              </p>
              <p className="text-base text-slate-500 dark:text-slate-500 leading-relaxed">
                Procenza donosi novo iskustvo strateškog savjetovanja.
                Priprema je u tijeku. Bit će vrijedno čekanja.
              </p>

              <div className="pt-6 border-t-2 border-slate-200 dark:border-slate-800 mt-8">
                <p className="font-mono text-xs text-slate-400 dark:text-slate-600 tracking-wider uppercase">
                  Status: U_RAZVOJU
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated Text Marquee */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          className="flex gap-16 items-center whitespace-nowrap"
          style={{
            fontSize: 'clamp(4rem, 15vw, 8rem)',
            fontWeight: 900,
            WebkitTextStroke: '2px currentColor',
            WebkitTextFillColor: 'transparent',
            color: 'rgba(14, 165, 233, 0.1)',
          }}
        >
          {[...keywords, ...keywords, ...keywords, ...keywords].map((keyword, i) => (
            <span key={i}>{keyword}</span>
          ))}
        </motion.div>
      </div>

      {/* Geometric Accent - Blueprint Circle */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full border border-slate-300/30 dark:border-slate-700/30 border-dashed pointer-events-none" />
      <div className="absolute top-1/3 right-20 w-64 h-64 rounded-full border border-sky-500/10 pointer-events-none" />
    </section>
  );
};

export default Hero;

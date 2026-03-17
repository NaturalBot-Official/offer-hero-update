import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-background overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-xs font-bold tracking-wider uppercase text-primary antialiased">
            Oferta Exclusiva
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-6 text-balance leading-[1.1]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Sua operação mais forte com a parceria{" "}
          <span className="text-primary">Foody Delivery.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-[55ch] mx-auto leading-relaxed"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", textWrap: "pretty" as never }}
        >
          Você, cliente Foody, garante{" "}
          <strong className="text-foreground font-semibold">20% de desconto</strong>{" "}
          nas duas primeiras mensalidades e{" "}
          <strong className="text-foreground font-semibold">isenção total</strong>{" "}
          da taxa de implementação.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <button className="group relative px-8 py-4 bg-foreground text-background rounded-xl font-bold transition-all duration-300 hover:bg-primary hover:-translate-y-0.5 active:scale-95 shadow-lg hover:shadow-[0_0_25px_hsl(var(--primary)/0.3)]">
            <span className="relative z-10">Garantir meu benefício exclusivo</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

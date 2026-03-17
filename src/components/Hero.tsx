import { motion } from "framer-motion";
import HeroForm from "./HeroForm";

const Hero = () => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
      {/* Left side - Pink */}
      <div className="bg-hero flex items-center justify-center px-6 md:px-12 lg:px-16 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/15 border border-primary-foreground/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground" />
            </span>
            <span className="text-xs font-bold tracking-wider uppercase text-primary-foreground antialiased">
              Oferta Exclusiva Foody Delivery
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground leading-[1.15] tracking-tight mb-4">
            Você Cliente Foody Delivery tem{" "}
            <span className="underline decoration-secondary decoration-4 underline-offset-4">
              20% de desconto
            </span>{" "}
            nas duas primeiras mensalidades e{" "}
            <span className="underline decoration-secondary decoration-4 underline-offset-4">
              isenção da Taxa de implementação.
            </span>
          </h1>

          <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed">
            Descubra porque somos a nova geração de chatbot.
          </p>
        </motion.div>
      </div>

      {/* Right side - Form */}
      <div className="bg-form-bg flex items-center justify-center px-6 md:px-12 py-12 lg:py-20">
        <HeroForm />
      </div>
    </section>
  );
};

export default Hero;

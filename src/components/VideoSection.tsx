import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-muted">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-bold text-foreground mb-4"
        >
          Conheça a nova geração de chatbot para WhatsApp que ajuda no atendimento a delivery
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 aspect-video w-full rounded-2xl overflow-hidden shadow-xl"
        >
          <iframe
            src="https://www.youtube.com/embed/UbuqFrCE068"
            title="Vídeo institucional Natural Bot"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;

import { motion } from "framer-motion";
import iconIA from "@/assets/icon-ia.png";
import iconMultilingue from "@/assets/icon-multilingue.png";
import iconMonitor from "@/assets/icon-monitor.png";
import iconLinguagem from "@/assets/icon-linguagem.png";

const features = [
  {
    icon: iconIA,
    title: "Inteligência Artificial",
    description:
      "Todo o processo, desde o atendimento inicial até a cobrança e criação da ordem de serviço, é automatizado.",
  },
  {
    icon: iconMultilingue,
    title: "Atendimento Multilíngue",
    description:
      "Capaz de atender em mais de 60 línguas, ideal para restaurantes que atendem turistas e públicos diversos.",
  },
  {
    icon: iconMonitor,
    title: "Integração com Monitores",
    description:
      "Após o pagamento do pedido, ele segue para a cozinha para ser exibido no monitor KDS.",
  },
  {
    icon: iconLinguagem,
    title: "Linguagem Personalizada",
    description:
      "Insira informações da sua empresa, como propósito e arquétipo da marca, além de características de tom de voz.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-foreground text-center mb-4"
        >
          Somos o 1° Copiloto de Vendas com IA para restaurantes do Brasil!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-center text-lg mb-14 max-w-2xl mx-auto"
        >
          Tenha um atendimento automatizado dos seus pedidos e com uma linguagem mais natural.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feat) => (
            <motion.div
              key={feat.title}
              variants={item}
              className="bg-card rounded-2xl p-6 text-center shadow-md border border-border hover:shadow-lg transition-shadow"
            >
              <img
                src={feat.icon}
                alt={feat.title}
                className="w-16 h-16 mx-auto mb-4 object-contain"
              />
              <h3 className="text-lg font-bold text-foreground mb-2">{feat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;

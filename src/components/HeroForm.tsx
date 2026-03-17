import { useState } from "react";
import { motion } from "framer-motion";

const HeroForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    celular: "",
    delivery: "",
    segmento: "",
    captcha: "",
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="bg-form-bg rounded-2xl p-6 md:p-8 flex flex-col gap-4 w-full max-w-md shadow-2xl"
    >
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-form-foreground">Nome*</label>
        <input
          type="text"
          name="nome"
          required
          value={formData.nome}
          onChange={handleChange}
          className="rounded-lg border-0 bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-form-foreground">Email*</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="rounded-lg border-0 bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-form-foreground">Celular*</label>
        <input
          type="tel"
          name="celular"
          required
          value={formData.celular}
          onChange={handleChange}
          placeholder="(00) 00000-0000"
          className="rounded-lg border-0 bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-form-foreground">Trabalha com delivery?*</label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-sm text-form-foreground cursor-pointer">
            <input
              type="radio"
              name="delivery"
              value="sim"
              onChange={handleChange}
              className="accent-primary w-4 h-4"
            />
            Sim
          </label>
          <label className="flex items-center gap-2 text-sm text-form-foreground cursor-pointer">
            <input
              type="radio"
              name="delivery"
              value="nao"
              onChange={handleChange}
              className="accent-primary w-4 h-4"
            />
            Não
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-form-foreground">Segmento de atuação*</label>
        <select
          name="segmento"
          required
          value={formData.segmento}
          onChange={handleChange}
          className="rounded-lg border-0 bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Selecione</option>
          <option value="acai">Açaí / Sorvetes</option>
          <option value="oriental">Culinária oriental</option>
          <option value="esfiharia">Esfiharia / Árabe</option>
          <option value="hamburgueria">Hamburgueria</option>
          <option value="lanches">Lanches / Saladas</option>
          <option value="marmitas">Marmitas / Prato feito</option>
          <option value="padaria">Padaria / Confeitaria</option>
          <option value="pizzaria">Pizzaria</option>
          <option value="outro">Outro</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-form-foreground">10 + 10 = ?</label>
        <input
          type="text"
          name="captcha"
          required
          value={formData.captcha}
          onChange={handleChange}
          className="rounded-lg border-0 bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <label className="flex items-start gap-2 text-xs text-form-foreground cursor-pointer">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="accent-primary mt-0.5 w-4 h-4"
        />
        Eu concordo em receber comunicações.
      </label>

      <p className="text-xs italic text-form-foreground/70">
        A nossa empresa está comprometida a proteger e respeitar sua privacidade, seus dados são usados apenas para fins de marketing.
      </p>

      <button
        type="submit"
        className="w-full py-4 rounded-xl bg-[hsl(250,60%,55%)] font-bold text-primary-foreground uppercase tracking-wider text-sm transition-all hover:brightness-110 active:scale-[0.98] mt-2"
      >
        Garantir meu benefício exclusivo
      </button>
    </motion.form>
  );
};

export default HeroForm;

import { motion } from "framer-motion";
import logo from "@/assets/naturalbot-logo.png";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full py-4 flex justify-center bg-background"
    >
      <img src={logo} alt="Natural Bot" className="h-10 md:h-12" />
    </motion.header>
  );
};

export default Header;

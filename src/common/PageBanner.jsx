import { motion } from "framer-motion";
import bannerImg from "../assets/aboutUs.jpg";

export default function PageBanner({ title }) {
  return (
    <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
      <img src={bannerImg} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/60" />
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 text-4xl md:text-5xl font-bold text-white tracking-widest uppercase text-center px-4">
        {title}
      </motion.h1>
    </div>
  );
}

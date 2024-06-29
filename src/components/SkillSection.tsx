import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
export default function SkillSection({ title, skills }: any) {
  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-bold mb-8 text-gray-800">{title}</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill: any, index: number) => (
          <SkillCard key={index} {...skill} />
        ))}
      </ul>
    </motion.div>
  );
}

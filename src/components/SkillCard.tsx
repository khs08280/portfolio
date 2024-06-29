import { motion } from "framer-motion";
import Image from "next/image";

export default function SkillCard({ skill, image, content }: any) {
  return (
    <motion.li
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col h-full">
        <div className="bg-gray-100 p-6 flex items-center justify-center">
          <div className="relative w-24 h-24">
            <Image
              src={image}
              alt={`${skill} Logo`}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h4 className="text-xl font-semibold mb-3">{skill}</h4>
          <p className="text-gray-600 text-base flex-grow">{content}</p>
        </div>
      </div>
    </motion.li>
  );
}

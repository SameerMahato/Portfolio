import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { X } from "lucide-react";
import { certifications } from "../../data/certifications";

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<any | null>(null);

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Certifications"
          subtitle="Professional qualifications and continuous learning"
        />

        {/* Flex row with exactly 4 certifications */}
        <div className="flex justify-center gap-6 max-w-screen-xl mx-auto">
          {certifications.slice(0, 4).map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer w-1/4 min-w-[250px]"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="flex items-start gap-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-16 h-16 rounded-md object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    {cert.title}
                  </h3>
                  {cert.organization && (
                    <p className="text-gray-700 mb-1">{cert.organization}</p>
                  )}
                  <p className="text-gray-500 text-sm">{cert.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
                onClick={() => setSelectedCert(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-xl font-semibold mb-4">{selectedCert.title}</h2>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full rounded-md"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;

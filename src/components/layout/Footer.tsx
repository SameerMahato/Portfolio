import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { personalInfo } from "../../data/personal";
import { Link } from "react-scroll";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent"
            >
              Sameer Mahato
            </Link>
            <p className="text-gray-400 mt-2 max-w-xs">
              Full Stack Developer specialized in creating responsive and user-friendly web applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end"
          >
            <div className="flex space-x-4 mb-4">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 text-gray-200 hover:bg-gray-700 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 text-gray-200 hover:bg-gray-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-full bg-gray-800 text-gray-200 hover:bg-gray-700 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className="flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <span className="mr-2">Back to Top</span>
              <ArrowUp size={16} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm"
        >
          &copy; {new Date().getFullYear()} Sameer Mahato. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
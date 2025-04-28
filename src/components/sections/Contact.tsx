import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import { Map, Mail, Phone, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { personalInfo } from "../../data/personal";

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!formRef.current || !serviceId || !templateId || !publicKey) {
      setFormStatus("error");
      setErrorMessage("EmailJS service configuration is missing. Check your .env file.");
      return;
    }

    try {
      setFormStatus("sending");

      const result = await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      console.log("Email sent:", result.text);
      setFormStatus("success");
      formRef.current.reset();

      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    } catch (error: any) {
      console.error("Email sending failed:", error);
      setFormStatus("error");
      setErrorMessage(error?.text || error?.message || "Failed to send your message. Please try again.");
    }
  };

  const contactDetails = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: <Map className="w-5 h-5" />,
      title: "Location",
      value: "Punjab, India",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Get In Touch"
          subtitle="Interested in working together? Feel free to contact me!"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Let's Talk!</h3>
            <p className="text-gray-700 mb-8">
              I'm currently open for new opportunities and collaborations.
              Whether you have a project in mind or just want to say hello,
              I'd love to hear from you!
            </p>

            <div className="space-y-6">
              {contactDetails.map((detail, index) => (
                <motion.a
                  key={index}
                  href={detail.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    {detail.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{detail.title}</h4>
                    <p className="text-gray-600">{detail.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

              {formStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                  <p className="text-gray-600">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    ></textarea>
                  </div>

                  {formStatus === "error" && (
                    <div className="text-red-500 text-sm">{errorMessage}</div>
                  )}

                  <Button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full"
                    icon={<Send size={16} />}
                  >
                    {formStatus === "sending" ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

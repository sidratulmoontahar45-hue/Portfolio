import { motion } from "framer-motion";
import {FaEnvelope,FaPaperPlane,FaPhone,FaMapMarkerAlt,FaGithub,FaLinkedin,} from "react-icons/fa";
import { SectionHeading, IconBadge, fadeIn } from "./Shared";

const contactInfo = [
  {
    label: "Email",
    text: "sidratulmoontahar471@gmail.com",
    link: "mailto:sidratulmoontahar471@gmail.com",
    icon: <FaEnvelope size={16} />,
  },
  {
    label: "Phone",
    text: "01784545034",
    link: "tel:01784545034",
    icon: <FaPhone size={15} />,
  },
  {
    label: "Location",
    text: "Sylhet, Bangladesh",
    link: null,
    icon: <FaMapMarkerAlt size={15} />,
  },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/",
    icon: <FaGithub size={19} />,
    colorClass: "text-gray-900 hover:text-cyan-600",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: <FaLinkedin size={19} />,
    colorClass: "text-cyan-600 hover:text-cyan-500",
  },
];

const formFields = [
  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
  { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
];

const inputClass =
  "w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-cyan-400";

const labelClass = "mb-2 block text-sm font-semibold text-gray-900";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section flex w-full min-h-[100svh] flex-col justify-center overflow-hidden  bg-white px-6 sm:px-10 md:px-16 lg:px-20 pt-16 pb-32 sm:pt-20 sm:pb-36 lg:pt-10 lg:pb-28"
    >
      <div className="contact-inner mx-auto w-full max-w-6xl">
        <SectionHeading
          small="Get In Touch"
          title="Contact"
          highlight="Me"
          text="If you have any question or project idea or just want to say hello? Send me a message... I'll get back to you."
          className="mb-14"
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-2">
          <motion.div {...fadeIn({ x: -50 })} className="flex flex-col justify-center">
            <motion.div
              {...fadeIn({ scale: 0.8, duration: 0.5, delay: 0.2 })}
              className="w-fit"
            >
              <IconBadge size="h-12 w-12">
                <FaEnvelope size={20} />
              </IconBadge>
            </motion.div>

            <h3 className="mt-6 text-3xl font-bold text-gray-900">Let's work together.</h3>

            <p className="mt-4 max-w-md text-base leading-relaxed text-gray-700 sm:text-lg">
              Whether you have a project idea or any kind of collaboration opportunity feel free
              to send me a message.
            </p>

            <p className="mt-6 font-semibold text-cyan-600">I look forward to hearing from you.</p>
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                {...fadeIn({ x: -20, duration: 0.5, delay: 0.2 + index * 0.1 })}
                className={"flex items-center gap-4 " + (index === 0 ? "mt-7" : "mt-5")}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-600">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500">{info.label}</p>

                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-base font-semibold text-gray-900 transition-colors hover:text-cyan-600"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <p className="text-base font-semibold text-gray-900">{info.text}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="mt-7 flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={
                    "flex h-11 w-11 items-center justify-center rounded-full border-2 border-gray-300 bg-white shadow-sm transition-all duration-300 hover:border-cyan-400 " +
                    social.colorClass
                  }
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.form
            {...fadeIn({ x: 50, delay: 0.1 })}
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="rounded-2xl border-2 border-black bg-white p-6 shadow-sm sm:p-8"
          >
            {formFields.map((field, index) => (
              <div key={field.id} className={index > 0 ? "mt-5" : ""}>
                <label htmlFor={field.id} className={labelClass}>
                  {field.label}
                </label>

                <input
                  id={field.id}
                  type={field.type}
                  name={field.id}
                  placeholder={field.placeholder}
                  required
                  className={inputClass}
                />
              </div>
            ))}

            <div className="mt-5">
              <label htmlFor="message" className={labelClass}>
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message..."
                required
                className={inputClass + " resize-none"}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-white shadow-md shadow-cyan-100 transition-all duration-300 hover:bg-cyan-500"
            >
              Send Message
              <FaPaperPlane size={14} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
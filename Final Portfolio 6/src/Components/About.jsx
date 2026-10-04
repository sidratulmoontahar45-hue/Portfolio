import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaLightbulb } from "react-icons/fa";
import { SectionHeading, IconBadge, cardClass, fadeIn } from "./Shared";

const highlights = [
  {
    icon: <FaCode size={19} />,
    title: "Development",
    text: "Creating clean and responsive applications.",
  },
  {
    icon: <FaLaptopCode size={19} />,
    title: "Learning",
    text: "Always exploring new tools and technologies.",
  },
  {
    icon: <FaLightbulb size={19} />,
    title: "Problem Solving",
    text: "I always try to break down problems into small parts then try to find practical solutions for them.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-white px-6 sm:px-10 md:px-16 lg:px-20 pt-0 sm:pt-2 pb-32 sm:pb-36 overflow-hidden"
    >
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading small="Get To Know Me" title="About" highlight="Me" />

        <div className="mx-auto max-w-5xl">
       
          <motion.div {...fadeIn({ y: 30 })} className="mx-auto max-w-3xl text-center">
            <p className="text-base sm:text-lg font-medium leading-relaxed text-gray-700">
              I'm <span className="font-semibold text-gray-900">Sidratul Moontahar</span>, a
              Computer Science & Engineering student who enjoys building modern web applications
              and exploring new technologies.
            </p>

            <p className="mt-4 text-base sm:text-lg font-medium leading-relaxed text-gray-700">
              I like turning ideas into practical solutions. I always try to learn from real
              projects rather than just reading from books, while continuously improving my
              development and problem-solving skills.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                {...fadeIn({ y: 30, duration: 0.6, delay: 0.1 + index * 0.1 })}
                whileHover={{ y: -5 }}
                className={cardClass + " p-6 text-center"}
              >
                <div className="mx-auto w-fit">
                  <IconBadge>{item.icon}</IconBadge>
                </div>

                <h3 className="mt-4 text-lg font-bold text-gray-900">{item.title}</h3>

                <p className="mt-2 text-sm sm:text-base leading-relaxed text-gray-700">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
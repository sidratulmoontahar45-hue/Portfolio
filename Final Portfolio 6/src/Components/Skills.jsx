import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiC, SiCplusplus, SiMysql, SiPython } from "react-icons/si";
import { MdLightbulb } from "react-icons/md";
import { SectionHeading, cardClass, fadeIn } from "./Shared";

const skills = [
  { name: "HTML", percentage: 80, icon: FaHtml5 },
  { name: "CSS", percentage: 85, icon: FaCss3Alt },
  { name: "JavaScript", percentage: 70, icon: FaJs },
  { name: "React", percentage: 65, icon: FaReact },
  { name: "Tailwind CSS", percentage: 75, icon: SiTailwindcss },
  { name: "C", percentage: 80, icon: SiC },
  { name: "C++", percentage: 85, icon: SiCplusplus },
  { name: "Java", percentage: 75, icon: FaJava },
  { name: "Python", percentage: 70, icon: SiPython },
  { name: "MySQL", percentage: 65, icon: SiMysql },
  { name: "Git & GitHub", percentage: 60, icon: FaGithub },
  { name: "Problem Solving", percentage: 50, icon: MdLightbulb },
];

const radius = 48;
const circumference = 2 * Math.PI * radius;

const Skills = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [percentages, setPercentages] = useState(skills.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    if (!visible) {
      setPercentages(skills.map(() => 0));
      return;
    }

    const duration = 1500;
    const startTime = performance.now();
    let frameId;

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setPercentages(skills.map((skill) => Math.round(skill.percentage * easeOut)));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full min-h-screen bg-white px-6 sm:px-10 md:px-14 lg:px-16 pt-32 pb-24 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-10 left-10 w-40 h-40 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-10 right-10 w-52 h-52 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          title="My Skills"
          text="Technologies and tools I use to build modern, responsive, and user-friendly applications. Continuously learning and improving"
          className="mb-10"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -translate-y-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const filled = (percentages[index] / 100) * circumference;

            return (
              <motion.div
                key={skill.name}
                {...fadeIn({ y: 45, duration: 0.6, delay: index * 0.05, amount: 0.15 })}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
                className={cardClass + " min-h-[190px] p-4"}
              >
                <div className="flex flex-col items-center justify-center">
              
                  <motion.div
                    {...fadeIn({ scale: 0.85, duration: 0.5, delay: index * 0.05 + 0.15 })}
                    className="relative w-[125px] h-[125px]"
                  >
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 125 125">
                      <circle
                        cx="62.5"
                        cy="62.5"
                        r={radius}
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="8"
                      />
                      <circle
                        cx="62.5"
                        cy="62.5"
                        r={radius}
                        fill="none"
                        stroke="#06B6D4"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - filled}
                        className="transition-all duration-100"
                      />
                    </svg>

                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <Icon className="text-4xl text-gray-900 mb-1" aria-hidden="true" />
                      <span className="text-lg font-bold text-gray-900">{percentages[index]}%</span>
                    </div>
                  </motion.div>

                  <p className="text-center mt-4 text-sm sm:text-base font-semibold text-gray-900">
                    {skill.name}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

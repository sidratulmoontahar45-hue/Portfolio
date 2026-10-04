import { motion } from "framer-motion";
import { FaGraduationCap, FaFlask, FaLaptopCode } from "react-icons/fa";
import { SectionHeading, IconBadge, cardClass, fadeIn } from "./Shared";

const educationItems = [
  {
    year: "2024 - PRESENT",
    title: "Bachelor of Science in Computer Science & Engineering",
    organization: "Metropolitan University",
    result: "CGPA: 3.76",
    description:"Currently pursuing a B.Sc. in Computer Science & Engineering with a focus on software development, programming and emerging technologies.",
  },
  {
    year: "2022",
    title: "Higher Secondary Certificate (HSC)",
    organization: "BAF Shaheen College Shamshernagar",
    result: "GPA: 5.00",
    description: "Completed Higher Secondary education with an excellent academic record.",
  },
  {
    year: "2020",
    title: "Secondary School Certificate (SSC)",
    organization: "BAF Shaheen College Shamshernagar",
    result: "GPA: 5.00",
    description: "Completed Secondary School education with an excellent academic record.",
  },
];

const experienceItems = [
  {
    icon: <FaFlask />,
    year: "PRESENT",
    title: "Research Project",
    organization: "Groundwater Depletion Prediction in Rural Areas",
    description:"Currently conducting research on predicting groundwater depletion in rural areas using machine learning approaches. CNN and LSTM models are currently showing reasonably promising performance.",
    tag: "Research",
  },
  {
    icon: <FaLaptopCode />,
    year: "ONGOING",
    title: "Software Development Course",
    organization: "Phitron",
    description:
    "Currently developing software engineering foundations through structured programming and software development training.",
    tag: "Software Development",
  },
  {
    icon: <FaLaptopCode />,
    year: "ONGOING",
    title: "Backend Development Course",
    organization: "Programming Hero",
    description:"Currently expanding my development skills with a focus on modern frontend and backend technologies. My particular interest is in backend development.",
    tag: "Backend",
  },
];
const columns = [
  {
    title: "Education",
    subtitle: "Academic background",
    icon: <FaGraduationCap size={20} />,
    items: educationItems,
    side: "left",
  },
  {
    title: "Experience",
    subtitle: "Research & professional development",
    icon: <FaFlask size={19} />,
    items: experienceItems,
    side: "right",
  },
];
const TimelineItem = ({ item, index, side }) => {
  const hasIcon = item.icon !== undefined;
  const slideFrom = side === "left" ? -50 : 50;
  return (
    <motion.div
      {...fadeIn({ x: slideFrom, delay: index * 0.1 })}
      className={"relative pb-10 last:pb-0 " + (hasIcon ? "pl-12" : "pl-10 sm:pl-12")}
    >
      {hasIcon ? (
        <><div className="absolute left-5 top-10 bottom-0 w-px bg-cyan-300" />
          <motion.div
          {...fadeIn({ scale: 0.7, duration: 0.5, delay: index * 0.1 + 0.15 })}
          className="absolute left-0 top-0 z-10 w-fit">
          <IconBadge size="h-10 w-10">{item.icon}</IconBadge>
          </motion.div>
        </>
      ) : (
        <>
          <div className="absolute left-[7px] top-8 bottom-0 w-px bg-cyan-300" />
          <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-cyan-400 border-4 border-white shadow-md shadow-cyan-200" />
        </>
      )}

      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className={cardClass + " p-5 sm:p-6"}
      >
        <span className="inline-flex rounded-full bg-cyan-50 px-4 py-1.5 text-sm font-bold tracking-wide text-cyan-700">
          {item.year}
        </span>
        <h4 className="mt-4 text-lg sm:text-xl font-bold text-gray-900">{item.title}</h4>
        <p className="mt-1 font-semibold text-cyan-600">{item.organization}</p>

        {item.result && (
          <div className="mt-4 inline-flex items-center rounded-lg border-2 border-cyan-300 bg-cyan-50 px-4 py-2 shadow-sm shadow-cyan-100">
            <span className="text-lg font-semibold tracking-wide text-cyan-700">
              {item.result}
            </span>
          </div>
        )}
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700">
          {item.description}
        </p>
        {item.tag && (
          <span className="mt-4 inline-block rounded-md border-2 border-gray-300 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
            {item.tag}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <section
      id="education"
      className="w-full  bg-white  px-6 sm:px-10 md:px-16 lg:px-20 py-20 sm:py-24 overflow-hidden"
    >
      <SectionHeading
        small="My Journey"
        title="Education"
        highlight="& Experience"
        text="My academic background, research experience and continuous professional development as a Computer Science student."
        className="mx-auto max-w-6xl mb-16"
      />
      <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16">
        {columns.map((column) => (
          <motion.div
            key={column.title}
            {...fadeIn({ x: column.side === "left" ? -40 : 40, amount: 0.15 })}
          >
            {/* column title */}
            <motion.div
              {...fadeIn({ y: 20, duration: 0.5 })}
              className="mb-9 flex items-center gap-3"
            >
              <IconBadge>{column.icon}</IconBadge>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">{column.title}</h3>
                <p className="text-base font-medium text-gray-700">{column.subtitle}</p>
              </div>
            </motion.div>

            <div>
              {column.items.map((item, index) => (
                <TimelineItem key={item.title} item={item} index={index} side={column.side} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Education;
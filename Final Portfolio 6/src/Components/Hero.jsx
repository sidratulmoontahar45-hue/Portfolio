import profilepic from "../assets/pprtfolio-photo.png";
import { TypeAnimation } from "react-type-animation";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";

const socialLinks = [
  { name: "LinkedIn",
    url: "https://www.linkedin.com/in/mohammad-sidratul-moontahar-177679299/",
    icon: AiFillLinkedin,},
  { name: "GitHub",
    url: "https://github.com/sidratulmoontahar45-hue",
    icon: AiFillGithub,},
  { name: "Instagram",
    url: "https://www.instagram.com/sidratul.islam/",
    icon: AiFillInstagram,},
];

const buttonBase =
  "group inline-flex min-h-11 w-full max-w-[220px] items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 sm:w-auto sm:max-w-none sm:px-7 sm:text-base";

const Hero = () => {
  const scrollToWork = () => {
    const section = document.getElementById("projects");
    if (section) {section.scrollIntoView({ behavior: "smooth", block: "start" });} };

  return (
    <section
      id="home"
      className="hero-section relative flex w-full min-h-[100svh] flex-col justify-center overflow-hidden  bg-white  pb-28 sm:pb-28 lg:pb-24">
     <div className="pointer-events-none absolute left-1/2 top-8 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-cyan-200/20 blur-3xl sm:top-10 sm:h-[360px] sm:w-[360px] md:h-[440px] md:w-[440px] lg:h-[520px] lg:w-[520px]" />
      <div className="pointer-events-none absolute left-[5%] top-[45%] h-16 w-16 rounded-full bg-cyan-300/10 blur-2xl sm:left-[10%] sm:h-20 sm:w-20 lg:left-[15%] lg:h-24 lg:w-24" />
       <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 pt-7 sm:px-8 sm:pt-9 md:px-12 md:pt-10 lg:px-16 lg:pt-7 xl:px-20 2xl:px-24">
              <div className="text-center">
          
          <div className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-3.5 py-2 text-center text-[11px] font-semibold tracking-wide text-cyan-600 sm:px-4 sm:text-sm">
            <span className="shrink-0 text-cyan-400">✦</span>
            BACKEND DEVELOPER
          </div>
          <div className="relative mx-auto mt-5 mb-4 flex w-full items-center justify-center sm:mt-7 sm:mb-5 md:mt-8">
            <div className="hero-glow absolute aspect-square w-[165px] rounded-full bg-cyan-300/20 blur-2xl sm:w-[215px] md:w-[255px] lg:w-[275px]" />
            <div className="hero-ring absolute aspect-square w-[160px] rounded-full border border-cyan-200/60 sm:w-[210px] md:w-[250px] lg:w-[270px]" />
            <img
              src={profilepic}
              alt="Sidratul profile"
              className="hero-img relative z-10 h-auto w-[150px] max-w-[70vw] drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)] transition-transform duration-500 hover:scale-[1.02] sm:w-[200px] md:w-[240px] lg:w-[260px] xl:w-[265px]"
            />
          </div>

          <p className="mt-2 text-lg font-semibold text-cyan-500 sm:text-2xl md:text-3xl lg:text-4xl">
            Hi, I'm Sidratul
          </p>

  
          //Typing animation
          <h1 className="hero-title mx-auto mt-2 max-w-[95vw] text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:max-w-[90vw] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
            <TypeAnimation
              sequence={[
                "Backend Developer",
                1600,
                "App Developer",
                1600,
                "Software Developer",
                1600,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline-block whitespace-normal sm:whitespace-nowrap"
            />
          </h1>


          <div className="mt-3 flex justify-center">
            <div className="h-1 w-12 rounded-full bg-cyan-400 sm:w-14" />
          </div>

          <p className="mx-auto mt-4 max-w-[720px] px-2 text-sm leading-relaxed text-gray-600 sm:mt-5 sm:px-0 sm:text-lg lg:max-w-4xl lg:text-xl">
            I’m a passionate backend developer focused on building clean, scalable and
            user-friendly applications. I love turning ideas into real-world products that solve
            problems and create impact.
          </p>

      
          <div className="mt-5 flex items-center justify-center gap-3 sm:mt-6 sm:gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-xl
                  text-gray-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:text-cyan-500 hover:shadow-md focus:outline-none focus:ring-2
                  focus:ring-cyan-400 sm:h-11 sm:w-11 sm:text-2xl"
                >
                  <Icon className="transition-transform duration-300 group-hover:scale-110" />
                </a>
              );
            })}
          </div>

          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:mt-6 sm:flex-row sm:gap-4">
            <button
              onClick={scrollToWork}
              className={
                buttonBase +
                " bg-gray-900 text-white shadow-lg shadow-gray-900/10 hover:bg-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20"
              }
            >
              View My Work
              <FiArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <a
              href="/cv.pdf"
              download
              className={
                buttonBase +
                " border border-gray-300 bg-white/70 text-gray-800 shadow-sm backdrop-blur-md hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-600 hover:shadow-md"
              }
            >
              Download CV
              <FiArrowDown
                size={17}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center text-gray-400 xl:flex">
        <span className="mb-1 text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <FiArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
};
export default Hero;
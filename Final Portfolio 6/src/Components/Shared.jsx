//I have created this extra file for code reuseability
// all the animation used in the portfolio are here
import { motion } from "framer-motion";



//fadein animation
export const fadeIn = ({x=0,y=0,scale=1,delay=0,duration=0.7,amount=0.2}={}) => {
return {
    initial: { opacity:0,x:x,y:y,scale:scale },
    whileInView: { opacity:1,x:0,y:0,scale:1},
    viewport: {once:true,amount:amount},
    transition:{duration:duration,delay:delay,ease:"easeOut"},
};};


//box shaped
export const cardClass ="rounded-2xl border-2 border-gray-300 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md";



//creating headings
export const SectionHeading = ({ small, title, highlight, text, className = "mb-12" }) => {
return ( <motion.div {...fadeIn({y:30})} className={"text-center "+className}>
    {small && (<p className="text-base font-semibold tracking-[0.2em] text-cyan-600 uppercase">{small}</p>)}
    <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
    {title} {highlight && <span className="text-cyan-500">{highlight}</span>}
    </h2>
    <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-cyan-400" />
    {text && (<p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg font-medium leading-relaxed text-gray-700">{text}</p> )}
    </motion.div>);
};




//cyan circle icon inside
export const IconBadge = ({ children, size = "h-11 w-11" }) => {
return (
<div className={"flex items-center justify-center rounded-full bg-cyan-400 text-white shadow-lg shadow-cyan-200 "+size}>
    {children}
</div>);
};
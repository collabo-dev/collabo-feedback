import React from 'react'
import { motion } from "framer-motion";

const Home = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const classOnOpen = isOpen ? " w-full min-h-[40rem]" : " w-20 h-20 ";

  return (
    <motion.div
      layout
      data-isOpen={isOpen}
      initial={{ borderRadius: 50 }}
      className={" bg-slate-100 border border-slate-200 shadow-2xl shadow-orange-300/20  rounded-full flex items-center justify-center " + classOnOpen}
      onClick={() => !isOpen && setIsOpen(!isOpen)}
    >
      {!isOpen && <motion.div layout className=" rounded-full bg-orange-500 w-10 h-10" />}
      {isOpen && <motion.div
      layout
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className=" rounded-full bg-white w-full h-full flex justify-center items-center">
        <div className='bg-pink-500 rounded-full flex items-center justify-center cursor-pointer w-14 h-14 m-8'>
          <span onClick={() => setIsOpen(!isOpen)} className="block text-white">Close</span>
        </div>
        <div>
          <input type="text" placeholder="Enter a subject" />
        </div>
        <div>
          <input type="text" placeholder="Enter a subject" />
        </div>
        <div>
          <input type="text" placeholder="Enter a subject" />
        </div>
      </motion.div>}
    </motion.div>
  );
}

export default Home
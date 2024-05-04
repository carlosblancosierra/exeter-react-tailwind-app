import { AnimatePresence, motion } from "framer-motion";
// import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";
import FullScreenCarrousel from "../FullScreenCarrousel/FullScreenCarrousel";

const HomesiteGallery = ({imgs, isGalleryOpen, setIsGalleryOpen}) => {
  return (
      <SpringModal isOpen={isGalleryOpen} setIsOpen={setIsGalleryOpen} imgs={imgs} />
        );
};

const SpringModal = ({ isOpen, setIsOpen, imgs }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer w-full h-full"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="w-full shadow-xl cursor-default relative overflow-hidden pt-5 max-w-screen-2xl mx-auto"
          >
            {/* <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" /> */}
            <div className="relative z-10">
              <FullScreenCarrousel  imgs={imgs} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HomesiteGallery;

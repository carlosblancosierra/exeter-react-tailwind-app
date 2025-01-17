import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { communities } from '../../mockData';
import { Link } from 'react-router-dom';

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const SwipeCarousel = ({ objs, template }) => {
  const [objIndex, setObjIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setObjIndex((pv) => {
          if (pv === objs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && objIndex < objs.length - 1) {
      setObjIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && objIndex > 0) {
      setObjIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${objIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Components componentIndex={objIndex} template={template} objs={objs} />
      </motion.div>

      <Dots objIndex={objIndex} setObjIndex={setObjIndex} objs={objs}/>
    </div>
  );
};
const Components = ({ componentIndex, template, objs }) => {
  return (
    <>
      {objs.map((obj, idx) => {
        return (
          <motion.div
            key={idx}
            animate={{
              scale: componentIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-screen shrink-0 rounded-xl bg-neutral-800 object-cover"
          >
            <Link to={obj.url}>
              {template({ obj })}
            </Link>
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({ objIndex, setObjIndex, objs }) => {
  return (
    <div className="mt-0 flex w-full justify-center gap-2">
      {objs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setObjIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === objIndex ? "bg-neutral-400" : "bg-neutral-300"
            }`}
          />
        );
      })}
    </div>
  );
};

export default SwipeCarousel;

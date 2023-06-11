import React from 'react';

const Banner = () => {
  // const ref = useRef(null);
  // const { x, y } = useFollowPointer(ref);
  return (
    <div>
      <div className="h-[260px] w-full bg-black relative" />
      {/* <motion.div
        ref={ref}
        className="box"
        animate={{ x, y }}
        transition={{
          type: 'spring',
          damping: 10,
          stiffness: 50,
          restDelta: 0.001,
        }}
      /> */}
    </div>
  );
};

export { Banner };

import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <div className="z-30 flex justify-center items-center fixed w-full h-full bg-black">
      <motion.svg
        initial={{ transform: 'scale(0.5)' }}
        animate={{ transform: 'scale(0.8)' }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="100.000000pt"
        height="96.000000pt"
        viewBox="0 0 100.000000 96.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
          fill="#BA55D3"
          stroke="none"
        >
          <path
            d="M220 854 c-8 -4 -26 -16 -38 -28 -91 -82 -58 -265 56 -313 39 -16 35
-26 -34 -73 -23 -16 -49 -45 -58 -65 -10 -20 -37 -54 -62 -77 -50 -46 -71 -98
-56 -139 11 -29 60 -89 72 -89 4 0 11 16 14 35 4 20 16 56 26 80 34 79 143
129 229 105 58 -15 86 -43 110 -109 39 -106 100 -158 175 -148 47 7 86 44 86
84 0 20 3 24 18 17 31 -14 100 -16 135 -5 71 24 112 102 93 177 -8 31 -147
178 -189 200 -16 9 -69 24 -119 35 -143 31 -147 35 -182 159 -21 76 -47 113
-92 135 -38 18 -156 30 -184 19z m196 -40 c14 -10 32 -31 41 -48 20 -38 44
-128 33 -121 -4 3 -11 21 -14 40 -6 28 -14 38 -41 49 -37 16 -55 41 -52 74 2
26 1 26 33 6z m305 -489 c99 -10 139 -27 139 -59 0 -36 -36 -66 -80 -66 -20 0
-42 6 -49 13 -9 8 -15 8 -17 1 -3 -6 -18 -8 -34 -6 -17 2 -40 -2 -54 -11 -31
-21 -36 -10 -36 83 l0 69 28 -9 c16 -4 62 -11 103 -15z m-38 -169 c3 -8 -1
-20 -9 -27 -18 -15 -64 3 -64 26 0 20 66 21 73 1z"
          />
        </g>
      </motion.svg>
    </div>
  );
};

export default Preloader;

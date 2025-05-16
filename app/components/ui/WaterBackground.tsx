'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/app/context/ThemeContext';

export default function WaterBackground() {
  const { theme } = useTheme();
  
  const colors = {
    light: {
      gradient: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.3), rgba(37, 99, 235, 0.2))',
      deepWave: 'rgba(37, 99, 235, 0.25)',
      middleWave: 'rgba(59, 130, 246, 0.25)',
      surfaceWave: 'rgba(96, 165, 250, 0.25)',
      stars: 'rgba(255, 255, 255, 0.5)',
    },
    dark: {
      gradient: 'linear-gradient(to bottom, rgba(29, 78, 216, 0.3), rgba(30, 64, 175, 0.2))',
      deepWave: 'rgba(30, 64, 175, 0.25)',
      middleWave: 'rgba(37, 99, 235, 0.25)',
      surfaceWave: 'rgba(59, 130, 246, 0.25)',
      stars: 'rgba(255, 255, 255, 0.8)',
    }
  };

  const currentColors = colors[theme];

  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: currentColors.gradient
        }}
      >
        {/* Stars */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`, // Only in top 60% of screen
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                background: currentColors.stars,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 3,
              }}
            />
          ))}
        </motion.div>

        {/* Deep wave layer */}
        <motion.svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
          initial={{ y: 0 }}
          animate={{
            y: [-80, 0, -80],
            scaleX: [1, 1.3, 1],
          }}
          transition={{
            duration: 30, // Slowed down from 20
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.path
            fill={currentColors.deepWave}
            d="M0,160L48,165.3C96,171,192,181,288,197.3C384,213,480,235,576,218.7C672,203,768,149,864,149.3C960,149,1056,203,1152,202.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </motion.svg>

        {/* Middle wave layer */}
        <motion.svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
          initial={{ y: 0 }}
          animate={{
            y: [-60, 20, -60],
            scaleX: [1.2, 0.8, 1.2],
          }}
          transition={{
            duration: 25, // Slowed down from 15
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <motion.path
            fill={currentColors.middleWave}
            d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,186.7C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </motion.svg>

        {/* Surface wave layer */}
        <motion.svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
          initial={{ y: 0 }}
          animate={{
            y: [-40, 40, -40],
            scaleX: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 20, // Slowed down from 10
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <motion.path
            fill={currentColors.surfaceWave}
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,128C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </motion.svg>

        {/* Enhanced floating particles */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                background: theme === 'light' 
                  ? `rgba(${96 + Math.random() * 50}, ${165 + Math.random() * 30}, 250, 0.4)`
                  : `rgba(${59 + Math.random() * 30}, ${130 + Math.random() * 20}, 246, 0.4)`
              }}
              animate={{
                y: [-50, 50],
                x: [-25, 25],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 6 + Math.random() * 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
} 
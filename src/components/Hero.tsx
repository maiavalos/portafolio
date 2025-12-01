import { motion, useAnimation } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowDownCircleIcon, CursorArrowRaysIcon, SparklesIcon } from '@heroicons/react/24/solid';

// Tech stack icons
const techIcons = [
  { id: 1, icon: '💻', name: 'Frontend', size: 'text-3xl', delay: 0.3 },
  { id: 2, icon: '⚛️', name: 'React', size: 'text-4xl', delay: 0.6 },
  { id: 3, icon: '📱', name: 'Mobile', size: 'text-3xl', delay: 0.9 },
  { id: 4, icon: '🎨', name: 'UI/UX', size: 'text-3xl', delay: 1.2 },
  { id: 5, icon: '🔧', name: 'Tools', size: 'text-3xl', delay: 1.5 }
];

// Tarot and magic icons
const magicIcons = [
  { id: 1, icon: '🃏', name: 'Tarot', size: 'text-2xl', delay: 0.2 },
  { id: 2, icon: '🔮', name: 'Crystal', size: 'text-3xl', delay: 0.4 },
  { id: 3, icon: '✨', name: 'Magic', size: 'text-2xl', delay: 0.6 },
  { id: 4, icon: '🌙', name: 'Moon', size: 'text-3xl', delay: 0.8 },
  { id: 5, icon: '⭐', name: 'Star', size: 'text-2xl', delay: 1.0 },
  { id: 6, icon: '🔥', name: 'Fire', size: 'text-2xl', delay: 1.2 }
];

export const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start('visible');
      await controls.start('hover');
    };
    sequence();
  }, [controls]);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      y: -5,
      transition: {
        y: {
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1.5,
          ease: 'easeInOut',
        },
      },
    },
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 text-gray-900 dark:text-white bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-200"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-gray-300/[0.2] dark:bg-grid-white/[0.02] bg-[length:40px_40px]" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating tech icons */}
        <div className="absolute inset-0">
          {techIcons.map((item, i) => (
            <motion.div
              key={item.id}
              className={`absolute ${item.size} opacity-20`}
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                rotate: Math.random() * 360
              }}
              animate={{
                x: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ],
                y: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ],
                rotate: [0, 90, 180, 270, 360],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear',
                delay: item.delay
              }}
              style={{
                left: `${10 + (i * 15) % 80}%`,
                top: `${10 + (i * 20) % 80}%`,
              }}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>

        {/* Floating magic icons */}
        <div className="absolute inset-0">
          {magicIcons.map((item, i) => (
            <motion.div
              key={`magic-${item.id}`}
              className={`absolute ${item.size} opacity-30`}
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                rotate: 0,
                scale: 0
              }}
              animate={{
                x: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ],
                y: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ],
                rotate: [0, 180, 360],
                scale: [0, 1, 0.8, 1],
                opacity: [0, 0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 15 + Math.random() * 15,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: item.delay
              }}
              style={{
                left: `${5 + (i * 18) % 90}%`,
                top: `${5 + (i * 15) % 90}%`,
              }}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-500/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-purple-500/10 to-transparent" />
      </div>

      <div className="container relative z-10 px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div 
            variants={item} 
            className="mb-4"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 dark:bg-purple-500/10 text-purple-600 dark:text-purple-300 text-sm font-mono tracking-widest border border-purple-500/20 dark:border-purple-500/20">
              <SparklesIcon className="w-4 h-4 mr-2" />
              🃏 Desarrolladora Mágica
            </span>
          </motion.div>

          <motion.div className="relative inline-block">
            <motion.h1 
              variants={item}
              className="text-5xl md:text-7xl font-bold mb-6 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Maia Avalos
            </motion.h1>
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl -z-10 blur-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>

          <motion.div 
            variants={item}
            className="relative inline-block mb-10"
          >
            <motion.h2 
              className="text-2xl md:text-4xl font-medium text-gray-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <span className="relative inline-flex items-center">
                <span className="mr-3 text-2xl">🔮</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
                  Desarrolladora Full Stack & Tarot Reader
                </span>
              </span>
            </motion.h2>
            <motion.div 
              className="absolute -bottom-3 left-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </motion.div>

          <motion.p 
            variants={item}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Combino la magia del código con el arte del tarot para crear experiencias digitales 
            excepcionales. Cada línea de código es un hechizo, cada proyecto una carta del destino 
            que transforma ideas en realidad digital con un toque místico.
          </motion.p>

          <motion.div 
            variants={item} 
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('projects');
                if (element) {
                  const yOffset = -80; // Ajusta este valor según la altura de tu Navbar
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-xl font-medium transition-all duration-300 flex items-center gap-3 group shadow-lg shadow-purple-500/20 dark:shadow-purple-900/30 hover:shadow-purple-600/30 dark:hover:shadow-purple-900/40"
            >
              <CursorArrowRaysIcon className="w-5 h-5" />
              Ver mis proyectos
              <ArrowDownCircleIcon className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium transition-all duration-300 flex items-center gap-3 border border-white/10 hover:border-white/20 shadow-lg shadow-purple-900/10 hover:shadow-purple-900/20 backdrop-blur-sm"
            >
              <span className="mr-3 text-2xl">🔮</span>
              Consulta Mágica
            </motion.a>
          </motion.div>

          <motion.div 
            variants={item}
            className="mt-16"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-purple-500/10 backdrop-blur-sm rounded-full border border-purple-500/20 text-sm text-purple-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
              </span>
              <span className="font-mono text-xs tracking-wider">🔮 DISPONIBLE PARA CONSULTAS MÁGICAS</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

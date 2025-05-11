import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
  overlay?: boolean;
  alignment?: 'left' | 'center' | 'right';
  height?: 'default' | 'tall' | 'short';
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  ctaText = 'Explore Our Collections',
  ctaLink = '/collections',
  overlay = true,
  alignment = 'center',
  height = 'default'
}) => {
  const heightClass = {
    default: 'min-h-[80vh]',
    tall: 'min-h-screen',
    short: 'min-h-[60vh]'
  }[height];

  const alignmentClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  }[alignment];

  return (
    <section 
      className={`relative flex items-center ${heightClass}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {overlay && <div className="absolute inset-0 bg-black bg-opacity-40"></div>}
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className={`flex flex-col ${alignmentClass} max-w-3xl mx-auto space-y-6`}>
          <motion.h1 
            className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              className="text-white text-lg md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {subtitle}
            </motion.p>
          )}
          
          {ctaText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <Link to={ctaLink} className="btn btn-primary">
                {ctaText}
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
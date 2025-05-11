import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

const Process: React.FC = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'Every project begins with a conversation. We listen carefully to understand your vision, preferences, lifestyle needs, and budget considerations.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
    },
    {
      number: '02',
      title: 'Design & Planning',
      description: 'Our design team creates concept sketches and detailed plans for your approval, including material recommendations and finish options.',
      image: 'https://images.pexels.com/photos/5386634/pexels-photo-5386634.jpeg'
    },
    {
      number: '03',
      title: 'Material Selection',
      description: 'We source the finest sustainable materials, carefully selecting each piece of wood for its unique character, grain pattern, and structural integrity.',
      image: 'https://images.pexels.com/photos/4993085/pexels-photo-4993085.jpeg'
    },
    {
      number: '04',
      title: 'Precision Crafting',
      description: 'Our master artisans employ both traditional techniques and modern precision tools to transform raw materials into exceptional furniture.',
      image: 'https://images.pexels.com/photos/3972360/pexels-photo-3972360.jpeg'
    },
    {
      number: '05',
      title: 'Finishing',
      description: 'We apply meticulous hand-finishing techniques, using premium oils, waxes, or lacquers to enhance and protect the natural beauty of the wood.',
      image: 'https://images.pexels.com/photos/5691680/pexels-photo-5691680.jpeg'
    },
    {
      number: '06',
      title: 'Quality Control',
      description: 'Every piece undergoes rigorous inspection to ensure it meets our exacting standards for craftsmanship, structural integrity, and aesthetic beauty.',
      image: 'https://images.pexels.com/photos/5543440/pexels-photo-5543440.jpeg'
    },
    {
      number: '07',
      title: 'Delivery & Installation',
      description: 'We carefully deliver and install your finished pieces, ensuring they\'re perfectly positioned and ready to enjoy in your space.',
      image: 'https://images.pexels.com/photos/1360686/pexels-photo-1360686.jpeg'
    }
  ];

  return (
    <>
      <Hero 
        title="Our Crafting Process"
        subtitle="From design to delivery, every step reflects our commitment to excellence"
        backgroundImage="https://images.pexels.com/photos/5478844/pexels-photo-5478844.jpeg"
        height="short"
      />
      
      {/* Introduction */}
      <section className="section py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle 
              title="The Art of Creation"
              subtitle="How we bring exceptional furniture to life"
            />
            
            <motion.p 
              className="text-lg text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              At Artisan Furnishings, we believe that truly exceptional furniture is the result of a thoughtful, deliberate process that honors both traditional craftsmanship and innovative design. Each piece we create follows a carefully orchestrated journey from concept to completion, ensuring that the finished product exceeds expectations in both beauty and functionality.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Process Steps */}
      <section className="section bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          {processSteps.map((step, index) => (
            <motion.div 
              key={step.number}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index !== processSteps.length - 1 ? 'mb-24' : ''
              } ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              <div className={`${index % 2 !== 0 ? 'md:order-1 md:text-right' : ''}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-800 mb-6">
                  <span className="text-xl font-semibold">{step.number}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Materials */}
      <section className="section py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Materials"
            subtitle="Only the finest materials for enduring quality"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg" 
                alt="Hardwoods" 
                className="w-full h-64 object-cover mb-6"
              />
              <h3 className="text-xl font-semibold mb-3">Premium Hardwoods</h3>
              <p className="text-gray-700">
                We select the finest walnut, oak, maple, cherry, and other premium hardwoods, each chosen for its unique character, beautiful grain patterns, and enduring strength.
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/45853/grey-leather-shoe-sport-45853.jpeg" 
                alt="Leather" 
                className="w-full h-64 object-cover mb-6"
              />
              <h3 className="text-xl font-semibold mb-3">Fine Leather</h3>
              <p className="text-gray-700">
                Our full-grain, vegetable-tanned leathers are sourced from responsible producers who maintain high standards for animal welfare and environmental stewardship.
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img 
                src="https://images.pexels.com/photos/235925/pexels-photo-235925.jpeg" 
                alt="Hardware" 
                className="w-full h-64 object-cover mb-6"
              />
              <h3 className="text-xl font-semibold mb-3">Premium Hardware</h3>
              <p className="text-gray-700">
                We use only the finest brass, bronze, and steel hardware, selected for both its aesthetic appeal and functional durability over generations of use.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Craftsmanship */}
      <section 
        className="section py-20 bg-cover bg-center relative"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg)'
        }}
      >
        <div className="absolute inset-0 bg-primary-900 bg-opacity-90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-semibold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Centuries-Old Techniques, Modern Precision
            </motion.h2>
            
            <motion.p 
              className="text-lg text-white/80 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our craftspeople blend traditional joinery methods—dovetails, mortise and tenon, finger joints—with modern precision tools to create furniture of exceptional strength and beauty. These time-honored techniques have proven their worth over centuries, creating connections that expand and contract with seasonal changes while maintaining structural integrity.
            </motion.p>
            
            <motion.p 
              className="text-lg text-white/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Each artisan in our workshop has undergone years of training and apprenticeship, developing the skilled hands and discerning eye needed to create furniture that will be cherished for generations.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
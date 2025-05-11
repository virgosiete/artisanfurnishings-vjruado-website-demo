import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

const About: React.FC = () => {
  return (
    <>
      <Hero 
        title="Our Story"
        subtitle="A legacy of craftsmanship spanning generations"
        backgroundImage="https://images.pexels.com/photos/3933025/pexels-photo-3933025.jpeg"
        height="short"
      />
      
      {/* History Section */}
      <section className="section py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg" 
                alt="Historical workshop" 
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
            
            <div>
              <SectionTitle 
                title="Our History"
                subtitle="Since 1985"
                centered={false}
              />
              
              <motion.p 
                className="text-gray-700 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Artisan Furnishings began as a small workshop founded by master craftsman Robert Artisan in 1985. With a passion for woodworking passed down through generations of his family, Robert established a company dedicated to preserving traditional techniques while embracing innovative design.
              </motion.p>
              
              <motion.p
                className="text-gray-700 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Over the decades, our company has grown from a boutique workshop to an internationally recognized furniture maker, but our core values remain unchanged. We still craft each piece with the same dedication to quality and artistry that defined our humble beginnings.
              </motion.p>
              
              <motion.p
                className="text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Today, Artisan Furnishings is led by the second generation of the family, who continue to honor our heritage while pushing the boundaries of furniture design and craftsmanship.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="section bg-primary-50 py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Mission & Values"
            subtitle="What drives us every day"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div 
              className="bg-white p-8 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary-800">Uncompromising Quality</h3>
              <p className="text-gray-700">
                We believe that quality is never an accident; it is the result of intelligent effort, sincere intention, and skilled execution. Every joint, finish, and detail reflects our commitment to excellence.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary-800">Sustainable Practices</h3>
              <p className="text-gray-700">
                We are stewards of both our craft and our environment. Our commitment to sustainability guides every decision, from responsibly sourcing materials to minimizing waste in our production processes.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary-800">Timeless Design</h3>
              <p className="text-gray-700">
                We create furniture that transcends trends—pieces that harmonize with changing interiors while maintaining their aesthetic integrity for generations. True design never goes out of style.
              </p>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <motion.p
              className="text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our mission is to create exceptional furniture that enriches lives through beauty, functionality, and longevity—pieces that become part of your family's story and heritage.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="section py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Meet Our Artisans"
            subtitle="The hands behind our masterpieces"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg" 
                alt="James Wilson" 
                className="w-full aspect-square object-cover object-center mb-4"
              />
              <h3 className="text-xl font-semibold">James Wilson</h3>
              <p className="text-primary-700">Master Craftsman</p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img 
                src="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" 
                alt="Maria Rodriguez" 
                className="w-full aspect-square object-cover object-center mb-4"
              />
              <h3 className="text-xl font-semibold">Maria Rodriguez</h3>
              <p className="text-primary-700">Design Director</p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/8088448/pexels-photo-8088448.jpeg" 
                alt="Thomas Chen" 
                className="w-full aspect-square object-cover object-center mb-4"
              />
              <h3 className="text-xl font-semibold">Thomas Chen</h3>
              <p className="text-primary-700">Master Finisher</p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" 
                alt="Emma Davies" 
                className="w-full aspect-square object-cover object-center mb-4"
              />
              <h3 className="text-xl font-semibold">Emma Davies</h3>
              <p className="text-primary-700">Senior Woodworker</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Sustainability */}
      <section 
        className="section py-20 bg-cover bg-center relative"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/5244268/pexels-photo-5244268.jpeg)'
        }}
      >
        <div className="absolute inset-0 bg-primary-900 bg-opacity-90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            title="Our Sustainability Commitment"
            subtitle="Furniture that honors our planet"
            light={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Responsible Sourcing</h3>
              <p className="text-white/80 mb-4">
                We partner exclusively with suppliers who share our commitment to responsible forestry practices. All our hardwoods come from certified sustainable sources, and we prioritize domestic woods to reduce our carbon footprint.
              </p>
              <p className="text-white/80">
                For every tree used in our furniture, we contribute to reforestation efforts, ensuring the longevity of our forests for generations to come.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Eco-Friendly Practices</h3>
              <p className="text-white/80 mb-4">
                Our workshop operates on renewable energy, and we utilize a closed-loop system that recycles wood shavings and sawdust for heating or returns them to soil as natural compost.
              </p>
              <p className="text-white/80">
                We use water-based, low-VOC finishes that minimize environmental impact while providing beautiful, durable protection for our furniture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
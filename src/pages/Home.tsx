import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';

const Home: React.FC = () => {
  // Featured Products Data
  const featuredProducts = [
    {
      id: 'nova-lounge-chair',
      title: 'Nova Lounge Chair',
      image: 'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg',
      category: 'living-room',
      price: '$1,295'
    },
    {
      id: 'serene-dining-table',
      title: 'Serene Dining Table',
      image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg',
      category: 'dining',
      price: '$2,450'
    },
    {
      id: 'walnut-desk',
      title: 'Walnut Executive Desk',
      image: 'https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg',
      category: 'office',
      price: '$1,850'
    },
    {
      id: 'elm-bed-frame',
      title: 'Elm Wood Bed Frame',
      image: 'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg',
      category: 'bedroom',
      price: '$2,195'
    }
  ];

  return (
    <>
      <Hero 
        title="Handcrafted Furniture for the Discerning Home"
        subtitle="Exquisite artisanal pieces created with exceptional materials, masterful techniques, and uncompromising attention to detail."
        backgroundImage="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg"
        height="tall"
      />

      {/* About Section */}
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
                src="https://images.pexels.com/photos/4992459/pexels-photo-4992459.jpeg" 
                alt="Craftsman working on furniture" 
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
            
            <div>
              <SectionTitle 
                title="Timeless Craftsmanship, Modern Design"
                subtitle="Our Story"
                centered={false}
              />
              
              <motion.p 
                className="text-gray-700 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                At Artisan Furnishings, we blend time-honored woodworking traditions with contemporary design sensibilities to create furniture that transcends trends. Each piece is meticulously crafted by our master artisans using responsibly sourced materials.
              </motion.p>
              
              <motion.p
                className="text-gray-700 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Our commitment to sustainability, exceptional quality, and timeless aesthetics has earned us the trust of discerning clients worldwide. We believe furniture should be cherished for generations, not just seasons.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link to="/about" className="btn btn-secondary">
                  Learn More About Us
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="section bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Premium Collections"
            subtitle="Discover our most sought-after pieces"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard 
                key={product.id}
                {...product}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/collections" className="btn btn-primary">
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Crafting Process"
            subtitle="From inspiration to creation"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 text-primary-800 mb-6">
                <span className="text-2xl font-semibold">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Design Consultation</h3>
              <p className="text-gray-600">
                We collaborate closely with you to understand your vision, preferences, and requirements, ensuring each piece perfectly suits your space.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 text-primary-800 mb-6">
                <span className="text-2xl font-semibold">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Material Selection</h3>
              <p className="text-gray-600">
                We source the finest sustainable woods and premium materials, carefully selecting each component for beauty, durability, and character.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 text-primary-800 mb-6">
                <span className="text-2xl font-semibold">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Craftsmanship</h3>
              <p className="text-gray-600">
                Our master artisans bring decades of experience to each piece, combining traditional techniques with modern precision for impeccable results.
              </p>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/process" className="inline-flex items-center text-primary-800 font-medium hover:text-primary-900 transition-colors">
              <span>Explore Our Full Process</span>
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section 
        className="section py-20 bg-cover bg-center relative"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1697902/pexels-photo-1697902.jpeg)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            title="What Our Clients Say"
            subtitle="Testimonials from our satisfied customers"
            light={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="The dining table Artisan Furnishings crafted for us has become the centerpiece of our home. The attention to detail and quality of craftsmanship is extraordinary."
              author="Sarah Johnson"
              role="Interior Designer"
              delay={0}
            />
            
            <TestimonialCard 
              quote="Working with Artisan Furnishings on our custom office furniture was a seamless experience. Their team listened to our needs and delivered pieces that perfectly balance function and elegance."
              author="Michael Chen"
              role="CEO, Design Studios"
              delay={0.2}
            />
            
            <TestimonialCard 
              quote="The bedroom set we commissioned has transformed our space. The quality is exceptional, and the sustainable sourcing of materials aligned perfectly with our values."
              author="Emma Thompson"
              role="Homeowner"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section py-20 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Space?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-white/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Whether you're looking for a statement piece or a complete collection, our team is ready to bring your vision to life.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/collections" className="btn bg-white text-primary-900 hover:bg-gray-100">
              Explore Collections
            </Link>
            <Link to="/request-quote" className="btn bg-transparent border border-white text-white hover:bg-white/10">
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

const Collections: React.FC = () => {
  const categories = [
    {
      id: 'living-room',
      title: 'Living Room',
      description: 'Statement pieces that create inviting, elegant living spaces',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg'
    },
    {
      id: 'bedroom',
      title: 'Bedroom',
      description: 'Serene, sophisticated furniture for restful retreats',
      image: 'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg'
    },
    {
      id: 'dining',
      title: 'Dining',
      description: 'Tables and chairs that elevate gatherings and celebrations',
      image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg'
    },
    {
      id: 'office',
      title: 'Office',
      description: 'Functional, inspiring workspace furnishings',
      image: 'https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg'
    },
    {
      id: 'custom',
      title: 'Custom Furniture',
      description: 'Bespoke pieces tailored to your unique vision',
      image: 'https://images.pexels.com/photos/4846454/pexels-photo-4846454.jpeg'
    }
  ];

  return (
    <>
      <Hero 
        title="Our Collections"
        subtitle="Explore our premium furniture collections crafted with skill and passion"
        backgroundImage="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
        height="short"
      />
      
      {/* Collection Categories */}
      <section className="section py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Browse By Category"
            subtitle="Discover furniture crafted for every space in your home"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                className="group relative overflow-hidden h-[400px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h3 className="text-2xl font-semibold text-white mb-2">{category.title}</h3>
                    <p className="text-white/80 mb-6">{category.description}</p>
                    <Link 
                      to={`/collections/${category.id}`}
                      className="inline-block bg-white/20 hover:bg-white/30 text-white px-6 py-3 transition-colors duration-300"
                    >
                      Explore Collection
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Philosophy */}
      <section className="section bg-primary-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Our Design Philosophy"
                subtitle="The principles that guide our creations"
                centered={false}
              />
              
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-gray-700">
                  At Artisan Furnishings, we believe that exceptional furniture embodies a harmonious balance of form and function. Our designs are guided by the following principles:
                </p>
                
                <div className="pl-4 border-l-4 border-primary-300">
                  <h4 className="text-lg font-semibold text-primary-800 mb-2">Timeless Aesthetics</h4>
                  <p className="text-gray-600">
                    We create designs that transcend fleeting trends, focusing instead on classic proportions, clean lines, and elegant details that remain relevant across generations.
                  </p>
                </div>
                
                <div className="pl-4 border-l-4 border-primary-300">
                  <h4 className="text-lg font-semibold text-primary-800 mb-2">Material Integrity</h4>
                  <p className="text-gray-600">
                    We honor the natural beauty of our materials, selecting each piece for its unique character and allowing the inherent qualities of wood, leather, and metal to shine.
                  </p>
                </div>
                
                <div className="pl-4 border-l-4 border-primary-300">
                  <h4 className="text-lg font-semibold text-primary-800 mb-2">Purposeful Construction</h4>
                  <p className="text-gray-600">
                    Every element of our furniture serves both aesthetic and functional purposes. We eliminate the superfluous, ensuring each piece is as practical as it is beautiful.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg" 
                alt="Elegant dining set" 
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Custom Furniture */}
      <section 
        className="section py-20 bg-cover bg-center relative"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/260046/pexels-photo-260046.jpeg)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
              Have Something Special in Mind?
            </h2>
            
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Our custom furniture service brings your unique vision to life. Work directly with our designers and craftspeople to create pieces perfectly tailored to your space and needs.
            </p>
            
            <Link to="/request-quote" className="btn bg-white text-primary-900 hover:bg-gray-100">
              Request a Custom Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Collections;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryItems = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      title: 'Contemporary Living Room',
      category: 'Living Room'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg',
      title: 'Serene Bedroom Suite',
      category: 'Bedroom'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg',
      title: 'Elegant Dining Space',
      category: 'Dining'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg',
      title: 'Executive Office',
      category: 'Office'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg',
      title: 'Heirloom Lounge Chair',
      category: 'Living Room'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg',
      title: 'Modern Sofa Design',
      category: 'Living Room'
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/6969926/pexels-photo-6969926.jpeg',
      title: 'Minimalist Nightstand',
      category: 'Bedroom'
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg',
      title: 'Classic Dining Chairs',
      category: 'Dining'
    },
    {
      id: 9,
      image: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg',
      title: 'Entryway Console',
      category: 'Living Room'
    },
    {
      id: 10,
      image: 'https://images.pexels.com/photos/6438758/pexels-photo-6438758.jpeg',
      title: 'Family Dining Set',
      category: 'Dining'
    },
    {
      id: 11,
      image: 'https://images.pexels.com/photos/5705090/pexels-photo-5705090.jpeg',
      title: 'Ergonomic Office Chair',
      category: 'Office'
    },
    {
      id: 12,
      image: 'https://images.pexels.com/photos/2098913/pexels-photo-2098913.jpeg',
      title: 'Custom Dining Table',
      category: 'Dining'
    }
  ];
  
  const openModal = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Hero 
        title="Gallery"
        subtitle="Explore our collection of handcrafted pieces and inspiring interiors"
        backgroundImage="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
        height="short"
      />
      
      {/* Gallery Grid */}
      <section className="section py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Lookbook"
            subtitle="A visual journey through our finest work"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative overflow-hidden cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => openModal(item.image)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-center p-4">
                    <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                    <p className="text-white/80">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={closeModal}
          >
            <X size={30} />
          </button>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl max-h-[90vh]"
          >
            <img 
              src={selectedImage} 
              alt="Gallery image" 
              className="max-w-full max-h-[90vh] object-contain"
            />
          </motion.div>
        </div>
      )}
      
      {/* Design Showcase */}
      <section className="section bg-primary-50 py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Design Showcase"
            subtitle="Inspiring interior spaces featuring our furniture"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" 
                alt="Modern living room design" 
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
            
            <div>
              <motion.h3
                className="text-2xl font-semibold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                The Art of Interior Harmony
              </motion.h3>
              
              <motion.p
                className="text-gray-700 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our pieces are designed not only to stand as individual works of craftsmanship but to harmonize with your overall interior vision. We believe that truly exceptional furniture enhances the spaces it inhabits, creating environments that reflect both beauty and purpose.
              </motion.p>
              
              <motion.p
                className="text-gray-700 mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                The showcase images in our gallery demonstrate how our furniture can transform a space, whether integrated into a contemporary setting or anchoring a more traditional design. Each piece is created with an awareness of how it will live in your home, contributing to the overall atmosphere and functionality.
              </motion.p>
              
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center">
                  <div className="w-12 h-1 bg-primary-600 mr-4"></div>
                  <p className="text-primary-800 font-medium">Thoughtful Composition</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-1 bg-primary-600 mr-4"></div>
                  <p className="text-primary-800 font-medium">Material Harmony</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-1 bg-primary-600 mr-4"></div>
                  <p className="text-primary-800 font-medium">Balanced Proportions</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';

const SingleProduct: React.FC = () => {
  const { category, product } = useParams<{ category: string; product: string }>();
  const [activeImage, setActiveImage] = useState(0);
  
  // This would come from a database in a real application
  const productData = {
    id: product,
    title: product?.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' '),
    price: '$1,895',
    description: 'Meticulously crafted from sustainably harvested solid walnut, this piece exemplifies our commitment to exceptional materials and timeless design. Each curve and join is executed with precision by our master artisans, resulting in furniture that is as durable as it is beautiful.',
    details: [
      'Solid walnut construction',
      'Traditional mortise and tenon joinery',
      'Hand-rubbed oil finish',
      'Brass hardware',
      'Customizable dimensions available',
      'Made in our local workshop'
    ],
    materials: [
      'Solid walnut (primary)',
      'Maple accents',
      'Natural oil finish',
      'Brass fixtures'
    ],
    dimensions: {
      width: '36 inches',
      depth: '24 inches',
      height: '18 inches'
    },
    images: [
      'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg',
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      'https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg',
      'https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg'
    ],
    leadTime: '8-10 weeks',
    category: category
  };
  
  // Format category name for display
  const formatCategoryName = (category: string) => {
    return category?.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };
  
  const categoryName = formatCategoryName(category || '');
  
  // Related products - would be dynamically generated in a real app
  const relatedProducts = [
    {
      id: 'apollo-sofa',
      title: 'Apollo Sofa',
      image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg',
      category: category || 'living-room',
      price: '$3,495'
    },
    {
      id: 'meridian-coffee-table',
      title: 'Meridian Coffee Table',
      image: 'https://images.pexels.com/photos/4916781/pexels-photo-4916781.jpeg',
      category: category || 'living-room',
      price: '$1,195'
    },
    {
      id: 'element-side-table',
      title: 'Element Side Table',
      image: 'https://images.pexels.com/photos/3836387/pexels-photo-3836387.jpeg',
      category: category || 'living-room',
      price: '$895'
    }
  ];
  
  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % productData.images.length);
  };
  
  const prevImage = () => {
    setActiveImage((prev) => prev === 0 ? productData.images.length - 1 : prev - 1);
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-primary-700">Home</Link>
            <ChevronRight size={14} className="mx-2" />
            <Link to="/collections" className="hover:text-primary-700">Collections</Link>
            <ChevronRight size={14} className="mx-2" />
            <Link to={`/collections/${category}`} className="hover:text-primary-700">{categoryName}</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-gray-900 font-medium">{productData.title}</span>
          </div>
        </div>
      </div>
      
      {/* Product Details */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="relative">
              <motion.div 
                className="overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={productData.images[activeImage]} 
                  alt={productData.title || ''} 
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Image Navigation */}
                <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -mt-6">
                  <button 
                    onClick={prevImage}
                    className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:bg-white transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:bg-white transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </motion.div>
              
              {/* Thumbnail Navigation */}
              <div className="flex mt-4 space-x-4 overflow-x-auto">
                {productData.images.map((image, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-20 h-20 flex-shrink-0 ${activeImage === index ? 'ring-2 ring-primary-700' : 'opacity-70'}`}
                  >
                    <img 
                      src={image} 
                      alt={`${productData.title} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl md:text-4xl font-semibold mb-2">{productData.title}</h1>
                <p className="text-2xl text-primary-800 mb-6">{productData.price}</p>
                
                <div className="prose max-w-none mb-8">
                  <p>{productData.description}</p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Features</h3>
                  <ul className="space-y-2">
                    {productData.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={18} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Materials</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {productData.materials.map((material, index) => (
                        <li key={index}>{material}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Dimensions</h3>
                    <div className="space-y-1 text-gray-700">
                      <p>Width: {productData.dimensions.width}</p>
                      <p>Depth: {productData.dimensions.depth}</p>
                      <p>Height: {productData.dimensions.height}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-2">Lead Time</h3>
                  <p className="text-gray-700">{productData.leadTime}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/request-quote" className="btn btn-primary">
                    Request Quote
                  </Link>
                  <Link to={`/collections/${category}`} className="btn btn-secondary">
                    View Similar Items
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="You May Also Like"
            subtitle="Similar pieces from our collection"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {relatedProducts.map((relatedProduct, index) => (
              <ProductCard 
                key={relatedProduct.id}
                {...relatedProduct}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
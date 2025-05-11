import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  category: string;
  price?: string;
  description?: string;
  delay?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  image,
  category,
  price,
  description,
  delay = 0
}) => {
  return (
    <motion.div
      className="product-card group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Link to={`/collections/${category}/${id}`}>
        <div className="relative overflow-hidden aspect-[3/4]">
          <img 
            src={image} 
            alt={title} 
            className="product-card-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              {price && <p className="text-white/80">{price}</p>}
              
              <div className="mt-6 flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                <span className="mr-2">View Details</span>
                <ExternalLink size={16} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
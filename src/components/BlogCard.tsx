import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  delay?: number;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  image,
  date,
  author,
  category,
  delay = 0
}) => {
  return (
    <motion.article 
      className="bg-white overflow-hidden shadow-sm group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Link to={`/blog/${id}`} className="block">
        <div className="relative overflow-hidden aspect-[16/9]">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        <div className="p-6">
          <div className="text-sm text-primary-600 mb-2">{category}</div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-700 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4">{excerpt}</p>
          
          <div className="flex items-center text-sm text-gray-500">
            <div className="flex items-center mr-4">
              <Calendar size={14} className="mr-1" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <User size={14} className="mr-1" />
              <span>{author}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
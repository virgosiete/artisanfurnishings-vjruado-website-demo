import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import BlogCard from '../components/BlogCard';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 'choosing-the-perfect-wood',
      title: 'Choosing the Perfect Wood for Your Furniture',
      excerpt: 'Exploring the characteristics, beauty, and suitability of different hardwoods for various furniture pieces.',
      image: 'https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg',
      date: 'June 12, 2024',
      author: 'Robert Artisan',
      category: 'Materials'
    },
    {
      id: 'designing-timeless-spaces',
      title: 'The Art of Designing Timeless Living Spaces',
      excerpt: 'Design principles that transcend trends and create enduring, elegant interiors that mature beautifully over time.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      date: 'May 28, 2024',
      author: 'Maria Rodriguez',
      category: 'Design'
    },
    {
      id: 'sustainable-furniture-crafting',
      title: 'Sustainable Practices in Furniture Crafting',
      excerpt: 'How responsible material sourcing and production methods create beautiful furniture with minimal environmental impact.',
      image: 'https://images.pexels.com/photos/5691680/pexels-photo-5691680.jpeg',
      date: 'May 15, 2024',
      author: 'James Wilson',
      category: 'Sustainability'
    },
    {
      id: 'joinery-techniques',
      title: 'Traditional Joinery Techniques in Modern Furniture',
      excerpt: 'How ancient woodworking methods continue to create the strongest, most beautiful furniture connections.',
      image: 'https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg',
      date: 'April 30, 2024',
      author: 'Thomas Chen',
      category: 'Craftsmanship'
    },
    {
      id: 'mixing-materials',
      title: 'The Art of Mixing Materials: Wood, Metal, and Stone',
      excerpt: 'Creating dynamic, textural interest in furniture through thoughtful material combinations.',
      image: 'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg',
      date: 'April 18, 2024',
      author: 'Emma Davies',
      category: 'Materials'
    },
    {
      id: 'furniture-care-guide',
      title: 'A Complete Guide to Caring for Fine Furniture',
      excerpt: 'Essential maintenance practices to preserve the beauty and integrity of your handcrafted furniture investments.',
      image: 'https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg',
      date: 'April 2, 2024',
      author: 'Robert Artisan',
      category: 'Care & Maintenance'
    }
  ];

  return (
    <>
      <Hero 
        title="Insights & Inspiration"
        subtitle="Explore our collection of articles on craftsmanship, design, and the art of fine furniture"
        backgroundImage="https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg"
        height="short"
      />
      
      {/* Blog Listing */}
      <section className="section py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Blog"
            subtitle="Ideas, insights, and inspirations from our workshop and beyond"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {blogPosts.map((post, index) => (
              <BlogCard 
                key={post.id}
                {...post}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="section bg-primary-50 py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Explore by Topic"
            subtitle="Discover content organized by subject matter"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary-800">Design Insights</h3>
              <p className="text-gray-700 mb-6">
                Principles, approaches, and innovations in furniture and interior design that create beautiful, functional spaces.
              </p>
              <a href="#" className="text-primary-700 font-medium hover:text-primary-800 transition-colors">
                Browse Design Articles →
              </a>
            </div>
            
            <div className="bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary-800">Craftsmanship</h3>
              <p className="text-gray-700 mb-6">
                The techniques, traditions, and artisanal approaches that distinguish exceptional furniture from the ordinary.
              </p>
              <a href="#" className="text-primary-700 font-medium hover:text-primary-800 transition-colors">
                Browse Craftsmanship Articles →
              </a>
            </div>
            
            <div className="bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary-800">Materials</h3>
              <p className="text-gray-700 mb-6">
                Deep dives into the woods, metals, textiles, and other materials that create furniture of lasting beauty and quality.
              </p>
              <a href="#" className="text-primary-700 font-medium hover:text-primary-800 transition-colors">
                Browse Materials Articles →
              </a>
            </div>
            
            <div className="bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary-800">Sustainability</h3>
              <p className="text-gray-700 mb-6">
                Our ongoing commitment to environmentally responsible practices in sourcing, production, and business operations.
              </p>
              <a href="#" className="text-primary-700 font-medium hover:text-primary-800 transition-colors">
                Browse Sustainability Articles →
              </a>
            </div>
            
            <div className="bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary-800">Care & Maintenance</h3>
              <p className="text-gray-700 mb-6">
                Expert advice on protecting and preserving your furniture investment to ensure generations of beauty and use.
              </p>
              <a href="#" className="text-primary-700 font-medium hover:text-primary-800 transition-colors">
                Browse Care Articles →
              </a>
            </div>
            
            <div className="bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary-800">Behind the Scenes</h3>
              <p className="text-gray-700 mb-6">
                Stories from our workshop, featuring our artisans, processes, and the journey of creating exceptional pieces.
              </p>
              <a href="#" className="text-primary-700 font-medium hover:text-primary-800 transition-colors">
                Browse Workshop Articles →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
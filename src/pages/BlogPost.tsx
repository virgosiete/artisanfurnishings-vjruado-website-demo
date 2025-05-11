import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // In a real application, you would fetch the blog post data based on the slug
  // This is mock data for demonstration purposes
  const post = {
    id: slug,
    title: 'Choosing the Perfect Wood for Your Furniture',
    content: `
      <p class="lead">The choice of wood is perhaps the most important decision in creating furniture that will last for generations while maintaining its beauty. Different species offer distinct characteristics in terms of grain pattern, color, hardness, and workability.</p>
      
      <h2>Understanding Wood Properties</h2>
      
      <p>When selecting wood for furniture, we consider several key properties that influence both the aesthetic appeal and structural integrity of the final piece:</p>
      
      <ul>
        <li><strong>Hardness:</strong> Determines resistance to dents and wear</li>
        <li><strong>Stability:</strong> How much the wood expands and contracts with changes in humidity</li>
        <li><strong>Grain pattern:</strong> The distinctive visual character of the wood</li>
        <li><strong>Color and aging:</strong> The initial color and how it will change over time with exposure to light</li>
        <li><strong>Workability:</strong> How the wood responds to hand and machine tools</li>
      </ul>
      
      <p>Understanding these properties allows us to select the ideal wood species for each project, ensuring both beauty and longevity.</p>
      
      <h2>Popular Hardwoods for Fine Furniture</h2>
      
      <h3>Walnut</h3>
      
      <p>American Black Walnut is prized for its rich chocolate-brown color, which can range from creamy sapwood to deep, purple-tinged heartwood. It's moderately hard but exceptionally stable, making it ideal for intricate pieces. Walnut has a straight grain that occasionally produces spectacular figured patterns. It works beautifully with both hand and machine tools and accepts finishes exceptionally well.</p>
      
      <h3>Cherry</h3>
      
      <p>American Cherry begins as a light pinkish-brown that deepens to a rich reddish-brown with age and exposure to light. It features a fine, straight grain with occasional figuring. Cherry is moderately hard and stable, carves beautifully, and develops a lustrous patina over time. It's particularly suited to formal furniture with clean lines.</p>
      
      <h3>Maple</h3>
      
      <p>Hard Maple is known for its exceptional hardness and creamy white to light reddish-brown color. It has a subtle, fine grain that can feature spectacular figuring, including bird's eye, curly, and quilted patterns. While challenging to work with hand tools due to its density, maple finishes beautifully and offers exceptional durability for high-use items like dining tables.</p>
      
      <h3>Oak</h3>
      
      <p>White Oak is celebrated for its remarkable strength, durability, and distinctive grain patterns. It ranges from light tan to warm brown and features prominent ray flecks when quarter-sawn. White oak is extremely resistant to moisture and decay, making it suitable for pieces that may be exposed to varying conditions. Its pronounced grain gives furniture a strong visual presence.</p>
      
      <h2>Sustainability Considerations</h2>
      
      <p>Beyond aesthetics and performance, we place tremendous importance on responsible sourcing. All our hardwoods come from certified sustainable forests or reclaimed sources. We carefully track chain of custody and prioritize domestic species to reduce transportation impacts.</p>
      
      <p>For exotic species, we exclusively use wood certified by the Forest Stewardship Council (FSC) to ensure responsible harvesting practices. In many cases, we can source reclaimed exotic woods from architectural salvage, giving new life to material with minimal environmental impact.</p>
      
      <h2>Making Your Selection</h2>
      
      <p>When helping clients select wood for custom pieces, we consider several factors:</p>
      
      <ul>
        <li>The intended use and location of the piece</li>
        <li>Existing furniture and architectural elements</li>
        <li>Personal aesthetic preferences</li>
        <li>Environmental considerations</li>
        <li>Budget constraints</li>
      </ul>
      
      <p>We often encourage clients to visit our workshop to see and touch different wood species in various stages of finishing. This hands-on experience makes the selection process more tangible and meaningful.</p>
      
      <p>The right wood selection creates furniture that not only suits your current needs and preferences but evolves beautifully over time, developing character and patina that make it increasingly precious with each passing year.</p>
    `,
    image: 'https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg',
    date: 'June 12, 2024',
    author: 'Robert Artisan',
    authorTitle: 'Founder & Master Craftsman',
    authorImage: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg',
    category: 'Materials',
    tags: ['Hardwoods', 'Sustainability', 'Craftsmanship', 'Material Selection']
  };
  
  // Related posts
  const relatedPosts = [
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
      id: 'sustainable-furniture-crafting',
      title: 'Sustainable Practices in Furniture Crafting',
      excerpt: 'How responsible material sourcing and production methods create beautiful furniture with minimal environmental impact.',
      image: 'https://images.pexels.com/photos/5691680/pexels-photo-5691680.jpeg',
      date: 'May 15, 2024',
      author: 'James Wilson',
      category: 'Sustainability'
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
    <div>
      {/* Hero Image */}
      <div 
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {post.title}
            </motion.h1>
            
            <motion.div 
              className="flex items-center justify-center text-white space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Tag size={16} className="mr-2" />
                <span>{post.category}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.article 
                className="prose prose-lg max-w-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center">
                  <span className="mr-3 font-medium">Tags:</span>
                  {post.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Author Box */}
              <div className="mt-12 bg-primary-50 p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {post.authorImage && (
                  <img 
                    src={post.authorImage} 
                    alt={post.author} 
                    className="w-24 h-24 rounded-full object-cover"
                  />
                )}
                
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-semibold">{post.author}</h3>
                  {post.authorTitle && (
                    <p className="text-primary-700 mb-4">{post.authorTitle}</p>
                  )}
                  <p className="text-gray-700">
                    With over 30 years of experience in fine furniture craftsmanship, Robert leads our team of artisans with a passion for exceptional quality and sustainable practices.
                  </p>
                </div>
              </div>
              
              {/* Post Navigation */}
              <div className="mt-12 flex flex-col sm:flex-row justify-between border-t border-b border-gray-200 py-6">
                <Link to="/blog/sustainable-furniture-crafting" className="flex items-center text-primary-700 hover:text-primary-800">
                  <ChevronLeft size={20} className="mr-2" />
                  <span>Previous Post</span>
                </Link>
                <Link to="/blog/designing-timeless-spaces" className="flex items-center text-primary-700 hover:text-primary-800 mt-4 sm:mt-0">
                  <span>Next Post</span>
                  <ChevronRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/blog" className="flex items-center justify-between text-gray-700 hover:text-primary-700">
                      <span>Materials</span>
                      <span className="bg-white px-2 py-1 rounded-full text-xs">8</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="flex items-center justify-between text-gray-700 hover:text-primary-700">
                      <span>Design</span>
                      <span className="bg-white px-2 py-1 rounded-full text-xs">12</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="flex items-center justify-between text-gray-700 hover:text-primary-700">
                      <span>Sustainability</span>
                      <span className="bg-white px-2 py-1 rounded-full text-xs">5</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="flex items-center justify-between text-gray-700 hover:text-primary-700">
                      <span>Craftsmanship</span>
                      <span className="bg-white px-2 py-1 rounded-full text-xs">9</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="flex items-center justify-between text-gray-700 hover:text-primary-700">
                      <span>Care & Maintenance</span>
                      <span className="bg-white px-2 py-1 rounded-full text-xs">6</span>
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="bg-primary-50 p-6">
                <h3 className="text-xl font-semibold mb-6">Subscribe to Our Newsletter</h3>
                <p className="text-gray-700 mb-4">
                  Receive monthly updates on our latest articles, design tips, and exclusive offers.
                </p>
                <form>
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-3 mb-4 border border-gray-300"
                    required
                  />
                  <button 
                    type="submit" 
                    className="w-full btn btn-primary"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Posts */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">You May Also Like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <BlogCard 
                key={post.id}
                {...post}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
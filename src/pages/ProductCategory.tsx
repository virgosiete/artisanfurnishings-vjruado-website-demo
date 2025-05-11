import React from 'react';
import { useParams } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';

const ProductCategory: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  
  // Format category name for display
  const formatCategoryName = (category: string) => {
    return category?.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };
  
  const categoryName = formatCategoryName(category || '');
  
  // Category descriptions
  const categoryDescriptions: { [key: string]: string } = {
    'living-room': 'Elegant sofas, chairs, coffee tables, and accent pieces that create inviting, sophisticated living spaces.',
    'bedroom': 'Serene beds, nightstands, dressers, and armoires crafted for comfort and tranquility.',
    'dining': 'Stunning dining tables, chairs, sideboards, and serving pieces that elevate every meal.',
    'office': 'Functional and inspiring desks, bookcases, filing cabinets, and workspace furniture.',
    'custom': 'Bespoke furniture pieces designed and crafted specifically to your requirements and preferences.'
  };
  
  // Sample products for each category
  const livingRoomProducts = [
    {
      id: 'nova-lounge-chair',
      title: 'Nova Lounge Chair',
      image: 'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg',
      category: 'living-room',
      price: '$1,295'
    },
    {
      id: 'apollo-sofa',
      title: 'Apollo Sofa',
      image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg',
      category: 'living-room',
      price: '$3,495'
    },
    {
      id: 'meridian-coffee-table',
      title: 'Meridian Coffee Table',
      image: 'https://images.pexels.com/photos/4916781/pexels-photo-4916781.jpeg',
      category: 'living-room',
      price: '$1,195'
    },
    {
      id: 'zenith-bookshelf',
      title: 'Zenith Bookshelf',
      image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg',
      category: 'living-room',
      price: '$2,395'
    },
    {
      id: 'element-side-table',
      title: 'Element Side Table',
      image: 'https://images.pexels.com/photos/3836387/pexels-photo-3836387.jpeg',
      category: 'living-room',
      price: '$895'
    },
    {
      id: 'serene-console',
      title: 'Serene Console Table',
      image: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg',
      category: 'living-room',
      price: '$1,450'
    }
  ];
  
  const bedroomProducts = [
    {
      id: 'elm-bed-frame',
      title: 'Elm Wood Bed Frame',
      image: 'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg',
      category: 'bedroom',
      price: '$2,195'
    },
    {
      id: 'aurora-nightstand',
      title: 'Aurora Nightstand',
      image: 'https://images.pexels.com/photos/6969926/pexels-photo-6969926.jpeg',
      category: 'bedroom',
      price: '$895'
    },
    {
      id: 'cascade-dresser',
      title: 'Cascade Dresser',
      image: 'https://images.pexels.com/photos/2705091/pexels-photo-2705091.jpeg',
      category: 'bedroom',
      price: '$1,895'
    },
    {
      id: 'haven-wardrobe',
      title: 'Haven Wardrobe',
      image: 'https://images.pexels.com/photos/3865909/pexels-photo-3865909.jpeg',
      category: 'bedroom',
      price: '$2,795'
    }
  ];
  
  const diningProducts = [
    {
      id: 'serene-dining-table',
      title: 'Serene Dining Table',
      image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg',
      category: 'dining',
      price: '$2,450'
    },
    {
      id: 'crescent-dining-chair',
      title: 'Crescent Dining Chair',
      image: 'https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg',
      category: 'dining',
      price: '$595'
    },
    {
      id: 'horizon-buffet',
      title: 'Horizon Buffet',
      image: 'https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg',
      category: 'dining',
      price: '$1,995'
    },
    {
      id: 'apex-dining-set',
      title: 'Apex Dining Set',
      image: 'https://images.pexels.com/photos/6438758/pexels-photo-6438758.jpeg',
      category: 'dining',
      price: '$4,295'
    }
  ];
  
  const officeProducts = [
    {
      id: 'walnut-desk',
      title: 'Walnut Executive Desk',
      image: 'https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg',
      category: 'office',
      price: '$1,850'
    },
    {
      id: 'contour-office-chair',
      title: 'Contour Office Chair',
      image: 'https://images.pexels.com/photos/5705090/pexels-photo-5705090.jpeg',
      category: 'office',
      price: '$895'
    },
    {
      id: 'summit-bookcase',
      title: 'Summit Bookcase',
      image: 'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg',
      category: 'office',
      price: '$1,695'
    },
    {
      id: 'aspect-filing-cabinet',
      title: 'Aspect Filing Cabinet',
      image: 'https://images.pexels.com/photos/2678468/pexels-photo-2678468.jpeg',
      category: 'office',
      price: '$1,195'
    }
  ];
  
  const customProducts = [
    {
      id: 'custom-dining-table',
      title: 'Custom Dining Table',
      image: 'https://images.pexels.com/photos/2098913/pexels-photo-2098913.jpeg',
      category: 'custom',
      price: 'From $3,500'
    },
    {
      id: 'custom-cabinetry',
      title: 'Custom Cabinetry',
      image: 'https://images.pexels.com/photos/6489101/pexels-photo-6489101.jpeg',
      category: 'custom',
      price: 'From $4,200'
    },
    {
      id: 'custom-bed-frame',
      title: 'Custom Bed Frame',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
      category: 'custom',
      price: 'From $2,800'
    },
    {
      id: 'custom-office-solution',
      title: 'Custom Office Solution',
      image: 'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg',
      category: 'custom',
      price: 'From $5,000'
    }
  ];
  
  // Select products based on category
  const getCategoryProducts = () => {
    switch(category) {
      case 'living-room':
        return livingRoomProducts;
      case 'bedroom':
        return bedroomProducts;
      case 'dining':
        return diningProducts;
      case 'office':
        return officeProducts;
      case 'custom':
        return customProducts;
      default:
        return livingRoomProducts;
    }
  };
  
  const products = getCategoryProducts();
  
  // Get hero background based on category
  const getCategoryBackground = () => {
    switch(category) {
      case 'living-room':
        return 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg';
      case 'bedroom':
        return 'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg';
      case 'dining':
        return 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg';
      case 'office':
        return 'https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg';
      case 'custom':
        return 'https://images.pexels.com/photos/4846454/pexels-photo-4846454.jpeg';
      default:
        return 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg';
    }
  };

  return (
    <>
      <Hero 
        title={`${categoryName} Collection`}
        subtitle={categoryDescriptions[category || 'living-room']}
        backgroundImage={getCategoryBackground()}
        height="short"
      />
      
      {/* Products Display */}
      <section className="section py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={`${categoryName} Furniture`}
            subtitle="Artisan-crafted pieces for your home"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {products.map((product, index) => (
              <ProductCard 
                key={product.id}
                {...product}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCategory;
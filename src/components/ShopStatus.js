import React, { useState, useEffect } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const ShopStatus = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setExpandedIndex(null);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const statusItems = [
    {
      title: '30-DAY RETURNS POLICY',
      description: 'Return your purchase within a reasonable timeframe if you are not completely satisfied.',
      image: 'icons/30days.webp'
    },
    {
      title: 'LIFETIME WARRANTY',
      description: 'We ensure your cherished pieces last a lifetime without defects or malfunctions.',
      image: '/icons/lifetime.webp'
    },
    {
      title: 'EXPEDITED DELIVERY',
      description: 'Our 10-Day Delivery Engagement Rings - fast-tracking love to your doorstep.',
      image: '/icons/delivery.webp'
    },
    {
      title: 'FREE US SHIPPING',
      description: 'Enjoy stress-free shopping with our free US shipping on all jewelry products.',
      image: '/icons/freeusshipping.webp'
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-6 md:py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout with increased horizontal gap */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14"> {/* Changed gap-8 to gap-12 */}
          {statusItems.map((item, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <div className="mb-6 w-20 h-20 flex items-center justify-center rounded-full overflow-hidden bg-gray-100 p-2">
                <img 
                  src={process.env.PUBLIC_URL + item.image} 
                  alt={item.title}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-arapey text-xl uppercase tracking-wider mb-4">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden max-w-xs mx-auto">
          {statusItems.map((item, index) => (
            <div key={index} className="mb-0">
              <button
                className={`w-full flex justify-between items-center py-3 px-4 bg-gray-100 h-14 ${index !== statusItems.length - 1 ? 'border-b border-gray-300' : ''}`}
                onClick={() => toggleExpand(index)}
              >
                <h3 className="font-arapey text-xl uppercase tracking-wider text-gray-800">
                  {item.title}
                </h3>
                {expandedIndex === index ? (
                  <FiChevronUp className="text-gray-600 w-5 h-5" />
                ) : (
                  <FiChevronDown className="text-gray-600 w-5 h-5" /> 
                )}
              </button>
              
              {expandedIndex === index && (
                <div className="px-4 py-3 text-xs text-gray-600 bg-gray-100 border-t border-gray-300">
                  {item.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopStatus;
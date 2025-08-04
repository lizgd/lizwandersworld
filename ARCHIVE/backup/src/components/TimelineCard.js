import React from 'react';

const TimelineCard = ({ item, index, color = '#ffffff' }) => {
  const { 
    type, 
    title, 
    date, 
    company, 
    description, 
    link, 
    image 
  } = item;

  return (
    <div className={`bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 border border-gray-700 w-full max-w-sm hover:-translate-y-1 hover:shadow-xl hover:border-gray-500 ${type === 'today' ? 'border-red-400' : ''} ${type === 'conclusion' ? 'bg-gray-800 border-white' : ''}`}>
      {image && (
        <div className="w-full h-48 overflow-hidden bg-gray-800 flex items-center justify-center relative">
          <div className="text-5xl text-gray-600 flex items-center justify-center w-full h-full">
            📷
          </div>
          <img 
            src={image} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 text-left">
        <h3 
          className="text-xl font-semibold mb-2 leading-tight text-left"
          style={{ color: color }}
        >
          {title}
        </h3>
        {date && (
          <p className="text-sm text-gray-300 mb-1 font-medium text-left">
            {date}
          </p>
        )}
        {company && (
          <p 
            className="text-sm text-gray-400 mb-3 italic text-left py-1 px-2 rounded inline-block"
            style={{ backgroundColor: `${color}30` }}
          >
            {company}
          </p>
        )}
        {description && (
          <p className="text-sm leading-relaxed text-gray-300 text-left">
            {description}
            {link && (
              <a 
                href={link.url} 
                className="text-white underline font-medium transition-colors duration-300 hover:text-gray-300"
                target="_blank" 
                rel="noopener noreferrer"
              >
                {link.text}
              </a>
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default TimelineCard; 
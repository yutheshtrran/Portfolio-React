import React, { useState } from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div id='services' className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      <div className="services-container">
        {Services_Data && Services_Data.length > 0 ? (
          Services_Data.map((service, index) => (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              
              {/* Description with truncation */}
              <p className={`services-desc ${expandedIndex === index ? 'expanded' : ''}`}>
                {service.s_desc}
              </p>

              {/* Read More Button */}
              <div 
                className="services-readmore" 
                onClick={() => toggleReadMore(index)}
                style={{ cursor: 'pointer' }}
              >
                <p>{expandedIndex === index ? 'Read Less' : 'Read More'}</p>
                <img 
                  src={arrow_icon} 
                  alt="Arrow Icon" 
                  style={{
                    transform: expandedIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </div>
            </div>
          ))
        ) : (
          <p>No services available.</p>
        )}
      </div>
    </div>
  );
};

export default Services;

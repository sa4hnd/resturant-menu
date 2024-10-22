import React, { useState } from 'react';

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const menuItems = [
    { category: 'food', image: '/assets/1.png', title: 'تێشت' },
    { category: 'food', image: '/assets/2.png', title: 'بژارتی' },
    { category: 'food', image: '/assets/3.png', title: 'خوارنێن شەرقی' },
    { category: 'food', image: '/assets/4.png', title: 'خوارنێن غەربی' },
    { category: 'food', image: '/assets/5.png', title: 'پیتزا' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeFilter);

  return (
    <section id="menu">
      <h2 data-aos="fade-down">مێنیو</h2>
      <div className="menu-filter" data-aos="fade-up">
        <div className="filter-btn-container">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} 
            onClick={() => setActiveFilter('all')}
          >
            هەموو
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'food' ? 'active' : ''}`} 
            onClick={() => setActiveFilter('food')}
          >
            خوارن
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'drinks' ? 'active' : ''}`} 
            onClick={() => setActiveFilter('drinks')}
          >
            ڤەخوارن
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'desserts' ? 'active' : ''}`} 
            onClick={() => setActiveFilter('desserts')}
          >
            شیرینی
          </button>
          <div className="glow-line"></div>
        </div>
      </div>
      <div className="menu-items">
        {filteredItems.map((item, index) => (
          <div key={index} className="menu-item" data-category={item.category} data-aos="zoom-in">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;

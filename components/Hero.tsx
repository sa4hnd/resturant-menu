import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="video-background">
        <iframe 
          src="https://www.youtube.com/embed/HS24PywYlxg?autoplay=1&mute=1&loop=1&playlist=HS24PywYlxg&controls=0&showinfo=0" 
          frameBorder="0" 
          allow="autoplay; encrypted-media" 
          allowFullScreen
        ></iframe>
      </div>
      <div className="hero-content" data-aos="fade-up">
        <h2>خارنگەهـ و کافێیا سیپان هاوس</h2>
        <p>تامی تایبەت، ئەزموونێکی بێ وێنە</p>
      </div>
    </section>
  );
};

export default Hero;

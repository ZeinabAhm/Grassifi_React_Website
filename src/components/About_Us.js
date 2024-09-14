import React from 'react';
import './About_Us.css'; 

function About_Us() {
  return (
    <div className="about-container">
      {/* Item 1 */}
      <div className="about-item">
        <img src="/images/1.jpg" alt="Profile 1" />
        <h2>Simply Me:</h2>
        <p>
          We are a company for Artificial grass we have all type of grasses from different countries with high quality of grass.
          A crushed stone or gravel base is the most common and recommended base for artificial turf. The crushed stone should be 3/4 inch or smaller gravel rocks. A layer 1-2 inches deep provides the ideal amount of stability and drainage.
        </p>
      </div>
      
      {/* Item 2 */}
      <div className="about-item">
        <img src="/images/2.jpeg" alt="Profile 2" />
        <h2>Simply Us:</h2>
        <p>
          We provide different types of artificial turf solutions. Our premium products offer great resilience and durability, making them ideal for various applications.
        </p>
      </div>

      {/* Item 3 */}
      <div className="about-item">
        <img src="/images/3.jpg" alt="Profile 3" />
        <h2>Our Mission:</h2>
        <p>
          Our mission is to provide high-quality artificial grass that ensures long-lasting performance while promoting eco-friendly landscaping solutions.
        </p>
      </div>

      {/* Item 4 */}
      <div className="about-item">
        <img src="/images/4.jpeg" alt="Profile 4" />
        <h2>Our Vision:</h2>
        <p>
          We aim to be the leading provider of artificial grass solutions worldwide, fostering a sustainable future for landscapes.
        </p>
      </div>
    </div>
  );
}

export default About_Us;

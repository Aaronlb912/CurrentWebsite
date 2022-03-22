import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/amazon-copy.PNG";
import IMG3 from "../../assets/IMG2.PNG";
import IMG2 from "../../assets/port2.jpg";
import IMG4 from '../../assets/chatapp.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Amazon Copy",
    github: "https://github.com/Aaronlb912/Amazon-Copy",
    demo: "https://fir-ff812.web.app",
  },
  {
    id: 2,
    image: IMG3,
    title: "Hulu Clone",
    github: "https://github.com/Aaronlb912/Hulu-Clone",
    demo: "https://hulu-clone-gules-six.vercel.app/",
  },
  {
    id: 3,
    image: IMG2,
    title: "Coming Soon",
    github: "https://github.com/Aaronlb912",
    demo: "https://www.google.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Microsoft Teams Clone",
    github: "https://github.com/Aaronlb912/social-withChatEngine",
    demo: "https://www.google.com/",
  },
  {
    id: 5,
    image: IMG2,
    title: "Coming Soon",
    github: "https://github.com/Aaronlb912",
    demo: "https://www.google.com/",
  },
  {
    id: 6,
    image: IMG2,
    title: "Coming Soon",
    github: "https://github.com/Aaronlb912",
    demo: "https://www.google.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

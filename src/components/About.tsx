import React, { useState, useRef } from 'react';
import { skills } from '../data/skills';

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  // ✅ One ref object to hold all refs by category
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      frontend: '🎨',
      backend: '⚙️',
      database: '🗄️',
      tools: '🛠️',
      mobile: '📱',
      cloud: '☁️',
      languages: '💻',
      frameworks: '🏗️',
      'machine learning': '🤖',
      'ai/ml': '🧠',
      programming: '💻',
      devops: '🚀'
    };
    return icons[category.toLowerCase()] || '💡';
  };

  const formatCategoryName = (category: string) => {
    return category
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="about-text">
            Currently pursuing my Master's degree while working as a research assistant, currently developing a semantic-aware orchestration 
            framework that dynamically manages communication and computing resources in 6G networks, optimizing for efficiency, adaptability, 
            and user-centric service delivery.
          </p>
          <p className="about-text">
            Highly motivated Computer Engineering graduate student specializing in AI/ML, seeking to apply machine learning techniques 
            to real-world problems. Proven ability to deploy AI systems, optimize models for performance, and integrate technology into existing 
            infrastructure. Passionate about leveraging AI to enhance industrial, environmental, and other processes.
          </p>
        </div>
      </div>

      <div className="skills-wrapper">
        <div className="skills-container-enhanced">
          <div className="skills-header-section">
            <h3 className="skills-title-enhanced">Technical Skills</h3>
            <div className="skills-title-underline"></div>
          </div>

          <div className="skills-categories-grid">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => {
              const isOpen = openCategory === category;

              return (
                <div key={category} className={`skills-category-enhanced ${!isOpen ? 'collapsed' : ''}`}
                                    style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                  <div
                    className="category-header-enhanced collapsible-header"
                    onClick={() => setOpenCategory(isOpen ? null : category)}
                  >
                    <div className="category-icon-enhanced">{getCategoryIcon(category)}</div>
                    <h4 className="category-title-enhanced">{formatCategoryName(category)}</h4>
                    <div className="category-count-enhanced">{skillList.length}</div>
                    <span className="collapse-arrow">{isOpen ? '▲' : '▼'}</span>
                  </div>

                  <div
                    className={`collapsible-wrapper ${isOpen ? 'open' : ''}`}
                    style={{
                      maxHeight: isOpen
                        ? `${contentRefs.current[category]?.scrollHeight ?? 0}px`
                        : '0px',
                    }}
                  >
                    <div
                       ref={el => {contentRefs.current[category] = el;}}
                        className="skills-grid-enhanced collapsible-content"
                    >
                      {skillList.map((skill, index) => (
                        <div
                          key={skill}
                          className={`skill-tag-enhanced ${hoveredSkill === skill ? 'hovered' : ''}`}
                          style={{ animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s` }}
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <span className="skill-text-enhanced">{skill}</span>
                          <div className="skill-glow-enhanced"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
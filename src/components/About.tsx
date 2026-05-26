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
            I build machine learning systems that run on hardware. For the past 4+ years at the University of Guelph,
            I've deployed computer vision and edge AI in real manufacturing environments. My CNN-based defect inspection
            systems run on Basler industrial cameras, processing automotive parts at under 200ms latency with 99.5% uptime.
            These systems operate on plant floors today, contributing to $3.5M+ in estimated annual savings.
          </p>
          <p className="about-text">
            As a graduate researcher in the Intelligent Systems Lab, I deploy semantic video encoders on AMD Kria FPGAs
            via Vitis AI quantization, profile DPU subgraph execution, and design channel emulators in Vivado HLS for
            5G communication pipelines. I've published at CCECE and ISIME 2024 as first author on hardware-aware edge AI
            benchmarking and industrial inspection.
          </p>
          <p className="about-text">
            I work at the intersection of embedded systems, ML deployment, and hardware-software co-design. C/C++ for
            microcontrollers, Python for model training, HLS for FPGAs. Open to embedded AI, edge ML, firmware, and
            systems engineering roles across Canada and the US.
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
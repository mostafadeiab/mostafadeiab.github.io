// src/components/Timeline.tsx
import { useState } from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';
import { timelineItems } from '../data/timeline';

const Timeline = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const sorted = [...timelineItems].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  const grouped = {
    experience: sorted.filter((item) => item.type === 'experience'),
    education: sorted.filter((item) => item.type === 'education')
  };

  return (
    <section id="timeline" className="section">
      <h2 className="section-title">Timeline</h2>
      <div className="timeline-split-container">
        <div className="timeline-column">
          <h3 className="timeline-column-title">Experience</h3>
          {grouped.experience.map((item) => (
            <div
              key={item.id}
              className="timeline-item"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="timeline-dot">
                <Briefcase size={18} />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{item.title}</h3>
                  <div className="institution">{item.institution}</div>
                  <div className="duration">{item.duration}</div>
                </div>
                {hoveredItem === item.id && item.description && (
                  <div className="timeline-details">
                    <ul>
                      {item.description.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="timeline-column">
          <h3 className="timeline-column-title">Education</h3>
          {grouped.education.map((item) => (
            <div
              key={item.id}
              className="timeline-item"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="timeline-dot">
                <GraduationCap size={18} />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{item.title}</h3>
                  <div className="institution">{item.institution}</div>
                  <div className="duration">{item.duration}</div>
                </div>
                {hoveredItem === item.id && (
                  <div className="timeline-details">
                    {item.overview && <p>{item.overview}</p>}

                    {item.achievements && (
                      <div className="timeline-section">
                        <strong>Achievements:</strong>
                        <ul className="tag-list">
                          {item.achievements.map((ach, i) => (
                            <span  key={i} className="tag-item">{ach}</span >
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.skills && (
                      <div className="timeline-section">
                        <strong>Key Skills:</strong>
                        <ul className="tag-list">
                          {item.skills.map((skill, i) => (
                            <span  key={i} className="tag-item">{skill}</span >
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.courses && (
                      <div className="timeline-section">
                        <strong>Relevant Courses:</strong>
                        <ul className="tag-list">
                          {item.courses.map((course, i) => (
                            <span  key={i} className="tag-item">{course}</span >
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

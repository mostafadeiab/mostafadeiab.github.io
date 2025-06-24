// src/components/Timeline.tsx
import { useState } from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';
import { timelineItems } from '../data/timeline';

const Timeline = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const sorted = [...timelineItems].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  return (
    <section id="timeline" className="section">
      <h2 className="section-title">Timeline</h2>
      <div className="timeline-container">
        {sorted.map((item, index) => {
          const isLeft = index % 2 === 0;
          const Icon = item.type === 'experience' ? Briefcase : GraduationCap;

          return (
            <div
              key={item.id}
              className={`timeline-item-2col ${isLeft ? 'left' : 'right'}`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="timeline-icon">
                <Icon size={18} />
              </div>

              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{item.title}</h3>
                  <div className="institution">{item.institution}</div>
                  <div className="duration">{item.duration}</div>
                </div>

                {hoveredItem === item.id && (
                  <div className="timeline-details">
                    {item.description && (
                      <ul>
                        {item.description.map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    )}

                    {item.overview && <p>{item.overview}</p>}

                    {item.achievements && (
                      <div className="timeline-section">
                        <strong>Achievements:</strong>
                        <ul className="tag-list">
                          {item.achievements.map((ach, i) => (
                            <span key={i} className="tag-item">
                              {ach}
                            </span>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.skills && (
                      <div className="timeline-section">
                        <strong>Key Skills:</strong>
                        <ul className="tag-list">
                          {item.skills.map((skill, i) => (
                            <span key={i} className="tag-item">
                              {skill}
                            </span>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.courses && (
                      <div className="timeline-section">
                        <strong>Relevant Courses:</strong>
                        <ul className="tag-list">
                          {item.courses.map((course, i) => (
                            <span key={i} className="tag-item">
                              {course}
                            </span>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
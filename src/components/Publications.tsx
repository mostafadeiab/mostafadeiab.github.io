import { publications } from '../data/publications';

const Publications = () => (
  <section id="publications" className="section">
    <h2 className="section-title">Publications</h2>
    <div className="publications-list">
      {publications.map((pub) => (
        <div key={pub.id} className="publication-item">
          <div className="publication-header">
            <div className="publication-title">{pub.title}</div>
            <div className="publication-authors">{pub.authors.join(', ')}</div>
            <div className="publication-venue">{pub.venue} ({pub.year})</div>
            <span className="publication-type">{pub.type}</span>
            <div className="publication-links">
              {pub.url && <a href={pub.url} target="_blank" rel="noopener noreferrer">View</a>}
              {pub.doi && <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">DOI</a>}
            </div>
          </div>
          <div className="publication-abstract">{pub.abstract}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Publications;
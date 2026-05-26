import { useState } from 'react';
import { Github, ExternalLink, Pin, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

interface VisualConfig {
  gradient: string;
  accentColor: string;
  nodes: { label: string; sub?: string }[];
}

const visualConfigs: Record<string, VisualConfig> = {
  vision: {
    gradient: 'linear-gradient(135deg, #0f2027 0%, #1a3a52 100%)',
    accentColor: '#4fc3f7',
    nodes: [
      { label: 'Camera', sub: 'Basler SDK' },
      { label: 'CNN', sub: '96% acc.' },
      { label: 'Alert', sub: '<200ms' }
    ]
  },
  iot: {
    gradient: 'linear-gradient(135deg, #0d2137 0%, #0d4f3c 100%)',
    accentColor: '#4db6ac',
    nodes: [
      { label: 'BLE', sub: 'STM32' },
      { label: 'Fusion', sub: 'Sensors' },
      { label: 'Predict', sub: '70% acc.' }
    ]
  },
  transit: {
    gradient: 'linear-gradient(135deg, #1a1000 0%, #3d2500 100%)',
    accentColor: '#ffb74d',
    nodes: [
      { label: 'GTFS', sub: 'Data Feed' },
      { label: 'Firebase', sub: 'RT Sync' },
      { label: 'PixiJS', sub: 'Dual Map' }
    ]
  },
  'edge-ai': {
    gradient: 'linear-gradient(135deg, #1a0533 0%, #2c1a5e 100%)',
    accentColor: '#9c6fdd',
    nodes: [
      { label: 'Model', sub: 'TFLite/ONNX' },
      { label: 'Edge', sub: 'Jetson/RPi' },
      { label: 'Bench', sub: 'Power+Acc.' }
    ]
  },
  homelab: {
    gradient: 'linear-gradient(135deg, #0d1f0d 0%, #1a3d1a 100%)',
    accentColor: '#66bb6a',
    nodes: [
      { label: 'Ansible', sub: 'IaC' },
      { label: 'Docker', sub: 'Services' },
      { label: 'Traefik', sub: 'Authelia' }
    ]
  },
  fpga: {
    gradient: 'linear-gradient(135deg, #1a0a00 0%, #4a1500 100%)',
    accentColor: '#ff7043',
    nodes: [
      { label: 'VHDL', sub: 'HDL Design' },
      { label: 'Vivado', sub: 'Synthesis' },
      { label: 'FPGA', sub: 'LUT Opt.' }
    ]
  },
  security: {
    gradient: 'linear-gradient(135deg, #0d0d0d 0%, #2d0d0d 100%)',
    accentColor: '#ef5350',
    nodes: [
      { label: 'ArduCAM', sub: 'Capture' },
      { label: 'STM32', sub: 'FreeRTOS' },
      { label: 'Alert', sub: 'Real-time' }
    ]
  },
  cpu: {
    gradient: 'linear-gradient(135deg, #0d1b2a 0%, #1b2d44 100%)',
    accentColor: '#64b5f6',
    nodes: [
      { label: 'ALU', sub: '16-bit' },
      { label: 'RegFile', sub: 'Control' },
      { label: 'Memory', sub: 'VHDL' }
    ]
  },
  shell: {
    gradient: 'linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%)',
    accentColor: '#a5d6a7',
    nodes: [
      { label: 'Lexer', sub: 'Tokenize' },
      { label: 'Exec', sub: 'POSIX' },
      { label: 'Pipe', sub: 'Job Ctrl' }
    ]
  },
  scheduler: {
    gradient: 'linear-gradient(135deg, #0f0d1a 0%, #1e1840 100%)',
    accentColor: '#b39ddb',
    nodes: [
      { label: 'Events', sub: 'Queue' },
      { label: 'FCFS/RR', sub: 'Policy' },
      { label: 'Metrics', sub: 'Report' }
    ]
  },
  mlweb: {
    gradient: 'linear-gradient(135deg, #0f0033 0%, #2c005e 100%)',
    accentColor: '#ce93d8',
    nodes: [
      { label: 'MNIST', sub: 'Dataset' },
      { label: 'C/SWIG', sub: 'Backend' },
      { label: 'Train', sub: 'Browser' }
    ]
  },
  gps: {
    gradient: 'linear-gradient(135deg, #0d1a0d 0%, #0d2d2d 100%)',
    accentColor: '#4dd0e1',
    nodes: [
      { label: 'GPX', sub: 'C Parser' },
      { label: 'Node.js', sub: 'N-API' },
      { label: 'MySQL', sub: 'Routes' }
    ]
  },
  control: {
    gradient: 'linear-gradient(135deg, #1a0d00 0%, #3d2200 100%)',
    accentColor: '#ffd54f',
    nodes: [
      { label: 'PID', sub: 'Controller' },
      { label: 'Plant', sub: 'DC Motor' },
      { label: 'Sim', sub: 'MATLAB' }
    ]
  }
};

const ProjectVisual = ({ type }: { type: string }) => {
  const config = visualConfigs[type] ?? visualConfigs.vision;

  return (
    <div className="project-visual" style={{ background: config.gradient }}>
      <div className="visual-grid-pattern" />
      <div className="visual-pipeline">
        {config.nodes.map((node, i) => (
          <div key={i} className="visual-pipeline-item">
            {i > 0 && (
              <div className="visual-arrow" style={{ color: config.accentColor }}>
                <ArrowRight size={12} />
              </div>
            )}
            <div
              className="visual-node"
              style={{
                borderColor: config.accentColor + '55',
                background: config.accentColor + '18'
              }}
            >
              <span className="visual-node-label" style={{ color: config.accentColor }}>
                {node.label}
              </span>
              {node.sub && (
                <span className="visual-node-sub">{node.sub}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, featured = false }: { project: typeof projects[0]; featured?: boolean }) => (
  <div className={`project-card${featured ? ' featured-card' : ''}`}>
    <ProjectVisual type={project.visualType} />
    <div className="project-content">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tech">
        {project.technologies.map((tech, i) => (
          <span key={i} className="tech-tag">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            <Github size={16} /> Code
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            <ExternalLink size={16} /> Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [filter, setFilter] = useState<string>('All');

  const featuredProjects = projects.filter(p => p.featured);
  const allCategories = ['All', ...Array.from(new Set(projects.filter(p => !p.featured).flatMap(p => p.categories)))];
  const filteredProjects = filter === 'All'
    ? projects.filter(p => !p.featured)
    : projects.filter(p => !p.featured && p.categories.includes(filter));

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>

      <div className="featured-label">
        <Pin size={14} />
        <span>Pinned Projects</span>
      </div>
      <div className="featured-grid">
        {featuredProjects.map(project => (
          <ProjectCard key={project.id} project={project} featured />
        ))}
      </div>

      <div className="section-divider">
        <span>More Projects</span>
      </div>

      <div className="project-filters">
        {allCategories.map((cat) => (
          <button
            key={cat}
            className={`filter-button ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

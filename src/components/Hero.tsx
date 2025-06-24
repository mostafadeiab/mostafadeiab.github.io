import { ChevronDown, Download } from 'lucide-react';

const Hero = ({ scrollToSection }: { scrollToSection: (id: string) => void }) => {
  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/current_res_20250624_embed.pdf'; // Update this path to your actual resume file
    link.download = 'Mostafa_Deiab_Resume.pdf'; // The filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Mostafa Deiab</span></h1>
        <p>
          Pursuing MASc in Computer Engineering with Specialization in AI @ UofG
        </p>
        <button className="cta-button" onClick={handleDownloadResume}>
          Download Resume
          <Download size={18} />
        </button>
      </div>
      <div className="scroll-indicator">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
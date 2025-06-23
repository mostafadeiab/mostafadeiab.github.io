interface TimelineItem {
  id: number;
  type: 'education' | 'experience';
  title: string;
  institution: string;
  duration: string;
  location: string;
  startDate: string;
  gpa?: string; // Optional for education items
  endDate?: string;
  overview?: string;
  achievements?: string[];
  skills?: string[];
  courses?: string[];
  description?: string[]; // For experience-style entries
}

export const timelineItems: TimelineItem[] = [
  {
    id: 1,
    type: 'education',
    title: 'Masters of Applied Sciences - Computer Engineering with Specialization in AI',
    institution: 'University of Guelph',
    duration: '2025 - 2027',
    location: 'Guelph, ON',
    gpa: '3.8/4.0',
    startDate: '2025-01',
    overview: 'Pursuing advanced studies in Computer Engineering with a focus on AI systems and machine learning applications.',
    skills: ['Machine Learning', 'AI Systems Design', 'Data Analysis', 'Research Methodology'],
    courses: ['Optimization Techniques', 
              'IoT', 
              'Advanced Software Computing', 
              'Machine Learning Applicationss']
  },
  {
    id: 2,
    type: 'experience',
    title: 'Graduate Research Assistant',
    institution: 'Intelligent Systems Lab',
    duration: 'Jan. 2025 - Present',
    location: 'Guelph, ON',
    startDate: '2025-01',
    description: [
      'Developing a semantic-aware orchestration framework that dynamically manages communication and computing resources in 6G networks.',
      'Leading ML-based optimization research for ICs using advanced TensorFlow and PyTorch models.',
      'Developing and implementing secure VLC-IoT resource allocation frameworks with 30% improved resilience.',
      'Designing MAP algorithms to optimize network coverage while reducing energy consumption by approximately 22%.'
    ]
  },
  {
    id: 3,
    type: 'experience',
    title: 'Undergraduate Research Assistant',
    institution: 'Advanced Manufacturing Lab',
    duration: 'Jan. 2021 - Dec. 2024',
    location: 'Guelph, ON',
    startDate: '2021-01',
    endDate: '2024-12',
    description: [
      'Developed a Machine Vision detection system for automotive parts using deflectometry data (96% accuracy, 40% faster).',
      'Designed UI for live defect display, reducing inspection time by 75% and missed defects by 35%.',
      'Integrated CNN models into industrial processes, contributing to $3.5M annual cost savings. Presented at ISIME 2024.'
    ]
  },
  {
    id: 4,
    type: 'education',
    title: 'Bachelor of Engineering - Computer Engineering',
    institution: 'University of Guelph',
    duration: '2019 - 2024',
    location: 'Guelph, ON',
    gpa: '3.5/4.0',
    startDate: '2019-09',
    endDate: '2024-12',
    overview: 'As a graduate in Computer Engineering, my expertise encompasses a wide range of skills essential for modern computing systems. This includes circuit design and development, hardware integration, and system-level design integration. I am well-versed in the science and tools required for designing, constructing, implementing, and maintaining both software and hardware components in computing systems.',
    achievements: ["Dean's Honor List for 2 consecutive years"],
    skills: ['Circuit design and development',
              'Hardware integration',
              'System-level design integration',
              'Software and hardware component maintenance'],
    courses: ['Data Structures and Algorithms',
              'Computer Networks',
              'Operating Systems',
              'Digital Systems Design',
              'Embedded Systems Programming',
              'Modeling Complex Systems']
  },
  {
    id: 5,
    type: 'experience',
    title: 'Lab Systems Administrator',
    institution: 'Advanced Manufacturing Lab',
    duration: 'Sept. 2019 - Dec. 2020',
    location: 'Guelph, ON',
    startDate: '2019-09',
    endDate: '2020-12',
    description: [
      'Configured and maintained secure Debian servers with RAID storage, and implemented system monitoring tools.',
      'Optimized GPU-accelerated workstations and implemented secure data storage protocols.',
      'Strengthened lab cybersecurity, achieving zero security breaches.'
    ]
  }
];
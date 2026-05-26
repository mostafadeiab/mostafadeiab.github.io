interface TimelineItem {
  id: number;
  type: 'education' | 'experience';
  title: string;
  institution: string;
  duration: string;
  location: string;
  startDate: string;
  gpa?: string;
  endDate?: string;
  overview?: string;
  achievements?: string[];
  skills?: string[];
  courses?: string[];
  description?: string[];
}

export const timelineItems: TimelineItem[] = [
  {
    id: 1,
    type: 'education',
    title: 'Masters of Applied Sciences - Computer Engineering (AI Specialization)',
    institution: 'University of Guelph',
    duration: '2025 - 2027',
    location: 'Guelph, ON',
    gpa: '3.87/4.0',
    startDate: '2025-01',
    overview: 'Graduate research in edge AI deployment, FPGA-based inference acceleration, and 5G/6G network optimization.',
    skills: ['Edge AI Deployment', 'FPGA Inference', 'Vitis AI', 'DPU Profiling', 'Vivado HLS'],
    courses: ['Optimization Techniques',
              'IoT Systems',
              'Advanced Software Computing',
              'Machine Learning Applications']
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
      'Deploying semantic video encoders on AMD Kria FPGAs via Vitis AI quantization (INT8) with DPU subgraph profiling.',
      'Designing channel emulators in Vivado HLS for 5G communication pipeline simulation and validation.',
      'Developing a semantic-aware orchestration framework for dynamic resource management in 6G networks.',
      'Building MAP algorithms to optimize network coverage while reducing energy consumption by 22%.'
    ],
    skills: ['Vitis AI', 'AMD Kria FPGA', 'Vivado HLS', 'DPU Profiling', 'PyTorch', 'TensorFlow'],
    achievements: ['First-author publication at CCECE 2024']
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
      'Developed a CNN-based machine vision system for automotive defect detection using deflectometry data (96% accuracy, 40% faster than manual inspection).',
      'Designed real-time UI for live defect display on Basler industrial cameras, reducing inspection time by 75% and missed defects by 35%.',
      'Integrated models into production lines, contributing to $3.5M annual cost savings. Presented at ISIME 2024.'
    ],
    skills: ['TensorFlow', 'OpenCV', 'C++', 'Python', 'Basler SDK', 'Deflectometry'],
    achievements: ['First-author publication at ISIME 2024', '$3.5M+ annual cost savings from deployed systems']
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
    overview: 'Computer Engineering with focus on embedded systems, digital design, and hardware-software integration.',
    achievements: ["Dean's Honor List for 2 consecutive years"],
    skills: ['Circuit Design', 'VHDL', 'Embedded Systems', 'Real-Time OS', 'Computer Architecture'],
    courses: ['Data Structures & Algorithms',
              'Computer Networks',
              'Operating Systems',
              'Real-Time Systems',
              'Embedded Systems',
              'VLSI Digital Design']
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
      'Configured and maintained secure Debian servers with RAID storage and system monitoring tools.',
      'Optimized GPU-accelerated workstations for ML training workflows and implemented secure data storage protocols.',
      'Strengthened lab cybersecurity posture, achieving zero security breaches during tenure.'
    ]
  }
];

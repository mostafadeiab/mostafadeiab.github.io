export interface Publication {
  id: number;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'conference' | 'journal' | 'workshop' | 'preprint' | 'presentation';
  status?: 'published' | 'under-review';
  doi?: string;
  url?: string;
  abstract: string;
}

export const publications: Publication[] = [
  {
    id: 1,
    title: 'Real-Time Edge Semantic Video Communication with FPGA-Accelerated SoCs',
    authors: ['Mostafa Deiab', 'Abdelrahman Soliman', 'Sylvester Aboagye', 'Sara Zimmo', 'Ahmed Refaey'],
    venue: 'Under Review',
    year: 2025,
    type: 'journal',
    status: 'under-review',
    abstract: 'Demonstrates real-time semantic video transmission using AMD Kria KV260/KD240 edge SoCs over an Open5GS 5G core with full GTP-U tunneling. A Vitis-AI-compiled DeepJSCC encoder on the KV260 DPU achieves 30 fps after replacing unsupported PReLU with LeakyReLU, reducing latency from 20.5 ms to 4.6 ms. Semantic transmission delivers 29.17 fps at 3.83 Mbit/s versus 14.75 fps at 5.80 Mbit/s for raw streaming, with 95.4% UDP frame delivery compared to 37.1% for raw.'
  },
  {
    id: 2,
    title: 'Interference-Aware Joint Movable Access Point Placement and User Association for Visible Light Communication Networks',
    authors: ['Mostafa Deiab', 'Sylvester Aboagye', 'Ahmed Refaey Hussein'],
    venue: 'Under Review',
    year: 2025,
    type: 'journal',
    status: 'under-review',
    abstract: 'Proposes a movable access point architecture for VLC networks that dynamically positions access points on a ceiling-mounted grid to optimize user coverage under interference. Develops an algorithm based on quadratic transform and majorization-minimization techniques. The MAP architecture achieves up to 154% improvement in sum-rate compared to fixed access point deployments, with significant gains in energy efficiency and seamless mobility support.'
  },
  {
    id: 3,
    title: 'On Edge Level: The Impact of Adopting Deep Learning Techniques on Server Design',
    authors: ['Mostafa Deiab', 'Vijayant Mehra', 'Hassan Shami', 'Yahuza Bello', 'Ahmed Refaey'],
    venue: 'IEEE Canadian Conference on Electrical and Computer Engineering (CCECE)',
    year: 2024,
    type: 'conference',
    status: 'published',
    doi: '10.1109/CCECE59415.2024.10667122',
    url: 'https://ieeexplore.ieee.org/document/10667122',
    abstract: 'Evaluates the impact of GPU and FPGA hardware accelerators on edge server design for deep learning workloads. Benchmarks three machines with varying specifications, showing an RTX 3080 Ti configuration achieves superior training time while prediction accuracy variance remains within 4% across configurations.'
  },
  {
    id: 4,
    title: 'Machine Vision Defect Detection for Automotive Manufacturing Using Deflectometry and Deep Learning',
    authors: ['Mostafa Deiab', 'Ahmed Refaey'],
    venue: 'International Symposium on Industrial and Manufacturing Engineering (ISIME)',
    year: 2024,
    type: 'presentation',
    status: 'published',
    abstract: 'Conference presentation on a CNN-based machine vision system for automated defect detection in automotive part manufacturing using deflectometry data. The system achieves 96% detection accuracy with 40% faster inspection throughput compared to manual methods.'
  },
  {
    id: 5,
    title: 'Smart Casting Process Defects Detection System Framework',
    authors: ['Oussama Jouini', 'Mostafa Deiab', 'Ibrahim M. Deiab'],
    venue: 'SSRN Preprint',
    year: 2025,
    type: 'preprint',
    status: 'published',
    doi: '10.2139/ssrn.5119212',
    url: 'https://doi.org/10.2139/ssrn.5119212',
    abstract: 'Presents a framework for automated defect detection in casting manufacturing processes using machine learning techniques.'
  },
  {
    id: 6,
    title: 'Machine Learning-Based Prediction of Full Stress-Strain Curves for Novel PLA/PHB/CNC Biodegradable Composites',
    authors: ['Mamoun Alshihabi', 'Hossameldin Ali', 'Mostafa Deiab', 'Fawzan Alfares', 'Ibrahim Deiab'],
    venue: 'Engineering Applications of Artificial Intelligence',
    year: 2025,
    type: 'journal',
    status: 'under-review',
    abstract: 'Applies machine learning models to predict full stress-strain curves for novel PLA/PHB/CNC biodegradable composites, enabling faster material characterization without destructive testing.'
  }
];

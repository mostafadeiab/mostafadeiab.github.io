// src/data/projects.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  categories: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Homelab Server",
    description:
      "Built and maintained a homelab server using Infrastructure as Code (Ansible, Docker) with security tools like Authelia, Traefik, and regular scanning.",
    technologies: ["Docker", "Kubernetes", "Ansible", "Traefik", "Authelia"],
    categories: ["DevOps"]
  },
  {
    id: 2,
    title: "Smart Utilities System",
    description:
      "Real-time IoT solution with BLE boards for water monitoring and predictive maintenance with 70% forecasting accuracy.",
    technologies: ["BLE", "Sensor Fusion", "STM32", "C/C++", "Python"],
    categories: ["Embedded IoT", "AI", "Real-Time Systems"]
  },
  {
    id: 3,
    title: "ML-Arch",
    description:
      "Benchmarked ANN/CNN on edge devices with FPGA/GPU integration, improving inference speed and power usage.",
    technologies: ["TFLite", "ONNX", "Jetson Nano", "Raspberry Pi", "FPGA"],
    categories: ["AI", "Edge Computing", "FPGA"]
  },
  {
    id: 4,
    title: "Transitify",
    description:
      "Real-time transit tracking app using GTFS data with dual-map UI and AODA-compliant community features.",
    technologies: ["JavaScript", "Python", "Firebase", "PixiJS"],
    categories: ["Web", "Frontend"]
  },
  {
    id: 5,
    title: "Advanced UNIX Shell",
    description:
      "Feature-rich shell with piping, redirection, and job control using POSIX system calls and modular architecture.",
    technologies: ["C", "POSIX"],
    categories: ["Systems Programming"]
  },
  {
    id: 6,
    title: "Multi-Threaded CPU Scheduler Simulator",
    description:
      "Discrete event simulator for FCFS/RR with metrics generation and event-driven execution model.",
    technologies: ["C", "Threading"],
    categories: ["Operating Systems"]
  },
  {
    id: 7,
    title: "Interactive ML Web Platform",
    description:
      "Web app to train MNIST models in browser with SWIG-wrapped C backend and SQL model storage.",
    technologies: ["Python", "C", "SWIG", "JavaScript", "SQLite"],
    categories: ["AI", "Full Stack"]
  },
  {
    id: 8,
    title: "GPS Route Management System",
    description:
      "Full-stack app with GPX file CRUD, MySQL backend, and C parser bound to Node.js.",
    technologies: ["C", "Node.js", "MySQL", "GPX"],
    categories: ["Geospatial", "Web"]
  },
  {
    id: 9,
    title: "Motor Control Systems Design",
    description:
      "P/PD/PID controller design and testing in MATLAB for optimized motor system performance.",
    technologies: ["MATLAB", "Control Theory"],
    categories: ["Control Systems"]
  },
  {
    id: 10,
    title: "Real-Time Home Security System",
    description:
      "Built camera system using STM32, FreeRTOS, ArduCAM with JPEG compression and real-time alerting.",
    technologies: ["STM32", "FreeRTOS", "C/C++"],
    categories: ["Embedded IoT", "Real-Time Systems"]
  },
  {
    id: 11,
    title: "16-Bit CPU Design and Implementation",
    description:
      "Designed VHDL CPU including ALU, memory subsystems, and testbench verification.",
    technologies: ["VHDL", "Digital Design"],
    categories: ["Computer Architecture"]
  },
  {
    id: 12,
    title: "FPGA-Based Arithmetic Unit Optimization",
    description:
      "Built and benchmarked VHDL ALUs optimizing for LUT and power usage using Vivado.",
    technologies: ["VHDL", "Vivado"],
    categories: ["FPGA", "Hardware"]
  }
];
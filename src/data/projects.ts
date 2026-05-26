export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  categories: string[];
  featured?: boolean;
  visualType: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Industrial Defect Inspection System",
    description:
      "CNN-based machine vision system deployed on plant floors for automotive part inspection using Basler cameras and deflectometry data. Achieves 96% accuracy at <200ms latency with 99.5% uptime, contributing to $3.5M+ annual savings.",
    technologies: ["Python", "TensorFlow", "OpenCV", "C++", "Basler SDK"],
    categories: ["AI / ML", "Embedded Systems"],
    featured: true,
    visualType: "vision"
  },
  {
    id: 2,
    title: "AquaGuard AI",
    description:
      "Real-time IoT water monitoring system with BLE-connected STM32 boards, sensor fusion for predictive maintenance, and 70% forecasting accuracy for leak detection.",
    technologies: ["STM32", "BLE", "Sensor Fusion", "C/C++", "Python", "FreeRTOS"],
    categories: ["Embedded Systems", "AI / ML"],
    featured: true,
    visualType: "iot"
  },
  {
    id: 3,
    title: "Transitify",
    description:
      "Real-time transit tracking app using GTFS data feeds with a dual-map UI built on PixiJS. Includes AODA-compliant community features for accessible transit planning.",
    technologies: ["JavaScript", "Python", "Firebase", "PixiJS"],
    categories: ["Web Development", "Software"],
    featured: true,
    visualType: "transit"
  },
  {
    id: 4,
    title: "ML-Arch: Edge AI Benchmarking",
    description:
      "Benchmarked ANN/CNN inference on edge devices (Jetson Nano, Raspberry Pi, FPGA) with TFLite and ONNX quantization. Measured power-accuracy tradeoffs across hardware targets.",
    technologies: ["TFLite", "ONNX", "Jetson Nano", "Raspberry Pi", "FPGA", "Python"],
    categories: ["AI / ML", "FPGA / Hardware"],
    visualType: "edge-ai"
  },
  {
    id: 5,
    title: "Homelab Server",
    description:
      "Built and maintained a homelab server using Infrastructure as Code with Ansible playbooks, Docker Compose stacks, and a secure reverse proxy setup using Traefik and Authelia 2FA.",
    technologies: ["Docker", "Kubernetes", "Ansible", "Traefik", "Authelia"],
    categories: ["Infrastructure"],
    visualType: "homelab"
  },
  {
    id: 6,
    title: "FPGA-Based Arithmetic Unit Optimization",
    description:
      "Designed and benchmarked VHDL ALUs targeting LUT utilization and power efficiency. Synthesized with Vivado, comparing carry-lookahead vs. ripple-carry architectures.",
    technologies: ["VHDL", "Vivado", "Xilinx"],
    categories: ["FPGA / Hardware"],
    visualType: "fpga"
  },
  {
    id: 7,
    title: "Real-Time Home Security System",
    description:
      "Camera-based security system on STM32 with FreeRTOS task scheduling, ArduCAM JPEG compression, DMA transfers, and interrupt-driven real-time alerting.",
    technologies: ["STM32", "FreeRTOS", "C/C++", "ArduCAM", "DMA"],
    categories: ["Embedded Systems"],
    visualType: "security"
  },
  {
    id: 8,
    title: "16-Bit CPU Design",
    description:
      "Full 16-bit processor in VHDL including ALU, register file, control unit, and memory subsystem. Verified with comprehensive testbench simulation.",
    technologies: ["VHDL", "Digital Design", "ModelSim"],
    categories: ["FPGA / Hardware"],
    visualType: "cpu"
  },
  {
    id: 9,
    title: "Advanced UNIX Shell",
    description:
      "Feature-rich shell with piping, redirection, signal handling, and job control implemented with POSIX system calls. Modular architecture supporting built-in and external commands.",
    technologies: ["C", "POSIX"],
    categories: ["Software"],
    visualType: "shell"
  },
  {
    id: 10,
    title: "Multi-Threaded CPU Scheduler Simulator",
    description:
      "Discrete event simulator for FCFS and Round Robin scheduling algorithms with metrics generation and an event-driven execution model.",
    technologies: ["C", "Threading"],
    categories: ["Software"],
    visualType: "scheduler"
  },
  {
    id: 11,
    title: "Interactive ML Web Platform",
    description:
      "Browser-based app to train MNIST neural network models using a SWIG-wrapped C backend for performance. Trained models stored and retrieved with SQLite.",
    technologies: ["Python", "C", "SWIG", "JavaScript", "SQLite"],
    categories: ["AI / ML", "Web Development"],
    visualType: "mlweb"
  },
  {
    id: 12,
    title: "GPS Route Management System",
    description:
      "Full-stack web app for GPX route file CRUD operations with a C parser bound to Node.js via N-API and a MySQL backend.",
    technologies: ["C", "Node.js", "MySQL", "GPX"],
    categories: ["Software", "Web Development"],
    visualType: "gps"
  },
  {
    id: 13,
    title: "Motor Control Systems Design",
    description:
      "P, PD, and PID controller design and simulation in MATLAB/Simulink for DC motor systems, with step response testing and gain optimization.",
    technologies: ["MATLAB", "Control Theory"],
    categories: ["Embedded Systems"],
    visualType: "control"
  }
];

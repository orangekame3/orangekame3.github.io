export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming',
    skills: ['Go (Golang)', 'Python', 'TypeScript/JavaScript'],
  },
  {
    name: 'Quantum Systems',
    skills: [
      'Superconducting Qubits',
      'Quantum Device Operation',
      'Calibration Automation',
      'Pulse-Level Control',
      'Quantum Hardware Integration',
      'Production Quantum Systems',
    ],
  },
  {
    name: 'Quantum Software',
    skills: [
      'OpenQASM 3.0',
      'Cloud Quantum Computing',
      'Job Scheduling',
      'Device Gateway',
      'Quantum Benchmarking',
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      'Amazon Web Services (AWS)',
      'Terraform (IaC)',
      'Docker',
      'CI/CD',
      'OpenTelemetry',
      'Linux',
      'Reliability Engineering',
    ],
  },
  {
    name: 'Software Development',
    skills: [
      'Open Source Software (OSS) Development',
      'CLI Tool Development',
      'REST API Design',
      'System Architecture',
      'Technical Writing & Translation',
    ],
  },
];

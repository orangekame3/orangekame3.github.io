export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    skills: ['Go (Golang)', 'Python', 'TypeScript/JavaScript'],
  },
  {
    name: 'Quantum Computing',
    skills: [
      'OpenQASM 3.0',
      'Superconducting Qubits',
      'Quantum Hardware Integration',
      'Cloud Quantum Computing',
      'Calibration Automation',
      'Quantum Device Operation',
      'Cryogenic Measurement',
      'Quantum Benchmarking',
      'Production Quantum Systems',
      'Quantum Software Development',
    ],
  },
  {
    name: 'Cloud & Infrastructure',
    skills: [
      'Amazon Web Services (AWS)',
      'Terraform (IaC)',
      'Docker',
      'CI/CD',
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

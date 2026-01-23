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
      'Ion-Trap Quantum Systems',
      'Cloud Quantum Computing',
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

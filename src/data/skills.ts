export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['Go', 'Python', 'TypeScript'],
  },
  {
    name: 'Quantum Computing',
    skills: ['OpenQASM 3.0', 'Superconducting Qubits', 'Cloud Quantum Systems'],
  },
  {
    name: 'Infrastructure',
    skills: ['Terraform', 'AWS', 'Docker'],
  },
  {
    name: 'Other',
    skills: ['OSS Development', 'CLI Tools', 'Technical Translation'],
  },
];

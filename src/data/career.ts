export interface Career {
  title: string;
  role: string;
  period: string;
  description?: string[];
}

export const careers: Career[] = [
  {
    title: 'Osaka Univ. QIQB',
    role: 'Quantum Systems Engineer & Software Developer',
    period: '2023 — Present',
    description: [
      'Lead developer of OQTOPUS, an open-source software stack for cloud-based quantum computing systems',
      'Designed and implemented software architecture spanning cloud services, job execution, device integration, and user interfaces',
      'Developed QDash, an automated calibration orchestration platform for superconducting quantum processors',
      'Operated and maintained production quantum computing systems used by external researchers through cloud access',
      'Automated calibration workflows and device health monitoring to improve operational efficiency and system reliability',
      'Collaborated closely with experimental physicists to integrate calibration procedures, pulse-level control, and quantum hardware into a production-ready software stack',
      'Contributed to the operation of large-scale superconducting quantum processors, including calibration, benchmarking, and cloud service deployment',
      'Published research at IEEE QCE and presented at international conferences including QSMC and Munich Quantum Software Forum',
      'Collaborated with Fujitsu, SEC, and TIS on one of the largest open-source quantum computing initiatives globally',
    ],
  },
  {
    title: 'Future Corp.',
    role: 'Backend Engineer & Consultant',
    period: '2021 — 2023',
    description: [
      'Developed scalable backend systems using Go, Python, and cloud infrastructure (AWS, Terraform, Docker)',
      'Contributed to OSS projects including Terraform tooling (tftarget)',
      'Translated technical book "Software Mistakes and Tradeoffs" (O\'Reilly Japan, 2023)',
    ],
  },
  {
    title: 'Tokyo University of Science',
    role: 'M.S. Physics',
    period: '2019 — 2021',
  },
  {
    title: 'Tokyo University of Science',
    role: 'B.S. Physics',
    period: '2015 — 2019',
  },
];

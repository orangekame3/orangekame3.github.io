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
      'Lead developer of OQTOPUS, an open-source cloud platform for superconducting quantum computers supporting 64- and 144-qubit systems',
      'Designed software architecture spanning cloud APIs, job scheduling, execution backends, device gateway, user interfaces, observability, and production operations',
      'Developed QDash, a calibration orchestration platform for superconducting quantum processors, including calibration workflows and device health monitoring',
      'Built device integration software bridging OpenQASM 3 job execution, pulse-level control, scheduler workflows, and quantum hardware access',
      'Operated and maintained production quantum computing systems used by external researchers through cloud access',
      'Collaborated closely with experimental physicists to integrate calibration procedures, benchmarking, and hardware operations into production-ready software',
      'Published OQTOPUS research at IEEE QCE and presented at international conferences including HEART, QSMC, and Munich Quantum Software Forum',
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

export interface Career {
  title: string;
  role: string;
  period: string;
  description?: string[];
}

export const careers: Career[] = [
  {
    title: 'Osaka Univ. QIQB',
    role: 'Software Developer & Researcher',
    period: '2023 — Present',
    description: [
      'Lead development of OQTOPUS, an open-source quantum computing operating system adopted by Japan\'s first fully domestic quantum computer',
      'Architected cloud-based quantum computing platform enabling remote access to superconducting and ion-trap qubit systems',
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

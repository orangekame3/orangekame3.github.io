import { githubStars } from './projectStars.ts';

export interface Project {
  title: string;
  description: string;
  link: string;
  repo?: string;
  stars?: number | null;
}

const projectBase: Omit<Project, 'stars'>[] = [
  {
    title: 'OQTOPUS',
    description: 'Open-source cloud quantum computing platform',
    link: 'https://oqtopus-team.github.io/',
  },
  {
    title: 'oqtopus-cloud',
    description: 'Cloud-based quantum computing platform (OQTOPUS)',
    link: 'https://github.com/oqtopus-team/oqtopus-cloud',
    repo: 'oqtopus-team/oqtopus-cloud',
  },
  {
    title: 'device-gateway',
    description: 'Device gateway for quantum hardware access (OQTOPUS)',
    link: 'https://github.com/oqtopus-team/device-gateway',
    repo: 'oqtopus-team/device-gateway',
  },
  {
    title: 'qdash',
    description: 'Automated calibration orchestration platform for superconducting quantum processors',
    link: 'https://github.com/oqtopus-team/qdash',
    repo: 'oqtopus-team/qdash',
  },
  {
    title: 'arq',
    description: 'Local-first arXiv paper manager for reading and summarization',
    link: 'https://github.com/orangekame3/arq',
    repo: 'orangekame3/arq',
  },
  {
    title: 'qasmtools',
    description: 'Comprehensive toolkit for OpenQASM 3.0 development',
    link: 'https://github.com/orangekame3/qasmtools',
    repo: 'orangekame3/qasmtools',
  },
  {
    title: 'qasmfmt',
    description: 'OpenQASM formatter',
    link: 'https://github.com/orangekame3/qasmfmt',
    repo: 'orangekame3/qasmfmt',
  },
  {
    title: 'mirrormate',
    description: 'Mirror Mate',
    link: 'https://github.com/orangekame3/mirrormate',
    repo: 'orangekame3/mirrormate',
  },
  {
    title: 'aqrxiv',
    description: 'Stylish QR codes for arXiv papers',
    link: 'https://aqrxiv.org/',
  },
  {
    title: 'tftarget',
    description: 'Interactive Terraform target selector',
    link: 'https://github.com/future-architect/tftarget',
    repo: 'future-architect/tftarget',
  },
  {
    title: 'paclear',
    description: 'Terminal clear with PAC-MAN animation',
    link: 'https://github.com/orangekame3/paclear',
    repo: 'orangekame3/paclear',
  },
  {
    title: 'stree',
    description: 'S3 bucket directory tree visualization',
    link: 'https://github.com/orangekame3/stree',
    repo: 'orangekame3/stree',
  },
  {
    title: 'ghfetch',
    description: 'GitHub profile fetcher',
    link: 'https://github.com/orangekame3/ghfetch',
    repo: 'orangekame3/ghfetch',
  },
];

export const projects: Project[] = projectBase.map((p) => ({
  ...p,
  stars: p.repo ? githubStars[p.repo] ?? null : null,
}));

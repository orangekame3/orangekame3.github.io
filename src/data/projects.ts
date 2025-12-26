export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: 'OQTOPUS',
    description: 'Open Quantum Toolchain for OPerators & USers',
    link: 'https://oqtopus-team.github.io/',
  },
  {
    title: 'qasmtools',
    description: 'Comprehensive toolkit for OpenQASM 3.0 development',
    link: 'https://github.com/orangekame3/qasmtools',
  },
  {
    title: 'tftarget',
    description: 'Interactive Terraform target selector',
    link: 'https://github.com/future-architect/tftarget',
  },
  {
    title: 'paclear',
    description: 'Terminal clear with PAC-MAN animation',
    link: 'https://github.com/orangekame3/paclear',
  },
  {
    title: 'stree',
    description: 'S3 bucket directory tree visualization',
    link: 'https://github.com/orangekame3/stree',
  },
  {
    title: 'ghfetch',
    description: 'GitHub profile fetcher',
    link: 'https://github.com/orangekame3/ghfetch',
  },
];

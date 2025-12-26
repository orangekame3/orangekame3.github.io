export interface Publication {
  title: string;
  note: string;
  year: string;
  link: string;
}

export const publications: Publication[] = [
  {
    title: 'A Practical Open-Source Software Stack for a Cloud-Based Quantum Computing System',
    note: 'IEEE QCE',
    year: '2025',
    link: 'https://ieeexplore.ieee.org/document/11250353',
  },
  {
    title: 'Software Mistakes and Tradeoffs',
    note: 'Translation',
    year: '2023',
    link: 'https://www.oreilly.co.jp/books/9784814400317/',
  },
  {
    title: 'Ultrastrong Tunable Coupler Between Superconducting LC Resonators',
    note: 'Phys. Rev. Applied',
    year: '2021',
    link: 'https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.16.064041',
  },
];

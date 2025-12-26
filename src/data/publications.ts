export interface Publication {
  title: string;
  note: string;
  year: string;
  link: string;
}

export const publications: Publication[] = [
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

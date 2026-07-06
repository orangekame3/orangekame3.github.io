export interface Publication {
  title: string;
  note: string;
  year: string;
  link: string;
}

export const publications: Publication[] = [
  {
    title: 'QuBE/Qubex: an integrated hardware-software system for superconducting qubit experiments with broadband control',
    note: 'arXiv (co-author)',
    year: '2026',
    link: 'https://arxiv.org/abs/2606.13010',
  },
  {
    title: '量子イノベーションハンドブック',
    note: 'Book (共著)',
    year: '2026',
    link: 'https://www.nts-book.net/view/item/000000001709',
  },
  {
    title: 'A Practical Open-Source Software Stack for a Cloud-Based Quantum Computing System',
    note: 'IEEE QCE',
    year: '2025',
    link: 'https://ieeexplore.ieee.org/document/11250353',
  },
  {
    title: 'Auxiliary-field quantum Monte Carlo method with quantum selected configuration interaction',
    note: 'arXiv (co-author)',
    year: '2025',
    link: 'https://arxiv.org/abs/2502.21081',
  },
  {
    title: '量子クラウドの待ち時間短縮：量子古典ハイブリッド実行と量子マルチプログラミング',
    note: '情報処理学会 研究報告',
    year: '2025',
    link: 'https://www.ipsj.or.jp/kenkyukai/event/hpc198qs14.html',
  },
  {
    title: '1万量子ビットの実現に向けた量子コンピュータシステム化の課題',
    note: '情報処理学会 研究報告',
    year: '2025',
    link: 'https://www.ipsj.or.jp/kenkyukai/event/hpc198qs14.html',
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

export interface Talk {
  title: string;
  event: string;
  date: string;
  link: string;
  type: 'invited' | 'conference' | 'workshop' | 'poster' | 'community';
  note?: string;
}

export const talks: Talk[] = [
  // invited
  {
    title: '量子クラウドサービスの裏側 − Deep Dive into OQTOPUS',
    event: 'IQuRA',
    date: '2026.01',
    link: 'https://www.rs.tus.ac.jp/fylab/iqura/iqura.html',
    type: 'invited',
  },
  {
    title: 'Development of a Cloud Quantum Computing System at Osaka University',
    event: 'QSMC 2024',
    date: '2024.10',
    link: 'https://qi2024satellite.github.io/qsmc2024.github.io/',
    type: 'invited',
  },
  // conference
  {
    title: 'A Practical Open-Source Software Stack for a Cloud-Based Quantum Computing System',
    event: 'IEEE QCE',
    date: '2025.09',
    link: 'https://speakerdeck.com/oqtopus/a-practical-open-source-software-stack-for-a-cloud-based-quantum-computing-system',
    type: 'conference',
  },
  {
    title: 'OQTOPUS: An Open-Source Software Stack for Cloud-Based Quantum Computing',
    event: 'HEART',
    date: '2025.05',
    link: 'https://sites.google.com/view/heart2025/program/program',
    type: 'conference',
  },
  // poster
  {
    title: 'OQTOPUS: Open Quantum Toolchain for Operators and Users',
    event: 'Munich Quantum Software Forum',
    date: '2025.10',
    link: 'https://www.cda.cit.tum.de/research/quantum/2025_mqsf_summary/',
    type: 'poster',
  },
  {
    title: 'OQTOPUS: An Open-Source Software Stack for Cloud-Based Quantum Computing',
    event: 'SIP Symposium 2025',
    date: '2025.10',
    link: 'https://www.qst.go.jp/site/sip3/symposium2025.html',
    type: 'poster',
  },
  {
    title: 'OQTOPUS: An Open-Source Software Stack for Cloud-Based Quantum Computing',
    event: 'Quantum Innovation 2025',
    date: '2025.08',
    link: 'https://www.qi2025.jp/',
    type: 'poster',
  },
  {
    title: 'OQTOPUS: An Open-Source Software Stack for Cloud-Based Quantum Computing',
    event: 'Quantinuum Training Session',
    date: '2025.05',
    link: 'https://quantinuum.co.jp/quantinuum-spring-2025-training-session/',
    type: 'poster',
    note: '1st Prize',
  },
  // community
  {
    title: 'クラウド量子コンピュータシステムの開発と運用',
    event: 'OSC 2025 Osaka',
    date: '2025.01',
    link: 'https://event.ospn.jp/osc2025-osaka/',
    type: 'community',
  },
];

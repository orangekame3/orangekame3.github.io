export interface Activity {
  title: string;
  org: string;
  date: string;
  link: string;
  role?: string;
}

export const activities: Activity[] = [
  {
    title: '量子ソフトウェアの社会実装を加速させる「QSRH」の挑戦',
    org: 'クラスメソッド',
    date: '2026.04',
    link: 'https://classmethod.jp/cases/osaka-u-qiqb-zenn/',
    role: '取材',
  },
  {
    title: 'エキスポ文化祭2025 in ららぽーとEXPOCITY',
    org: 'ららぽーとEXPOCITY',
    date: '2025.11',
    link: 'https://qiqb.osaka-u.ac.jp/newstopics/news20251107',
  },
  {
    title: 'エンタングル・モーメント ―［量子・海・宇宙］× 芸術',
    org: 'EXPO 2025 Osaka',
    date: '2025.08',
    link: 'https://www.qst.go.jp/site/entangle-moment/',
  },
  {
    title: 'クイズとゲームでせまる！量子コンピュータ',
    org: '日本科学未来館',
    date: '2024.08',
    link: 'https://www.miraikan.jst.go.jp/events/202408033551.html',
    role: '講師',
  },
];

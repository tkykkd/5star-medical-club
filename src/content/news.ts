import {ORIGIN} from './assets';

export type NewsItem = {
  id: string;
  date: string;
  href: string;
  title: {th: string; ja: string};
};

export const newsItems: NewsItem[] = [
  {
    id: 'regen-14',
    date: '2026.03.23',
    title: {
      th: 'การรับการแพทย์ฟื้นฟูอย่างปลอดภัย — 14 หลักเกณฑ์ที่ 5Star Medical Club ให้ความสำคัญ',
      ja: '再生医療を安全に受けるために ― 5Star Medical Clubが大切にする14の基準',
    },
    href: `${ORIGIN}/news/%e5%86%8d%e7%94%9f%e5%8c%bb%e7%99%82%e3%82%92%e5%ae%89%e5%85%a8%e3%81%ab%e5%8f%97%e3%81%91%e3%82%8b%e3%81%9f%e3%82%81%e3%81%ab-%e2%80%95-5star-medical-club%e3%81%8c%e5%a4%a7%e5%88%87%e3%81%ab%e3%81%99/`,
  },
  {
    id: 'completed-checkup',
    date: '2026.03.11',
    title: {
      th: 'เหตุใดโปรแกรมตรวจใหม่ “COMPLETED” จึงถูกเลือกในฐานะมาตรฐานการแพทย์เชิงป้องกัน',
      ja: '予防医療の基準を変える新しい健診プログラム〈COMPLETED〉が選ばれる理由',
    },
    href: `${ORIGIN}/news/`,
  },
  {
    id: 'nk-banking',
    date: '2026.01.28',
    title: {
      th: 'เพื่อสุขภาพในอนาคต — เริ่มบริการเก็บรักษา NK cell แช่แข็ง',
      ja: '未来の健康のために – NK細胞凍結保存バンキングサービス開始',
    },
    href: `${ORIGIN}/news/`,
  },
  {
    id: 'peninsula-guest',
    date: '2026.01.15',
    title: {
      th: 'เฉพาะผู้เข้าพักโรงแรมเพนินซูลาโตเกียว — เวลเนสและเอจจิ้งแคร์',
      ja: 'ザ・ペニンシュラ東京ご宿泊者様限定－ウェルネス＆エイジングケアのご案内',
    },
    href: `${ORIGIN}/news/`,
  },
  {
    id: 'clinic9ru-whitepaper',
    date: '2026.01.13',
    title: {
      th: 'CLINIC 9ru ได้รับเลือกใน “หนังสือปกขาวอุตสาหกรรมต้านวัยจีน 2025”',
      ja: 'CLINIC 9ruが「2025年中国長寿医学・抗衰産業白皮書」に選出',
    },
    href: `${ORIGIN}/news/`,
  },
  {
    id: 'fraud-warning',
    date: '2025.11.08',
    title: {
      th: 'คำเตือนเรื่องข้อมูลส่วนลดเท็จและการชักชวนที่ไม่เหมาะสม',
      ja: '虚偽の割引情報および不正な勧誘に関するご注意',
    },
    href: `${ORIGIN}/news/`,
  },
];

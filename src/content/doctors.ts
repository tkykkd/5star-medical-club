import {ORIGIN} from './assets';

export type Doctor = {
  nameJa: string;
  nameEn: string;
  roleTh: string;
  roleJa: string;
  detailUrl: string;
  image: string;
};

/** ลำดับและข้อมูลสอดคล้องกับหน้าแพทย์บนเว็บไซต์หลัก */
export const doctors: Doctor[] = [
  {
    nameJa: '加藤 治文',
    nameEn: 'Harubumi Kato',
    roleTh: 'ที่ปรึกษาการรักษาสูงสุด · ศาสตราจารย์กิตติมศักดิ์ โตเกียวเมดิคัลยูนิเวอร์ซิตี',
    roleJa: '最高診療顧問／東京医科大学 名誉教授',
    detailUrl: `${ORIGIN}/doctor/%e5%8a%a0%e8%97%a4-%e6%b2%bb%e6%96%87/`,
    image: `${ORIGIN}/wp-content/uploads/2025/03/加藤先生.jpg`,
  },
  {
    nameJa: '福沢 嘉孝',
    nameEn: 'Yoshitaka Fukuzawa',
    roleTh: 'ที่ปรึกษาวิชาการสูงสุด · ศาสตราจารย์กิตติมศักดิ์ มหาวิทยาลัยการแพทย์ไอจิ',
    roleJa: '最高学術顧問／学校法人 愛知医科大学 名誉教授',
    detailUrl: `${ORIGIN}/doctor/yoshitaka-fukuzawa/`,
    image: `${ORIGIN}/wp-content/uploads/2025/01/深沢先生.jpg`,
  },
  {
    nameJa: '小田原 雅人',
    nameEn: 'Masato Odawara',
    roleTh: 'ที่ปรึกษาการรักษา · โตเกียวเมดิคัลยูนิเวอร์ซิตี / มหาวิทยาลัยนานาชาติด้านสุขภาพและสวัสดิการ',
    roleJa: '診療顧問／東京医科大学 客員教授、国際医療福祉大学 臨床医学研究センター教授',
    detailUrl: `${ORIGIN}/doctor/%e5%b0%8f%e7%94%b0%e5%8e%9f-%e9%9b%85%e4%ba%ba/`,
    image: `${ORIGIN}/wp-content/uploads/2025/05/小田原先生.jpg`,
  },
  {
    nameJa: '村上 康文',
    nameEn: 'Yasufumi Murakami',
    roleTh: 'ที่ปรึกษาศูนย์แปรรูปเซลล์ · ศาสตราจารย์กิตติมศักดิ์ มหาวิทยาลัยวิทยาศาสตร์โตเกียว',
    roleJa: '細胞加工センター顧問／東京理科大学 名誉教授',
    detailUrl: `${ORIGIN}/doctor/%e6%9d%91%e4%b8%8a-%e5%ba%b7%e6%96%87/`,
    image: `${ORIGIN}/wp-content/uploads/2025/03/村上先生.jpg`,
  },
  {
    nameJa: '清水 俊彦',
    nameEn: 'Toshihiko Shimizu',
    roleTh: 'ที่ปรึกษาการรักษา · โรงพยาบาลหญิงโตเกียว / มหาวิทยาลัยด็อกคิโย',
    roleJa:
      '診療顧問／東京女子医科大学 脳神経外科 頭痛外来 客員教授、獨協医科大学 脳神経内科学 臨床准教授（兼任）',
    detailUrl: `${ORIGIN}/doctor/%e6%b8%85%e6%b0%b4-%e4%bf%8a%e5%bd%a6/`,
    image: `${ORIGIN}/wp-content/uploads/2025/03/清水先生.jpg`,
  },
  {
    nameJa: '高原 太郎',
    nameEn: 'Taro Takahara',
    roleTh: 'ที่ปรึกษาอาวุโสการตีความ MRI · ศาสตราจารย์เชิญชวน มหาวิทยาลัยอากิตะ',
    roleJa: 'MRI画像解析最高顧問／秋田大学客員教授',
    detailUrl: `${ORIGIN}/doctor/%e9%ab%98%e5%8e%9f-%e5%a4%aa%e9%83%8e/`,
    image: `${ORIGIN}/wp-content/uploads/2025/03/高原先生.jpg`,
  },
  {
    nameJa: '紫藤 奈緒',
    nameEn: 'Nao Shito',
    roleTh: 'ผู้อำนวยการ BiOSTYLE CLINIC · คณะแพทยศาสตร์ มหาวิทยาลัยกุมมะ',
    roleJa: 'BiOSTYLE CLINIC 院長／群馬大学医学部',
    detailUrl: `${ORIGIN}/doctor/%e7%b4%ab%e8%97%a4-%e5%a5%88%e7%b7%92/`,
    image: `${ORIGIN}/wp-content/uploads/2026/04/2024032913_74_00915_130.jpg`,
  },
  {
    nameJa: '児島 剛太郎',
    nameEn: 'Gota Kojima',
    roleTh: 'แพทย์ THE PREVENTION CLINIC · คณะแพทยศาสตร์ มหาวิทยาลัยโตเกียว / UCL',
    roleJa: 'THE PREVENTION CLINIC 医師／東京大学医学部、ロンドン大学大学院',
    detailUrl: `${ORIGIN}/doctor/%e5%85%90%e5%b3%b6-%e5%89%9b%e5%a4%aa%e9%83%8e/`,
    image: `${ORIGIN}/wp-content/uploads/2026/01/iStock-1238687200.jpg`,
  },
  {
    nameJa: '大日向 玲紀',
    nameEn: 'Ryoki Ohinata',
    roleTh: 'แพทย์ CLINIC 9ru · มหาวิทยาลัยการแพทย์ญี่ปุ่น',
    roleJa: 'CLINIC 9ru 医師／日本医科大学',
    detailUrl: `${ORIGIN}/doctor/ryoki-ohinata/`,
    image: `${ORIGIN}/wp-content/uploads/2025/01/大日向-玲紀先生_白衣-1-scaled.jpg`,
  },
  {
    nameJa: '大亀 浩久',
    nameEn: 'Hirohisa Ogame',
    roleTh: 'ผู้อำนวยการ THE PREVENTION CLINIC · คณะแพทยศาสตร์ มหาวิทยาลัยญี่ปุ่น',
    roleJa: 'THE PREVENTION CLINIC 院長／日本大学医学部',
    detailUrl: `${ORIGIN}/doctor/sample-staff2/`,
    image: `${ORIGIN}/wp-content/uploads/2025/01/大亀先生-1-scaled.jpg`,
  },
  {
    nameJa: '塚田 哲成',
    nameEn: 'Norimasa Tsukada',
    roleTh: 'ประธานแพทย์กลุ่ม · ศาสตราจารย์พิเศษ มหาวิทยาลัยชินชู',
    roleJa: 'グループ 総院長／国立大学法人 信州大学 特任教授',
    detailUrl: `${ORIGIN}/doctor/norimasa-tsukada/`,
    image: `${ORIGIN}/wp-content/uploads/2025/01/塚田先生２-scaled.jpg`,
  },
];



export type CourseTopic = {
  title: string;
  duration: string; 
  isDownload?: boolean; 
  isPreview?: boolean; 
};

export type CourseSection = {
  title: string;
  lectures: number;
  duration: string; 
  topics: CourseTopic[];
};

export type Course = {
  id: string; 
  title: string;
  description: string;
  imageUrl: string;
  badgeType: 'free' | 'premium'; 
  sections: CourseSection[]; // Courses ke sections aur topics
};

export const courses: Course[] = [
  {
    id: 'introduction-to-cryptocurrency', // Ye id URL mein use hogi
    title: 'Introduction to Cryptocurrency',
    description: 'Learn the basics of what crypto currency is, blockchain technology, and its history.',
    imageUrl: '/crypto1.png', // images ke sahi path
    badgeType: 'free',
    sections: [
      {
        title: 'Course Introduction', // Section 1 ka title
        lectures: 3,
        duration: '15min',
        topics: [
          { title: 'What is this Course About?', duration: '05:00', isPreview: true },
          { title: 'Setting Up Your Environment', duration: '06:00' },
          { title: 'Course Syllabus Download', duration: '04:00', isDownload: true },
        ],
      },
      {
        title: 'Basics of Cryptocurrency', // Section 2 ka title
        lectures: 4,
        duration: '20min',
        topics: [
          { title: 'What is Bitcoin?', duration: '07:00' },
          { title: 'Altcoins Explained', duration: '05:00' },
          { title: 'Blockchain Fundamentals', duration: '04:00', isPreview: true },
          { title: 'Cryptocurrency Wallets', duration: '04:00' },
        ],
      },
       {
        title: 'Advanced Topics', // Section 3 ka title
        lectures: 3,
        duration: '18min',
        topics: [
          { title: 'Decentralized Finance (DeFi)', duration: '06:00' },
          { title: 'NFTs Explained', duration: '06:00' },
          { title: 'Future of Crypto', duration: '06:00' },
        ],
      },
    ],
  },
  {
    id: 'understanding-trading-pairs',
    title: 'Understanding Trading Pairs',
    description: 'Explore how cryptocurrencies are traded against each other and fiat currencies (e.g., BTC/USDT, ETH/BTC).',
    imageUrl: '/crypto2.png',
    badgeType: 'free',
    sections: [
      {
        title: 'Introduction to Pairs',
        lectures: 3,
        duration: '18min',
        topics: [
          { title: 'What are Trading Pairs?', duration: '06:00', isPreview: true },
          { title: 'Base and Quote Currencies', duration: '07:00' },
          { title: 'Why Pairs Matter', duration: '05:00' },
        ],
      },
       {
        title: 'Common Pairs',
        lectures: 3,
        duration: '15min',
        topics: [
          { title: 'BTC/USDT Explained', duration: '05:00' },
          { title: 'ETH/BTC Analysis', duration: '05:00' },
          { title: 'Fiat Pairs', duration: '05:00' },
        ],
      },
    ],
  },
  {
    id: 'more-on-blockchain',
    title: 'More on Blockchain',
    description: 'Dive deeper into how blockchain works and its applications.',
    imageUrl: '/crypto3.png',
    badgeType: 'free',
    sections: [
      {
        title: 'Blockchain Architecture',
        lectures: 4,
        duration: '25min',
        topics: [
          { title: 'Consensus Mechanisms', duration: '08:00' },
          { title: 'Hashing and Cryptography', duration: '07:00' },
          { title: 'Nodes and Networks', duration: '05:00' },
          { title: 'Smart Contracts Basics', duration: '05:00', isPreview: true },
        ],
      },
       {
        title: 'Blockchain Applications',
        lectures: 3,
        duration: '20min',
        topics: [
          { title: 'Decentralized Finance (DeFi)', duration: '07:00' },
          { title: 'Supply Chain on Blockchain', duration: '06:00' },
          { title: 'Identity Management', duration: '07:00' },
        ],
      },
    ],
  },
  {
    id: 'spot-trading-vs-margin-trading',
    title: 'Spot Trading vs. Margin Trading',
    description: 'Understand the differences and risks involved in spot and margin trading.',
    imageUrl: '/crypto4.png',
    badgeType: 'premium', // Note: 'Premium' (capital P) from your cards, 'premium' (small p) from my suggestion. Keep consistent.
    sections: [
      {
        title: 'Understanding Spot Trading',
        lectures: 3,
        duration: '20min',
        topics: [
          { title: 'What is Spot Trading?', duration: '07:00', isPreview: true },
          { title: 'Advantages & Disadvantages', duration: '06:00' },
          { title: 'Spot Exchanges', duration: '07:00' },
        ],
      },
       {
        title: 'Understanding Margin Trading',
        lectures: 4,
        duration: '25min',
        topics: [
          { title: 'What is Margin Trading?', duration: '08:00' },
          { title: 'Leverage Explained', duration: '07:00' },
          { title: 'Risks of Margin Trading', duration: '05:00' },
          { title: 'Liquidation Explained', duration: '05:00' },
        ],
      },
    ],
  },
];
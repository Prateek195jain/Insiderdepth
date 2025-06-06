export interface TokenomicsData {
  name: string;
  value: number;
  color: string;
}

export const tokenomicsData: TokenomicsData[] = [
  { name: 'Presale', value: 22, color: '#4CAF50' }, 
  { name: 'Staking', value: 7.5, color: '#2196F3' }, 
  { name: 'Airdrop Season', value: 15, color: '#FFC107' },
  { name: 'Ecosystem', value: 2.5, color: '#FF5722' }, 
  { name: 'Marketing', value: 13, color: '#9C27B0' },
  { name: 'Liquidity', value: 10, color: '#E91E63' },
  { name: 'Launchpad', value: 10, color: '#00BCD4' },
  { name: 'Team', value: 10, color: '#FFEB3B' },
  { name: 'Cex', value: 10, color: '#795548' },
];
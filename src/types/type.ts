export type PortfolioDataType = {
  id: number;
  src: string;
  type: string;
  sector: string;
  url: string;
};

export type CollapsibleDataType = {
  title: string;
  description: string;
}[];

export type PersonsDataType = {
  src: string;
  name: string;
  role: string;
  bio: string;
};

export interface ICateringSet {
  imagePath: string;
  title: string;
  subtitle: string;
  description: { text: string; children?: string[] }[];
}

export const CateringSetList: ICateringSet[] = [];

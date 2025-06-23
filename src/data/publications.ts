export interface Publication {
  id: number;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'conference' | 'journal' | 'workshop' | 'preprint';
  doi?: string;
  url?: string;
  abstract: string;
}

export const publications: Publication[] = [
  {
    id: 1,
    title: 'On Edge Level: The Impact of Adopting Deep Learning Techniques on Server Design',
    authors: ['Mostafa Deiab', 'Vijayant Mehra', 'Hassan Shami', 'Yahuza Bello', 'Ahmed Refaey'],
    venue: 'IEEE Canadian Conference on Electrical and Computer Engineering (CCECE)',
    year: 2024,
    type: 'conference',
    doi: '10.1109/CCECE59415.2024.10667122',
    url: 'https://ieeexplore.ieee.org/document/10667122',
    abstract: 'This work discusses the significance of hardware accelerators like GPUs and FPGAs for Deep Learning (DL) models due to their intensive computational demands, emphasizing the need for cost-effective solutions. It highlights the importance of integrating GPUs and FPGAs into edge server design to enhance computational efficiency in edge computing applications. The evaluation assessed the performance of three machines with varying specifications. The machine equipped with Nvidia GeForce RTX 3080 Ti GPU demonstrated superior performance, notably in terms of shorter training time compared to the other benchmarks. However, the variance in prediction accuracy among the machines remained relatively consistent, with approximately a 4% difference.'
  }
];
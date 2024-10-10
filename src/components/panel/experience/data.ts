import { StaticImageData } from 'next/image';
import nestLogo from './images/nest-logo.png';
import orandaLogo from './images/oranda-logo.png';

export interface IExperience {
  title: string;
  companyName: string;
  companyImage: StaticImageData;
  date: string;
  points: string[];
}

export const experienceData: IExperience[] = [
  {
    title: 'Fullstack Developer Intern',
    companyName: 'Nest Wallet',
    companyImage: nestLogo,
    date: 'Jan 2024 - Aug 2024',
    points: [
      'Implemented fullstack features using React Native for the frontend and Go/GraphQL for the backend',
      'Developed an intricate questing system, increasing total user base by over 20,000 in under one week',
      'Built a quick and intuitive trading terminal bringing thousands of dollars in daily swap volume',
      'Spearheaded gamification of the user interface by designing and creating custom sound effects and animations for key features',
      'Created marketing videos for their Twitter, including 3D animations built with Blender',
    ],
  },

  {
    title: 'Software Developer Intern',
    companyName: 'Oranda',
    companyImage: orandaLogo,
    date: 'Dec 2022 - Apr 2023',
    points: [
      'Spearheaded the development of the backend infrastructure for a cutting-edge AI-driven art platform, leveraging FastAPI, GCP, and AWS',
      'Played a pivotal role in the frontend development efforts by creating a dynamic and user-friendly interface using React',
      'Developed an innovative legal tool for a local real estate firm that transformed the traditional, cumbersome process of legal document navigation into a streamlined, AI-enhanced experience',
    ],
  },
];

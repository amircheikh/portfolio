import { ILinkWithIcon } from '@/types';
import { faGithub, faUnity, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { StaticImageData } from 'next/image';
import aiTextureSC1 from './images/AI-Texture-SC1.png';
import aiTextureSC2 from './images/AI-Texture-SC2.png';
import aiTextureSC3 from './images/AI-Texture-SC3.png';
import aiTextureSC4 from './images/AI-Texture-SC4.png';
import aiTTSSC1 from './images/AI-TTS-SC1.png';
import bunzelTownSC1 from './images/BunzelTown-SC1.png';
import bunzelTownSC2 from './images/BunzelTown-SC2.png';
import bunzelTownSC3 from './images/BunzelTown-SC3.png';
import bunzelTownSC4 from './images/BunzelTown-SC4.png';
import bunzelTownSC5 from './images/BunzelTown-SC5.png';
import starsSC1 from './images/Stars-SC1.png';
import starsSC2 from './images/Stars-SC2.png';
import starsSC3 from './images/Stars-SC3.png';
import starsSC4 from './images/Stars-SC4.png';

export interface IProject {
  name: string;
  description: string;
  images: StaticImageData[];
  links: ILinkWithIcon[];
}

export const projectsData: IProject[] = [
  {
    name: 'Next.js 3D Stars Portfolio',
    description: `A 3D personal portfolio website built from the ground up using Next.js and Three.js implementing custom sound effects and 3D animations. Anyone can clone my repo as a template and use it for their own personal website!`,
    images: [starsSC1, starsSC2, starsSC3, starsSC4],
    links: [
      {
        icon: faGithub,
        url: 'https://github.com/amircheikh/NextJS-3DStars-Portfolio',
      },
    ],
  },

  {
    name: 'AI Texture Generator',
    description: `A tool that uses OpenAI's DALL·E 2 to generate textures directly from the Unity Editor. All API calls are made directly in the editor and requires no outside software. The normal map, height map, and AO map for each texture is also generated, allowing for realistic looking textures. Available as a free download on the Unity Asset Store.`,
    images: [aiTextureSC1, aiTextureSC2, aiTextureSC3, aiTextureSC4],
    links: [
      {
        icon: faUnity,
        url: 'https://assetstore.unity.com/packages/tools/generative-ai/amir-s-ai-texture-generator-258109',
      },
      {
        icon: faGithub,
        url: 'https://github.com/amircheikh/Unity-AI-Texture-Generator',
      },
      {
        icon: faYoutube,
        url: 'https://youtu.be/j_V2LVeXV4k',
      },
    ],
  },

  {
    name: 'ChatGPT in Unity',
    description: `An open source and customizable game demo which impliments ChatGPT in Unity to create custom NPCs. All API calls are made directly in the game and requires no outside software. The goal of the game is to find the password for the castle in BunzelTown by talking to the NPCs around the map. Anyone can clone the repo and create their own games with custom NPCs based off this demo.`,
    images: [bunzelTownSC1, bunzelTownSC2, bunzelTownSC3, bunzelTownSC4, bunzelTownSC5],
    links: [
      {
        icon: faGithub,
        url: `https://github.com/amircheikh/Unity-ChatGPT-NPCs`,
      },
      {
        icon: faYoutube,
        url: 'https://youtu.be/mihnhEf5PVQ',
      },
    ],
  },
  {
    name: 'AI Text to Speech Discord Bot',
    description: `A text to speech Discord bot made in Python that generates from custom, pretrained voices. This bot uses TorToiSe TTS to generate the speech. You can select from any of the pretrained voice models that I created, or train your own.`,
    images: [aiTTSSC1],
    links: [
      {
        icon: faGithub,
        url: `https://github.com/amircheikh/AI-TTS-Discord-bot-TorToiSe`,
      },
    ],
  },
];

import { IChamferableBodyDefinition } from "matter-js";

interface IMatterImageElement {
  label: string;
  path: string;
  width: number;
  height: number;
  coordinates: { x: number; y: number };
  options: IChamferableBodyDefinition;
}

export const Images: IMatterImageElement[] = [
  {
    label: "react-testing-libiary",
    path: "/icons/React-Testing-Library.svg",
    width: 317,
    height: 60,
    coordinates: { x: 580, y: 200 },
    options: { angle: -Math.PI / 20 },
  },
  {
    label: "styled-componetns",
    path: "/icons/styled-components.svg",
    width: 306,
    height: 60,
    coordinates: { x: 700, y: 170 },
    options: { angle: Math.PI / 40 },
  },
  {
    label: "react",
    path: "/icons/React.svg",
    width: 178,
    height: 68,
    coordinates: { x: 875, y: 190 },
    options: { angle: -Math.PI / 100 },
  },
  {
    label: "vite",
    path: "/icons/Vite.svg",
    width: 155,
    height: 68,
    coordinates: { x: 630, y: 60 },
    options: { angle: Math.PI / 8 },
  },
  {
    label: "jest",
    path: "/icons/Jest.svg",
    width: 151,
    height: 64,
    coordinates: { x: 740, y: 95 },
    options: { angle: -Math.PI / 15 },
  },
  {
    label: "javascript",
    path: "/icons/Javascript.svg",
    width: 236,
    height: 68,
    coordinates: { x: 890, y: 120 },
    options: { angle: -Math.PI / 20 },
  },
  {
    label: "tailwindcss",
    path: "/icons/Tailwindcss.svg",
    width: 249,
    height: 68,
    coordinates: { x: 720, y: -30 },
    options: { angle: -Math.PI / 10 },
  },
  {
    label: "typescript",
    path: "/icons/Typescript.svg",
    width: 235,
    height: 68,
    coordinates: { x: 850, y: -10 },
    options: { angle: Math.PI / 20 },
  },
];

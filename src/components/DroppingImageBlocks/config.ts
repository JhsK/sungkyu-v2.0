import { IChamferableBodyDefinition } from "matter-js";

interface IMatterImageElement {
  label: string;
  path: string;
  width: number;
  height: number;
  coordinates: { x: number; y: number };
  offset: { x: number; width: number; height: number };
  options: IChamferableBodyDefinition;
}

export const Images: IMatterImageElement[] = [
  {
    label: "react-testing-library",
    path: "/icons/React-Testing-Library.svg",
    width: 340,
    height: 68,
    coordinates: { x: 580, y: 200 },
    offset: { x: 500, width: 80, height: 20 },
    options: { angle: -Math.PI / 20 },
  },
  {
    label: "styled-components",
    path: "/icons/styled-components.svg",
    width: 322,
    height: 68,
    coordinates: { x: 700, y: 170 },
    offset: { x: 500, width: 80, height: 20 },
    options: { angle: Math.PI / 40 },
  },
  {
    label: "react",
    path: "/icons/React.svg",
    width: 171,
    height: 68,
    coordinates: { x: 875, y: 190 },
    offset: { x: 600, width: 80, height: 20 },
    options: { angle: -Math.PI / 100 },
  },
  {
    label: "vite",
    path: "/icons/Vite.svg",
    width: 155,
    height: 68,
    coordinates: { x: 630, y: 60 },
    offset: { x: 500, width: 80, height: 20 },
    options: { angle: Math.PI / 8 },
  },
  {
    label: "jest",
    path: "/icons/Jest.svg",
    width: 147,
    height: 64,
    coordinates: { x: 740, y: 95 },
    offset: { x: 500, width: 80, height: 20 },
    options: { angle: -Math.PI / 15 },
  },
  {
    label: "javascript",
    path: "/icons/Javascript.svg",
    width: 221,
    height: 68,
    coordinates: { x: 890, y: 120 },
    offset: { x: 500, width: 80, height: 20 },
    options: { angle: -Math.PI / 20 },
  },
  {
    label: "tailwindcss",
    path: "/icons/Tailwindcss.svg",
    width: 236,
    height: 68,
    coordinates: { x: 720, y: -30 },
    offset: { x: 500, width: 80, height: 20 },
    options: { angle: -Math.PI / 10 },
  },
  {
    label: "typescript",
    path: "/icons/Typescript.svg",
    width: 225,
    height: 68,
    coordinates: { x: 850, y: 0 },
    offset: { x: 700, width: 80, height: 20 },
    options: { angle: Math.PI / 20 },
  },
  {
    label: "turborepo",
    path: "/icons/Turborepo.svg",
    width: 224,
    height: 68,
    coordinates: { x: 900, y: -60 },
    offset: { x: 750, width: 80, height: 20 },
    options: { angle: -Math.PI / 30 },
  },
  {
    label: "react-query",
    path: "/icons/React-Query.svg",
    width: 248,
    height: 68,
    coordinates: { x: 840, y: -125 },
    offset: { x: 650, width: 80, height: 20 },
    options: { angle: 0 },
  },
  {
    label: "next",
    path: "/icons/Next.js.svg",
    width: 184,
    height: 68,
    coordinates: { x: 850, y: -220 },
    offset: { x: 700, width: 80, height: 20 },
    options: { angle: -Math.PI / 5 },
  },
];

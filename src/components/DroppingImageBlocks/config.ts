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
    coordinates: { x: 230, y: 180 },
    options: { angle: -Math.PI / 70 },
  },
  {
    label: "styled-componetns",
    path: "/icons/styled-components.svg",
    width: 306,
    height: 60,
    coordinates: { x: 450, y: 150 },
    options: { angle: Math.PI / 70 },
  },
  {
    label: "react",
    path: "/icons/React.svg",
    width: 178,
    height: 68,
    coordinates: { x: 630, y: 140 },
    options: { angle: -Math.PI / 100 },
  },
];

import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import { Images } from "./config";
import useScreen from "@/hooks/useScreen";

const DPR = window.devicePixelRatio;

function DroppingImageBlocks() {
  const { isMobile, screenWidth, getCurrentBreakPoint } = useScreen();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const Bodies = Matter.Bodies;

  const floorCoordinates = {
    left: {
      x: isMobile ? 0 : 400 * DPR,
      y: 0,
      width: 10 * DPR,
      height: isMobile ? 1000 * DPR : 600 * DPR,
    },
    right: {
      x: isMobile ? (screenWidth - 40) * DPR : 1024 * DPR,
      y: 0,
      width: 20 * DPR,
      height: 1000 * DPR,
    },
  };
  const floor = Bodies.rectangle(0, 500 * DPR, 3000 * DPR, 10 * DPR, {
    isStatic: true,
    render: {
      fillStyle: "#fff",
    },
  });

  const floorLeft = Bodies.rectangle(
    floorCoordinates.left.x,
    floorCoordinates.left.y,
    floorCoordinates.left.width,
    floorCoordinates.left.height,
    {
      isStatic: true,
      render: {
        fillStyle: "#fff",
      },
    }
  );

  const floorRight = Bodies.rectangle(
    floorCoordinates.right.x,
    floorCoordinates.right.y,
    floorCoordinates.right.width,
    floorCoordinates.right.height,
    {
      isStatic: true,
      render: {
        fillStyle: "#fff",
      },
    }
  );

  const responsiveOffset = () => {
    if (getCurrentBreakPoint() === "md") return 200;
    if (getCurrentBreakPoint() === "sm") return 400;
    return 0;
  };

  const updateCanvasSize = () => {
    if (containerRef.current && canvasRef.current) {
      const dpr = window.devicePixelRatio;
      const containerWidth = containerRef.current?.offsetWidth;
      const containerHeight = 500;
      const ctx = canvasRef.current.getContext("2d");

      canvasRef.current.style.width = `${containerWidth}px`;
      canvasRef.current.style.height = `${containerHeight}px`;
      canvasRef.current.width = containerWidth * dpr;
      canvasRef.current.height = containerHeight * dpr;
      ctx?.scale(dpr, dpr);
    }
  };

  const resizeImage = (
    image: HTMLImageElement,
    width: number,
    height: number
  ) => {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    ctx?.drawImage(image, 0, 0, width, height);
    const resizedImage = new Image();
    resizedImage.src = canvas.toDataURL("image/svg");
    return resizedImage;
  };

  useEffect(() => {
    if (!containerRef?.current || !canvasRef?.current) return;

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const World = Matter.World;
    const engine = Engine.create();
    // engine.gravity.y = 1; // 중력의 세기를 설정합니다.

    const render = Render.create({
      element: containerRef.current,
      engine: engine,
      canvas: canvasRef.current,
      bounds: {
        min: { x: 0, y: 0 },
        max: { x: canvasRef.current.width, y: canvasRef.current.height },
      },
      options: {
        showSeparations: true,
        width: canvasRef.current.width,
        height: canvasRef.current.height,
        background: "#fff",
        wireframes: false,
      },
    });

    const loadImages = () => {
      const imageLoadPromises = Images.map(
        (imageData) =>
          new Promise<HTMLImageElement>((resolve) => {
            const image = new Image();
            image.src = imageData.path;
            image.onload = () => {
              const resizedImage = resizeImage(
                image,
                imageData.width,
                imageData.height
              );
              resolve(resizedImage);
            };
          })
      );

      Promise.all(imageLoadPromises).then((loadImages) => {
        createMatterElements(loadImages);
      });
    };

    const createMatterElements = (images: HTMLImageElement[]) => {
      for (let i = 0; i < images.length; i++) {
        const options = Images[i].options;
        const matterElement = Bodies.rectangle(
          (Images[i].coordinates.x - responsiveOffset()) * DPR,
          Images[i].coordinates.y * DPR,
          Images[i].width * 0.7 * DPR,
          Images[i].height * 0.7 * DPR,
          {
            label: Images[i].label,
            chamfer: {
              radius: 10,
            },
            render: {
              sprite: {
                texture: images[i].src,
                xScale: 0.7 * DPR,
                yScale: 0.7 * DPR,
              },
            },
            restitution: 0.4,
            ...options,
          }
        );
        World.add(engine.world, matterElement);
      }
    };

    // 마우스를 이용해 조작을 가능하게 해줍니다.
    const mouse = Matter.Mouse.create(render.canvas),
      mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.8,
          render: {
            visible: false,
          },
        },
      });

    loadImages();

    World.add(engine.world, [floor, floorLeft, floorRight, mouseConstraint]);

    Matter.Runner.run(engine); // 엔진을 구동합니다.
    Render.run(render); // 렌더를 진행합니다.

    return () => {
      Render.stop(render);
      World.clear(engine.world, false);
      Engine.clear(engine);
      render.canvas.remove();
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, [getCurrentBreakPoint]);

  return (
    <section ref={containerRef} className="w-full">
      <canvas ref={canvasRef} id="viewport" width="1920" height="1080" />
    </section>
  );
}

export default DroppingImageBlocks;

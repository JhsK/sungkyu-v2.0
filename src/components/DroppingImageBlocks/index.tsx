import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import { Images } from "./config";

function DroppingImageBlocks() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const Bodies = Matter.Bodies;

  const floor = Bodies.rectangle(0, 480, 2000, 10, {
    isStatic: true,
    render: {
      fillStyle: "#000",
    },
  });

  const floorLeft = Bodies.rectangle(0, 0, 20, 800, {
    isStatic: true,
    render: {
      fillStyle: "#fff",
    },
  });

  const floorRight = Bodies.rectangle(
    canvasRef.current?.width || 768,
    0,
    20,
    800,
    {
      isStatic: true,
      render: {
        fillStyle: "#fff",
      },
    }
  );

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
        background: "",
        wireframes: false,
      },
    });

    const loadedImages: HTMLImageElement[] = [];

    const loadImages = () => {
      for (const imageData of Images) {
        const image = new Image();
        image.src = imageData.path;

        image.onload = () => {
          const resizedImage = resizeImage(
            image,
            imageData.width,
            imageData.height
          );
          loadedImages.push(resizedImage);

          // Check if all images are loaded
          if (loadedImages.length === Images.length) {
            createMatterElements(loadedImages);
          }
        };
      }
    };

    const createMatterElements = (images: HTMLImageElement[]) => {
      for (let i = 0; i < images.length; i++) {
        const options = Images[i].options;
        const matterElement = Bodies.rectangle(
          Images[i].coordinates.x,
          Images[i].coordinates.y,
          Images[i].width * 0.7,
          Images[i].height * 0.7,
          {
            label: Images[i].label,
            chamfer: {
              radius: 10,
            },
            render: {
              sprite: {
                texture: images[i].src,
                xScale: 0.7,
                yScale: 0.7,
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
    // World.add(engine.world, [floor, floorLeft, floorRight]);

    Matter.Runner.run(engine); // 엔진을 구동합니다.
    Render.run(render); // 렌더를 진행합니다.

    return () => {
      Render.stop(render);
      World.clear(engine.world, false);
      Engine.clear(engine);
      render.canvas.remove();
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full">
      <canvas ref={canvasRef} id="viewport" width="1920" height="1080" />
    </section>
  );
}

export default DroppingImageBlocks;

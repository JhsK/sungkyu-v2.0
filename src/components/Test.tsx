import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const MixedShapesExample = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const Bodies = Matter.Bodies;

  const floor = Bodies.rectangle(0, 250, 1000, 20, {
    isStatic: true,
    render: {
      fillStyle: "#fff",
    },
  });

  const floorLeft = Bodies.rectangle(0, 0, 20, 500, {
    isStatic: true,
    render: {
      fillStyle: "#fff",
    },
  });

  const floorRight = Bodies.rectangle(400, 0, 20, 500, {
    isStatic: true,
    render: {
      fillStyle: "#fff",
    },
  });

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
    resizedImage.src = canvas.toDataURL("image/jpeg");
    return resizedImage;
  };

  useEffect(() => {
    if (!containerRef?.current || !canvasRef?.current) return;

    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const World = Matter.World;
    const engine = Engine.create();
    // engine.gravity.y = 1.5; // 중력의 세기를 설정합니다.

    const render = Render.create({
      element: containerRef.current,
      engine: engine,
      canvas: canvasRef.current,
      bounds: {
        min: { x: 0, y: 0 },
        max: { x: 400, y: 300 },
      },
      options: {
        showSeparations: true,
        width: 400,
        height: 300,
        background: "",
        wireframes: false,
      },
    });

    const imagePaths = [
      "/icons/datahunt.jpeg",
      "/icons/insomenia.png",
      "/icons/bdacs.jpeg",
    ];
    const loadedImages: HTMLImageElement[] = [];

    const loadImages = () => {
      for (const imagePath of imagePaths) {
        const image = new Image();
        image.src = imagePath;

        image.onload = () => {
          const resizedImage = resizeImage(image, 80, 80);
          loadedImages.push(resizedImage);

          // Check if all images are loaded
          if (loadedImages.length === imagePaths.length) {
            createMatterElements(loadedImages);
          }
        };
      }
    };

    const createMatterElements = (images: HTMLImageElement[]) => {
      for (let i = 0; i < images.length; i++) {
        const matterElement = Bodies.rectangle(
          200 + i * 10,
          100 - i * 20,
          50,
          50,
          {
            chamfer: {
              radius: 10,
            },
            render: {
              sprite: {
                texture: images[i].src,
                xScale: 0.55,
                yScale: 0.55,
              },
            },
            restitution: 0.6,
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
          stiffness: 0.2,
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
    };
  }, []);

  return (
    <section ref={containerRef}>
      <canvas ref={canvasRef} id="viewport" width="400" height="300" />
    </section>
  );
};

export default MixedShapesExample;

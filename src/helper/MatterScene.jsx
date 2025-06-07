import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import MatterAttractors from 'matter-attractors';
import MatterWrap from 'matter-wrap';

const MatterScene = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const runnerRef = useRef(null);

  useEffect(() => {
    Matter.use(MatterAttractors);
    Matter.use(MatterWrap);

    const { Engine, Render, Runner, World, Bodies, Body, Common, Events, Mouse } = Matter;

    const engine = Engine.create();
    const world = engine.world;
    engine.world.gravity.scale = 0;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const render = Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width,
        height,
        background: '#000',
        wireframes: false,
      },
    });

    const runner = Runner.create();
    engineRef.current = engine;
    runnerRef.current = runner;

    const attractiveBody = Bodies.circle(width / 2, height / 2, 60, {
      isStatic: true,
      render: { fillStyle: '#111' },
      plugin: {
        attractors: [
          (bodyA, bodyB) => ({
            x: (bodyA.position.x - bodyB.position.x) * 1e-6,
            y: (bodyA.position.y - bodyB.position.y) * 1e-6,
          }),
        ],
      },
    });

    World.add(world, attractiveBody);

    const shapeTypes = ['circle', 'rectangle', 'polygon'];
    const darkPalette = ['#1f1f1f', '#2c2c2c', '#3e3e3e', '#444', '#555', '#666'];
    const sparkPalette = ['#6a0dad', '#4b0082', '#301934', '#191970', '#3b0a62', '#1a0033']; // deep purples/blues

    for (let i = 0; i < 100; i++) {
      const x = Common.random(0, width);
      const y = Common.random(0, height);
      const type = Common.choose(shapeTypes);
      const isBig = i % 10 === 0;
      const size = isBig ? Common.random(40, 70) : Common.random(10, 20);
      const isSmallCircle = type === 'circle' && size < 20;

      const color = isSmallCircle
        ? Common.choose(sparkPalette)
        : Common.choose(darkPalette);

      const renderStyle = {
        fillStyle: color,
        strokeStyle: '#000',
        lineWidth: 1.2,
      };

      let body;

      if (type === 'circle') {
        body = Bodies.circle(x, y, size, {
          mass: 1,
          frictionAir: Common.random(0.01, 0.05),
          render: renderStyle,
          plugin: {
            wrap: { min: { x: 0, y: 0 }, max: { x: width, y: height } },
          },
        });
      } else if (type === 'rectangle') {
        body = Bodies.rectangle(x, y, size * 1.2, size * 0.8, {
          mass: 1,
          frictionAir: Common.random(0.01, 0.05),
          angle: Common.random(0, Math.PI),
          render: renderStyle,
          plugin: {
            wrap: { min: { x: 0, y: 0 }, max: { x: width, y: height } },
          },
        });
      } else {
        const sides = Math.floor(Common.random(3, 8));
        body = Bodies.polygon(x, y, sides, size, {
          mass: 1,
          frictionAir: Common.random(0.01, 0.05),
          angle: Common.random(0, Math.PI),
          render: renderStyle,
          plugin: {
            wrap: { min: { x: 0, y: 0 }, max: { x: width, y: height } },
          },
        });
      }

      World.add(world, body);
    }

    const mouse = Mouse.create(render.canvas);
    Events.on(engine, 'afterUpdate', () => {
      if (!mouse.position.x) return;
      Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.12,
        y: (mouse.position.y - attractiveBody.position.y) * 0.12,
      });
    });

    Render.run(render);
    Runner.run(runner, engine);

    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={sceneRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default MatterScene;

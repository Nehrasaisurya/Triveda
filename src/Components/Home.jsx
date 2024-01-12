import React, { useEffect, useRef } from "react";
import * as Matter from "matter-js";
import matterWrap from "matter-wrap";
import matterAttractors from "matter-attractors";

Matter.use(matterWrap);
Matter.use(matterAttractors);

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    let engine, runner, render;

    function runMatter() {
      // module aliases
      const Engine = Matter.Engine,
        Events = Matter.Events,
        Runner = Matter.Runner,
        Render = Matter.Render,
        World = Matter.World,
        Body = Matter.Body,
        Mouse = Matter.Mouse,
        Common = Matter.Common,
        Composite = Matter.Composite,
        Composites = Matter.Composites,
        Bodies = Matter.Bodies;

      // create engine
      engine = Engine.create();

      engine.world.gravity.y = 0;
      engine.world.gravity.x = 0;
      engine.world.gravity.scale = 0.1;

      // create renderer
      render = Render.create({
        element: canvas,
        engine: engine,
        options: {
          showVelocity: false,
          width: window.innerWidth, // set the width to the window width
          height: dimensions.height,
          wireframes: false,
          background: "rgb(255,255,255)",
        },
      });

      // create runner
      runner = Runner.create();

      // create demo scene
      const world = engine.world;
      world.gravity.scale = 0;

      // create a body with an attractor
      const attractiveBody = Bodies.circle(
        render.options.width / 2,
        render.options.height / 2,
        Math.max(dimensions.width / 4, dimensions.height / 4) / 2,
        {
          render: {
            fillStyle: `rgb(255,255,255)`,
            strokeStyle: `rgb(255,255,255)`,
            lineWidth: 0,
          },

          isStatic: true,
          plugin: {
            attractors: [
              function (bodyA, bodyB) {
                return {
                  x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                  y: (bodyA.position.y - bodyB.position.y) * 1e-6,
                };
              },
            ],
          },
        }
      );

      World.add(world, attractiveBody);

      // add some bodies that to be attracted

      const items = [];
      for (let i = 0; i < 60; i += 1) {
        items.push(i);
      }

      items.forEach((item) => {
        const x = Common.random(0, render.options.width);
        const y = Common.random(0, render.options.height);
        const s =
          Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
        const poligonNumber = Common.random(3, 6);
        const body = Bodies.polygon(
          x,
          y,
          poligonNumber,
          s,

          {
            mass: s / 20,
            friction: 0,
            frictionAir: 0.02,
            angle: Math.round(Math.random() * 360),
            render: {
              fillStyle: "#FFFFFF",
              strokeStyle: `#DDDDDD`,
              lineWidth: 2,
            },
          }
        );

        World.add(world, body);

        const r = Common.random(0, 1);
        var circle = Bodies.circle(x, y, Common.random(2, 8), {
          mass: 0.1,
          friction: 0,
          frictionAir: 0.01,
          render: {
            fillStyle: r > 0.3 ? `#FF2D6A` : `rgb(255,255,255)`,
            strokeStyle: `#E9202E`,
            lineWidth: 2,
          },
        });

        World.add(world, circle);

        var circle = Bodies.circle(x, y, Common.random(2, 20), {
          mass: 6,
          friction: 0,
          frictionAir: 0,
          render: {
            fillStyle: r > 0.3 ? `#4267F8` : `rgb(255,255,255)`,
            strokeStyle: `#3257E8`,
            lineWidth: 4,
          },
        });

        World.add(world, circle);

        var circle = Bodies.circle(x, y, Common.random(2, 30), {
          mass: 0.2,
          friction: 0.6,
          frictionAir: 0.8,
          render: {
            fillStyle: `rgb(240,240,240)`,
            strokeStyle: `#FFFFFF`,
            lineWidth: 3,
          },
        });

        World.add(world, circle);
      });

      // add mouse control
      const mouse = Mouse.create(render.canvas);

      Events.on(engine, "afterUpdate", function () {
        if (!mouse.position.x) return;
        // smoothly move the attractor body towards the mouse
        Body.translate(attractiveBody, {
          x: (mouse.position.x - attractiveBody.position.x) * 0.12,
          y: (mouse.position.y - attractiveBody.position.y) * 0.12,
        });
      });

      // return a context for MatterDemo to control
      const data = {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop: function () {
          Matter.Render.stop(render);
          Matter.Runner.stop(runner);
        },
        play: function () {
          Matter.Runner.run(runner, engine);
          Matter.Render.run(render);
        },
      };

      Matter.Runner.run(runner, engine);
      Matter.Render.run(render);
      return data;
    }

    const debounce = (func, wait, immediate) => {
      let timeout;
      return function () {
        const context = this,
          args = arguments;
        const later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

    const setWindowSize = () => {
      const dimensions = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      render.options.width = dimensions.width * 0.98;
      render.options.height = dimensions.height;
      render.canvas.width = dimensions.width * 0.98;
      render.canvas.height = dimensions.height;
      return dimensions;
    };

    const m = runMatter();
    setWindowSize();
    window.addEventListener("resize", debounce(setWindowSize, 100));

    return () => {
      window.removeEventListener("resize", debounce(setWindowSize, 100));
      m.stop();
    };
  }, []);
  return (
    <div className="relative w-full h-screen" id="Home">
      <div
        id="wrapper-canvas"
        ref={canvasRef}
        style={{ position: "absolute" }}
      ></div>
      <div className="w-full h-screen flex flex-col px-4 md:px-10 lg:px-20 absolute">
        <div className="py-2 ">
          <img src="Images/TriVeda2.png" className="w-20 md:w-40 " />
        </div>
        <div className="flex flex-col items-center justify-center mt-44 md:mt-32 text-center">
          <h1
            className="text-5xl md:text-7xl font-bold text-gray-500 "
            data-aos="zoom-out"
            data-aos-delay="100"
          >
            Build Enterprise Systems
          </h1>
          <h1
            className="text-5xl md:text-7xl font-bold mt-5 text-[#04253C]"
            data-aos="zoom-out"
            data-aos-delay="150"
          >
            Cutting Edge Technologies
          </h1>
          <p
            className="mt-5 text-sm md:text-xl"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            We as a Technology Partner build enterprise systems and Prototyping{" "}
            <br />
            with cutting edge technologies at hight speed
          </p>
          <button
            className="bg-[#04253C] px-10 py-4 text-white text-xl mt-5"
            data-aos="zoom-out"
            data-aos-delay="250"
          >
            Explore Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

const getRandomStartPoint = (width: number, height: number) => {
  const side = Math.floor(Math.random() * 4);

  switch (side) {
    case 0:
      return { x: Math.random() * width, y: 0, angle: 45 };
    case 1:
      return { x: width, y: Math.random() * height, angle: 135 };
    case 2:
      return { x: Math.random() * width, y: height, angle: 225 };
    case 3:
      return { x: 0, y: Math.random() * height, angle: 315 };
    default:
      return { x: 0, y: 0, angle: 45 };
  }
};

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#D9AE6B",
  trailColor = "#87CEEB",
  starWidth = 24,
  starHeight = 2,
  className,
}) => {
  const [star, setStar] = useState<ShootingStar | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const createStar = () => {
      const bounds = svgRef.current?.getBoundingClientRect();
      if (!bounds) return;

      const { x, y, angle } = getRandomStartPoint(bounds.width, bounds.height);
      setStar({
        id: Date.now(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      });
      timeoutRef.current = setTimeout(
        createStar,
        Math.random() * (maxDelay - minDelay) + minDelay,
      );
    };

    createStar();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [minSpeed, maxSpeed, minDelay, maxDelay]);

  useEffect(() => {
    if (!star) return;

    const moveStar = () => {
      setStar((previousStar) => {
        if (!previousStar) return null;

        const newX =
          previousStar.x +
          previousStar.speed * Math.cos((previousStar.angle * Math.PI) / 180);
        const newY =
          previousStar.y +
          previousStar.speed * Math.sin((previousStar.angle * Math.PI) / 180);
        const newDistance = previousStar.distance + previousStar.speed;

        const bounds = svgRef.current?.getBoundingClientRect();
        if (!bounds) return null;

        if (
          newX < -40 ||
          newX > bounds.width + 40 ||
          newY < -40 ||
          newY > bounds.height + 40
        ) {
          return null;
        }

        return {
          ...previousStar,
          x: newX,
          y: newY,
          distance: newDistance,
          scale: 1 + newDistance / 100,
        };
      });
      animationFrameRef.current = requestAnimationFrame(moveStar);
    };

    animationFrameRef.current = requestAnimationFrame(moveStar);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [star]);

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      className={cn("absolute inset-0 h-full w-full", className)}
    >
      {star && (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#shooting-star-gradient)"
          transform={`rotate(${star.angle}, ${
            star.x + (starWidth * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      )}
      <defs>
        <linearGradient
          id="shooting-star-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor={trailColor} stopOpacity="0" />
          <stop offset="100%" stopColor={starColor} stopOpacity="1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

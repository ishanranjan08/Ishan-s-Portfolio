"use client";

import { useEffect, useRef, useState } from "react";
import { MotionValue, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 75; // frames from 00 to 74

interface ScrollyCanvasProps {
  progress: MotionValue<number>;
}

export default function ScrollyCanvas({ progress }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Map scroll progress (0 to 1) to frame index (0 to Math.max(0, TOTAL_FRAMES - 1))
  const frameIndex = useTransform(progress, [0, 1], [0, TOTAL_FRAMES - 1]);

  useEffect(() => {
    // Preload images
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;

      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const img = new Image();
        const frameNumber = String(i).padStart(2, '0');
        // Preload exactly matching the file names found in public/sequence
        img.src = `/sequence/frame_${frameNumber}_delay-0.066s.png`;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === TOTAL_FRAMES) {
            setIsLoaded(true);
          }
        };
        loadedImages.push(img);
      }
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  const drawFrame = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    // Reset canvas dimensions to viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Object-fit: cover logic
    const imgRatio = img.width / img.height;
    const canvasRatio = canvas.width / canvas.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      drawHeight = canvas.height;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Draw the first frame when loaded
  useEffect(() => {
    if (isLoaded && images.length > 0) {
      drawFrame(0);
    }
    
    // Handle resize
    const handleResize = () => drawFrame(Math.round(frameIndex.get()));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, images]);

  // Update canvas when frameIndex changes
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (isLoaded) {
      drawFrame(Math.round(latest));
    }
  });

  return (
    <div className="sticky top-0 w-full h-screen overflow-hidden">
      {/* Loading State Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#121212] z-50">
          <div className="text-white text-sm font-medium tracking-widest animate-pulse">
            LOADING SEQUENCE...
          </div>
        </div>
      )}
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}

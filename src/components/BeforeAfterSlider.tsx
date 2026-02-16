import { useState, useRef, useCallback, useEffect } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  beforeLabel = "Vorher",
  afterLabel = "Nachher",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const getPositionFromEvent = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return sliderPosition;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      return Math.min(100, Math.max(0, percentage));
    },
    [sliderPosition]
  );

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    isDragging.current = true;
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const pos = getPositionFromEvent(e.clientX);
      setSliderPosition(pos);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      const touch = e.touches[0];
      const pos = getPositionFromEvent(touch.clientX);
      setSliderPosition(pos);
    };

    const handleEnd = () => {
      isDragging.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [getPositionFromEvent]);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      const pos = getPositionFromEvent(e.clientX);
      setSliderPosition(pos);
    },
    [getPositionFromEvent]
  );

  return (
    <div
      ref={containerRef}
      className="relative rounded-xl shadow-2xl aspect-[4/3] overflow-hidden cursor-pointer select-none"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onClick={handleClick}
    >
      {/* After Image (full background) */}
      <img
        src={afterImage}
        alt={afterAlt}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before Image (clipped from left) */}
      <img
        src={beforeImage}
        alt={beforeAlt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
        draggable={false}
      />

      {/* Vertical Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white z-10"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      />

      {/* Drag Handle */}
      <div
        className="absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-10 h-10 bg-white rounded-full shadow-lg border-4 border-[#2d5016]/20 flex items-center justify-center">
          <span
            className="material-icons text-[#2d5016]/60 text-sm"
            style={{ fontSize: "18px" }}
          >
            swap_horiz
          </span>
        </div>
      </div>

      {/* Before Label (top-left) */}
      <span className="absolute top-4 left-4 z-10 bg-black/50 text-white text-xs px-3 py-1 rounded-full uppercase tracking-widest">
        {beforeLabel}
      </span>

      {/* After Label (top-right) */}
      <span className="absolute top-4 right-4 z-10 bg-[#2d5016]/80 text-white text-xs px-3 py-1 rounded-full uppercase tracking-widest">
        {afterLabel}
      </span>
    </div>
  );
}

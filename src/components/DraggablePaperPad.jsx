import React, { useRef, useState, useEffect } from 'react';
import styled from '@emotion/styled';

const LinedDraggableDiv = styled.div`
  width: 100%;
  max-width: 16vw;
  min-width: 220px;
  height: 340px;
  background:
    url('data:image/svg+xml;utf8,<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><filter id="noise" x="0" y="0"><feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="2" stitchTiles="stitch"/></filter><rect width="120" height="120" fill="white"/><rect width="120" height="120" filter="url(%23noise)" opacity="0.08"/></svg>') repeat,
    repeating-linear-gradient(
      to bottom,
      #fff 0px,
      #fff 10px
    );
  box-shadow: 0 2px 24px rgba(255, 227, 227, 0.1), 0 1.5px 12px rgba(125, 125, 125, 0.06);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: rotate(-3deg);
`;

const OverlayImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 2;
  pointer-events: none;
  opacity: 0.95;
  mix-blend-mode: multiply;
`;

const CanvasStack = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1;
`;

function DrawingCanvas() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [lines, setLines] = useState([]); // Array of lines, each line is an array of points
  const [canvasWidth, setCanvasWidth] = useState(300);

  // SVG pencil icon as data URL
  const pencilCursor =
    "url('data:image/svg+xml;utf8,<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2 17.25V21h3.75l11.06-11.06-3.75-3.75L2 17.25z\" fill=\"%23000\"/><path d=\"M20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z\" fill=\"%23000\"/></svg>') 0 24, auto";

  // High-DPI support
  const height = 340;
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;

  useEffect(() => {
    // Set canvas width to match container
    function updateWidth() {
      if (containerRef.current) {
        setCanvasWidth(containerRef.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    // High-DPI: scale context
    canvas.width = Math.floor(canvasWidth * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = canvasWidth + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(1, 0, 0, 1, 0, 0); // reset
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, canvasWidth, height);
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#111'; // black pen
    ctx.lineWidth = 0.7;
    lines.forEach(line => {
      ctx.beginPath();
      line.forEach((pt, i) => {
        if (i === 0) {
          ctx.moveTo(pt.x, pt.y);
        } else {
          ctx.lineTo(pt.x, pt.y);
        }
      });
      ctx.stroke();
    });
  }, [lines, canvasWidth, dpr]);

  const handlePointerDown = e => {
    setDrawing(true);
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    setLines(prev => [...prev, [{ x, y }]]);
  };
  const handlePointerMove = e => {
    if (!drawing) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    setLines(prev => {
      const newLines = [...prev];
      newLines[newLines.length - 1] = [...newLines[newLines.length - 1], { x, y }];
      return newLines;
    });
  };
  const handlePointerUp = () => setDrawing(false);

  return (
    <div ref={containerRef} style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}>
      <canvas
        ref={canvasRef}
        // width and height set in effect for high-DPI
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          background: 'transparent',
          cursor: pencilCursor,
        }}
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
      />
    </div>
  );
}

function DraggablePaper({ children, style }) {
  const nodeRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  // Restrict movement within parent
  const clamp = (value, min, max) => Math.max(min, Math.min(value, max));

  const onPointerDown = (e) => {
    setDragging(true);
    const pointer = e.touches ? e.touches[0] : e;
    const rect = nodeRef.current.getBoundingClientRect();
    offset.current = {
      x: pointer.clientX - rect.left,
      y: pointer.clientY - rect.top,
    };
    document.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerup', onPointerUp);
    document.body.style.userSelect = 'none';
  };

  const onPointerMove = (e) => {
    if (!dragging) return;
    const pointer = e.touches ? e.touches[0] : e;
    const parent = nodeRef.current.parentElement.getBoundingClientRect();
    const width = nodeRef.current.offsetWidth;
    const height = nodeRef.current.offsetHeight;
    let x = pointer.clientX - parent.left - offset.current.x;
    let y = pointer.clientY - parent.top - offset.current.y;
    // Clamp to parent bounds
    x = clamp(x, 0, parent.width - width);
    y = clamp(y, 0, parent.height - height);
    setPos({ x, y });
  };

  const onPointerUp = () => {
    setDragging(false);
    document.removeEventListener('pointermove', onPointerMove);
    document.removeEventListener('pointerup', onPointerUp);
    document.body.style.userSelect = '';
  };

  return (
    <div
      ref={nodeRef}
      style={{
        position: 'absolute',
        left: pos.x,
        top: pos.y,
        touchAction: 'none',
        // cursor: dragging ? 'grabbing' : 'grab',
        ...style,
      }}
      onPointerDown={onPointerDown}
    >
      {children}
    </div>
  );
}

const DraggablePaperPad = ({ imgSrc, style }) => (
  <DraggablePaper style={style}>
    <LinedDraggableDiv>
      <CanvasStack>
        {imgSrc && <OverlayImage src={imgSrc} alt="doodle" />}
        <DrawingCanvas />
      </CanvasStack>
    </LinedDraggableDiv>
  </DraggablePaper>
);

export default DraggablePaperPad; 
interface FlickeringGridProps {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  maxOpacity?: number;
}

declare const FlickeringGrid: React.FC<FlickeringGridProps>;
export default FlickeringGrid;

import React from "react";
import { VictoryChart, VictoryLine } from "victory";

interface ChartProps {}

export const Chart: React.FC<ChartProps> = ({}) => {
  return (
    <VictoryChart>
      {/* Make a system of 1w / 1m / 3m / 1y / all for the total weight increase */}
      <VictoryLine
        interpolation="natural"
        style={{
          data: { stroke: "#fff" },
          parent: { border: "1px solid #ccc" },
        }}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
        data={[
          { x: 1, y: 150 },
          { x: 2, y: 165 },
          { x: 3, y: 180 },
          { x: 4, y: 195 },
          { x: 5, y: 205 },
          { x: 6, y: 210 },
          { x: 7, y: 250 },
          { x: 8, y: 265 },
          { x: 9, y: 280 },
          { x: 10, y: 295 },
          { x: 11, y: 305 },
          { x: 12, y: 310 },
        ]}
      />
      <VictoryLine
        interpolation="natural"
        style={{
          data: { stroke: "#056064" },
          parent: { border: "1px solid #ccc" },
        }}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
        data={[
          { x: 1, y: 95 },
          { x: 2, y: 105 },
          { x: 3, y: 110 },
          { x: 4, y: 110 },
          { x: 5, y: 115 },
          { x: 6, y: 125 },
        ]}
      />
    </VictoryChart>
  );
};

"use client";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { tokenomicsData } from './data'

const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, fill,
}: any) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 10;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const translucentFill = hexToRgba(fill, 0.1);

  const labelWidth = 70;
  const labelHeight = 32;

  return (
    <g>
      <foreignObject
        x={x - labelWidth / 2}
        y={y - labelHeight / 2}
        width={labelWidth}
        height={labelHeight}
        style={{ overflow: 'visible' }}
      >
        <div
          style={{
            background: translucentFill,
            color: '#fff',
            fontSize: "14px",
            padding: "6px 12px",
            borderRadius: "6px",
            textAlign: "center",
            whiteSpace: "nowrap",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
            border: `1px solid ${fill}`,
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            fontWeight: 'bold',
          }}
        >
          {(percent * 100).toFixed(1)}%
        </div>
      </foreignObject>
    </g>
  );
};

const CustomPieChart = () => {
  return (
    <div className="w-full h-96 rounded-lg p-6">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={tokenomicsData}
            dataKey="value"
            nameKey="name"
            outerRadius="80%"
            label={renderCustomizedLabel}
            labelLine={false}
            stroke="#000"
            strokeWidth={1}
          >
            {tokenomicsData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
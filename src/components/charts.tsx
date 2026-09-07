
//4
"use client";

import {
  ResponsiveContainer,
  BarChart as RBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { NamedValue } from "@/types";

const COLORS = [
  "#0f3d37",
  "#167f5c",
  "#2ba745",
  "#c49a2c",
  "#7fb69a",
  "#a8c9ba",
  "#e0c46a",
];

const tooltipStyle = {
  direction: "rtl" as const,
  fontFamily: "inherit",
  borderRadius: 10,
  border: "1px solid var(--color-border)",
  boxShadow: "var(--shadow-md)",
};

const numberFormat = (v: number) => v.toLocaleString("en-US");

export function CategoryHorizontalBarChart({
  data,
  valueLabel = "العدد",
}: {
  data: NamedValue[];
  valueLabel?: string;
}) {
  const max = Math.max(...data.map((d) => d.value), 1);

  return (
    <div
      className="space-y-5"
      role="img"
      aria-label={`رسم بياني: ${valueLabel} حسب الفئة`}
    >
      {data.map((d, i) => (
        <div
          key={d.name}
          className="group relative rounded-lg p-2 transition-all duration-200 hover:bg-offwhite/70"
        >
    
          <div className="mb-1.5 flex items-start justify-between gap-3">
            <span className="body-sm min-w-0 break-words leading-snug text-text transition-colors duration-200 group-hover:text-primary">
              {d.name}
            </span>

            <span
              className="shrink-0 whitespace-nowrap text-sm font-bold text-primary transition-transform duration-200 group-hover:scale-105"
              dir="ltr"
            >
              {numberFormat(d.value)}
            </span>
          </div>

          {/* الشريط */}
          <div
            className="h-2.5 w-full overflow-hidden rounded-full bg-offwhite"
            role="presentation"
          >
            <div
              className="h-full rounded-full transition-all duration-700 ease-out group-hover:brightness-110"
              style={{
                width: `${Math.max((d.value / max) * 100, 3)}%`,
                backgroundColor: COLORS[i % COLORS.length],
              }}
            />
          </div>

          {/* Hover Tooltip */}
          <div
            className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2
                       -translate-x-1/2 translate-y-1 opacity-0
                       whitespace-nowrap rounded-lg bg-primary px-3 py-2
                       text-xs font-medium text-white shadow-lg
                       transition-all duration-200
                       group-hover:translate-y-0 group-hover:opacity-100"
          >
            <span>{d.name}</span>
            <span className="mx-1">:</span>
            <span dir="ltr">{numberFormat(d.value)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * رسم عمودي للمقارنة بين عدة فئات.
 * يحتوي على Tooltip وHover.
 */
export function CategoryBarChart({
  data,
  valueLabel = "العدد",
}: {
  data: NamedValue[];
  valueLabel?: string;
}) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <RBarChart
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 10,
          bottom: 0,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="var(--color-border)"
        />

        <XAxis
          dataKey="name"
          tick={{
            fontSize: 11,
            fill: "var(--color-muted)",
          }}
          axisLine={false}
          tickLine={false}
          interval={0}
          angle={-15}
          textAnchor="end"
          height={60}
        />

        <YAxis
          tick={{
            fontSize: 12,
            fill: "var(--color-muted)",
          }}
          axisLine={false}
          tickLine={false}
          tickFormatter={numberFormat}
        />

        <Tooltip
          contentStyle={tooltipStyle}
          formatter={(v: number) => [
            numberFormat(v),
            valueLabel,
          ]}
          cursor={{
            fill: "var(--color-border)",
            opacity: 0.25,
          }}
        />

        <Bar
          dataKey="value"
          radius={[8, 8, 0, 0]}
          fill="var(--color-primary-light)"
          maxBarSize={48}
          activeBar={{
            fill: "var(--color-primary)",
          }}
        />
      </RBarChart>
    </ResponsiveContainer>
  );
}

/**
 * Donut + Legend
 *
 * Responsive:
 * الجوال: الدونات فوق والبيانات تحت.
 * الشاشات الأكبر: الدونات والبيانات بجانب بعض.
 */
export function CountDonutChart({
  data,
  centerLabel = "الإجمالي",
}: {
  data: NamedValue[];
  centerLabel?: string;
}) {
  const total = data.reduce((s, d) => s + d.value, 0);

  return (
    <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-center">
      {/* Donut */}
      <div className="relative aspect-square w-full max-w-[240px] shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={62}
              outerRadius={90}
              paddingAngle={3}
              strokeWidth={0}
              activeShape={{
                filter: "url(#shadow)",
              }}
            >
              {data.map((_, i) => (
                <Cell
                  key={i}
                  fill={COLORS[i % COLORS.length]}
                  className="cursor-pointer transition-opacity duration-200 hover:opacity-80"
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(v: number, n: string) => [
                numberFormat(v),
                n,
              ]}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* إجمالي الدونات */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
          <span
            className="whitespace-nowrap text-2xl font-bold text-primary"
            dir="ltr"
          >
            {numberFormat(total)}
          </span>

          <span className="caption whitespace-nowrap">
            {centerLabel}
          </span>
        </div>
      </div>

      {/* Legend */}
      <ul className="flex w-full flex-col gap-2.5 sm:max-w-xs">
        {data.map((d, i) => (
          <li
            key={d.name}
            className="group flex items-start justify-between gap-3
                       rounded-md bg-offwhite/60 px-3 py-2
                       transition-all duration-200
                       hover:-translate-y-0.5
                       hover:bg-offwhite
                       hover:shadow-md"
          >
            <span className="flex min-w-0 items-start gap-2">
              {/* نقطة اللون */}
              <span
                className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full
                           transition-transform duration-200
                           group-hover:scale-125"
                style={{
                  backgroundColor: COLORS[i % COLORS.length],
                }}
                aria-hidden="true"
              />

              {/* الاسم */}
              <span
                className="body-sm min-w-0 break-words leading-snug
                           text-text transition-colors duration-200
                           group-hover:text-primary"
              >
                {d.name}
              </span>
            </span>

            {/* الرقم */}
            <span
              className="shrink-0 whitespace-nowrap text-sm font-bold
                         text-primary transition-transform duration-200
                         group-hover:scale-105"
              dir="ltr"
            >
              {numberFormat(d.value)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
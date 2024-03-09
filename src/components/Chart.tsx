import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { BarPlot } from "@mui/x-charts/BarChart";
import { LinePlot, MarkPlot } from "@mui/x-charts/LineChart";
import { ResponsiveChartContainer } from "@mui/x-charts/ResponsiveChartContainer";
import { AllSeriesType } from "@mui/x-charts/models";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { ChartsAxisHighlight } from "@mui/x-charts/ChartsAxisHighlight";
import { ChartsTooltip } from "@mui/x-charts/ChartsTooltip";

type Props = { revenueTable: any[]; handleDur?: (v: string) => void };

export default function Chart({ revenueTable, handleDur }: Props) {
  const [duration, setDuration] = useState("5");
  console.log(revenueTable);
  const series = [
    {
      type: "bar",
      yAxisKey: "revenue",
      dataKey: "revenue",
      label: "单月营收",
    },
    {
      type: "line",
      yAxisKey: "rate",
      color: "red",
      dataKey: "growRate",
      label: "单月营收年增长率",
    },
  ] as AllSeriesType[];

  const handleChange = (event: SelectChangeEvent) => {
    const dur = event.target.value as string;
    setDuration(dur);
    handleDur?.(dur);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box display="flex" justifyContent={"space-between"}>
        <Button variant="contained">每月营收</Button>
        <Select size="small" value={duration} onChange={handleChange}>
          <MenuItem value={3}>近三年</MenuItem>
          <MenuItem value={5}>近五年</MenuItem>
          <MenuItem value={8}>近八年</MenuItem>
        </Select>
      </Box>
      <Box sx={{ pt: 2 }} />
      <Box>
        <ResponsiveChartContainer
          dataset={revenueTable}
          series={series}
          width={500}
          height={400}
          xAxis={[
            {
              id: "years",
              dataKey: "yearMonth",
              scaleType: "band",
              valueFormatter: (value) => value.toString(),
            },
          ]}
          yAxis={[
            {
              id: "revenue",
              scaleType: "linear",
              dataKey: "revenue",
            },
            {
              id: "rate",
              scaleType: "linear",
              dataKey: "rate",
            },
          ]}
        >
          <BarPlot />
          <LinePlot />
          <MarkPlot />
          <ChartsAxisHighlight x="line" />
          <ChartsTooltip trigger="axis" />
          <ChartsXAxis label="Years" position="bottom" axisId="years" />
          <ChartsYAxis
            label="单月营收(千元)"
            position="left"
            axisId="revenue"
          />
          <ChartsYAxis
            label="单月营收年增长率(%)"
            position="right"
            axisId="rate"
          />
        </ResponsiveChartContainer>
      </Box>
    </Box>
  );
}

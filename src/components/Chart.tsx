import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { BarPlot } from "@mui/x-charts/BarChart";
import { LinePlot } from "@mui/x-charts/LineChart";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { AllSeriesType } from "@mui/x-charts/models";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { ChartsAxisHighlight } from "@mui/x-charts/ChartsAxisHighlight";
import { ChartsTooltip } from "@mui/x-charts/ChartsTooltip";

type Props = { series: AllSeriesType[]; handleDur?: (v: string) => void };

export default function Chart({ series, handleDur }: Props) {
  const [duration, setDuration] = useState("5");

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
        <ChartContainer
          series={series}
          width={500}
          height={400}
          xAxis={[
            {
              id: "years",
              data: [2010, 2011, 2012, 2013, 2014],
              scaleType: "band",
              valueFormatter: (value) => value.toString(),
            },
          ]}
          yAxis={[
            {
              id: "eco",
              scaleType: "linear",
            },
            {
              id: "pib",
              scaleType: "log",
            },
          ]}
        >
          <BarPlot />
          <LinePlot />
          <ChartsAxisHighlight x="line" />
          <ChartsTooltip trigger="axis" />
          <ChartsXAxis label="Years" position="bottom" axisId="years" />
          <ChartsYAxis label="Results" position="left" axisId="eco" />
          <ChartsYAxis label="PIB" position="right" axisId="pib" />
        </ChartContainer>
      </Box>
    </Box>
  );
}

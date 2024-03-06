import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { BarPlot } from "@mui/x-charts/BarChart";
import { LinePlot } from "@mui/x-charts/LineChart";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { AllSeriesType } from "@mui/x-charts/models";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";

type Props = { series: AllSeriesType[] };

export default function Chart({ series }: Props) {
  return (
    <Box sx={{ p: 2 }}>
      <Box display="flex" justifyContent={"space-between"}>
        <Button variant="contained">每月营收</Button>
        <Button variant="contained">近五年</Button>
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
          <ChartsXAxis label="Years" position="bottom" axisId="years" />
          <ChartsYAxis label="Results" position="left" axisId="eco" />
          <ChartsYAxis label="PIB" position="right" axisId="pib" />
        </ChartContainer>
      </Box>
    </Box>
  );
}

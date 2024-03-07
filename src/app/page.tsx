"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuList from "@/components/MenuList";
import Title from "@/components/Title";
import Chart from "@/components/Chart";
import TableInfo from "@/components/TableInfo";
import SearchInput from "@/components/SearchInput";
import { AllSeriesType } from "@mui/x-charts/models";

const series = [
  {
    type: "bar",
    stack: "",
    yAxisKey: "eco",
    data: [2, 5, 3, 4, 1],
  },
  {
    type: "bar",
    stack: "",
    yAxisKey: "eco",
    data: [5, 6, 2, 8, 9],
  },
  {
    type: "line",
    yAxisKey: "pib",
    color: "red",
    data: [1000, 1500, 3000, 5000, 10000],
  },
] as AllSeriesType[];

export default function Home() {
  const handleSearch = (value: string) => {
    console.log(value);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="xs">
            <SearchInput onChange={handleSearch} />
          </Container>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Grid container spacing={3} sx={{ p: 2 }}>
          <Grid item xs={4}>
            <MenuList />
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper>
                  <Title value={"三商寿(3867)"} />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <Chart series={series} />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <TableInfo />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

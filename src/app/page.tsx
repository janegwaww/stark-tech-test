"use client";
import { useEffect, useState } from "react";
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
import { getStockInfo, getStockRevenue } from "./api";
import {
  getStockId,
  getStockName,
  addRevenueBefore,
  getYearAgo,
} from "./utils";

const series = [
  {
    type: "bar",
    stack: "",
    yAxisKey: "eco",
    data: [2, 5, 3, 4, 1],
  },
  {
    type: "line",
    yAxisKey: "pib",
    color: "red",
    data: [1000, 1500, 3000, 5000, 10000],
  },
] as AllSeriesType[];

export default function Home() {
  const [stockInfo, setStockInfo] = useState<any[]>([]);
  const [monthRevenue, setMonthRevenue] = useState<any[]>();
  const [stockId, setStockId] = useState("");
  const [stockName, setStockName] = useState("");
  const [startDate, setStartDate] = useState(getYearAgo());

  useEffect(() => {
    getStockInfo({ dataset: "TaiwanStockInfo" }).then((data) => {
      if (data) {
        setStockInfo(data);
        setStockId(getStockId(data));
        setStockName(getStockName(data));
      }
    });
  }, []);

  useEffect(() => {
    if (stockId) {
      queryStockRevenue();
    }
  }, [stockId]);

  useEffect(() => {
    queryStockRevenue();
  }, [startDate]);

  const queryStockRevenue = () => {
    getStockRevenue({
      dataset: "TaiwanStockMonthRevenue",
      start_date: startDate,
      data_id: "1101",
    }).then((data) => {
      setMonthRevenue(data);
    });
  };

  const handleSearch = (value: any) => {
    setStockId(value?.stock_id);
    setStockName(`${value?.stock_name}(${value?.stock_id})`);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="xs">
            <SearchInput options={stockInfo} onChange={handleSearch} />
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
                  <Title value={stockName} />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <Chart
                    series={series}
                    handleDur={(d) => setStartDate(getYearAgo(d))}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <TableInfo revenueTable={addRevenueBefore(monthRevenue)} />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

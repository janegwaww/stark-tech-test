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
import { getStockInfo, getStockRevenue } from "./api";
import {
  getStockId,
  getStockName,
  addRevenueBefore,
  getYearAgo,
  addRateRevenue,
} from "./utils";

export default function Home() {
  const [stockInfo, setStockInfo] = useState<any[]>([]);
  const [monthRevenue, setMonthRevenue] = useState<any[]>([]);
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
    // 选择不同股票或不同周期则重新获取数据
    if (stockId) {
      getStockRevenue({
        dataset: "TaiwanStockMonthRevenue",
        start_date: startDate,
        data_id: stockId,
      }).then((data) => {
        setMonthRevenue(addRevenueBefore(data));
      });
    }
  }, [stockId, startDate]);

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
                  {monthRevenue?.length ? (
                    <Chart
                      revenueTable={addRateRevenue(monthRevenue)}
                      handleDur={(d) => setStartDate(getYearAgo(d))}
                    />
                  ) : null}
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <TableInfo revenueTable={monthRevenue} />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

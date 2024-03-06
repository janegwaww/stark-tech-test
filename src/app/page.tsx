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

export default function Home() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="sm">
            <SearchInput />
          </Container>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <MenuList />
          </Grid>
          <Grid item xs={8}>
            <Title />
            <Paper>
              <Chart />
            </Paper>
            <TableInfo />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

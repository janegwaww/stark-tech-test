"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import MenuList from "@/components/MenuList";
import Title from "@/components/Title";
import Chart from "@/components/Chart";
import TableInfo from "@/components/TableInfo";

export default function Home() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Autocomplete
            options={["The Godfather", "Pulp Fiction"]}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <MenuList />
          </Grid>
          <Grid item xs={8}>
            <Title />
            <Chart />
            <TableInfo />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

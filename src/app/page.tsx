"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function Home() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Menu</Button>
          <Autocomplete
            options={["The Godfather", "Pulp Fiction"]}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
          <Button color="inherit">
            Theme
            <DarkModeIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <div>{/* <Button variant="contained">Hello world</Button> */}hello</div>
      </Container>
    </Box>
  );
}

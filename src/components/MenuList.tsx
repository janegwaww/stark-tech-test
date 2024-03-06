import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Anchor } from "antd";

export default function MenuList() {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Anchor
            items={[
              {
                key: "part-1",
                href: "#part-1",
                title: "Part 1",
              },
              {
                key: "part-2",
                href: "#part-2",
                title: "Part 2",
              },
              {
                key: "part-3",
                href: "#part-3",
                title: "Part 3",
              },
            ]}
          />
        </Grid>
        <Grid item xs={6}>
          <Anchor
            items={[
              {
                key: "part-1",
                href: "#part-1",
                title: "Part 1",
              },
              {
                key: "part-2",
                href: "#part-2",
                title: "Part 2",
              },
              {
                key: "part-3",
                href: "#part-3",
                title: "Part 3",
              },
            ]}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

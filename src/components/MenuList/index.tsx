import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Anchor } from "antd";
import { arr, arr2 } from "./listItems";

const AnchorTitle = ({
  subTitle,
  title,
}: {
  subTitle?: string;
  title: string;
}) => {
  return (
    <Box sx={{ textAlign: subTitle ? "center" : "left", p: subTitle ? 0 : 1 }}>
      <Typography variant="subtitle1">{subTitle}</Typography>
      <Typography variant="body2">{title}</Typography>
    </Box>
  );
};

const transterToAnchor = (arr: Record<string, string>[]) =>
  arr?.length
    ? arr.map((o) => ({
        ...o,
        title: <AnchorTitle subTitle={o.key} title={o.title} />,
      }))
    : [];

const StyleAnchor1 = styled(Anchor)(({ theme, hasLine }) => ({
  ".ant-anchor::before": hasLine ? {} : { height: "0 !important" },
}));

export default function MenuList() {
  return (
    <Box height={"100%"}>
      <Grid container spacing={1} height={"100%"}>
        <Grid item xs={6}>
          <StyleAnchor1
            replace
            items={transterToAnchor(arr2)}
            hasLine={false}
          />
        </Grid>
        <Grid item xs={6}>
          <StyleAnchor1 replace items={transterToAnchor(arr)} hasLine={true} />
        </Grid>
      </Grid>
    </Box>
  );
}

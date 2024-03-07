import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Anchor } from "antd";
import { rightItems, leftItems } from "./listItems";

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
        title: <AnchorTitle subTitle={o.subTitle} title={o.title} />,
      }))
    : [];

const StyleAnchor = styled(Anchor)(({ theme, hasLine }) => ({
  ".ant-anchor::before": hasLine
    ? { height: "100vh !important" }
    : { height: "0 !important" },
}));

export default function MenuList() {
  return (
    <Box height={"100%"}>
      <Grid container spacing={1} height={"100%"}>
        <Grid item xs={6}>
          <StyleAnchor
            replace
            items={transterToAnchor(leftItems)}
            hasLine={false}
            getCurrentAnchor={() => "#C"}
          />
        </Grid>
        <Grid item xs={6}>
          <StyleAnchor
            replace
            items={transterToAnchor(rightItems)}
            hasLine={true}
            getCurrentAnchor={() => "#part-1"}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

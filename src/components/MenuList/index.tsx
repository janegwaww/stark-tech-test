import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Anchor } from "antd";
import { AnchorLinkItemProps } from "antd/es/anchor/Anchor";
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

const StyleAnchorLine = styled(Anchor)(({ theme }) => ({
  ".ant-anchor::before": { height: "100vh !important" },
}));
const StyleAnchorNoLine = styled(Anchor)(() => ({
  ".ant-anchor::before": { height: "0 !important" },
}));

// 页面菜单组件
export default function MenuList() {
  return (
    <Box height={"100%"}>
      <Grid container spacing={1} height={"100%"}>
        <Grid item xs={6}>
          <StyleAnchorNoLine
            replace
            items={transterToAnchor(leftItems) as AnchorLinkItemProps[]}
            getCurrentAnchor={() => "#C"}
          />
        </Grid>
        <Grid item xs={6}>
          <StyleAnchorLine
            replace
            items={transterToAnchor(rightItems) as AnchorLinkItemProps[]}
            getCurrentAnchor={() => "#part-1"}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

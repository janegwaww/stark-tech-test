import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Anchor } from "antd";

const arr = [
  {
    href: "#part-1",
    title: "每月营收",
  },
  {
    href: "#part-2",
    title: "每股营余",
  },
  {
    href: "#part-3",
    title: "每股净值",
  },
  {
    href: "#part-4",
    title: "损益表",
  },
  {
    href: "#part-5",
    title: "总资产",
  },
  {
    href: "#part-6",
    title: "负债和股东权益",
  },
  {
    href: "#part-7",
    title: "现金流量表",
  },
  {
    href: "#part-8",
    title: "股利政策",
  },
  {
    href: "#part-9",
    title: "电子书",
  },
];

const arr2 = [
  {
    key: "B",
    href: "#B",
    title: "最新动态",
  },
  {
    key: "F",
    href: "#F",
    title: "股票健诊",
  },
  {
    key: "C",
    href: "#C",
    title: "财务报表",
  },
  {
    key: "D",
    href: "#D",
    title: "获利能力",
  },
  {
    key: "E",
    href: "#E",
    title: "安全性分析",
  },
  {
    key: "Q",
    href: "#Q",
    title: "成长力分析",
  },
  {
    key: "J",
    href: "#J",
    title: "价值评估",
  },
  {
    key: "G",
    href: "#G",
    title: "董监与筹码",
  },
  {
    key: "H",
    href: "#H",
    title: "关键指标",
  },
  {
    key: "I",
    href: "#I",
    title: "产品组合",
  },
];

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

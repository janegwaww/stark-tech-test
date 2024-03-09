import { Box, Paper, TableContainer, styled } from "@mui/material";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { toYearMonth, toMonthRevenue, toRevenueRate } from "../app/utils";

const StyleTableCell = styled(TableCell)(({ theme }) => ({
  borderRightWidth: 1,
  borderRightColor: theme.palette.grey[300],
  borderRightStyle: "solid",
}));

type Props = { revenueTable?: any[] };

// 页面表格组件
export default function ({ revenueTable }: Props) {
  return (
    <Box>
      <Box sx={{ p: 2 }}>
        <Button variant="contained">详细数据</Button>
      </Box>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 8000 }} aria-label="revenue table">
            <TableBody>
              <TableRow sx={{ backgroundColor: "azure" }}>
                <StyleTableCell>
                  <span style={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
                    年度月份
                  </span>
                </StyleTableCell>
                {revenueTable?.map((o) => (
                  <StyleTableCell>{toYearMonth(o)}</StyleTableCell>
                ))}
              </TableRow>
              <TableRow>
                <StyleTableCell>
                  <span style={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
                    每月营收
                  </span>
                </StyleTableCell>
                {revenueTable?.map((o) => (
                  <StyleTableCell>{toMonthRevenue(o)}</StyleTableCell>
                ))}
              </TableRow>
              <TableRow sx={{ backgroundColor: "azure" }}>
                <StyleTableCell>
                  <span style={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
                    单月营收年增率(%)
                  </span>
                </StyleTableCell>
                {revenueTable?.map((o) => (
                  <StyleTableCell>{toRevenueRate(o)}</StyleTableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

import { Box, Paper, TableContainer, styled } from "@mui/material";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const StyleTableCell = styled(TableCell)(({ theme }) => ({
  borderRightWidth: 1,
  borderRightColor: theme.palette.grey[300],
  borderRightStyle: "solid",
}));

type Props = { revenueTable?: any[] };

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
                  <span style={{ fontWeight: "bold" }}>年度月份</span>
                </StyleTableCell>
                {revenueTable?.map((o) => (
                  <StyleTableCell>{`${o.revenue_year}${
                    o.revenue_month <= 9
                      ? "0" + o.revenue_month
                      : o.revenue_month
                  }`}</StyleTableCell>
                ))}
              </TableRow>
              <TableRow>
                <StyleTableCell>
                  <span style={{ fontWeight: "bold" }}>每月营收</span>
                </StyleTableCell>
                {revenueTable?.map((o) => (
                  <StyleTableCell>{`${o.revenue
                    .toFixed(1)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`}</StyleTableCell>
                ))}
              </TableRow>
              <TableRow sx={{ backgroundColor: "azure" }}>
                <StyleTableCell>
                  <span style={{ fontWeight: "bold" }}>单月营收年增率(%)</span>
                </StyleTableCell>
                {revenueTable?.map((o) => (
                  <StyleTableCell>{`${o.revenue_year}${o.revenue_month}`}</StyleTableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

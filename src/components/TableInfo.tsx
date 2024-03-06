import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export default function () {
  return (
    <Box sx={{ pb: 2 }}>
      <Box sx={{ p: 2 }}>
        <Button variant="contained">每月营收</Button>
      </Box>
      <Box>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>table</TableCell>
              <TableCell>table</TableCell>
              <TableCell>table</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>table</TableCell>
              <TableCell>table</TableCell>
              <TableCell>table</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>table</TableCell>
              <TableCell>table</TableCell>
              <TableCell>table</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}

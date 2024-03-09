import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type Props = { value: string };

export default function Title({ value }: Props) {
  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h6">{value}</Typography>
    </Box>
  );
}

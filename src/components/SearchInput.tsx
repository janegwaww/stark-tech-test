import { styled, alpha } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "auto",
  display: "flex",
  paddingLeft: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

const StyleSearchIcon = styled(SearchIcon)(({ theme }) => ({
  height: "100%",
  margin: "auto",
  padding: theme.spacing(1),
  width: 36,
}));

const StyleAutocomplete = styled(Autocomplete)(({ theme }) => ({
  padding: theme.spacing(1, 1, 1, 0),
  width: "100%",
}));

type Props = { options: any[]; onChange?: (v: string) => void };

export default function SearchInput({ options, onChange }: Props) {
  return (
    <Search>
      <StyleAutocomplete
        size="small"
        freeSolo
        options={options}
        onChange={(e, v) => onChange?.(v as string)}
        getOptionLabel={(opt: any) =>
          opt?.stock_name ? `${opt.stock_name}(${opt.stock_id})` : ""
        }
        getOptionKey={(opt: any) => (opt?.stock_id ? `${opt.stock_id}` : "")}
        renderInput={(params) => {
          const { InputLabelProps, InputProps, ...rest } = params;
          return (
            <InputBase
              {...params.InputProps}
              {...rest}
              placeholder="输入台/美股代号，查看公司价值"
            />
          );
        }}
      />
      <StyleSearchIcon />
    </Search>
  );
}

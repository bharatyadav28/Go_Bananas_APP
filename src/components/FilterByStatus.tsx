import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface propstypes {
  completed: string;
  onStatusChange: (val: string) => void;
}
export default function FilterByStatus({
  completed,
  onStatusChange,
}: propstypes) {
  const handleChange = (event: SelectChangeEvent) => {
    onStatusChange(event.target.value as string);
  };

  return (
    <Box className="w-32">
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Completed</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={completed}
          label="Completed"
          onChange={handleChange}
        >
          <MenuItem value={"true"}>True</MenuItem>
          <MenuItem value={"false"}>False</MenuItem>
          <MenuItem value={"all"}>Both</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

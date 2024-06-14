import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectAutoWidthProps {
}

export const SelectAutoWidth: React.FC= () => {
  const [category, setCategory] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={category}
          onChange={handleChange}
          autoWidth
          label="Category"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>VP Office</MenuItem>
          <MenuItem value={21}>ICT</MenuItem>
          <MenuItem value={22}>FST</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectAutoWidth;

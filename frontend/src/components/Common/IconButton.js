import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';

export default function IconButtons() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="delete" color="danger">
      <DeleteIcon />
      </IconButton>
      <IconButton aria-label="update" disabled color="success">
        <UpdateIcon />
      </IconButton>
    </Stack>
  );
}

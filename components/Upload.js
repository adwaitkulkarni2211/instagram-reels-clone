import React from "react";
import Button from "@mui/material/Button";
import MovieIcon from "@mui/icons-material/Movie";
import LinearProgress from '@mui/material/LinearProgress';

function Upload() {
  return (
    <div className="upload-btn">
      <Button
        fullWidth
        variant="outlined"
        component="label"
        style={{ marginTop: "1rem" }}
        startIcon={<MovieIcon />}
      >
        <input type="file" accept="image/*" style={{ display: "none" }} />
        Upload
      </Button>
      <LinearProgress variant="determinate" value={40} style={{marginTop: '0.2rem'}} />
    </div>
  );
}

export default Upload;

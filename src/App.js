import logo from "./logo.png";
import SooniumLeft from "./SooniumLeft.png";
import SooniumRight from "./SooniumRight.png";
import React, { useState, useEffect } from "react";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";

//get the pengu photo from the url

function App() {
  const [PenguInput, setPenguInput] = useState("6632");
  const [SooniumPenguImage, setSooniumPengImage] = useState("");
  const [SooniumPenguin, setSooniumPenguin] = useState("6632");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    fetch(
      `https://ipfs.io/ipfs/bafybeifdlrwuxlfqjnbmtpp7x4apsphxttkwl46mqqqjthaeykwhk3y5yq/SooniumPenguins/${SooniumPenguin}.png`
    )
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setSooniumPengImage(url);
        setLoading(true);
      });
  }, [SooniumPenguin]);

  return (
    <div className="App">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Typography
          sx={{ fontsize: 32, letterSpacing: 4, m: 3, fontFamily: "Impact" }}
          component="div"
        >
          SOONIUM BAR
        </Typography>
        <Grid item>
          <img width="100" src={logo} className="App-logo" alt="logo" />
        </Grid>
      </Grid>
      <Box>
        <header className="App-header"></header>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Grid item xs={3}>
            <img
              width="100%"
              src={SooniumLeft}
              className="App-logo"
              alt="logo"
            />
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ mb: 4, borderRadius: 16 }}>
              {loading ? (
                <Box>
                  <img
                    width="100%"
                    src={SooniumPenguImage}
                    className="App-logo"
                    alt="logo"
                  />
                </Box>
              ) : (
                <Box>
                  <Skeleton variant="rectangular" height={400} width="100%" />
                </Box>
              )}
            </Box>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
            >
              <Grid item xs={12}>
                <Box>
                  <TextField
                    id="outlined-basic"
                    label="Enter Pengu ID"
                    color="success"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => {
                      e.preventDefault();
                      setPenguInput(e.target.value);
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  display="flex"
                  height="100%"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => setSooniumPenguin(PenguInput)}
                  >
                    Soonify
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <img
              width="100%"
              src={SooniumRight}
              className="App-logo"
              alt="logo"
            />
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;

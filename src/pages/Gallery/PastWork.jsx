import { Box, Grid, Typography, Collapse, Button } from "@mui/material";
import React, { useState } from "react";
import PW1 from "../../assets/PW1.png";
import PW2 from "../../assets/PW2.png";
import PW3 from "../../assets/PW3.png";
import PW4 from "../../assets/PW4.png";
import PW5 from "../../assets/PW5.png";
import PW6 from "../../assets/PW6.png";
import PW7 from "../../assets/PW7.png";
import PW8 from "../../assets/PW8.png";
import PW9 from "../../assets/PW9.png";
import PW10 from "../../assets/PW10.png";
import PW11 from "../../assets/PW11.png";
import PW12 from "../../assets/PW12.png";
import PW13 from "../../assets/PW13.png";
import PW14 from "../../assets/PW14.png";
import PW15 from "../../assets/PW15.png";

const ShowMoreContent = (
  <Grid container spacing={1} maxWidth={1150}>
    <Grid item xs={12} display={"flex"} justifyContent={"center"}>
      <img src={PW9} />
    </Grid>
    <Grid item xs={7} display={"flex"} justifyContent={"center"}>
      <img src={PW10} />
    </Grid>
    <Grid item xs={5} display={"flex"} justifyContent={"center"}>
      <img src={PW11} />
    </Grid>
    <Grid item xs={12} display={"flex"} justifyContent={"center"}>
      <img src={PW12} />
    </Grid>
    <Grid item xs={3} display={"flex"} justifyContent={"center"}>
      <img src={PW13} />
    </Grid>
    <Grid item xs={4.5} display={"flex"} justifyContent={"center"}>
      <img src={PW14} />
    </Grid>
    <Grid item xs={4.5} display={"flex"} justifyContent={"center"}>
      <img src={PW15} />
    </Grid>
    <Grid item xs={4} display={"flex"} justifyContent={"center"}>
      <img src={PW1} />
    </Grid>
    <Grid item xs={8} display={"flex"} justifyContent={"center"}>
      <img src={PW2} />
    </Grid>
    <Grid item xs={7} display={"flex"} justifyContent={"center"}>
      <img src={PW3} />
    </Grid>
    <Grid item xs={5} display={"flex"} justifyContent={"center"}>
      <img src={PW4} />
    </Grid>
  </Grid>
);

const PastWork = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box
        bgcolor={"#ffff"}
        maxWidth={1200}
        sx={{
          p: {
            xs: 1,
            md: 2,
          },
        }}
        borderRadius={1}
      >
        <Box display={"flex"} justifyContent={"center"}>
          <Grid container spacing={1} maxWidth={1150}>
            <Grid item xs={12} display={"flex"} justifyContent={"center"}>
              <img src={PW5} />
            </Grid>
            <Grid item xs={4} display={"flex"} justifyContent={"center"}>
              <img src={PW6} />
            </Grid>
            <Grid item xs={4} display={"flex"} justifyContent={"center"}>
              <img src={PW7} />
            </Grid>
            <Grid item xs={4} display={"flex"} justifyContent={"center"}>
              <img src={PW8} />
            </Grid>
          </Grid>
        </Box>

        <Box display={"flex"} justifyContent={"center"} mt={1}>
          <Collapse in={checked}>{ShowMoreContent}</Collapse>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"end"}
          sx={{
            mt: {
              xs: 0,
              md: 2,
            },
          }}
        >
          <Button onClick={handleChange}>
            <Typography textAlign={"right"}>
              {checked ? "Show less..." : "Show more..."}
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PastWork;

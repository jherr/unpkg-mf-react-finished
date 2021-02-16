import React from "react";
import { Grid, Button } from "@chakra-ui/react";

export default () => (
  <Grid
    templateColumns="1fr 10fr 1fr"
    p={5}
    style={{
      border: "5px dashed red",
    }}
  >
    <Button>Left</Button>
    <div>Slider (1.0.1)</div>
    <Button>Right</Button>
  </Grid>
);

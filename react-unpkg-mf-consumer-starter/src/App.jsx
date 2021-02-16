import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, Heading } from "@chakra-ui/react";

import Slider from "jherr-mf-slider/slider";

import "./index.css";

const App = () => (
  <ChakraProvider>
    <Heading>Starter Host</Heading>
    <Slider />
  </ChakraProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));

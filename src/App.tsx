import React, { Component } from "react";
import "./App.css";
import SampleForm from "./components/SampleForm";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./Theme/Theme";
import CssBaseline from "@material-ui/core/CssBaseline";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <SampleForm />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

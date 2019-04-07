import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

//import CssBaseline from "@material-ui/core/CssBaseline";

import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";
import amber from "@material-ui/core/colors/amber";
import pink from "@material-ui/core/colors/pink";
import teal from "@material-ui/core/colors/teal";
import blueGrey from "@material-ui/core/colors/blueGrey";
import brown from "@material-ui/core/colors/brown";
import common from "@material-ui/core/colors/common";
import cyan from "@material-ui/core/colors/cyan";
import deepOrange from "@material-ui/core/colors/deepOrange";
import deepPurple from "@material-ui/core/colors/deepPurple";
import grey from "@material-ui/core/colors/grey";
import indigo from "@material-ui/core/colors/indigo";
import lime from "@material-ui/core/colors/lime";
import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontSize: 12
    // Tell Material-UI what's the font-size on the html element is.
    //htmlFontSize: 20
  },
  palette: {
    primary: blue,
    secondary: amber,
    error: red,
    type: "light", //"dark"
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    //contrastThreshold: 10,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.5
  },
  overrides: {
    MuiChip: {
      root: {
        //backgroundColor: "#3e91",
        backgroundColor: "transparent",
        border: "1.5px solid #2196f3",
        display: "inline-flex",
        transition:
          "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
      }
    },
    MuiFormLabel: {
      root: {}
    },

    MuiInput: {
      root: {},
      underline: {
        //background: "green",
        //maxWidth: "30%",
        minWidth: "100px",
        width: "fit-content"
        //marginRight: 50
      },
      formControl: {}
    },
    MuiButton: {
      // root: { background: "green", margin: "100px", padding: "10px" }
    },
    MuiIconButton: {
      //root: { background: "green", margin: "100px", padding: "10px" }
    }
  }
});

export default theme;

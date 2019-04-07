//import bg from "../images/bk3.png";
// https://www.shutterstock.com/image-photo/business-team-corporate-marketing-working-concept-335442827
//https://www.shutterstock.com/image-photo/double-exposure-image-businessman-standing-back-1100295089
import { Theme } from "@material-ui/core";
//import { emphasize } from "@material-ui/core/styles/colorManipulator";

const mainStyles = (theme: Theme): any => ({
  "@global": {
    body: {
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      height: "100%",
      margin: 20
    },
    html: {
      height: "100%"
    },
    "#componentWithId": {
      height: "100%"
    }
  },
  form: {},
  root: {
    margin: theme.spacing.unit,
    width: "100%",
    height: "100%"
    // opacity: 0.7
  },
  chip: {
    margin: theme.spacing.unit
  },
  chipFocused: {},
  button: {
    margin: theme.spacing.unit
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  input: {
    display: "flex",
    padding: 0
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  singleValue: {
    fontSize: 16
  },
  placeholder: {
    position: "absolute",
    left: 2,
    fontSize: 16
  },
  divider: {
    height: theme.spacing.unit * 2
  },
  listItem: { height: 30 },
  listOperation: {}
});

export default mainStyles;

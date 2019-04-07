import { RouteComponentProps } from "react-router";
import { WithStyles } from "@material-ui/core";
import mainStyles from "./Theme/MainStyles";

export interface IProps extends WithStyles<typeof mainStyles> {}

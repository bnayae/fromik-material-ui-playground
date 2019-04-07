import IFormState from "./IFormState";
import Geo from "./Geo";
import IGeo from "./IGeo";

class FormState implements IFormState {
  objectives: string = "";
  geo: IGeo = new Geo();
}

export default FormState;

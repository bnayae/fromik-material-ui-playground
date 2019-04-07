// Samples: https://jaredpalmer.com/formik/docs/api/field
// custom field: https://github.com/stackworx/formik-material-ui
// field array: https://jaredpalmer.com/formik/docs/api/fieldarray

import React, { SyntheticEvent } from "react";
import {
  Formik,
  Form,
  Field,
  FormikActions,
  FormikProps,
  FieldProps,
  FieldArray
} from "formik";
import {
  WithStyles,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  Typography,
  Chip,
  Grid,
  Switch,
  Fab,
  IconButton,
  Divider,
  withStyles
} from "@material-ui/core";
import {
  Autocomplete,
  TextField,
  Select,
  RadioGroup
  //Switch
} from "material-ui-formik-components";
import {
  fieldToTextField,
  //TextField,
  TextFieldProps
} from "formik-material-ui";
import MuiTextField from "@material-ui/core/TextField";

// services
import getCountries from "../Services/CountriesService";

// state & schema
import schema from "./Schema";
import IFormState from "./state/IFormState";
import FormState from "./state/FormState";
import { IProps } from "../IProps";

// style
import mainStyles from "../Theme/MainStyles";
import { async } from "q";
import AddIcon from "@material-ui/icons/AddCircleOutline";
import RemoveIcon from "@material-ui/icons/Clear";

const initialValues: IFormState = new FormState();

const handleSubmit = /*async*/ (
  values: IFormState, // values parameters
  actions: FormikActions<IFormState> // actions
) => {
  // Handle submit action
  //await timeout(1000);
  console.log({ values, actions });
  actions.setSubmitting(false);
};

const SampleForm: React.FunctionComponent<IProps> = props => {
  const { classes } = props;
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        validateOnBlur={false}
        validateOnChange
        onSubmit={handleSubmit}
      >
        {(props: FormikProps<IFormState>) => {
          const {
            values,
            touched,
            errors,
            dirty,
            status,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          } = props;

          return (
            <>
              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="baseline"
              >
                <Grid item xs={2} />
                <Grid item xs={8}>
                  <Form noValidate autoComplete="off" className={classes.form}>
                    <Typography variant="h4">Sample</Typography>
                    <Grid item>
                      <Field
                        //required
                        name="objectives"
                        render={(ps: any) => (
                          <MuiTextField
                            {...fieldToTextField(ps)}
                            label="Project Objectives"
                          />
                        )}
                      />
                    </Grid>

                    <Field
                      name="geo.global"
                      render={(ps: any) => {
                        const { field, form } = ps;
                        const { name, value } = field;
                        const {
                          dirty,
                          errors,
                          initialValues,
                          isValid,
                          setFieldValue,
                          values: IFormState
                        } = form;
                        return (
                          <div>
                            <FormControlLabel
                              label="Global"
                              control={
                                <Switch
                                  {...field}
                                  checked={value}
                                  onChange={(
                                    event: React.ChangeEvent<SyntheticEvent>,
                                    chk: boolean
                                  ) => {
                                    console.log(values, chk);
                                    setFieldValue(name, chk);
                                    // if (chk && values.scope.geo.items.length != 0)
                                    //   setFieldValue("scope.geo.items", []);
                                  }}
                                />
                              }
                            />
                            {touched[name] && errors[name] && (
                              <div className="error">{errors[name]}</div>
                            )}
                          </div>
                        );
                      }}
                    />
                    <Field
                      style={{ zIndex: "1001" }}
                      //required
                      name="geo.items"
                      label="Geography"
                      options={getCountries()}
                      component={Autocomplete}
                      isMultiple
                    />

                    <Button
                      variant="outlined"
                      disabled={!props.dirty || props.isSubmitting}
                      color="primary"
                      type="submit"
                    >
                      Next
                    </Button>
                  </Form>
                </Grid>
                <Grid item xs={2} />
              </Grid>
              <div>{status}</div>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default withStyles(mainStyles)(SampleForm);

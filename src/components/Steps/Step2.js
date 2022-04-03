import {
  FormControlLabel,
  Input,
  Typography,
  Checkbox,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useData } from "../DataContext";
import { Form } from "../Form";
import { MainContainer } from "../MainContainer";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const useStyles = makeStyles((theme) => ({
  input: {
    width: "100%",
    height: "30px",
    outline: "1px solid black",
    borderRadius: "5px",
    paddingLeft: "5px",
  },
}));

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should have a correct format")
    .required("Email is a required field"),
});

export const Step2 = () => {
  const { data, setValues } = useData();
  const navigate = useNavigate();
  const styles = useStyles();
  const { register, watch, handleSubmit, errors } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNum: data.phoneNum,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const hasPhone = watch("hasPhone");

  const onSubmit = (data) => {
    navigate("/step3", { replace: true });
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography>Step 2</Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email", { required: true })}
          type="email"
          label="email"
          name="email"
          className={styles.input}
          /* error={!!errors.email} */
          helperText={errors?.email?.message}
        />
        <FormControlLabel
          control={
            <Checkbox
              {...register("hasPhone", { required: true })}
              defaultValue={data.hasPhone}
              defaultChecked={data.hasPhone}
              color="primary"
              name="hasPhone"
            />
          }
          label="Please check if you have a Phone #"
        />
        {hasPhone && (
          <Input
            {...register("phoneNum", { required: true })}
            type="tel"
            id="phoneNum"
            label="phoneNum"
            name="phoneNum"
            className={styles.input}
          />
        )}
      </Form>
    </MainContainer>
  );
};

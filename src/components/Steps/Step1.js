import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { MainContainer } from "../MainContainer";
import { Form } from "../Form";
import { Input } from "../Input";
import { useData } from "../DataContext";
import { PrimaryButton } from "../PrimaryButton";
import { Typography } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers!")
    .required("First name is a required field"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers!")
    .required("Last name is a required field"),
});

export const Step1 = () => {
  const { setValues, data } = useData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate("/step2", {replace: true});
    setValues(data)
  };

  return (
    <MainContainer>
      <Typography variant="h5">Step 1</Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("firstName", { required: true })}
          name="firstName"
          type="text"
          label="First Name"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          {...register("lastName", { required: true })}
          name="lastName"
          type="text"
          label="Last Name"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <PrimaryButton type="submit">Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

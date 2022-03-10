import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { MainContainer } from "../MainContainer";
import { Form } from "../Form";
import { Input } from "../Input";
import { PrimaryButton } from "../PrimaryButton";
import { Typography } from "@material-ui/core";

export const Step1 = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useNavigate();

  const onSubmit = (data) => {
    history.push("/step2");
  };

  return (
    <MainContainer>
      <Typography component="h5" >Step 1</Typography>
      <Form>
        <Input
          /* ref={register} */ name="firstName"
          type="text"
          label="First Name"
        />
        <Input
          /* ref={register}  */ name="lastName"
          type="text"
          label="Last Name"
        />
        <PrimaryButton type="submit">Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

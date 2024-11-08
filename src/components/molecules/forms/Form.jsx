import React from "react";
import InputField from "../../atoms/Inputs/InputField";
import CustomButton from "../../atoms/button/CustomButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, registerSchema } from "../../organisms/formSchema";

const Form = ({ name, onSubmit, schemaName, className }) => {
  const schema = schemaName === "login" ? loginSchema : registerSchema;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: { username: "", password: "" },
    resolver: yupResolver(schema),
    mode: "all",
  });
  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputField
          placeholder="username"
          type="text"
          {...register("username")}
        />
        {errors.username && <p>{errors.username.message}</p>}

        <InputField
          maxLength={15}
          placeholder="password"
          type="password"
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <CustomButton
          colorScheme="black"
          name={name}
          type="submit"
          size="md"
          onClick={() => console.log("Submitted")}
          className={className}
          disabled={!isValid}
        />
      </form>
    </div>
  );
};

export default Form;

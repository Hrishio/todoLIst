import React, { useState } from "react";
import CustomButton from "../atoms/button/CustomButton";
import InputField from "../atoms/Inputs/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {todoSchema} from "../organisms/formSchema";
import useTodoStore from "../../utils/store";

const TodoForm = () => {
  const schema = todoSchema
  const {
    register,
    handleSubmit,
    setValue,
    trigger, 
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { title: "", description: "" },
    resolver: yupResolver(todoSchema),
    mode: "all",
  });

  const [description, setDescription] = useState("");

  const addTodo = useTodoStore((state) => state.addTodo);

  const handleInput = (data) => {
    addTodo(data);
    reset();
    setDescription("");
  };

  return (
    <>
      <h1 className='heading'>ToDO List</h1>
      <form onSubmit={handleSubmit(handleInput)} className="form-container">
        <InputField
        maxLength={8}
          type="text"
          placeholder="Title"
          {...register("title")}
        />
        {errors.title && <p className="error">{errors.title.message}</p>}

        <InputField
        maxLength={20}
          placeholder="Description"
          {...register("description")}
        />
        {errors.description && <p className="error">{errors.description.message}</p>}

        <CustomButton
          onClick={handleSubmit(handleInput)}
          colorScheme={"teal"}
          name="Add Todo"
          type="submit"
        />
      </form>
    </>
  );
};

export default TodoForm;

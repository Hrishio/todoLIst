import React, { forwardRef } from "react";
import { Input } from "@chakra-ui/react";

const InputField = forwardRef(({ placeholder, ...props }, ref) => {
  return (
    <Input type={props.type} placeholder={placeholder} ref={ref} {...props} className="input"  maxLength={props.maxLength}/>
  );
});

export default InputField;

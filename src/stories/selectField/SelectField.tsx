import {
  CircularProgress,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { memo, useEffect, useState } from "react";
import "./SelectField.css";
import type { SelectFieldProps } from "./types";

const SelectField: React.FC<SelectFieldProps> = ({
  fieldName,
  fieldValue,
  label,
  isValid,
  errorText,
  onChange,
  isLoading = false,
  options,
  disabled = false,
  variant = "outlined",
  required = "required",
}) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(fieldValue);
  }, [fieldValue]);

  return (
    <div className="container">
      <FormControl
        disabled={disabled}
        variant={variant}
        required={required === "required"}
        className="selectField"
        size="small"
      >
        <InputLabel id={fieldName} error={isValid}>
          {required === "suggested" ? label + " **" : label}
        </InputLabel>
        <Select
          labelId={`${fieldName}-label`}
          id={fieldName}
          name={fieldName}
          value={value}
          onChange={(e) => {
            setValue(e.target.value as string);
            if (onChange !== undefined) onChange(e.target.value as string);
          }}
          label={required === "suggested" ? label + " **" : label}
          error={isValid}
        >
          {isLoading && (
            <MenuItem value="" key={"nano"}>
              <CircularProgress
                style={{
                  marginLeft: "50%",
                  position: "relative",
                }}
                size={20}
              />
            </MenuItem>
          )}

          {options.map((option, index) => (
            <MenuItem value={option.value} key={index}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText error>{errorText || ""}</FormHelperText>
      </FormControl>
    </div>
  );
};

export default memo(SelectField);

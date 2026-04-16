import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib";
import { useState } from "react";
import type { SelectFieldProps } from "./types";

export function SelectField({
  fieldName,
  label,
  placeholder = "Select an option",
  options,
  fieldValue,
  isValid = true,
  required = false,
  disabled = false,
  errorText,
  onChange,
}: SelectFieldProps) {
  const [value, setValue] = useState<string | undefined>(fieldValue);

  return (
    <div className="w-full max-w-sm">
      <Field>
        <FieldLabel>{label}</FieldLabel>
        <Select
          value={value}
          onValueChange={(value) => {
            setValue(value);
            onChange(value);
          }}
          disabled={disabled}
          name={fieldName}
        >
          <SelectTrigger
            className={cn(
              "border rounded-md transition-colors duration-200 hover:border-ring ",
              !isValid &&
                "border-destructive hover:border-destructive focus:border-destructive focus-visible:border-destructive",
            )}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {!isValid && required && (
          <FieldDescription className="destructive">
            {errorText}
          </FieldDescription>
        )}
      </Field>
    </div>
  );
}

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib";
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
  return (
    <div className="w-full max-w-sm">
      <Field>
        <FieldLabel>{label}</FieldLabel>
        <Select
          value={fieldValue}
          onValueChange={onChange}
          disabled={disabled}
          name={fieldName}
        >
          <SelectTrigger
            className={cn(
              "border rounded-md transition-colors duration-200",
              isValid &&
                !disabled &&
                "hover:border-blue-500 focus:border-blue-500 focus-visible:border-blue-500",
              !isValid &&
                "border-red-500 hover:border-red-500 focus:border-red-500 focus-visible:border-red-500"
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

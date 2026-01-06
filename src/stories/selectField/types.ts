export type SelectOption = {
  label: string;
  value: string;
};

export interface SelectFieldProps {
  fieldName: string;
  fieldValue: string;
  label: string;
  isValid: boolean;
  errorText: string;
  onChange?: (value: string) => void;
  options: Array<{ value: string; label: string }>;
  isLoading?: boolean;
  translateOptions?: boolean;
  disabled?: boolean;
  variant?: "standard" | "outlined" | "filled";
  required?: "required" | "suggested" | "idle";
}

export type SelectOption = {
  label: string;
  value: string;
};

export interface SelectFieldProps {
  fieldName: string;
  label: string;
  placeholder?: string;
  options: SelectOption[];
  isValid?: boolean;
  fieldValue?: string;
  required?: boolean;
  disabled?: boolean;
  errorText?: string;
  onChange: (value: string) => void;
}

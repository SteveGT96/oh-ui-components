export interface DateFieldProps {
  label: string;
  fieldValue: Date | undefined;
  className?: string;
  onChange: (value: Date | null) => void;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  required?: boolean;
}

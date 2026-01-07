import { Dayjs } from "dayjs";

export interface DateFieldProps {
  label: string;
  fieldValue: Dayjs | null;
  onChange: (value: Dayjs | null) => void;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  required?: boolean;
}

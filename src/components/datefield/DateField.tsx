import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import type { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import type { DateFieldProps } from "./type";

export const DateField: React.FC<DateFieldProps> = ({
  label,
  fieldValue,
  onChange,
  disabled = false,
  error = false,
  helperText,
  required = false,
  minDate,
  maxDate,
}) => {
  const [value, setValue] = useState<Dayjs | null>(null);
  useEffect(() => {
    setValue(fieldValue);
  }, [fieldValue]);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value}
        onChange={(date) => {
          setValue(date);
          if (onChange !== undefined) onChange(date);
        }}
        disabled={disabled}
        minDate={minDate}
        maxDate={maxDate}
        slotProps={{
          textField: {
            fullWidth: true,
            required,
            error,
            helperText,
            className: "date-field",
          },
        }}
      />
    </LocalizationProvider>
  );
};

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Calendar } from "../../../components/ui/calendar";
import type { DateFieldProps } from "./type";

export function DateField({
  label,
  fieldValue,
  className,
  onChange,
  disabled = false,
  error = false,
  helperText,
  required = false,
}: DateFieldProps) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(fieldValue);

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
        {label}
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          asChild
          disabled={disabled}
          className={error ? cn("border-destructive") : (className ?? "")}
        >
          <Button
            variant="outline"
            id="date"
            className="w-48 justify-between font-normal"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
              onChange(date ? new Date(date) : null);
            }}
          />
        </PopoverContent>
        {error && helperText && required && (
          <div className={cn("text-destructive text-sm")}>{helperText}</div>
        )}
      </Popover>
    </div>
  );
}

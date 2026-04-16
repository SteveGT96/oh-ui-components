import { SearchIcon } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import type { SearchInputProps } from "@/lib/components/ui/type";

export function SearchInput({
  placeholder,
  onChange,
  disabled = false,
}: SearchInputProps) {
  return (
    <InputGroup>
      <InputGroupInput
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
      />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
}

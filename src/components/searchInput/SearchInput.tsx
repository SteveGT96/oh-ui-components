import { SearchIcon } from "lucide-react";

import type { SearchInputProps } from "@/components/searchInput/type";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

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

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../../src/App";

describe("App Component", () => {
  it("renders correctly", () => {
    render(<App />);
    const element = screen.getByText(/vite \+ react/i);
    expect(element).toBeTruthy();
  });
});

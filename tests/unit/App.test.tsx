import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { describe, expect, it } from "vitest";
import App from "../../src/App";

describe("App Component", () => {
  it("renders correctly", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    const root = createRoot(container);
    act(() => root.render(<App />));
    expect(container.textContent).toMatch(/vite \+ react/i);
    root.unmount();
    document.body.removeChild(container);
  });
});

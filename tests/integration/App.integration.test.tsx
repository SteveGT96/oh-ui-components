import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { describe, expect, it } from "vitest";
import App from "../../src/App";

describe("App Integration", () => {
  it("increments count on button click", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    const root = createRoot(container);
    act(() => root.render(<App />));
    const button = container.querySelector("button");
    expect(button?.textContent).toMatch(/count is 0/i);
    act(() => button?.click());
    expect(container.querySelector("button")?.textContent).toMatch(
      /count is 1/i
    );
    root.unmount();
    document.body.removeChild(container);
  });
});

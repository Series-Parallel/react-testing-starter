import React from "react";
import Greet from "../../src/components/Greet";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";

describe("Greet", () => {
  it("should render Hello with the name when name is provided", () => {
    render(<Greet name="Deo" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/deo/i);
  });

  it("should render Login button when name is not provided", () => {
    render(<Greet />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});

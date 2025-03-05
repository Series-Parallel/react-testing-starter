import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import React from "react";
import TermsAndCondition from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("Terms and Condition", () => {
  it("should render with correct text and initial state", () => {
    render(<TermsAndCondition />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Terms & Condition");

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it("should enable the button when the checkbox is checked", async () => {
    render(<TermsAndCondition />);

    const checkbox = screen.getByRole("checkbox");
    const user = userEvent.setup();
    await user.click(checkbox);

    expect(screen.getByRole('button')).toBeEnabled();
  });
});

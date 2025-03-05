import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import React from "react";

import ExpandableText from "../../src/components/ExpandableText";

describe("Expandable Text", () => {
  it("it should render full text if less than 255 characters", () => {
    const text = "Hello World";
    render(<ExpandableText text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("it should truncate text if longer than 255 characters", () => {
    const text = "a".repeat(256);

    render(<ExpandableText text={text} />);

    const truncatedText = text.substring(0, 255) + "...";
    expect(screen.getByText(truncatedText)).toBeInTheDocument();
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/more/i);
  });
});

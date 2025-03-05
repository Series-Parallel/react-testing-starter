import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";

import UserAccount from "../../src/components/UserAccount";
import React from "react";
import { User } from "../../src/entities";

describe("UserAccount", () => {
  it("should render name if user is not admin", () => {
    const user: User = { id: 1, name: "Deo", isAdmin: false };
    render(<UserAccount user={user} />);
    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it("should render Edit button if user is admin", () => {
    const user: User = { id: 1, name: "Deo", isAdmin: true };
    render(<UserAccount user={user} />);

    const editBttn = screen.getByRole("button");
    expect(editBttn).toBeInTheDocument();
    expect(editBttn).toHaveTextContent(/edit/i);
  });

  it("should not render Edit button if user is not admin", () => {
    const user: User = { id: 1, name: "Deo", isAdmin: false };
    render(<UserAccount user={user} />);

    const editBttn = screen.queryByRole("button");
    expect(editBttn).not.toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../Header";

beforeEach(() => {
  render(<Header />);
});

test("header name renders correctly", () => {
  expect(screen.getByRole("heading")).toHaveTextContent(/todoapp/i);
});

test("dark-light button renders correctly", () => {
  const btn = screen.getByRole("button");
  expect(btn).toHaveClass("off");
});

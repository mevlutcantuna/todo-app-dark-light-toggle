import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoInputBar from "../TodoInputBar";

beforeEach(() => {
  render(<TodoInputBar />);
});

test("todo input types correctly", () => {
  const input = screen.getByRole("textbox");
  userEvent.type(input, "First Input");
  expect(input).toHaveValue("First Input");
});

test("add todo correctly", () => {
  const input = screen.getByRole("textbox");
  const btn = screen.getByRole("button", { name: /add/i });
  userEvent.type(input, "First Input");
  userEvent.click(btn);

});

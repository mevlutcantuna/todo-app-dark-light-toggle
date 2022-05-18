import { render, screen } from "@testing-library/react";

import Header from "../Header";

test("header renders correctly... ", () => {
  render(<Header />);

  expect(screen.getByRole("heading")).toHaveTextContent(/todoapp/i);
  console.log(screen.getAllByRole("button")[0].textContent);
});

import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./components/Home";
import ColorBtn from "./components/ColorBtn";
import { replaceCamelWithSpaces } from "./components/ColorBtn";

test("renders heading for home page", () => {
  render(<Home />);
  const headingElement = screen.getByText(/Welcome to Home Page/i);
  expect(headingElement).toBeInTheDocument();
});

//  for interactive elements always use role -> not getByText
// test takes 2 arguments : string (describes the test), testing function

test("renders justdial link", () => {
  render(<Home />);
  const linkElement = screen.getByRole("link", { name: /Just Dial/i });
  expect(linkElement).toBeInTheDocument();
});

// test will not pass if all the expectations will not pass
// test is successfull , if nothing is defined inside it
// for test to  be successfull , assertion should be true , else vice versa

test("renders react testing library heading", () => {
  render(<ColorBtn />);
  const headingElement = screen.getByText(/React Testing Library/i);
  expect(headingElement).toBeInTheDocument();

  expect(headingElement).toHaveStyle({ color: "blue" });
});

test("button has correct initial color", () => {
  render(<ColorBtn />);
  const colorBtn = screen.getByRole("button", { name: "Change to blue" });
  expect(colorBtn).toHaveStyle({ backgroundColor: "red" });

  // fireEvent helps us to interact in virtual DOM
  // click the button
  fireEvent.click(colorBtn);

  expect(colorBtn).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text to be 'Change to red'
  expect(colorBtn).toHaveTextContent("Change to red");
});

test("initial conditions", () => {
  render(<ColorBtn />);

  const colorBtn = screen.getByRole("button", { name: "Change to blue" });

  //  button should be enabled in start
  expect(colorBtn).toBeEnabled();

  //  checkbox should start with unchecked
  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});

test("checkbox disables button on first click and enables on second click", () => {
  render(<ColorBtn />);
  const colorBtn = screen.getByRole("button", { name: "Change to blue" });
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkBox);
  expect(colorBtn).toBeDisabled();

  fireEvent.click(checkBox);
  expect(colorBtn).toBeEnabled();
});

test("disabled button has grey background and reverts to red", () => {
  render(<ColorBtn />);
  const btn = screen.getByRole("button", { name: "Change to blue" });
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkBox);
  expect(btn).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkBox);
  expect(btn).toHaveStyle({ backgroundColor: "red" });
});

// medium violet red
// mid night blue
//functions separate from components , or functions that are used at multiple components -> unit test this type of functions
// Unit testing functions :
// describe => A describe statement is a way of grouping test..

// camel case with first letter capitalized
describe("spaces before camel case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlueRed")).toBe("Midnight Blue Red");
  });

  test("Color changed to Midnight Blue if color is MediumVioletRed", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("MidnightBlue");
  });
});

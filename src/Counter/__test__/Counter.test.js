import React from "react";
import Counter from "../Counter";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
});
afterEach(() => {
  cleanup();
});
test("header renders with correct text", () => {
  const headerEl = getByTestId("header");
  expect(headerEl.textContent).toBe("Counter");
});

test("counter initially start with text of 0 ", () => {
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
});
test(" input contains initial value of 1 ", () => {
  const inputEl = getByTestId("input");

  expect(inputEl.value).toBe("1");
});

test("add button renders with + ", () => {
  const addBtnEl = getByTestId("add-btn");

  expect(addBtnEl.textContent).toBe("+");
});
test("subtract button renders with - ", () => {
  const subtractBtnEl = getByTestId("subtract-btn");

  expect(subtractBtnEl.textContent).toBe("-");
});
test("changing value of input works correctly", () => {
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  expect(inputEl.value).toBe("5");
});

test("click on plus btn adds  1 to counter", () => {
  const addBtnEl = getByTestId("add-btn");
  const counterEl = getByTestId("counter");

  fireEvent.click(addBtnEl);
  expect(counterEl.textContent).toBe("1");
});
test("click on subtract btn subtracts  1 to counter", () => {
  const subtractBtnEl = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter");

  fireEvent.click(subtractBtnEl);
  expect(counterEl.textContent).toBe("-1");
});

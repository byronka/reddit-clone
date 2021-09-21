import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// test("test", () => {
//   expect(true).toBeTruthy();
// });

// test("happy path - I should be able to create a new Post", async () => {
//   render(<App />);

//   const nameInput = screen.getByLabelText("Name");
//   userEvent.type(nameInput, "bob");

//   const descInput = screen.getByLabelText("Description");
//   userEvent.type(descInput, "Hi I am the description");

//   const button = screen.getByRole("button");
//   userEvent.click(button);

//   const successAlert = await screen.findByText("Success");
//   expect(successAlert).toBeVisible;
// });

import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

it("should render", () => {
  renderWithRouter(<Navbar />);

  const navbar = screen.getByTestId("navbar");
  const link = screen.getByTestId("hotels");

  expect(navbar).toContainElement(link);
});

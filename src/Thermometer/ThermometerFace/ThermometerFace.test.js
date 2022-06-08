import React from "react";
import { render, test, expect } from "@testing-library/react";
import ThermometerFace from "./ThermometerFace";

test("ThermometerFace returns the correct face icon when mood is null", () => {
  const fragment = render(<ThermometerFace mood={null} />);
  expect(fragment).toMatchSnapshot();
});

test("ThermometerFace returns the correct face icon when mood is Very Sad", () => {
  const fragment = render(<ThermometerFace mood={"Very Sad"} />);
  expect(fragment).toMatchSnapshot();
});

// NOTE
// Snapshot testing is best when you have a component that won't change often, but whose output you'd like to verify.
// Here I would add a quick test for each state. The few minutes of ceremony are worth it to help ensure feature quality.

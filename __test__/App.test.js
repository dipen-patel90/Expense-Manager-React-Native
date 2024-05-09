import React from "react";
import renderer from "react-test-renderer";
import App from "../App";

describe("<Basic />", () => {
  it("works", () => {
    expect(1).toBe(1);
  });
});

describe("<App />", () => {
  it("works", () => {
    expect(1).toBe(1);
  });
  it("has 1 child", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});

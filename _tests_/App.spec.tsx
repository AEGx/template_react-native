import React from "react";
import { render } from "@testing-library/react-native";

import App from "../App";

describe("<App />", () => {
  it("should render correctly", () => {
    render(<App />);
  });

  it("matches last snapshot", async () => {
    let tree = render(<App />);
    expect(tree).toMatchSnapshot();
  });
});

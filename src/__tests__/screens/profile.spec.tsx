import React from "react";
import { render } from "@testing-library/react-native";

import { Profile } from "../../screens/Profile";

describe("Profile Screen", () => {
  it("should check placeholder user name input", () => {
    const { getByPlaceholderText } = render(<Profile />);

    const inputName = getByPlaceholderText("Nome");

    expect(inputName).toBeTruthy();
  });

  it("should check if user data is loading", () => {
    const { getByTestId } = render(<Profile />);

    const inputName = getByTestId("input-name");
    const inputSurName = getByTestId("input-surname");

    expect(inputName.props.value).toEqual("Roberto");
    expect(inputSurName.props.value).toEqual("Oliveira");
  });

  it("should check if title render correctly", () => {
    const { getByTestId } = render(<Profile />);

    const textTitle = getByTestId("text-title");

    expect(textTitle.props.children).toContain("Perfil");
  });
});

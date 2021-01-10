import React from "react";

import { render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Login from "../components/Login";

afterEach(cleanup);

describe("Login.js", () => {
  it("calls onSubmit with username and password filled on its fields", () => {
    //given
    const handleOnSubmit = jest.fn();

    //when
    const { getByLabelText, getByText } = render(<Login onSubmit={handleOnSubmit} />);
    getByLabelText(/username/i).value = "john";
    getByLabelText(/password/i).value = "doe";
    userEvent.click(getByText(/submit/i));

    // then
    expect(handleOnSubmit).toHaveBeenCalledTimes(1);
    expect(handleOnSubmit).toHaveBeenCalledWith({ username: "john", password: "doe" });
  });
});

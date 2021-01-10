import React from "react";

export default function Login({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = event.target.elements;
    onSubmit({ username: username.value, password: password.value });
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="username">UserName</label>
        <input id="username" />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" />

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

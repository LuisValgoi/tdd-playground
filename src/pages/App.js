import React from "react";
import Login from "../components/Login";

export default function App() {
  return <Login onSubmit={(data) => alert(JSON.stringify(data))} />;
}

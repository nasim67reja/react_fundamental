import React from "react";

import { Outlet, Link } from "react-router-dom";
import ExampleSerach from "./routes/ExampleSerach";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <ExampleSerach />
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

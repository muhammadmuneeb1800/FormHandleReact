import React from "react";
import "./App.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import Contact from "./pages/contact";
import { useState } from "react";

function App() {
  let [loggin, setLoggin] = useState(false);
  return (
    <>
      <h1 className="text-center">Header</h1>
      <button
        className={`btn btn-${loggin ? "danger" : "primary"} w-100 mt-5`}
        onClick={() => {
          setLoggin(!loggin);
        }}
      >
        {loggin ? "LoggedOut" : "LoggedIn"}
      </button>
      {loggin ? (
        <h1 className="text-center">You are now logged in</h1>
      ) : (
        <Contact />
      )}
      <h1 className="text-center">Footer</h1>
    </>
  );
}

export default App;

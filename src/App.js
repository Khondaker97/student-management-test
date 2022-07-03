import React from "react";
//route
import Router from "./Router/Router";
//component
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <section className="w-screen h-screen flex justify-start">
      <Sidebar />
      <Router />
    </section>
  );
}

export default App;

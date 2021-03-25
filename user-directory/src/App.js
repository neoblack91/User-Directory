import React, { Component } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Employee from "./components/Employees/Employees";
// import friends from "./friends.json";

function App() {
  return (
    <div className="container">
      <Header />
      <Search />
    </div>
  );
}
export default App;

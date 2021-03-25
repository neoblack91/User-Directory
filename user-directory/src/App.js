import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Employees from "./components/Employees/Employees";
import axios from "axios";

function App() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=50").then((result) => {
      setPeople(result.data.results);
    });
  });

  return (
    <div className="container">
      {console.log(people)}
      <Header />
      <Search />
      <Employees employeeData={people} />
    </div>
  );
}
export default App;

import React, { useEffect, useState } from "react";
// import Jumbotron from "./components/Header/Header";
// import SearchForm from "../components/Search/Search";
// import Employees from "../components/Employees/Employees";
import axios from "axios";
import DatatablePage from "../components/Employees/Employees";

function App() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=200").then((results) => {
      setPeople(results.data.results);
    });
  }, []);

  return (
    <div className="container">
      {/* <Jumbotron /> */}
      {/* <SearchForm searchInput={peopleInput} /> */}
      <DatatablePage employeeData={people} />
    </div>
  );
}
export default App;

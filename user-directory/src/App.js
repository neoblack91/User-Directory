import React from "react";
import Jumbotron from "./components/Header/Header";
// import SearchForm from "./components/Search/Search";
// import Employees from "./components/Employees/Employees";

import Api from "./utils/API";

function App() {
  // const [input, setInput] = useState("");

  // const handleInputChange = (event) => {
  //   setInput(event.target.value);
  //   console.log(event.target.value);
  // };

  return (
    <div className="container">
      <Jumbotron />
      {/* <SearchForm handleInputChange={handleInputChange} /> */}
      {/* <Api employeeData={input} /> */}
      <Api DatatablePage />
    </div>
  );
}
export default App;

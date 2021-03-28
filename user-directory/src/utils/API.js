// import React, { useEffect, useState } from "react";
// import Jumbotron from "./components/Header/Header";
// import SearchForm from "./components/Search/Search";
// import Employees from "./components/Employees/Employees";
// import axios from "axios";

// function App() {
//   const [people, setPeople] = useState([]);
//   useEffect(() => {
//     axios.get("https://randomuser.me/api/?results=200").then((results) => {
//       setPeople(results.data.results);
//     });
//   }, []);

//   return (
//     <div className="container">
//       {console.log(people)}
//       <Jumbotron />
//       <SearchForm />
//       <Employees employeeData={people} />
//     </div>
//   );
// }
// export default App;

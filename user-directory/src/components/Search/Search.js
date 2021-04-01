import React from "react";

function SearchForm(props) {
  console.log(props.employeeData);

  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a employee"
          id="search"
        />
        <button
          onClick={props.handleFormSubmit}
          className="btn btn-primary mt-3"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;

//   //get values out of person object, and store them in an array
//   //values = [DoloresRoman947-260-104dolores.roman@example.com,
//   // FatihAkal(271)-998-2532fatih.akal@example.com]
//   // array.indexOf
//   // [apple, orange] => array.indexOf(kiwi) -> -1

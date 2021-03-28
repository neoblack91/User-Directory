import React from "react";

function employedPeople(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Phone Number</th>
          <th scope="col">email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <img
            alt={
              props.employeeData[0]?.name?.first +
              "," +
              props.employeeData[0]?.name?.last
            }
            src={props.employeeData[0]?.picture?.medium}
          />
          <th scope="row">1</th>
          <td>{props.employeeData[0]?.name?.first}</td>
          <td>{props.employeeData[0]?.name?.last}</td>
          <td>{props.employeeData[0]?.phone}</td>
          <td>{props.employeeData[0]?.email}</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th scope="row">2</th>
          <td>{props.employeeData[1]?.name?.first}</td>
          <td>{props.employeeData[1]?.name?.last}</td>
          <td>{props.employeeData[1]?.phone}</td>
          <td>{props.employeeData[1]?.email}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default employedPeople;

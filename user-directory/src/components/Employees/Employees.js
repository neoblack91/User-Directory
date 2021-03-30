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
        {props.employeeData.map(({ picture, name, phone, email }) => {
          // console.log(picture, name, phone, email);
          return (
            <tr>
              <img alt={name.first + "," + name.last} src={picture.medium} />

              <td>{name.first}</td>
              <td>{name.last}</td>
              <td>{phone}</td>
              <td>{email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default employedPeople;

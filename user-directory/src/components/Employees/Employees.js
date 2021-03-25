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
          <th scope="row">3</th>
          <td>{props.employeeData[0]?.name?.first}</td>
          <td>{props.employeeData[0]?.name?.last}</td>
          <td>{props.employeeData[0]?.phone}</td>
          <td>{props.employeeData[0]?.email}</td>
        </tr>
      </tbody>
    </table>
    // <div>
    //   <div NaclassNameName="container">
    //     <div className="card mb-4">
    //       <div className="card-header">
    //         <h3>Card title</h3>
    //       </div>
    //       <div className="card-body">
    //         <p className="card-text">
    //           {props.employeeData[0]?.name?.first}
    //           {props.employeeData[0]?.name?.last}
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default employedPeople;

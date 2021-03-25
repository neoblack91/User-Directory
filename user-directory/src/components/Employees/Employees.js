import React from "react";

function HelloBootstrap(props) {
  return (
    <div>
      <div className="container">
        <div className="card mb-4">
          <div className="card-header">
            <h3>Card title</h3>
          </div>
          <div className="card-body">
            <p className="card-text">
              {props.employeeData[0]?.name?.first}
              {props.employeeData[0]?.name?.last}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelloBootstrap;

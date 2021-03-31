import React from "react";
import { MDBDataTable } from "mdbreact";

function DatatablePage(props) {
  const data = {
    columns: [
      {
        label: "First",
        field: "first",
        sort: "asc",
        width: 150,
      },
      {
        label: "Last",
        field: "last",
        sort: "asc",
        width: 270,
      },
      {
        label: "Phone",
        field: "phone",
        sort: "asc",
        width: 200,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        first: "{props.name.first}",
        last: "{props.name.last}",
        phone: "{props.phone}",
        email: "{props.email}",
      },
    ],
  };
  return <MDBDataTable striped bordered small data={data} />;
}

// function employedPeople(props) {
//   <table className="table">
//     <thead>
//       <tr>
//         <th scope="col">id</th>
//         <th scope="col">First</th>
//         <th scope="col">Last</th>
//         <th scope="col">Phone Number</th>
//         <th scope="col">email</th>
//       </tr>
//     </thead>
//     <tbody>
//       {props.employeeData.map(({ picture, name, phone, email }) => {
//         // console.log(picture, name, phone, email);
//         props.employeeData.map((item) =>
//           item.type === "Internal" ? (
//             <div className="internal">{item.title}</div>
//           ) : (
//             <div className="external">{item.title}</div>
//           )
//         );
//         return (
//           <tr>
//             <img alt={name.first + "," + name.last} src={picture.medium} />
//             <td>{name.first}</td>
//             <td>{name.last}</td>
//             <td>{phone}</td>
//             <td>{email}</td>
//           </tr>
//         );
//       })}
//     </tbody>
//   </table>;
// }
export default DatatablePage;
// export default employedPeople;

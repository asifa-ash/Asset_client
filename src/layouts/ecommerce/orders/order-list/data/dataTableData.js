/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/* eslint-disable react/prop-types */
// ProductsList page components
import IdCell from "layouts/ecommerce/orders/order-list/components/IdCell";
import DefaultCell from "layouts/ecommerce/orders/order-list/components/DefaultCell";
import StatusCell from "layouts/ecommerce/orders/order-list/components/StatusCell";
import CustomerCell from "layouts/ecommerce/orders/order-list/components/CustomerCell";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import team5 from "assets/images/team-5.jpg";
import ivana from "assets/images/ivana-squares.jpg";
import button from "assets/theme/components/button";

const dataTableData = {
  columns: [
    { Header: "id", accessor: "_id", Cell: ({ value }) => <IdCell id={value} /> },
    {
      Header: "First Name",
      accessor: "firstName",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "Last Name",
      accessor: "lastName",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    { Header: "Email", accessor: "email", Cell: ({ value }) => <DefaultCell value={value} /> },
    {
      Header: "DOB",
      accessor: "DOB",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    // {
    //   Header: "Name",
    //   accessor: "name",
    //   Cell: ({ value }) => {
    //     let status;

    //     if (value === "paid") {
    //       status = <StatusCell icon="done" color="success" status="Paid" />;
    //     } else if (value === "refunded") {
    //       status = <StatusCell icon="replay" color="dark" status="Refunded" />;
    //     } else {
    //       status = <StatusCell icon="close" color="error" status="Canceled" />;
    //     }

    //     return status;
    //   },
    // },
    { Header: "Title", accessor: "title", Cell: ({ value }) => <DefaultCell value={value} /> },
    { Header: "Department", accessor: "department", Cell: ({ value }) => <DefaultCell value={value} /> },
    // {
    //   Header: "Department",
    //   accessor: "product",
    //   Cell: ({ value }) => {
    //     const [name, data] = value;

    //     return (
    //       <DefaultCell
    //         value={typeof value === "string" ? value : name}
    //         suffix={data.suffix || false}
    //       />
    //     );
    //   },
    // },
    { Header: "Reporting Manager", accessor: "reporting_manager", Cell: ({ value }) => <DefaultCell value={value} /> },
    {
      Header: "Joining Date",
      accessor: "joining_date",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    { Header: "Type Of User", accessor: "userType", Cell: ({ value }) => <DefaultCell value={value} /> },
    { Header: "Image", accessor: "photo", Cell: ({ value }) => <DefaultCell value={value} /> },
    { Header: "Location", accessor: "location", Cell: ({ value }) => <DefaultCell value={value} /> },
    { Header: "Contact Type", accessor: "contractType", Cell: ({ value }) => <DefaultCell value={value} />},
    { Header: "Status", accessor: "", Cell: ({ value }) => <DefaultCell value={value} />},

    // {
    //   Header: "Status",
    //   accessor: "status",
    //   Cell: ({ value }) => {
    //     let status;

    //     if (value === "paid") {
    //       status = <StatusCell icon="done" color="success" status="Paid" />;
    //     } else if (value === "refunded") {
    //       status = <StatusCell icon="replay" color="dark" status="Refunded" />;
    //     } else {
    //       status = <StatusCell icon="close" color="error" status="Canceled" />;
    //     }

    //     return status;
    //   },
    // },
  ],

  rows: [
    
  ],
};

export default dataTableData;

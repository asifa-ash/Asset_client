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

import checkout from "layouts/pages/users/new-user/schemas/form";

const {
  formField: {
    firstName,
    lastName,
    email,
    DOB,
    userType,
    photo,
    location,
    contractType,
    title,
    department,
    reporting_manager,
    joining_date,
  },
} = checkout;

const initialValues = {
  [firstName.name]: "",
  [lastName.name]: "",
  [email.name]: "",
  [DOB.name]: "",

  [title.name]: "",
  [department.name]: "",
  [reporting_manager.name]: "",
  [joining_date.name]: "",

  [userType.name]: "",
  [location.name]: "",
  [contractType.name]: "",
  [photo.name]: "",
};

export default initialValues;

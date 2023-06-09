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

import checkout from "layouts/ecommerce/new-user/schemas/form";

const {
  formField: {
    fName,
    type,
    manufacturer,
    model,
    Serial_number,
    WarrantyType,
    WarrantyExpiry,
    status,
    joining_date,

    sla,
    photo,
  },
} = checkout;

const initialValues = {
  [fName.name]: "",
  [type.name]: "",
  [manufacturer.name]: "",
  [model.name]: "",

  [Serial_number.name]: "",
  [WarrantyType.name]: "",
  [WarrantyExpiry.name]: "",
  [status.name]: "",
  [joining_date.name]: "",

  [sla.name]: "",

  [photo.name]: "",
};

export default initialValues;

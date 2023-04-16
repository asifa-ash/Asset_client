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

import * as Yup from "yup";
import checkout from "layouts/ecommerce/new-user/schemas/form";

const {
  formField: { fName, type, manufacturer, model, WarrantyType,Serial_number, WarrantyExpiry, sla,joining_date, status, photo },
} = checkout;

const validations = [
  Yup.object().shape({
    [fName.name]: Yup.string().required(fName.errorMsg),
    [type.name]: Yup.string().required(type.errorMsg),
    [manufacturer.name]: Yup.string()
      .required(manufacturer.errorMsg)
      .email(manufacturer.invalidMsg),
  }),
  Yup.object().shape({
    [model.name]: Yup.string().required(model.errorMsg),
    [WarrantyType.name]: Yup.string().required(WarrantyType.errorMsg),
    [WarrantyExpiry.name]: Yup.string().required(WarrantyExpiry.errorMsg),
    [joining_date.name]: Yup.string().required(joining_date.errorMsg),
  }),
  Yup.object().shape({
    [sla.name]: Yup.string().required(sla.errorMsg),
    [status.name]: Yup.string().required(status.errorMsg),
    [Serial_number.name]: Yup.string().required(Serial_number.errorMsg),
    [photo.name]: Yup.string().required(photo.errorMsg),
  }),
];

export default validations;

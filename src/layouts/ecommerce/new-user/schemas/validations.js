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

 
  }),
  Yup.object().shape({

    [WarrantyType.name]: Yup.string().required(WarrantyType.errorMsg),
    
  }),
  Yup.object().shape({
   
    [Serial_number.name]: Yup.string().required(Serial_number.errorMsg),

  }),
];

export default validations;

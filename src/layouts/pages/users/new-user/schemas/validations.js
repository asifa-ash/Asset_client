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
import checkout from "layouts/pages/users/new-user/schemas/form";

const {
  formField: { firstName, lastName, email, title, department, reporting_manager, joining_date,userType,location },
} = checkout;

const validations = [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(firstName.errorMsg),
    [lastName.name]: Yup.string().required(lastName.errorMsg),
    [email.name]: Yup.string().required(email.errorMsg).email(email.invalidMsg),
   
    
  }),
  Yup.object().shape({
    [title.name]: Yup.string().required(title.errorMsg),
    [department.name]: Yup.string().required(department.errorMsg),
    [reporting_manager.name]: Yup.string().required(reporting_manager.errorMsg),
    [joining_date.name]: Yup.string().required(joining_date.errorMsg),
    
  }), 
  Yup.object().shape({
    // [userType.name]: Yup.string().required(userType.errorMsg),
    [location.name]: Yup.string().required(location.errorMsg),
    // [contractType.name]: Yup.string().required(twitter.errorMsg),
    // [photo.name]: Yup.string().required(twitter.errorMsg),
  })
 
];

export default validations;

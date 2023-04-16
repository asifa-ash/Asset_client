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

const form = {
  formId: "new-user-form",
  formField: {
    firstName: {
      name: "firstName",
      label: "First Name",
      type: "text",
      errorMsg: "First name is required.",
    },
    lastName: {
      name: "lastName",
      label: "Last Name",
      type: "text",
      errorMsg: "Last name is required.",
    },
    DOB: {
      name: "DOB",
      label: "DOB",
      type: "date",
    },
    email: {
      name: "email",
      label: "Email Address",
      type: "email",
      errorMsg: "Email address is required.",
      invalidMsg: "Your email address is invalid",
    },
    title: {
      name: "title",
      label: "Title",
      type: "text",
      errorMsg: "Title is required.",
    },
    department: {
      name: "department",
      label: "Department",
      type: "text",
      errorMsg: "Department is required.",
    },
    reporting_manager: {
      name: "reporting_manager",
      label: "Reporting Manager",
      type: "text",
      errorMsg: "Reporting Manager is required.",
    },
    joining_date: {
      name: "joining_date",
      label: "Joining Date",
      type: "text",
      errorMsg: "Joining Date is required.",
    },

    location: {
      name: "location",
      label: "city",
      type: "text",
      errorMsg: "location is required.",
    },
    photo: {
      name: "photo",
      label: "Photo",
      type: "file",
      
    },
    userType: {
      name: "userType",
      label: "User Type",
      type: "text",
 
    },
    contractType: {
      name: "contractType",
      label: "Contract Type",
      type: "text",
     
    },
  },
};

export default form;

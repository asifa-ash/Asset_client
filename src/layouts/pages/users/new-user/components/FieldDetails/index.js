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

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// NewUser page components
import FormField from "layouts/pages/users/new-user/components/FormField";

function Socials({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { title, department, reporting_manager, joining_date } = formField;
  const { title: titleV, department: departmentV, reporting_manager: reporting_managerV, joining_date: joining_dateV} = values;

  return (
    <MDBox>
      <MDTypography variant="h5" fontWeight="bold">
        Socials
      </MDTypography>
      <MDBox mt={1.625}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormField
              type={title.type}
              label={title.label}
              name={title.name}
              value={titleV}
              placeholder={title.placeholder}
              error={errors.title && touched.title}
              success={titleV.length > 0 && !errors.title}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              type={department.type}
              label={department.label}
              name={department.name}
              value={departmentV}
              placeholder={department.placeholder}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              type={reporting_manager.type}
              label={reporting_manager.label}
              name={reporting_manager.name}
              value={reporting_managerV}
              placeholder={reporting_manager.placeholder}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              type={joining_date.type}
              label={joining_date.label}
              name={joining_date.name}
              value={joining_dateV}
              placeholder={joining_date.placeholder}
            />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

// typechecking props for Socials
Socials.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Socials;

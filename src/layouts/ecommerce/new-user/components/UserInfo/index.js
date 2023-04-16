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
import FormField from "layouts/ecommerce/new-user/components/FormField";

function UserInfo({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { fName, type, manufacturer, model ,  } = formField;
  const {
    fName: fNameV,
    type: typeV,
    manufacturer: manufacturerV,
    model: modelV,
    
  
  } = values;

  return (
    <MDBox>
      <MDBox lineHeight={0}>
        <MDTypography variant="h5">About Asset</MDTypography>
        <MDTypography variant="button" color="text">
          Mandatory information's
        </MDTypography>
      </MDBox>
      <MDBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={fName.type}
              label={fName.label}
              name={fName.name}
              value={fNameV}
              placeholder={fName.placeholder}
              error={errors.fName && touched.fName}
              success={fNameV.length > 0 && !errors.fName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={type.type}
              label={type.label}
              name={type.name}
              value={typeV}
              placeholder={type.placeholder}
              // error={errors.lastName && touched.type}
              // success={typeV.length > 0 && !errors.type}
            />
          </Grid>
        </Grid>
       
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={ manufacturer.type}
              label={ manufacturer.label}
              name={ manufacturer.name}
              value={ manufacturerV}
              placeholder={ manufacturer.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={model.type}
              label={model.label}
              name={model.name}
              value={modelV}
              placeholder={model.placeholder}
              // error={errors.model && touched.model}
              // success={modelV.length > 0 && !errors.model}
            />
          </Grid>
        </Grid>
       
      </MDBox>
    </MDBox>
  );
}

// typechecking props for UserInfo
UserInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default UserInfo;

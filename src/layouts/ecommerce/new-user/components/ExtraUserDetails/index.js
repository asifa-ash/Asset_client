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

function Profile({ formData }) {
  const { formField, values } = formData;
  const { Serial_number, WarrantyType, WarrantyExpiry, photo } = formField;
  const {
    Serial_number: Serial_numberV,
    warrantyType: WarrantyTypeV,
    WarrantyExpiry:  WarrantyExpiryV,
    photo: photoV,
  } = values;

  return (
    <MDBox>
      <MDTypography variant="h5" fontWeight="bold">
        Extra
      </MDTypography>
      <MDBox mt={1.625}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={Serial_number.type}
              label={Serial_number.label}
              name={Serial_number.name}
              value={Serial_numberV}
              placeholder={Serial_number.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={WarrantyType.type}
              label={WarrantyType.label}
              name={WarrantyType.name}
              value={WarrantyTypeV}
              placeholder={WarrantyType.placeholder}
              multiline
            />
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={WarrantyExpiry.type}
              label={WarrantyExpiry.label}
              name={WarrantyExpiry.name}
              value={WarrantyExpiryV}
              placeholder={WarrantyExpiry.placeholder}
              multiline
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <input type={photo.type} />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

// typechecking props for Profile
Profile.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Profile;

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
import Autocomplete from "@mui/material/Autocomplete";

// NewUser page components
import FormField from "layouts/ecommerce/new-user/components/FormField";
import MDInput from "components/MDInput";

function Socials({ formData }) {
  
  const { formField, values, errors, touched } = formData;
  const { sla, status } = formField;
  const { sla: slaV, status: statusV } = values;

  return (
    <MDBox>
      <MDTypography variant="h5" fontWeight="bold">
        Socials
      </MDTypography>
      <MDBox mt={1.625}>
        <Grid container spacing={1}>
          {/* <Grid item xs={12}>
            <FormField
              type={sla.type}
              label={sla.label}
              name={sla.name}
              value={slaV}
              placeholder={sla.placeholder}
              error={errors.title && touched.title}
              success={slaV.length > 0 && !errors.sla}
            />
          </Grid> */}
          <Grid item xs={12} sm={4} sx={{ mt: 2 }}>
            <Autocomplete
              type={sla.type}
              label={sla.label}
              name={sla.name}
              value={slaV}
              defaultValue="SLA"
         
              options={["BTC", "CNY", "EUR", "GBP", "INR", "USD"]}
              renderInput={(params) => (
                <MDInput
                  {...params}
                  variant="standard"
                 
                  // label={sla.label}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              type={status.type}
              label={status.label}
              name={status.name}
              value={statusV}
              placeholder={status.placeholder}
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

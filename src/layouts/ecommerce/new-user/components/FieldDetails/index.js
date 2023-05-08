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
import { useEffect } from "react";
import { TextField } from "@mui/material";

function Socials({ formData, setFieldValue }) {
  const { formField, values, errors, touched } = formData;
  const { sla, status } = formField;
  const { sla: slaV, status: statusV } = values;

  useEffect(() => {
    console.log(slaV, sla, status);
  }, [sla || status]);

  const handleChange = (e) => {
    console.log(e.target.name);
    switch (e.target.name) {
      case "sla":
        setFieldValue("sla", e.target.value);
        break;
      case "status":
        setFieldValue("status", e.target.value);
        break;
    }
  };
  return (
    <MDBox>
      <MDTypography variant="h5" fontWeight="bold">
        About Asset
      </MDTypography>
      <MDBox mt={1.625}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4} sx={{ mt: 2 }}>
            <Autocomplete
              onSelect={handleChange}
              type={status.type}
              label={status.label}
              name={status.name}
              value={statusV}
              defaultValue="Status"
              options={["Allocated", "Unallocated","Damaged","Service"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  margin="normal"
                  name={status.name}
                  label="Status"
                  fullWidth
                  value={statusV}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ mt: 2 }}>
            <Autocomplete
              onSelect={handleChange}
              type={sla.type}
              label={sla.label}
              name={sla.name}
              value={slaV}
              defaultValue="SLA"
              options={["True" ,"False"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  margin="normal"
                  name={sla.name}
                  label="Sla"
                  fullWidth
                  value={slaV}
                />
              )}
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

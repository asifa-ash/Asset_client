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

import { useEffect, useRef, useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { Alert } from "@mui/material";
import { login } from "redux/async/auth";
import { auth } from "apis/authApis";
import { setUser } from "redux/slices/auth";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Basic() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [alert, setAlert] = useState({ position: "0", opacity: "0" });
  const [rememberMe, setRememberMe] = useState(false);
  const [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState({ isError: false, message: "" });
  const handleChange = (e) => {
    setData((rest) => ({ ...rest, [e.target.name]: e.target.value }));
  };

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const user = useSelector((state) => state.authReducer.user);
  const handleSubmit = async (e) => {
    console.log("hello");
    e.preventDefault();
    if (!(data.username.includes("@") && data.username.includes("."))) {
      setError({ message: "check your email", isError: true });
      setAlert({ position: "20px", opacity: "1" });
    } else if (data.password.length < 6) {
      setError({ message: "at least 6 letters needed", isError: true });
      setAlert({ position: "20px", opacity: "1" });
    } else {
      setError({ message: "", isError: false });
      setAlert({ position: "0", opacity: "0" });

      console.log("---");

      dispatch(login(data));
    }
  };
  console.log(user);

  useEffect(() => {
    console.log(user);
    if (user) {
      console.log("logged");
      nav("/dashboards/analytics");
    } else {
      console.log(" no logged");
    }
  }, [user]);
  console.log(data);
  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="email"
                name="username"
                label="Email"
                fullWidth
                onChange={handleChange}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                name="password"
                label="Password"
                fullWidth
                onChange={handleChange}
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={handleSubmit}>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up/cover"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
      {error.isError ? (
        <Alert
          severity="error"
          sx={{
            width: "30%",
            position: "fixed",
            top: alert.position,
            opacity: alert.opacity,
            transition: "1s",
          }}
        >
          {error.message}
        </Alert>
      ) : null}
    </BasicLayout>
  );
}

export default Basic;

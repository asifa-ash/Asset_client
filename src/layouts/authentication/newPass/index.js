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

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-reset-cover.jpeg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { jsx } from "@emotion/react";

function Cover() {
  const { id, token } = useParams();
console.log(id,token,"lllll");
  const history = useNavigate();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const userValid = async () => {
    const res = await fetch(`http://localhost:5000/otp/getotp${id}/${token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.status == 201) {
      console.log("userValid");
    } else {
      history("*");
    }
  };
  const setVal = (e) => {
    setPassword(e.target.value);
  };
  const sendPassword = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/auth/resetpass/${id}/${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });
    const data = await res.json();
    if (data.status == 201) {
      setPassword("");
      setMessage(true);
    }else{
      alert("! token Expire generate new link")
    }
  };

  useEffect(() => {
    userValid();
  }, []);
  return (
    <CoverLayout coverHeight="50vh" image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          py={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h3" fontWeight="medium" color="white" mt={1}>
            Enter Your New Password
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            {message? "password update successfully":""}
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={4}>
              <MDInput
                type="password"
                onChange={setVal}
                label="password"
                variant="standard"
                fullWidth
              />
            </MDBox>
            <MDBox mt={6} mb={1}>
              <MDButton onClick={sendPassword} variant="gradient" color="info" fullWidth>
                Sent
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;

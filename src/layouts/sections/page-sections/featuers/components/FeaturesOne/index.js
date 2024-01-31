/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

function FeaturesOne() {
  return (
    <MKBox component="header" position="relative" height="100%">
      <MKBox component="nav" position="absolute" top="0.5rem" width="100%">
        <Container>
          <Grid container flexDirection="row" alignItems="center">
            <MKBox
              component="ul"
              display={{ xs: "none", lg: "flex" }}
              p={0}
              my={0}
              mx="auto"
              sx={{ listStyle: "none" }}
            ></MKBox>
          </Grid>
        </Container>
      </MKBox>
      <MKBox
        display="flex"
        alignItems="center"
        minHeight="35rem"
        minWidth="100%"
        sx={{
          backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/portfolio-d723c.appspot.com/o/presentation%20-%20poster%2FChatbot1.png?alt=media&token=c4d8608b-1f90-4c8c-bd86-9cceb291a63c")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            md={7}
            lg={6}
            flexDirection="column"
            justifyContent="center"
          ></Grid>
        </Container>
      </MKBox>
      <MKBox
        display="flex"
        alignItems="center"
        minHeight="35rem"
        minWidth="100%"
        sx={{
          backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/portfolio-d723c.appspot.com/o/presentation%20-%20poster%2FChatbot%201.1.png?alt=media&token=5258885a-5e9d-47e3-8184-74d9a57af557")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            md={7}
            lg={6}
            flexDirection="column"
            justifyContent="center"
          ></Grid>
        </Container>
      </MKBox>
      <MKBox
        display="flex"
        alignItems="center"
        minHeight="35rem"
        sx={{
          backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/portfolio-d723c.appspot.com/o/presentation%20-%20poster%2FChatbot2.png?alt=media&token=eef9399f-c0e4-49bf-9dcd-49071f41e388")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            md={7}
            lg={6}
            flexDirection="column"
            justifyContent="center"
          ></Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default FeaturesOne;

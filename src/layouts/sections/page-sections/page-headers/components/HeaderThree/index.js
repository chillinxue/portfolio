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
// import Link from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Images
// import bgImage from "assets/images/bg-coworking.jpeg";

function HeaderThree() {
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
        minHeight="100%"
        sx={{
          backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/portfolio-d723c.appspot.com/o/presentation%20-%20poster%2Fhanabi1.png?alt=media&token=b7dd233e-b828-4c54-bd47-0966bd349808")`,
          backgroundSize: "contain",
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

export default HeaderThree;

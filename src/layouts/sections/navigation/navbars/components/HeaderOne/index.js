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
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
// import bgImage from "assets/images/bg-coworking.jpeg";

function StylishPosterPage() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: window.scrollY + 45 * parseFloat(getComputedStyle(document.documentElement).fontSize),
      behavior: "smooth",
    });
  };
  return (
    <MKBox component="header" position="relative" height="100%">
      <MKBox component="nav" position="absolute" top="0.5rem" width="100%">
        <Container></Container>
      </MKBox>
      <MKBox
        display="flex"
        alignItems="center"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url("https://firebasestorage.googleapis.com/v0/b/portfolio-d723c.appspot.com/o/presentation%20-%20poster%2F%E6%88%AA%E5%9C%96%202024-01-07%20%E4%B8%8B%E5%8D%887.54.14.png?alt=media&token=0481f94c-01ab-48bf-9395-29c82c96ceb9")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "35rem",
          minWidth: "100%",
        }}
      >
        <Container>
          <Grid container item xs={12} md={7} lg={6} flexDirection="column" justifyContent="center">
            <MKTypography
              variant="h1"
              color="white"
              mb={3}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              STYLiSH
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.9}
              pr={6}
              mr={6}
              fontSize={14}
              sx={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // 調整陰影的偏移和模糊度
              }}
            >
              A clothing e-commerce platform where consumers can browse and buy products.
            </MKTypography>
            <Stack direction="row" spacing={1} mt={3}>
              <MKButton
                color="white"
                href=" https://fir-hosting-service-84127.web.app/products.html "
              >
                Go to Website
              </MKButton>
              <MKButton variant="text" color="white" onClick={scrollToBottom}>
                Read more
              </MKButton>
            </Stack>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default StylishPosterPage;

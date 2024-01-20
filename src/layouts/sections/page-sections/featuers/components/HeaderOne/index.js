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

function HeaderOne() {
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
        minHeight="40rem"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url("https://firebasestorage.googleapis.com/v0/b/portfolio-d723c.appspot.com/o/presentation%20-%20poster%2FChatbotPoster.png?alt=media&token=5717c32c-f0ae-4b1f-8555-6ba1096565cc")`,
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
              LINE Bank <br /> Customers Service <br /> Chatbot
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
              As the first member of the AI Team, built and launched the Chatbot on LINE official
              account, attracting 6 million users, engaging 5 million conversations, and converting
              to 1.1 million clients.
            </MKTypography>
            <Stack direction="row" spacing={1} mt={3}>
              <MKButton color="white" href="https://line.me/R/ti/p/@linebanktw#~">
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

export default HeaderOne;

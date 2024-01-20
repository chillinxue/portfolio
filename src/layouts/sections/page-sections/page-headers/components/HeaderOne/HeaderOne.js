import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
// import bgImage from "assets/images/bg-coworking.jpeg";
function HeaderOne() {
  const ScrollButton = () => {
    const scrollToBottom = () => {
      window.scrollTo({
        top: window.innerHeight + 40,
        behavior: "smooth",
      });
    };

    return (
      <MKBox component="header" position="relative" height="100%">
        <MKBox component="nav" position="absolute" top="0.5rem" width="100%">
          <Container>
            <Grid container flexDirection="row" alignItems="center">
              {/* <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  py={0.8125}
                  mr={2}
                >
                  Material Design
                </MKTypography>
                <MKButton
                  variant="outlined"
                  color="white"
                  sx={{ display: { xs: "block", lg: "none" }, ml: "auto" }}
                >
                  <MKBox component="i" color="white" className="fas fa-bars" />
                </MKButton> */}
              <MKBox
                component="ul"
                display={{ xs: "none", lg: "flex" }}
                p={0}
                my={0}
                mx="auto"
                sx={{ listStyle: "none" }}
              >
                {/* <MKBox component="li">
                  <MKTypography
                    component={Link}
                    href="#"
                    variant="button"
                    color="white"
                    fontWeight="regular"
                    p={1}
                    onClick={(e) => e.preventDefault()}
                  >
                    Home
                  </MKTypography>
                </MKBox> */}
                {/* <MKBox component="li">
                  <MKTypography
                    component={Link}
                    href="#"
                    variant="button"
                    color="white"
                    fontWeight="regular"
                    p={1}
                    onClick={(e) => e.preventDefault()}
                  >
                    About Us
                  </MKTypography>
                </MKBox> */}
                {/* <MKBox component="li">
                  <MKTypography
                    component={Link}
                    href="#"
                    variant="button"
                    color="white"
                    fontWeight="regular"
                    p={1}
                    onClick={(e) => e.preventDefault()}
                  >
                    Contact Us
                  </MKTypography>
                </MKBox> */}
              </MKBox>
              {/* <MKBox
                  component="ul"
                  display={{ xs: "none", lg: "flex" }}
                  p={0}
                  m={0}
                  sx={{ listStyle: "none" }}
                >
                  <MKBox component="li">
                    <MKTypography
                      component={Link}
                      href="#"
                      variant="button"
                      p={1}
                      onClick={(e) => e.preventDefault()}
                    >
                      <MKBox component="i" color="white" className="fab fa-twitter" />
                    </MKTypography>
                  </MKBox>
                  <MKBox component="li">
                    <MKTypography
                      component={Link}
                      href="#"
                      variant="button"
                      p={1}
                      onClick={(e) => e.preventDefault()}
                    >
                      <MKBox component="i" color="white" className="fab fa-facebook" />
                    </MKTypography>
                  </MKBox>
                  <MKBox component="li">
                    <MKTypography
                      component={Link}
                      href="#"
                      variant="button"
                      p={1}
                      onClick={(e) => e.preventDefault()}
                    >
                      <MKBox component="i" color="white" className="fab fa-instagram" />
                    </MKTypography>
                  </MKBox>
                </MKBox> */}
            </Grid>
          </Container>
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
              )}, url("https://firebasestorage.googleapis.com/v0/b/portfolio-d723c.appspot.com/o/presentation%20-%20poster%2FHanabiWebsite.png?alt=media&token=88f1d2d2-7c72-4a36-a6ba-7eebcd606079")`,
            backgroundSize: "cover",
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
            >
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
                HANABI
              </MKTypography>
              <MKTypography
                variant="body1"
                color="white"
                opacity={0.9}
                pr={6}
                mr={6}
                sx={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // 調整陰影的偏移和模糊度
                }}
              >
                A travel website offering one-page solution using Google Maps API for route search
                and itinerary planning.
              </MKTypography>
              <Stack direction="row" spacing={1} mt={3}>
                <MKButton color="white" href="https://hanabi-f5ee3.web.app/home">
                  Go to Website
                </MKButton>
                <MKButton variant="text" color="white">
                  Read more
                </MKButton>
              </Stack>
            </Grid>
          </Container>
        </MKBox>
      </MKBox>
    );
  };

  export default HeaderOne;
}

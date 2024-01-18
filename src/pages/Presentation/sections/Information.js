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

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
// import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image="https://firebasestorage.googleapis.com/v0/b/portfolio-d723c.appspot.com/o/presentation%20-%20poster%2FChelsie%20linkedin%20photo.jpg?alt=media&token=f12439be-25ed-42db-9355-ff2f04c538eb"
                // icon="touch_app"
                title={
                  <>
                    {/* Feel the
                    <br />
                    Material Kit */}
                  </>
                }
                // description="All the MUI components that you need in a development have been re-design with the new look."
              />
              <RotatingCardBack
                image={bgBack}
                title="Chelsie Lin"
                description="creating products means creating value."
                action={{
                  type: "internal",
                  href: "https://www.linkedin.com/in/chelsielin/",
                  label: "See my Linkedin",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  // icon="content_copy"
                  title="Introduction"
                  description={
                    <>
                      A product developer with an advertising background, driven by a strong passion
                      to create innovative experiences and human-centric products to contribute to
                      society.
                      <br />
                    </>
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  // icon="flip_to_front"
                  title="Education"
                  description={
                    <>
                      National ChengChi University <br />
                      B.A. Advertising,
                      <br />
                      Graduated Summa Cum Laude
                      <br />
                      <br />• Exchange Program :
                      <br /> Sun Yat-sen University(SYSU)
                      <br /> Renmin University of China(RUC)
                    </>
                  }
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  // icon="price_change"
                  title="Working Experience"
                  description={
                    <>
                      • LINE Bank Taiwan <br />
                      Chatbot Product Manager
                      <br />
                      • AppWorks School (boot camp)
                      <br /> Front-end Engineer
                    </>
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  // icon="devices"
                  title="Contact Info"
                  description={
                    <>
                      Email: chelsie.xue@gmail.com
                      <br />
                      Phone: +886 986-656-196
                      <br /> 📍 Location: Taiwan
                    </>
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;

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

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Stats page components
import NavbarDark from "layouts/sections/navigation/navbars/components/NavbarDark";

// Stats page components code
import navbarDarkCode from "layouts/sections/navigation/navbars/components/NavbarDark/code";
import HeaderOne from "layouts/sections/navigation/navbars/components/HeaderOne";

function Navbars() {
  return (
    <BaseLayout
      title="Clothing E-commerce Website - STYLiSH"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/navigation/navbars" },
        { label: "Navbars" },
      ]}
    >
      <View title="Navbar dark" code={navbarDarkCode}>
        <MKBox py={6}>
          <HeaderOne />
        </MKBox>
      </View>
      <View title="Navbar dark" code={navbarDarkCode}>
        <MKBox py={6}>
          <NavbarDark />
        </MKBox>
      </View>
    </BaseLayout>
  );
}

export default Navbars;

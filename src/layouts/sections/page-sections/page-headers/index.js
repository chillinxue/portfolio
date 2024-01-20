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

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// PageHeaders page components
import HanabiOne from "layouts/sections/page-sections/page-headers/components/HeaderOne";
import HeaderTwo from "layouts/sections/page-sections/page-headers/components/HeaderTwo";

// PageHeaders page components code
import headerOneCode from "layouts/sections/page-sections/page-headers/components/HeaderOne/code";

function PageHeaders() {
  return (
    <BaseLayout
      title="Travel Planning Website - HANABI"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/page-headers" },
        { label: "hanabi" },
      ]}
    >
      <View title="Main Page" code={headerOneCode} height="40rems">
        <HanabiOne />
      </View>
      <View title="Introduction" code={headerOneCode} height="111rem">
        <HeaderTwo />
      </View>
    </BaseLayout>
  );
}

export default PageHeaders;

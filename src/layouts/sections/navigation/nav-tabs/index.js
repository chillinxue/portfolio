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
import TabsSimple from "layouts/sections/navigation/nav-tabs/components/TabsSimple";
import HeaderOne from "layouts/sections/navigation/nav-tabs/components/TabsSimple/HeaderOne";

// Stats page components code
import tabsSimpleCode from "layouts/sections/navigation/nav-tabs/components/TabsSimple/code";

function VrMainPage() {
  return (
    <BaseLayout
      title="VR Game - Love 360"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/navigation/nav-tabs" },
        { label: "Nav Tabs" },
      ]}
    >
      <View title="Tabs simple" code={tabsSimpleCode}>
        <MKBox bgColor="white">
          <HeaderOne />
        </MKBox>
      </View>
      <View title="Tabs simple" code={tabsSimpleCode}>
        <MKBox bgColor="white">
          <TabsSimple />
        </MKBox>
      </View>
    </BaseLayout>
  );
}

export default VrMainPage;

import {
  Box,
  Card,
  Layout,
  Link,
  List,
  Page,
  Text,
  BlockStack,
} from "@shopify/polaris";

import Products from "../pages/Products";
// import Header from "../components/Header"
import stylesUrl from "~/styles/setup.css";
export const links = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};


function products() {
  return (
    <Page>
      <Layout>
        <Layout.Section>
          {/* <Header/> */}
          <Products />
        </Layout.Section>
      </Layout>
    </Page>
  )
}

export default products

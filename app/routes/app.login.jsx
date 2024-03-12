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

import Login from "../pages/Login";
// import Header from "../components/Header"
import stylesUrl from "~/styles/setup.css";
export const links = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};


function Register() {
  return (
    <Page>
      <Layout>
        <Layout.Section>
<Login/>
        </Layout.Section>
      </Layout>
    </Page>
  )
}

export default Register
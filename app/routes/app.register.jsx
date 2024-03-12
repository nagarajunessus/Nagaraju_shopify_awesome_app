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
  
import Signup from "../pages/Signup";
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
            {/* <Header/> */}
            <Signup/>
          </Layout.Section>
        </Layout>
      </Page>
    )
  }
  
  export default Register
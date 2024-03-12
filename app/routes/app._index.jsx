import { useEffect } from "react";
import { json } from "@remix-run/node";
import { useActionData, useNavigation, useSubmit } from "@remix-run/react";
import Main from "../pages/Main";
// import {BrowserRouter,Route,Routes,useLocation} from "react-router-dom";
// import {Provider as AppBridgeProvider,useRoutePropagation} from '@shopify/app-bridge-react';
import {
  Page,
  Layout,
  Text,
  Card,
  Button,
  BlockStack,
  Box,
  List,
  Link,
  Grid,
  InlineStack,
} from "@shopify/polaris";
import { authenticate } from "../shopify.server";

import stylesUrl from "~/styles/setup.css";
export const links = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return null;
};

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  const color = ["Red", "Orange", "Yellow", "Green"][
    Math.floor(Math.random() * 4)
  ];
  const response = await admin.graphql(
    `#graphql
      mutation populateProduct($input: ProductInput!) {
        productCreate(input: $input) {
          product {
            id
            title
            handle
            status
            variants(first: 10) {
              edges {
                node {
                  id
                  price
                  barcode
                  createdAt
                }
              }
            }
          }
        }
      }`,
    {
      variables: {
        input: {
          title: `${color} Snowboard`,
          variants: [{ price: Math.random() * 100 }],
        },
      },
    },
  );
  const responseJson = await response.json();

  return json({
    product: responseJson.data?.productCreate?.product,
  });
};

export default function Index() {
  const nav = useNavigation();
  const actionData = useActionData();
  const submit = useSubmit();
  const isLoading =
    ["loading", "submitting"].includes(nav.state) && nav.formMethod === "POST";
  const productId = actionData?.product?.id.replace(
    "gid://shopify/Product/",
    "",
  );

  useEffect(() => {
    if (productId) {
      shopify.toast.show("Product created");
    }
  }, [productId]);
  const generateProduct = () => submit({}, { replace: true, method: "POST" });


  return (
    <Page>
      {/* <ui-title-bar title="Remix app template">
        <button variant="primary" onClick={generateProduct}>
          Generate a product
        </button>
      </ui-title-bar> */}
      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            <Main />
            {/* <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Main />} />
            </Routes>
            </BrowserRouter> */}
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}

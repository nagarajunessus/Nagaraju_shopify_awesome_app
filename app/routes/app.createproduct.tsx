// Import necessary modules and components
import React from "react";
import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useActionData, useSubmit } from "@remix-run/react";
import { Button, Card, Page, TextField } from "@shopify/polaris";
import { useState } from "react";
import { authenticate } from "~/shopify.server";

// Import createProduct function
import { createProduct } from "~/api/prisma.server";

// Your existing imports...

export const action: ActionFunction = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  const formData = await request.formData();

  const name = formData.get("name") || "";
  const price = parseFloat(formData.get("price")?.toString() || "0");
  const description = formData.get("description") || "";

  try {
    const response = await admin.graphql(
      `mutation productCreate($input: ProductInput!) {
        productCreate(input: $input) {
          userErrors {
            field
            message
          }
          product {
            id
            title
            variants {
              edges {
                node {
                  id
                  priceV2 {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }`,
      {
        variables: {
          input: {
            title: name,
            variants: [
              {
                price: price,
                currencyCode: "USD",
              },
            ],
            description: description,
          },
        },
      }
   );
   

    if (response.ok) {
      const data = await response.json();

      // Handle the response and create product in your database
      const createdProduct = await createProduct({
        title: name,
        price: price.toString(), // Prisma might expect a string for the price
        description: description,
      });

      return json({
        data: { ...data.data, createdProduct },
      });
    }
  } catch (err) {
    console.error("Error creating product:",err);
    return json({ error: "Failed to create product. Please try again."},500);
  }

  return null;
};

const Products = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch('/path-to-action', {
        method: 'POST',
        body: new URLSearchParams({
          name,
          price,
          description,
        }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        // Handle success
        console.log('Product created successfully');
      } else {
        // Handle error
        console.error('Failed to create product');
      }
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <Page>
      <Card>
        <Form onSubmit={handleSubmit} method="post">
          <TextField
            id="name"
            name="name"
            label="Product Name"
            autoComplete="off"
            value={name}
            onChange={(value) => setName(value)}
          />
          <TextField
            id="price"
            name="price"
            label="Price"
            autoComplete="off"
            type="number"
            value={price}
            onChange={(value) => setPrice(value)}
          />
          <TextField
            id="description"
            name="description"
            label="Description"
            autoComplete="off"
            value={description}
            onChange={(value) => setDescription(value)}
          />
          <Button submit>Create Product</Button>
        </Form>
      </Card>
    </Page>
  );
};


export default Products;



// import type { LoaderFunction } from "@remix-run/node";
// import { useState } from "react";
// import { useLoaderData } from "@remix-run/react";
// import { Card, Layout, List, Page, Form, TextField, Button } from "@shopify/polaris";
// import { apiVersion, authenticate } from "~/shopify.server";

// export const query = `
// {
//     products(first: 10){
//         edges{
//             node{
//                 id
//                 handle
//                 title
//                 description
//             }
//         }
//         pageInfo {
//             hasNextPage
//         }
//     }
// }
// `;

// export const loader: LoaderFunction = async ({ request }) => {
//   const { session } = await authenticate.admin(request);
//   const { shop, accessToken } = session;

//   try {
//     const response = await fetch(`https://${shop}/admin/api/${apiVersion}/graphql.json`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/graphql",
//         "X-Shopify-Access-Token": accessToken!,
//       },
//       body: query,
//     });

//     if (response.ok) {
//       const data = await response.json();

//       const {
//         data: {
//           products: { edges },
//         },
//       } = data;
//       return edges;
//     }

//     return null;
//   } catch (err) {
//     console.log(err);
//   }
// };

// const Products = () => {
//   const [newProduct, setNewProduct] = useState({
//     title: "",
//     description: "",
//   });

//   const products: any = useLoaderData();

//   const handleInputChange = (field: string, value: string) => {
//     setNewProduct((prevProduct) => ({
//       ...prevProduct,
//       [field]: value,
//     }));
//   };

//   const handleAddProduct = () => {
//     // Implement the logic to add the new product to your Shopify store
//     console.log("Adding product:", newProduct);
//   };


  

//   return (
//     <Page>
//       <Layout>
//         <Layout.Section>
//           <Card>
//             <Form onSubmit={handleAddProduct}>
//               <TextField
//                 label="Title"
//                 value={newProduct.title}
//                 onChange={(value) => handleInputChange("title", value)}
//               />
//               <TextField
//                 label="Description"
//                 value={newProduct.description}
//                 onChange={(value) => handleInputChange("description", value)}
//               />
//               <Button primary submit>
//                 Add Product
//               </Button>
//             </Form>
//             {/* <List type="bullet" gap="loose">
//               {products.map((edge: any) => {
//                 const { node: product } = edge;
//                 return (
//                   <List.Item key={product.id}>
//                     <h2>{product.title}</h2>
//                     <p>{product.description}</p>
//                   </List.Item>
//                 );
//               })}
//             </List> */}
//           </Card>
//         </Layout.Section>
//       </Layout>
//     </Page>
//   );
// };

// export default Products;

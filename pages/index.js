import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";
import Products from "../components/products/Products";

// page-url - {host}/
function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Product List</title>
        <meta name="description" content="Product List"></meta>
      </Head>
      <Products products={props.products}></Products>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.movlm.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

  const client = await MongoClient.connect(connectionString);
  const db = client.db();

  const productsCollection = db.collection("products");
  const products = await productsCollection.find().toArray();

  client.close();

  return {
    props: {
      products: products.map((product) => ({
        id: product._id.toString(),
        seller: product.seller,
        product: product.product,
      })),
    },
  };
}

export default HomePage;

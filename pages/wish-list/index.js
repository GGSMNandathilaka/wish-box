import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";
import Products from "../../components/products/Products";

// page-url - {host}/wish-list
function WishList(props) {
  return (
    <Fragment>
      <Head>
        <title>Wish List</title>
        <meta name="description" content="Wish List"></meta>
      </Head>
      <Products products={props.wishedProducts}></Products>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.movlm.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

  const client = await MongoClient.connect(connectionString);
  const db = client.db();

  const productsCollection = db.collection("products");
  const products = await productsCollection.find().toArray();
  const wishedProducts = products.filter(
    (product) => product.product.liked === true
  );

  client.close();

  return {
    props: {
      wishedProducts: wishedProducts.map((product) => ({
        id: product._id.toString(),
        seller: product.seller,
        product: product.product,
      })),
    },
  };
}

export default WishList;

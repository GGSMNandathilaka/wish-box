import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";
import { useState, setState } from "react";
import Products from "../../components/products/Products";

function WishList(props) {
  const [state, setState] = useState([]);
  const products = props.wishedProducts;

  const wishHandler = wishHandler(event, products);

  function wishHandler(event) {
    console.log("product-list", event);
    products.map((product) =>
      product.id === event.id
        ? (product.product.liked = !product.product.liked)
        : null
    );
    setState({ products });

    const wishedProduct = products.filter(
      (product) => product.id === event.id
    )[0];
    const clonedWishedProduct = { ...wishedProduct };
    delete clonedWishedProduct["id"];

    const payload = { id: event.id, data: clonedWishedProduct };
    updateProductHandler(payload);
  }

  async function updateProductHandler(payload) {
    const response = await fetch("/api/products", {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  }

  return (
    <Fragment>
      <Head>
        <title>Wish List</title>
        <meta name="description" content="Wish List"></meta>
      </Head>
      <Products
        products={props.wishedProducts}
        wishHandler={wishHandler}
      ></Products>
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

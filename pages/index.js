import { Fragment } from "react";
import Head from "next/head";
import Products from "../components/products/Products";

const products = [
  {
    id: "p1",
    seller: {
      name: "tracymcgrady",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    product: {
      name: "Nike shoes",
      price: "AED 36.00",
      liked: true,
      likeCount: 32,
      image:
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo",
      tags: ["#shoes", "#white", "#sport"],
      comments: [
        {
          note: "best shoes",
        },
      ],
    },
  },
  {
    id: "p2",
    seller: {
      name: "abcdefsays_shs",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    product: {
      name: "Nike shoes",
      price: "AED 36.00",
      liked: true,
      likeCount: 32,
      image:
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=694&q=80",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo",
      tags: ["#shoes", "#white", "#sport"],
      comments: [
        {
          note: "best shoes",
        },
      ],
    },
  },
  {
    id: "p3",
    seller: {
      name: "retwgscgs_sjs01",
      image:
        "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    product: {
      name: "Nike shoes",
      price: "AED 36.00",
      liked: true,
      likeCount: 32,
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1959&q=80",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo",
      tags: ["#shoes", "#white", "#sport"],
      comments: [
        {
          note: "best shoes",
        },
      ],
    },
  },
  {
    id: "p4",
    seller: {
      name: "shsvhs16161",
      image:
        "https://images.unsplash.com/photo-1594616838951-c155f8d978a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    product: {
      name: "Nike shoes",
      price: "AED 36.00",
      liked: true,
      likeCount: 32,
      image:
        "https://images.unsplash.com/photo-1581003989510-ba20094d343c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1944&q=80",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo",
      tags: ["#shoes", "#white", "#sport"],
      comments: [
        {
          note: "best shoes",
        },
      ],
    },
  },
  {
    id: "p5",
    seller: {
      name: "tesgcrsn16464",
      image:
        "https://images.unsplash.com/photo-1544724107-6d5c4caaff30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80",
    },
    product: {
      name: "Nike shoes",
      price: "AED 36.00",
      liked: true,
      likeCount: 32,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo",
      tags: ["#shoes", "#white", "#sport"],
      comments: [
        {
          note: "best shoes",
        },
      ],
    },
  },
  {
    id: "p6",
    seller: {
      name: "ryan64646",
      image:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    },
    product: {
      name: "Nike shoes",
      price: "AED 36.00",
      liked: true,
      likeCount: 32,
      image:
        "https://images.unsplash.com/photo-1602810320073-1230c46d89d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo",
      tags: ["#shoes", "#white", "#sport"],
      comments: [
        {
          note: "best shoes",
        },
        {
          note: "best shoes",
        },
        {
          note: "best shoes",
        },
        {
          note: "best shoes",
        },
      ],
    },
  },
];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Product List</title>
        <meta name="description" content="Product List"></meta>
      </Head>
      <Products products={products}></Products>
    </Fragment>
  );
}

export default HomePage;

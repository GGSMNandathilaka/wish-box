# Demo

# [https://wish-box.vercel.app/](https://wish-box.vercel.app/)


# Getting Started

Create a NextJs application using create-next-app ([https://nextjs.org/docs/getting-starte](https://nextjs.org/docs/getting-starte)d).

**npx create-next-app**

Then you have to enter a project name.

You can run your NextJs application using the following command.

**npm run dev**

Then you can see a up and running web application running on **http://localhost:3000/**


# File Based Routing


# Adding First Pages To The Project

NextJs promotes file based routing ([https://nextjs.org/docs/routing/introduction](https://nextjs.org/docs/routing/introduction)). So we have to create separate .js files inside the file system.

pages/index.js behaves as the base-route. If we need to create nested routes we can define them using separate folders inside the **pages **directory.

Here I have created a nested route for the **‘Liked’ **page as **/wish-list**


# Programmatic Navigation

Since this is a single page application we need to handle user navigation and page routing without reloading web pages. So, I have used the Link** **component to achieve this ([https://nextjs.org/docs/api-reference/next/link](https://nextjs.org/docs/api-reference/next/link)).


# Define Reusable Components

Every web application needs a set of reusable components to maintain the code quality, improve development efficiency & lower cost. The Following are the components which I have created for this application.



*   components/layout/Layout.js
    *   Mainly this web application can be divided into 2 main placeholders. They are header and content. So I have created a layout component to maintain this scaffolding.
*   components/layout/MainNavigation.js
    *   This component defines all navigation paths inside this single page application.
*   components/products/Products.js
    *   Mainly this application promotes a list of products. So this is a business component to iterate products.
*   components/ui/ProductCard.js
    *   This component is a reusable card component to depict product details. This card component iterates in the Products component


# API Routes


# Define API endpoints based on the file routes

I have to create a separate route to retrieve data to accommodate the UI components. NextJs provides a great feature to achieve this ([https://nextjs.org/docs/api-routes/introduction](https://nextjs.org/docs/api-routes/introduction)). We can develop server side applications in the same NextJs application. In the **pages **directory we can find a directory called **api**. In there we can define files for API endpoints. In this application I want to retrieve a list of products. So I have created a file called **‘products.js’**. That file acts as an API endpoint (/api/products).


# Connecting and Querying MongoDB


# Create a document DB inside MongoDB cloud.

I have signed up to MongoDB cloud and created a DB cluster. Inside that cluster I created a database and a data collection. Then I have imported a json document to create collection documents.
([https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas))

My data model is as follows.



*   _id
*   seller
    *   name
    *   image
*   product
    *   name
    *   price
    *   liked
    *   likeCount
    *   image
    *   description
    *   tags
    *   Comments

	


# Connect to mongodb



*   Install mongodb driver using npm.
    *   **npm i mongodb**  
*   You have to create a connection string as below
    *   const connectionString = `mongodb+srv://${**process.env.mongodb_username**}:${**process.env.mongodb_password**}@${**process.env.mongodb_clustername**}.movlm.mongodb.net/${**process.env.mongodb_database**}?retryWrites=true&w=majority`;
*   Create a **MongoClient ** as below
    *   **const client = await MongoClient.connect(connectionString);**
*   Connect to the DB
    *   **const db = client.db();**
*   After that you can access collections and query them.
    *   **const productsCollection = db.collection("products");**


# Data Fetching

I have used the **getServerSideProps()** function to fetch a product list. Once connected to the DB we can access the collection. After retrieving the collection I have assigned data to the **props **of** **the functional component. That props will pass into js components.

[https://nextjs.org/docs/basic-features/data-fetching](https://nextjs.org/docs/basic-features/data-fetching)


# Sending HTTP Requests to API Routes

I have used a PUT request to update the **liked **status of a product. In there I have used a API route (**/api/products**)


# Add “”head” Metadata to Pages

I have added head metadata to the landing  page and the liked page to support SEO.


# CSS framework

I have used [https://tailwindcss.com/](https://tailwindcss.com/) for the styling.


# Deployment

[https://nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)

I have used Vercel for the deployment. In my github repository I have created two separate branches. Main deployment push from the master branch.

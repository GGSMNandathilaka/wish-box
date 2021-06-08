# Getting Started

Create a NextJs application using create-next-app.

**npx create-next-app**

Then you have to enter a project name.

You can run your NextJs application using the following command.

**npm run dev**

Then you can see a up and running web application running on **http://localhost:3000/**


# File Based Routing


# Adding First Pages To The Project

NextJs promotes file based routing (https://nextjs.org/docs/routing/introduction). So we have to create separate .js files inside the file system.

pages/index.js behaves as the base-route. If we need to create nested routes we can define them using separate folders inside the **pages **directory.

Here I have created a nested route for the **‘Liked’ **page as **/wish-list**


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

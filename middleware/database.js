import { MongoClient } from "mongodb";

function database() {
    async function getProducts(context) {
        const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.movlm.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

        const client = await MongoClient.connect(connectionString);
        const db = client.db();
      
        const productsCollection = db.collection("products");
        const products = await productsCollection.find().toArray();
      
        client.close();
      
        return products;
    }
  
}

export default database;

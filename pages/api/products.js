import { MongoClient, ObjectId } from "mongodb";
// /api/products
// PATCH /api/products

async function handler(req, res) {
  if (req.method === "PUT") {
    const payload = req.body;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.movlm.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    const client = await MongoClient.connect(connectionString);
    const db = client.db();

    const meetupsCollection = db.collection("products");
    const result = await meetupsCollection.findOneAndUpdate(
      { _id: ObjectId(payload.id) },
      { $set: payload.data },
      { upsert: true }
    );

    client.close();

    res.status(200).json({ message: "Product updated successfully" });
  }
}

export default handler;

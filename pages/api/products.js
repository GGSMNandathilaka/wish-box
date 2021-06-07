import { MongoClient, ObjectId } from "mongodb";
// /api/products
// PATCH /api/products

async function handler(req, res) {
  if (req.method === "PUT") {
    const payload = req.body;
    console.log(payload);

    const connectionString = `mongodb+srv://${process.env.NEXT_PUBLIC_mongodb_username}:${process.env.NEXT_PUBLIC_mongodb_password}@${process.env.NEXT_PUBLIC_mongodb_clustername}.movlm.mongodb.net/${process.env.NEXT_PUBLIC_mongodb_database}?retryWrites=true&w=majority`;

    const client = await MongoClient.connect(connectionString);
    const db = client.db();

    const meetupsCollection = db.collection("products");
    const result = await meetupsCollection.findOneAndUpdate(
      { _id: ObjectId(payload.id) },
      { $set: payload.data },
      { upsert: true }
    );

    console.log(result);

    client.close();

    res.status(200).json({ message: "Product updated successfully" });
  }
}

export default handler;

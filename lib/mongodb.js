import { MongoClient } from "mongodb";

export default async function mongoDB() {
  const client = new MongoClient(process.env.MONGODB_URI);

  await client.connect();

  const db = client.db("drms");

  const rehabilitations = await db
    .collection("rehabilitations")
    .find({})
    .toArray();

  await client.close();

  return rehabilitations;
}

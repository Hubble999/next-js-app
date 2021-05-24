import { MongoClient } from 'mongodb';

const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.o0fj6.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

export const connectDB = async () => {
  const client = await MongoClient.connect(connectionString);
  return client;
};

export const insertData = async (client, collection, data) => {
  const db = client.db();

  const result = await db.collection(collection).insertOne(data);

  return result;
};

export const getAllComments = async (client, collection, sort) => {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
};

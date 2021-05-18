import { MongoClient } from 'mongodb';

export const connectDB = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://mark:XBIMy29EXnpacMJC@cluster0.o0fj6.mongodb.net/events?retryWrites=true&w=majority'
  );
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

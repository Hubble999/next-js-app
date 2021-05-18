import { validation } from '../../utils/events.js';
import { connectDB, insertData } from '../../utils/db.js';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email } = req.body;
    const { isValid, errors } = await validation(email);

    if (!isValid) {
      res.status(422).json({ errors });
      return;
    }
    let client;
    try {
      client = await connectDB();
      console.log(2321, client);
    } catch (err) {
      res.status(500).json({ message: 'Connecting to the database failed!' });
      return;
    }
    try {
      await insertData(client, 'emails', { email });
      client.close();
    } catch (err) {
      res.status(500).json({ message: 'inserting data failed!' });
      return;
    }

    res.status(201).json({ message: 'Signed up!' });
  }
};

export default handler;

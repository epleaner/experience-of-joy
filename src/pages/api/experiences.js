import { connectToDatabase } from '@utils/db';

export default async function handler(req, res) {
  const { method } = req;

  const { db } = await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const dbRes = await db.collection('experiences').find({}); // pass empty object as query to return all documents
        const experiences = await dbRes.toArray();

        res.status(200).json({ success: true, experiences });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const experience = req.body;
        await db
          .collection('experiences')
          .insertOne({ experience, date: new Date() });

        res.status(201).json({ success: true, experience });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

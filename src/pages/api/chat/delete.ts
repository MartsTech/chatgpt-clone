import {chatDeleteRepository} from '@features/chat/chat-repository';
import type {NextApiRequest, NextApiResponse} from 'next';
import {getServerSession} from 'next-auth';
import {authOptions} from '../auth/[...nextauth]';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({message: 'Unauthorized'});
  }

  if (typeof req.query.id !== 'string') {
    return res.status(400).json({message: 'Bad request'});
  }

  const id = await chatDeleteRepository({
    userId: session.user.id,
    chatId: req.query.id,
  });

  res.status(200).json(id);
};

export default handler;

import {chatCreateRepository} from '@features/chat/chat-repository';
import type {NextApiRequest, NextApiResponse} from 'next';
import {getServerSession} from 'next-auth';
import {authOptions} from '../auth/[...nextauth]';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({message: 'Unauthorized'});
  }

  const chat = await chatCreateRepository({
    userId: session.user.id,
  });

  res.status(200).json(chat);
};

export default handler;

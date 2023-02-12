import {chatMessageCreateRepository} from '@features/chat/chat-repository';
import {authOptions} from '@pages/api/auth/[...nextauth]';
import type {NextApiRequest, NextApiResponse} from 'next';
import {getServerSession} from 'next-auth';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({message: 'Unauthorized'});
  }

  if (
    typeof req.body.chatId !== 'string' ||
    typeof req.body.body !== 'string'
  ) {
    return res.status(400).json({message: 'Bad Request'});
  }

  const message = await chatMessageCreateRepository({
    userId: session.user.id,
    chatId: req.body.chatId,
    body: req.body.body,
  });

  res.status(200).json(message);
};

export default handler;

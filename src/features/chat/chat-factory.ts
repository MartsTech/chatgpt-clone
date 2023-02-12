import {
  DocumentData,
  DocumentSnapshot,
  serverTimestamp,
} from 'firebase/firestore';
import type {
  ChatCreateData,
  ChatMessageCreateArgs,
  ChatMessageCreateData,
  ChatMessageModel,
  ChatModel,
} from './chat-types';

export const chatCreateDataFactory = (): ChatCreateData => ({
  createdAt: serverTimestamp(),
});

export const chatModelDocFactory = (
  doc: DocumentSnapshot<DocumentData>,
): ChatModel => {
  const data = doc.data() as ChatCreateData;

  return {
    id: doc.id,
    createdAt: data.createdAt.seconds * 1000,
    messages: [],
  };
};

export const chatMessageCreateDataFactory = (
  args: ChatMessageCreateArgs,
): ChatMessageCreateData =>
  typeof args.model === 'string'
    ? {
        body: args.body,
        model: args.model,
        createdAt: serverTimestamp(),
      }
    : {
        body: args.body,
        createdAt: serverTimestamp(),
      };

export const chatMessageModelDocFactory = (
  doc: DocumentSnapshot<DocumentData>,
): ChatMessageModel => {
  const data = doc.data() as ChatMessageCreateData;

  return typeof data.model === 'string'
    ? {
        id: doc.id,
        body: data.body,
        model: data.model,
        createdAt: data.createdAt.seconds * 1000,
      }
    : {
        id: doc.id,
        body: data.body,
        createdAt: data.createdAt.seconds * 1000,
      };
};

import {
  DocumentData,
  DocumentSnapshot,
  serverTimestamp,
} from 'firebase/firestore';
import type {ChatCreateData, ChatModel} from './chat-types';

export const chatCreateDataFactory = (): ChatCreateData => ({
  createdAt: serverTimestamp(),
});

export const chatModelDocFactory = (
  doc: DocumentSnapshot<DocumentData>,
): ChatModel => {
  const data = doc.data() as ChatCreateData;

  return {
    id: doc.id,
    createdAt: data.createdAt,
  };
};

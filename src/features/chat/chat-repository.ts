import {firestore} from '@lib/firebase';
import {addDoc, collection, getDoc, getDocs} from 'firebase/firestore';
import {chatCreateDataFactory, chatModelDocFactory} from './chat-factory';
import type {
  ChatCreateArgs,
  ChatCreateData,
  ChatGetAllArgs,
  ChatModel,
} from './chat-types';

export const chatCreateRepository = async (
  args: ChatCreateArgs,
): Promise<ChatModel> => {
  const collectionRef = collection(firestore, 'users', args.userId, 'chats');

  const data: ChatCreateData = chatCreateDataFactory();

  const docRef = await addDoc(collectionRef, data);

  const doc = await getDoc(docRef);

  const model = chatModelDocFactory(doc);

  return model;
};

export const chatGetAllRepository = async (
  args: ChatGetAllArgs,
): Promise<ChatModel[]> => {
  const ref = collection(firestore, 'users', args.userId, 'chats');

  const snap = await getDocs(ref);

  const models = snap.docs.map(doc => chatModelDocFactory(doc));

  return models;
};

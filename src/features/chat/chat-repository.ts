import {firestore} from '@lib/firebase';
import {adminFirestore} from '@lib/firebase/admin';
import {} from 'firebase-admin/firestore';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from 'firebase/firestore';
import {chatCreateDataFactory, chatModelDocFactory} from './chat-factory';
import type {
  ChatCreateArgs,
  ChatCreateData,
  ChatDeleteAllArgs,
  ChatDeleteArgs,
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

export const chatDeleteRepository = async (
  args: ChatDeleteArgs,
): Promise<string> => {
  const ref = doc(firestore, 'users', args.userId, 'chats', args.chatId);

  await deleteDoc(ref);

  return ref.id;
};

export const chatDeleteAllRepository = async (
  args: ChatDeleteAllArgs,
): Promise<void> => {
  const ref = adminFirestore.collection(`users/${args.userId}/chats`);

  const snap = await ref.get();

  if (snap.size === 0) {
    return;
  }

  const batch = adminFirestore.batch();

  snap.docs.forEach(doc => {
    batch.delete(doc.ref);
  });

  await batch.commit();
};

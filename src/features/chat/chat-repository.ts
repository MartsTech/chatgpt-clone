import {firestore} from '@lib/firebase';
import {adminFirestore} from '@lib/firebase/admin';
import {openai} from '@lib/openai';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore';
import {
  chatCreateDataFactory,
  chatMessageCreateDataFactory,
  chatMessageModelDocFactory,
  chatModelDocFactory,
} from './chat-factory';
import type {
  ChatCreateArgs,
  ChatCreateData,
  ChatDeleteAllArgs,
  ChatDeleteArgs,
  ChatGetAllArgs,
  ChatMessageCreateArgs,
  ChatMessageCreateCompletionArgs,
  ChatMessageCreateData,
  ChatMessageGetAllArgs,
  ChatMessageModel,
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

  const snap = await getDocs(query(ref, orderBy('createdAt', 'asc')));

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
  const chatsRef = adminFirestore
    .collection('users')
    .doc(args.userId)
    .collection('chats');

  const chatsSnap = await chatsRef.get();

  if (chatsSnap.size === 0) {
    return;
  }

  const batch = adminFirestore.batch();

  chatsSnap.docs.forEach(async chat => {
    batch.delete(chat.ref);
  });

  await batch.commit();
};

export const chatMessageCreateRepository = async (
  args: ChatMessageCreateArgs,
): Promise<ChatMessageModel> => {
  const collectionRef = collection(
    firestore,
    'users',
    args.userId,
    'chats',
    args.chatId,
    'messages',
  );

  const data: ChatMessageCreateData = chatMessageCreateDataFactory(args);

  const docRef = await addDoc(collectionRef, data);

  const snap = await getDoc(docRef);

  const model: ChatMessageModel = chatMessageModelDocFactory(snap);

  return model;
};

export const chatMessageGetAllRepository = async (
  args: ChatMessageGetAllArgs,
): Promise<ChatMessageModel[]> => {
  const ref = collection(
    firestore,
    'users',
    args.userId,
    'chats',
    args.chatId,
    'messages',
  );

  const snap = await getDocs(query(ref, orderBy('createdAt', 'asc')));

  const models = snap.docs.map(doc => chatMessageModelDocFactory(doc));

  return models;
};

export const chatMessageCreateCompletionRepository = async (
  args: ChatMessageCreateCompletionArgs,
): Promise<ChatMessageModel> => {
  let body: string;

  try {
    const response = await openai.createCompletion({
      model: args.model,
      prompt: args.prompt,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    body =
      response.data.choices[0].text ||
      'Unable to generate response. Please try again later.';
  } catch (error) {
    body = 'Unable to generate response. Please try again later.';
  }

  const collectionRef = collection(
    firestore,
    'users',
    args.userId,
    'chats',
    args.chatId,
    'messages',
  );

  const data: ChatMessageCreateData = chatMessageCreateDataFactory({
    body,
    userId: args.userId,
    chatId: args.chatId,
    model: args.model,
  });

  const docRef = await addDoc(collectionRef, data);

  const snap = await getDoc(docRef);

  const model: ChatMessageModel = chatMessageModelDocFactory(snap);

  return model;
};

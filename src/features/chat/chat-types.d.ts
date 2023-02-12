export interface ChatCreateArgs {
  userId: string;
}

export interface ChatCreateData {
  createdAt: firebase.firestore.Timestamp;
}

export interface ChatModel {
  id: string;
  createdAt: number;
  messages: ChatMessageModel[];
}

export interface ChatGetAllArgs {
  userId: string;
}

export interface ChatDeleteArgs {
  userId: string;
  chatId: string;
}

export interface ChatDeleteAllArgs {
  userId: string;
}

export interface ChatMessageCreateArgs {
  body: string;
  userId: string;
  chatId: string;
  model?: string;
}

export interface ChatMessageCreateData {
  body: string;
  createdAt: firebase.firestore.Timestamp;
  model?: string;
}

export interface ChatMessageModel {
  id: string;
  body: string;
  createdAt: number;
  model?: string;
}

export interface ChatMessageGetAllArgs {
  userId: string;
  chatId: string;
}

export interface ChatMessageCreateCompletionArgs {
  userId: string;
  chatId: string;
  prompt: string;
  model: string;
}

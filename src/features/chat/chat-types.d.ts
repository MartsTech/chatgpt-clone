export interface ChatCreateArgs {
  userId: string;
}

export interface ChatCreateData {
  createdAt: firebase.firestore.Timestamp;
}

export interface ChatModel {
  id: string;
  createdAt: number;
}

export interface ChatGetAllArgs {
  userId: string;
}

export interface ChatDeleteArgs {
  userId: string;
  chatId: string;
}

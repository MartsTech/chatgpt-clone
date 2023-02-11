export interface ChatCreateArgs {
  userId: string;
}

export interface ChatCreateData {
  createdAt: firebase.firestore.Timestamp;
}

export interface ChatModel {
  id: string;
  createdAt: firebase.firestore.Timestamp;
}

export interface ChatGetAllArgs {
  userId: string;
}

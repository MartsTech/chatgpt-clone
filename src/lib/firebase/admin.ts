import {
  AppOptions,
  cert,
  getApp,
  getApps,
  initializeApp,
} from 'firebase-admin/app';
import {getFirestore} from 'firebase-admin/firestore';

const adminConfig: AppOptions = {
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
  }),
};

const adminApp = getApps().length ? getApp() : initializeApp(adminConfig);
const adminFirestore = getFirestore(adminApp);

export {adminFirestore};

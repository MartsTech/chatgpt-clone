import {FirestoreAdapter} from '@next-auth/firebase-adapter';
import {cert} from 'firebase-admin/app';
import NextAuth, {NextAuthOptions} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
    }),
  }),
  callbacks: {
    jwt: ({token, user}) => {
      if (user) {
        token.userId = user.id;
      }
      return token;
    },
    session: ({session, token}) => {
      session.user.id = token.userId;
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
};

export default NextAuth(authOptions);

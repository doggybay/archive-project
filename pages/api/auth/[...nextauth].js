import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { useRouter } from 'next/router';
import { userLogin } from '../../../src/store/users/actionCreators';
import { useDispatch } from "react-redux";

const sendUser = (user) => {
  const dispatch = useDispatch();
  const router = useRouter();

  if (user) {
    const state = { email: user.email };

    dispatch(userLogin(state, router))
  }

}

const options = {
  site: process.env.SITE || "http://localhost:3000",

  //Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  //Configure one or more callback functions
  callbacks: {
    // signIn: async (user, account, profile) => {
    //   // localStorage.setItem("googleAuthUser", JSON.stringify(user));

    //   console.log('callbacks-singIuser: ', user)
    //   // sendUser(user)
      

      
      
      

    //   return Promise.resolve(true)
    // },
    session: async (session, user, account) => {
      session.user = user;
      session.account = account;
      return Promise.resolve(session);
    }
    
  },
  
  //A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options);
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Q from "q";
import * as CONFIG_KEYS from "../../../src/config/config";
import crypto from "crypto";
import db from "../../../src/config/dbConnection";
export default nextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        var deferred = Q.defer();
        var select = "Select * FROM User WHERE Email_Address= ? and status='Active'";
        var params = [credentials.emailId];
        const secret = CONFIG_KEYS.Config.encryption.jwt_secret;
        let access_Token = crypto.createHmac("sha256", secret).update(credentials.password).digest("hex");
        // console.log(credentials);
        const results = await db.query(select, params).then(
          function (dbResult) {
            // console.log(dbResult[0].Password);
            return dbResult[0];
            // res.status(200).json(dbResult);
            // deferred.resolve(dbResult);
          },
          function (err) {
            console.log(err);
            res.status(400).json(err);
            deferred.reject(err);
          }
        );
        // console.log(results);
        if (!Object.keys(results).length > 0) {
          throw new Error("No user Found");
        }
        if (access_Token !== results.Password) {
          throw new Error("In correct password");
        }
        if (Object.keys(results)) {
          return await results;
        } else return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
});

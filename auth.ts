import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        mailaddress: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const url = 'https://api.jquants.com/v1/token/auth_user';

        const data = {
          mailaddress: credentials?.mailaddress,
          password: credentials?.password,
        };

        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
          next: { revalidate: 86400 },
        });

        const token = await res.json();
        if (!token) {
          throw new Error('Token not found.');
        }

        return token;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  // session: {
  //   strategy: 'jwt',
  // },
  // callbacks: {
  //   async jwt({ token, user }) {
  //     console.log(token);
  //     console.log(user);

  //     if (user) {
  //       token.refreshToken = user.token;
  //     }
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     session.user.refreshToken = token.refreshToken;
  //     return session;
  //   },
  // },
});

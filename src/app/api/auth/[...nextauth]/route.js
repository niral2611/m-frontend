import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";


const emails = [
    "ajmeraniral@gmail.com",
    "najmera64725@gmail.com",
    "niral.aict21@sot.pdpu.ac.in"
]


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  jwt: {
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
    verificationOptions: {
        algorithm: ['ES256']
    }
  },
  callbacks: {
    async signIn({ user }) {
        if (emails.includes(user.email)){
            return true
        } 
        return false
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.email = profile.email;
        token.name = profile.name;
        token.picture = profile.picture;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.email = token.email;
      session.user.name = token.name;
      session.user.image = token.picture;
      return session;
    },
  },
  pages: {
    error: '/auth/login',
  }
});

export { handler as GET, handler as POST };

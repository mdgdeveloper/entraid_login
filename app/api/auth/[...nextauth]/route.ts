import NextAuth, { Account, Profile, User } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import AzureADProvider from 'next-auth/providers/azure-ad';


const options = {
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_CLIENT_ID || '',
      clientSecret: process.env.AZURE_CLIENT_SECRET || '',
      tenantId: process.env.AZURE_TENANT_ID || '',
      authorization: `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}/oauth2/v2.0/authorize`,
      token: `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}/oauth2/v2.0/token`,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn(params: { user: User | AdapterUser, account: Account | null, profile?: Profile }) {
      return true;
    },
    async redirect({ url, baseUrl }: { url: string, baseUrl: string }) {
      return "http://localhost:3000/protected";
      // return baseUrl;
    },
    async session({ session, token }: { session: any, token: any }) {
      session.accessToken = token.accessToken
      return session;
    },
    async jwt({ token, account }: { token: any, account: any }) {
      if (account) {
        token.accessToken = account.accessToken;
      }
      return token;
    },
  },
}

const handler = NextAuth(options);
export { handler as GET, handler as POST };



import { withAuth } from "next-auth/middleware";

export default withAuth({
  secret: process.env.SECRET,
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    authorized({ req, token }) {
      if (req.nextUrl.pathname.startsWith("/api")) {
        return Boolean(token);
      }

      return true;
    },
  },
});

export const config = {};

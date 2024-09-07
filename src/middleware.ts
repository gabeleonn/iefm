import { withAuth } from "next-auth/middleware";

export default withAuth({
  secret: process.env.SECRET,
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    authorized({ req, token }) {
      return Boolean(token);
    },
  },
});

export const config = {
  matcher: ["/api/:path*"],
};

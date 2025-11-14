import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      custom?: string; // add any custom field you want
    };
  }

  interface User {
    id: string;
    custom?: string;
  }
}

import NextAuth, { type DefaultSession } from "next-auth"
// next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  /**
   * Extending the built-in session types
   */
  interface Session {
    user: {
      id?: string;
      role?: string;
    } & DefaultUser;
  }

  /**
   * Extending the built-in user types
   */
  interface User {
    role?: string;
  }
}

declare module "@auth/core/types" {
  interface User {
    Role: UserRole
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    role: UserRole
  }
}

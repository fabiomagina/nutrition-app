import NextAuth, { type DefaultSession } from "next-auth"

declare module "@auth/core/types" {
  interface User {
    role: UserRole
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    role: UserRole
  }
}

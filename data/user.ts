"use server"

import { auth } from "@/auth";
import { db } from "@/lib/db";
import axios from "axios";

export const getUserByEmail = async (email: string) => {
    try {
        const user = await db.user.findUnique({ where: { email } })
        return user;
    } catch {
        return null;
    }
}

export const getUserById = async ({ id }: { id: string }) => {
    try {
        const user = await db.user.findUnique({ where: { id } })
        return user;
    } catch {
        return null;
    }
}


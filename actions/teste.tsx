import { getUserById } from "@/data/user"
import { auth } from "../auth"

export default async function UserAvatar() {
    
    const session = await auth()
    if (!session?.user?.id) return null

    const user = await getUserById(session.user.id)
}
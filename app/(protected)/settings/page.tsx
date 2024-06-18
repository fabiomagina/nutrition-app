import { auth, signOut } from "@/auth";
import { CardWrapper } from "@/components/auth/card-wrapper";
import Image from "next/image";

const SettingsPage = async () => {
	const session = await auth();

	return (
		<div >
			<CardWrapper>
				<div className="w-[500px] flex justi">
					<div>

					</div>
					<div>
						{session && session.user && (
							<div>
								<p>{session.user.name}</p>
							</div>
						)}
						<form action={async () => {
							"use server"
							await signOut();
						}}>
							<button type="submit">
								Sign out
							</button>
						</form>
					</div>
				</div>
			</CardWrapper>

		</div>
	);
};

export default SettingsPage;
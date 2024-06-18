import { auth, signOut } from "@/auth";
import Layout from "@/components/ui/templates/Layout";
import { CiLogout } from "react-icons/ci";


export default async function () {
    const session = await auth();

    return (
        <Layout headerText="Perfil" type="secondary" >
            <div className="flex flex-col w-full justify-center items-center md:mt-20">
                <div className="flex flex-col items-center gap-4 bg-gray-100 px-12 py-4 pt-12 rounded-md">
                    <div className="flex gap-6">
                        {session?.user?.image
                            ? <img src={session?.user?.image} alt="User profile picture" className="rounded-full h-[4.5rem] w-[4.5rem]" />
                            : <div className="h-[4.5rem] w-[4.5rem] bg-gray-300 rounded-full flex items-center justify-center "></div>}
                        <div className="flex flex-col pt-2">
                            {session && session.user && (
                                <div>
                                    <p className="text-xl">Email: <span className="text-2xl">{session.user.email}</span></p>
                                    <p className="text-xl">Username: <span className="text-2xl">{session.user.name}</span></p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full gap-[0.15rem]">
                        <p className=" font-semibold text-xl mb-2"> Metas de consumo diário:</p>
                        <p>Calorias: <span>3200kcal</span></p>
                        <p>Carboidratos: <span>580g</span></p>
                        <p>Proteinas: <span>100g</span></p>
                        <p>Gorduras: <span>50g</span></p>
                        
                    </div>
                    <p className="font-semibold text-xl mb-2 mt-4">Perfil: <span className="bg-gray-300 px-2 py-1 rounded-sm">Hipertrofia</span></p>
                    <form action={async () => {
                        "use server"
                        await signOut();
                    }}>
                        <button type="submit" className='bg-slate-900 text-gray-200 px-3 my-4 py-1 rounded-md flex items-center gap-2 '>
                            <CiLogout /> Sign out
                        </button>
                    </form>
                </div>
            </div>


        </Layout>
    );
};

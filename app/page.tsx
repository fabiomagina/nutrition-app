import { auth } from '@/auth'
import MenuInicial from '@/components/inicio/MenuInicial'
import LogoHome from '@/components/ui/LogoHome'
import { Button } from '@/components/ui/auth/button'
import Layout from '@/components/ui/templates/Layout'

export default async function Home() {
  const session = await auth()
  const user = session?.user?.name
  const userImage = session?.user?.image
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      {/* <LogoHome />
      <Button /> */}
      <Layout headerText={`Guia de refeições - Nutrition App`} userImage={userImage ?? ``} >
        <MenuInicial />
      </Layout>
    </div>
  )
}

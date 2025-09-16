import { useSession,signIn,signOut } from 'next-auth/react'


export default function Home() {
  const session = useSession()
  console.log('session', session);
  if (session.data === null) {
    return <div className='flex flex-col items-center justify-center min-h-screen'>
       <button onClick={signIn} className='bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded'>Login</button>
      
    </div>
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-2xl font-bold'>Hello {session?.data?.user.name}</h1>
       <button onClick={signOut} className='bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded'>Sign Out</button>
    </div>
  )
}

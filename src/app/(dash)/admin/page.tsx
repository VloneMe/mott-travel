import { Container } from '@/components/Container';
import { authOptions } from '@/lib/auth';
import { Session } from 'inspector';
import { getServerSession } from 'next-auth';


export default async function pages() {

  const session = await getServerSession(authOptions);
  console.log(session);

  if (session?.user.username){
    return (
      <div className='text-5xl font-bold flex w-full h-screen '
      >
        <Container className='w-full h-full flex justify-center items-center'>
            Hello {session?.user.username},Welcome to the Admin Panel
        </Container>
      </div>
    )
  }

  return (
    <div className='text-5xl font-bold flex w-full h-screen '
    >
      <Container className='w-full h-full flex justify-center items-center'>
          Please login to get your admin access.
      </Container>
    </div>
  )
}
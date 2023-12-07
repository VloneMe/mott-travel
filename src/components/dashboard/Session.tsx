import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export const Session = async () => {
  
    const session = await getServerSession(authOptions);
    console.log(session);
}

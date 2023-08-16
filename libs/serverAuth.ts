import { NextApiRequest } from 'next'

import prisma from '@/libs/prismadb'
// import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getSession } from 'next-auth/react'

const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({ req })

  if (!session?.user?.email) {
    throw new Error('serverAuth: Not signed in - Не авторизован 1')
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email
    }
  })

  if (!currentUser) {
    throw new Error('serverAuth: Not signed in - Не авторизован 2')
  }

  return { currentUser }
}

export default serverAuth

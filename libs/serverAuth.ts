import { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/libs/prismadb'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  // const session = await getSession({ req })
  const session = await getServerSession(req, res, authOptions)

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

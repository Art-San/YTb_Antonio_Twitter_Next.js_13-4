import { useRouter } from 'next/router'
import React from 'react'

const SidebarTweetButton = () => {
  const router = useRouter()
  return (
    <div onClick={() => router.push('/')}>
      <div>ffff</div>
    </div>
  )
}

export default SidebarTweetButton

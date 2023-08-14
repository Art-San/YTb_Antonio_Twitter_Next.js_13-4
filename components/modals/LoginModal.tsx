// [data, setData], handleChange из 02.Frontend-10.Forms.Part_2 (fast-company)
import useLoginModal from '@/hooks/useLoginModal'
import useRegisterModal from '@/hooks/useRegisterModal'
import { useCallback, useState } from 'react'
import Input from '../Input'
import Modal from '../Modal'

const LoginModal = () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()

  const [data, setData] = useState({ email: '', password: '' })
  console.log('data', data)
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (target: any) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  const onToggle = useCallback(() => {
    if (isLoading) {
      return
    }

    loginModal.onClose()
    registerModal.onOpen()
  }, [loginModal, registerModal, isLoading])

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true)

      // TODO LOG IN
      loginModal.onClose()
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [loginModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        name="email"
        onChange={handleChange}
        // onChange={(e) => setEmail(e.target.value)}
        value={data.email}
        disabled={isLoading}
      />
      <Input
        placeholder="Password"
        name="password"
        type="password"
        onChange={handleChange}
        value={data.password}
        disabled={isLoading}
      />
    </div>
  )

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Первый раз используете Twitter?
        <span
          onClick={onToggle}
          className="
            text-white
            cursor-pointer
            hover:underline
            "
        >
          {' '}
          Registration
        </span>
      </p>
    </div>
  )

  return (
    // 56:27
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Sign in"
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default LoginModal

// РАБОЧИЙ вариант

// import useLoginModal from '@/hooks/useLoginModal'
// import useRegisterModal from '@/hooks/useRegisterModal'
// import { useCallback, useState } from 'react'
// import Input from '../Input'
// import Modal from '../Modal'

// const LoginModal = () => {
//   const loginModal = useLoginModal()
//   const registerModal = useRegisterModal()

//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [isLoading, setIsLoading] = useState(false)

//   const onToggle = useCallback(() => {
//     if (isLoading) {
//       return
//     }

//     loginModal.onClose()
//     registerModal.onOpen()
//   }, [loginModal, registerModal, isLoading])

//   const onSubmit = useCallback(async () => {
//     try {
//       setIsLoading(true)

//       // TODO LOG IN
//       loginModal.onClose()
//     } catch (error) {
//       console.log(error)
//     } finally {
//       setIsLoading(false)
//     }
//   }, [loginModal])

//   const bodyContent = (
//     <div className="flex flex-col gap-4">
//       <Input
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//         value={email}
//         disabled={isLoading}
//       />
//       <Input
//         placeholder="Password"
//         type="password"
//         onChange={(e) => setPassword(e.target.value)}
//         value={password}
//         disabled={isLoading}
//       />
//     </div>
//   )

//   const footerContent = (
//     <div className="text-neutral-400 text-center mt-4">
//       <p>
//         Первый раз используете Twitter?
//         <span
//           onClick={onToggle}
//           className="
//             text-white
//             cursor-pointer
//             hover:underline
//             "
//         >
//           {' '}
//           Registration
//         </span>
//       </p>
//     </div>
//   )

//   return (
//     // 56:27
//     <Modal
//       disabled={isLoading}
//       isOpen={loginModal.isOpen}
//       title="Login"
//       actionLabel="Sign in"
//       onClose={loginModal.onClose}
//       onSubmit={onSubmit}
//       body={bodyContent}
//       footer={footerContent}
//     />
//   )
// }

// export default LoginModal

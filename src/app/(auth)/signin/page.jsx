'use client'
import { emailSignIn } from "@/firebase/auth/signin"
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function page() {
  const [email, setEmail ] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { result, error } = await emailSignIn(email, password)

    if (error) {
      if (error.code === 'auth/wrong-password') {
        console.log('invalid password, please try again')
      } else if (error.code === 'auth/invalid-email') {
        console.log('email not found, please try again')
      } else {
        console.log('something went wrong, please try again')
      }
      return console.log(error.code)
    } else {
        console.log('successful signin!')
        return router.push("/dashboard")
    }
  }
  
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="email"/>
          <input type="password"/>
          <Button type="submit">Login</Button>
        </form>
      </div>
    </>
  )
}

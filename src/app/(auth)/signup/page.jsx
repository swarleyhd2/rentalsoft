'use client'
import { emailSignUp } from "@/firebase/auth/signup"
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function page() {
  const [email, setEmail ] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { result, error } = await emailSignUp(email, password)

    if (error) {
      return console.log(error)
    }
    console.log(result)
    return router.push("/dashboard")
  }
  
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="email"/>
          <input type="password"/>
          <button type="submit">Signup</button>
        </form>
      </div>
    </>
  )
}
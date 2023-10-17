'use client'
import googleSignIn, { emailSignIn } from "@/firebase/auth/signin"
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
      return console.log(error)
    }

    return router.push("/dashboard")
  }
  
  return (
    <>
      <div>
          <button onClick={() => googleSignIn()}>press</button>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="email"/>
          <input type="password"/>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  )
}

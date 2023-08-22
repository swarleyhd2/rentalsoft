'use client'
import googleSignIn from "@/firebase/auth/signin"
export default function page() {
  return (
    <div>
        <button onClick={() => googleSignIn()}>press</button>
    </div>
  )
}

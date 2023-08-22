import firebase_app from "../config";
import {getAuth, getRedirectResult, GoogleAuthProvider, signInWithRedirect} from "firebase/auth";



export default async function googleSignIn() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(firebase_app);
    signInWithRedirect(auth, provider).then(
        getRedirectResult(auth).then(
            
        )
    )
}


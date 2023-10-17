import firebase_app from "../config";
import {getAuth, getRedirectResult, GoogleAuthProvider, signInWithRedirect, signInWithEmailAndPassword} from "firebase/auth";

export default async function googleSignIn() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(firebase_app);
    signInWithRedirect(auth, provider).then(
        getRedirectResult(auth).then(
            
        )
    )
}

export async function emailSignIn(email, password) {
    let result = null;
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

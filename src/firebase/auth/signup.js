import firebase_app from "../config";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";


export async function emailSignUp(email, password) {
    const auth = getAuth(firebase_app);
    let result = null;
    let error = null;

    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

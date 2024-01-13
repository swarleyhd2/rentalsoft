import firebase_app from "./config";
import { getFirestore, doc, getDoc, collection, getDocs, orderBy, query} from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function qbsave() {
    try {
        let collectionRef = collection(db, "qbconnect");

}
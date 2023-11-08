import firebase_app from "./config";
import { getFirestore, doc, getDoc, collection, getDocs} from "firebase/firestore";

const db = getFirestore(firebase_app)
export default async function getDocument(collection, id) {
    let docRef = doc(db, collection, id)
    let result = null
    let error = null

    try {
        result = await getDoc(docRef)
    } catch (e) {
        error = e;
    }

    return {result, error}
}

export async function getCustomerList() {
    let result = null
    let error = null
    try {
        result = await getDocs(collection(db, 'customerList'))
    } catch (e) {
        error = e;
    }

    return {result, error}
}

export async function getShippingList(customer) {
    let result = null
    let error = null
    let queryString = `customerList/${customer}/locations`;
    try {
        result = await getDocs(collection(db, queryString))
    } catch (e) {
        error = e;
    }

    return {result, error}
}

export async function getContactList(customer) {
    let result = null
    let error = null
    let queryString = `customerList/${customer}/contacts`;
    try {
        result = await getDocs(collection(db, queryString))
    } catch (e) {
        error = e;
    }

    return {result, error}
}
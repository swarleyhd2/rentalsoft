import firebase_app from "./config";
import { getFirestore, doc, getDoc, collection, getDocs, orderBy, query} from "firebase/firestore";

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
export async function getCustomer(customerID) {
    let result = null
    let error = null
    try {
        const docRef = doc(db, 'customerList', customerID)
        result = await getDoc(docRef)
    } catch (e) {
        error = e
    }

    return {result, error}
}

export async function getCustomerList() {
    let result = null
    let error = null
    try {
        const q = query(collection(db, 'customerList'), orderBy("name"))
        result = await getDocs(q)
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
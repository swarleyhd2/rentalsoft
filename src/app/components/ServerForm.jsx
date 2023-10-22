'use server'
import { getAuth } from "firebase/auth"
import { getFirestore, doc, setDoc } from "firebase/firestore";
import firebase_app from '@/firebase/config.js';

export async function CreateQuote(user, formData) {
    const fs = getFirestore(firebase_app)

    console.log(user)

}

export async function CreateAddress(customerID, formData) {

}

export async function CreateContact(customerID, formData) {

}

export async function CreateCustomer(user, formData) {

}
'use server'
import { getAuth } from "firebase/auth"
import { getFirestore, doc, setDoc } from "firebase/firestore";
import firebase_app from '@/firebase/config.js';

export async function CreateQuote(user, formData) {
    const db = getFirestore(firebase_app)
    try {
        console.log(formData.get('startDate'))
    }catch (e) {
        console.log(e)
    }
    console.log(user)

}

export async function CreateAddress(customerID, formData) {

}

export async function CreateContact(customerID, formData) {

}

export async function CreateCustomer(user, formData) {

}

export async function CreateOrder() {

}

export async function CreateMove() {

}

export async function CreateServiceRequest() {
    
}
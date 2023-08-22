import firebase_app from "./config";
import {getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)


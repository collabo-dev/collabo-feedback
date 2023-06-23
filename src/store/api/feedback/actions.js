import { db } from "../../../config/firebaseConfig";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";


export async function getFeedbacks() {

    const querySnapshot = await getDocs(collection(db, "feedbacks"));
    const data = [];
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });
    return { data }
}

export async function saveFeedback(feedback) {
    // Add a new document with a generated id
    const feedbackRef = doc(collection(db, "feedbacks"));
    const id = feedbackRef.id;
    const data = await setDoc(feedbackRef, {
        ...feedback,
        id,
        createdAt: Date.now()
    });
    return { data }
}
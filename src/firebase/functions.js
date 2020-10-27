import { firebaseFirestore } from "./init";

export const getUserProfileDocument = async (userAuth) => {
    if(!userAuth) return;

    const userReference = firebaseFirestore.doc(`users/${userAuth.id}`);
    return userReference;
}
import { firebaseFirestore } from "./init";

export const getUserProfileDocument = async (userAuth) => {
  if (!userAuth) return;

  const userReference = firebaseFirestore.doc(`users/${userAuth.uid}`);
  return userReference;
};

export const updateUserLocation = async (location, userId) => {
  firebaseFirestore.doc(`users/${userId}`).update({
    location: location,
  });
};

export const allUserData = async () => {
  return firebaseFirestore.collection("users").get();
};

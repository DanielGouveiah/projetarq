import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  limitToLast,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { DocumentData } from "firebase/firestore/lite";
import { useCallback } from "react";

const FirebaseInit = (type: "edition" | "blog") => {
  const firebaseConfig = {
    apiKey: "AIzaSyABvcvbjlRwoMPlVGrLNU2t599kZZfcVvo",
    authDomain: "projetarq-magazine.firebaseapp.com",
    projectId: "projetarq-magazine",
    storageBucket: "projetarq-magazine.appspot.com",
    messagingSenderId: "327025653166",
    appId: "1:327025653166:web:75d8a2940caf7997a1443f",
    measurementId: "G-PRC4ZBEGZM",
  };

  // Initialize Firebase

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const getEdition = useCallback(async (): Promise<DocumentData> => {
    const q = query(
      collection(db, "edicoes"),
      where("publicado", "==", true),
      orderBy("data"),
      limitToLast(1)
    );
    const querySnapshot = await getDocs(q);
    const edition = querySnapshot.docs.map((doc) => doc.data());
    return edition[0];
  }, [db]);

  const getBlogs = useCallback(async (): Promise<DocumentData> => {
    const q = query(
      collection(db, "blog"),
      where("published", "==", true),
      orderBy("last_update")
    );
    const querySnapshot = await getDocs(q);
    const edition = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      const id = doc.id;
      return { id, ...data };
    });
    return edition;
  }, [db]);

  const init = useCallback(async () => {
    let value;
    switch (type) {
      case "edition":
        value = await getEdition();
        break;
      case "blog":
        value = await getBlogs();
        break;
    }
    return value;
  }, [type, getEdition, getBlogs]);

  return { init };
};

export default FirebaseInit;

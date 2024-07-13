import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { DocumentData } from "firebase/firestore/lite";
import { useCallback, useState } from "react";

const FirebaseInit = () => {
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

  const [loading, setLoading] = useState(false);

  const getEditions = useCallback(async (): Promise<DocumentData> => {
    const q = query(
      collection(db, "edicoes"),
      where("published", "==", true),
      orderBy("release_date")
    );
    const querySnapshot = await getDocs(q);
    const editions = querySnapshot.docs.map((doc) => doc.data());
    return editions.reverse();
  }, [db]);

  const getBlogs = useCallback(async (): Promise<DocumentData> => {
    const q = query(
      collection(db, "blog"),
      where("published", "==", true),
      orderBy("created_at")
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
    setLoading(true);
    const editions = await getEditions();
    const blogs = await getBlogs();

    const data = {
      editions,
      blogs,
    };

    setLoading(false);

    return data;
  }, [getBlogs, getEditions]);

  return { init, loading };
};

export default FirebaseInit;

import { useContext, createContext } from "react";
import { fireStore } from "../utils/Firebase";
import { collection, addDoc } from "firebase/firestore";

export const FirestoreContext = createContext();
export const useFirestore = () => {
  return useContext(FirestoreContext);
};

export const FirestoreProvider = ({ children }) => {
  const addDocumentIntoFirestore = async (orderDet) => {
    try {
      const docRef = await addDoc(collection(fireStore, "orders"), orderDet);
      console.log(docRef.id);
    } catch (error) {
      console.error(error);
    }
  };

  const state = { addDocumentIntoFirestore };
  return (
    <FirestoreContext.Provider value={state}>
      {children}
    </FirestoreContext.Provider>
  );
};

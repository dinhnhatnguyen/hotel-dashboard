import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { app } from "./firebase";
import { NavigateFunction } from "react-router-dom";
import { AddHotelType } from "../dto/hotel";

export const fireStore = getFirestore(app);

// Hotels coletion

export const hotelCollection = collection(fireStore, "hotels");

// ADD A NEW DOCUMENT TO YOUR COLLECTION
export const addHotel = async (hotelData: AddHotelType) => {
  const newHotel = await addDoc(hotelCollection, { ...hotelData });
  console.log(`The new hotel was created at ${newHotel.path}`);
};

// DELETE A DOCUMENT IN YOUR COLLECTION
export const deleteHotel = async (
  id: string | undefined,
  navigate: NavigateFunction
) => {
  const document = doc(fireStore, `hotels/${id}`);
  await deleteDoc(document);
  console.log(`The hotel has now been deleted`);
  navigate("/");
};
// EDIT A DOCUMENT / DESCRIPTION
export const updateHotel = async (id: string | undefined, docData: any) => {
  const getHotel = doc(fireStore, `hotels/${id}`);
  await setDoc(getHotel, docData, { merge: true });
  console.log("The value has been written to the database");
};

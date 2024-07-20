import React, { useEffect, useState } from "react";
import { hotelCollection } from "../lib/controller";
import { DocumentData, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { NewHotelType } from "../dto/hotel";
import Information from "./Information";

function Card() {
  const [hotles, setHotels] = useState<NewHotelType[]>([]);
  useEffect(
    () =>
      onSnapshot(hotelCollection, (snapshot: QuerySnapshot<DocumentData>) => {
        return setHotels(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      }),
    []
  );

  return (
    <div className="card">
      <h2 className="title">All Hotels</h2>
      {hotles && hotles.length ? (
        <div className="individual-card">
          {hotles?.map((hotel) => (
            <Information key={hotel.id} hotel={hotel} />
          ))}
        </div>
      ) : (
        <h2 className="no-hotels">There are no hotels. Please add one</h2>
      )}
    </div>
  );
}

export default Card;

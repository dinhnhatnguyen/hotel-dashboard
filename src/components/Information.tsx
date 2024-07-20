import React, { useState } from "react";
import { NewHotelType } from "../dto/hotel";
import { Link } from "react-router-dom";
import Edit from "./Edit";

interface IProps {
  hotel: NewHotelType;
  detailsPage?: boolean;
}
function Information({ hotel, detailsPage }: IProps) {
  const [editDescription, setEditDescription] = useState(false);
  return (
    <div className="hotel-preview">
      <div className="image-container">
        <img className="location-image" src={hotel.location} alt="Hotel" />
        <div className="highlights">
          <div className="highlights-text">
            <h2>{hotel.title}</h2>
            <p className="region">{hotel.region}</p>
          </div>
          <div className="highlights-price">
            <h2 className="per-night">£{hotel.perNight}</h2>
            <p>per night</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="description">
        <span className="reviews">
          <strong className="review-number">{hotel.stars} stars</strong> (based
          on {hotel.review} reviews)
        </span>
        <hr />
        <span className="feature">Main Feature: {hotel?.feature}</span>
        {detailsPage ? (
          <>
            <p className="description-text">{hotel.description}</p>
            <strong
              className="edit-text"
              onClick={() => setEditDescription(!editDescription)}
            >
              Edit Description
            </strong>
            {editDescription ? (
              <Edit
                editDescription={editDescription}
                setEditDescription={setEditDescription}
                id={hotel.id}
              />
            ) : null}
          </>
        ) : (
          <Link to={`/hotels/${hotel.id}`}>
            <button className="moreinfo-btn" style={{ marginLeft: "5px" }}>
              View More Information
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Information;

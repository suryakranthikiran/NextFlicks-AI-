import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

function MoviCard({ posterPath, title }) {
  if (!posterPath) {
    return null;
  }
  return (
    <div className="w-48 pr-4 cursor-pointer ">
      <img src={IMG_CDN_URL + posterPath} alt={title} className="rounded-lg" />
    </div>
  );
}

export default MoviCard;

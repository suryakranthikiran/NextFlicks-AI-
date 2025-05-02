import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { LOGIN_BG_IMG } from "../utils/constants";

function GptSearchPage() {
  return (
    <>
      <div className=" fixed -z-10">
        <img
          src={LOGIN_BG_IMG}
          alt=""
          className="h-screen object-cover  md:w-screen"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
}

export default GptSearchPage;

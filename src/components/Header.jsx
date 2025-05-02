import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  function handleLanguageChange(e) {
    dispatch(changeLanguage(e.target.value));
  }

  function handleGPT() {
    dispatch(toggleGptSearchView());
  }

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        dispatch(removeUser()); // Ensure Redux state updates first
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
        navigate("/error");
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid,
            displayName,
            email,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        setTimeout(() => navigate("/"), 100); // Small delay to ensure Redux updates
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  // bg-gradient-to-b from-black/20 to-transparent
  return (
    <div className="absolute w-full px-6 py-3 flex justify-between items-center flex-col md:flex-row">
      {/* Netflix Logo */}
      <img
        src={NETFLIX_LOGO}
        alt="Netflix Logo"
        className="w-44 mx-auto md:mx-0"
      />

      {/* User Profile & Sign Out Button */}
      {user && (
        <div className="flex items-center gap-4">
          <img
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
            alt="User Icon"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-white shadow-md hidden md:block"
          />
          <button
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer "
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          <button
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer"
            onClick={handleGPT}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          {showGptSearch && (
            <select
              name=""
              id=""
              className="px-4 py-2 font-semibold rounded-lg transition-all duration-300 bg-red-600 hover:bg-red-700 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => {
                return (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                );
              })}
            </select>
          )}
          <span className="px-4 py-2 font-semibold rounded-lg transition-all duration-300 bg-red-600 hover:bg-red-700 text-white">
            Welcome, {user.displayName}
          </span>
        </div>
      )}
    </div>
  );
}

export default Header;

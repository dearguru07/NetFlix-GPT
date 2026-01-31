import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "../utils/fireBase";
import { Logo_URL } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubcribe();
  }, []);

  return (
    <div className="w-full absolute bg-linear-to-t from to-black z-10 justify-between flex">
      <img
        className="w-40 ml-20 mt-3"
        src={Logo_URL}
        alt="logo"
      />

      {user && (
        <div className="flex items-center mr-10">
          <img className="w-12 h-10" src={user?.photoURL}></img>
          <button
            onClick={handleSignOut}
            className="text-white m-5 font-bold bg-red-400 cursor-pointer p-2 rounded-sm"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;

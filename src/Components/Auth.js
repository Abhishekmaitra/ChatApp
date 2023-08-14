import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";

import "../Styles/Auth.css";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const Auth = ({ setIsAuth }) => {
  const singInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="auth">
      <p>Sign In With Google To Continue</p>
      <button onClick={singInWithGoogle}>Sign In With Google</button>
    </div>
  );
};

export default Auth;

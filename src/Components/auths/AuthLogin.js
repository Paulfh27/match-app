import { auth } from "../../config/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

export const Auth = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, user } = useAuth();

  const signin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      login(email, password);
      props.onLogin();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input
        placeholder="email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signin}>Login</button>
      <button onClick={props.onCancle}>Cancle</button>
    </div>
  );
};

import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { useAuth } from '../../contexts/AuthContext'

export const AuthSignup = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const createAccount = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      login(email, password)
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
      <button onClick={createAccount}>Sign Up</button>
      <button onClick={props.onCancle}>Cancle</button>
    </div>
  );
};

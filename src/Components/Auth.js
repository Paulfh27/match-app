import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { useState } from 'react';

export const Auth = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signin = async () => {
        try{
            await createUserWithEmailAndPassword(auth, email, password)
        }catch (err) {
            console.error(err);
        }
    };

    const logout = async () => {
        try{
            await signOut(auth);
        }catch (err) {
            console.error(err)
        }
    }

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
            <button onClick={signin}>Sign In</button>
            <button onClick={logout}>Log Out</button>
            <button onClick={props.onCancle}>Cancle</button>
        </div>
    )
}
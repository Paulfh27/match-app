import { useState } from "react";
import Toolbar from "../components/Toolbar";
import Modal from "../components/Modal";
import "./home.css";
import { Auth } from "../components/Auth";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

// Need a login page
function Home() {
  const [loginModalIsOpen, setLoginModal] = useState(false);
  const [isLoggedin, setLoggedin] = useState(false);

  function loginHandler() {
    setLoginModal(true);
  }

  function cancleHandler() {
    setLoginModal(false);
  }

  const logout = async () => {
    try {
      await signOut(auth);
      setLoggedin(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Toolbar></Toolbar>
      {!isLoggedin ? (
        <div>
          <div className="button-container">
            <button>Sign Up</button>
            <button onClick={loginHandler}>Login</button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Welcone Back</h1>
          <p>User Details</p>
          <ul>
            <li>
              First Name: <span id="user-name"></span>
            </li>
            <li>
              Last Name:<span id="user-lastname"></span>
            </li>
            <li>
              Age: <span id="user-age"></span>
            </li>
          </ul>
          <button onClick={logout}>Sign out</button>
        </div>
      )}

      {loginModalIsOpen ? (
        <Modal>
          <p>
            <Auth onCancle={cancleHandler} />
          </p>
        </Modal>
      ) : null}
    </div>
  );
}

export default Home;

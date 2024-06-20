import { useState } from "react";
import Toolbar from "../components/Toolbar";
import Modal from "../components/Modal";
import "./home.css";
import { Auth } from "../components/auths/AuthLogin";
import { AuthSignup } from "../components/auths/AuthSignup";
import { auth } from "../config/firebase";
import { useAuth } from "../contexts/AuthContext";

// Need a login page
function Home() {
  const [loginModalIsOpen, setLoginModal] = useState(false);
  const [signUpModalIsOpen, setSignUpModal] = useState(false);

  const { user } = useAuth();
  const { logout } = useAuth();

  function loginButtonHandler() {
    setLoginModal(true);
  }

  function signupButtonHandler() {
    setSignUpModal(true);
  }

  function cancleButtonHandler() {
    setLoginModal(false);
    setSignUpModal(false);
  }

  return (
    <div>
      <Toolbar></Toolbar>
      {user == null ? (
        <div>
          <div className="button-container">
            <button onClick={signupButtonHandler}>Sign Up</button>
            <button onClick={loginButtonHandler}>Login</button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Welcone Back</h1>
          <p>{user.email}</p>
          <button onClick={logout}>Sign out</button>
        </div>
      )}

      {loginModalIsOpen ? (
        <Modal>
          <Auth onCancle={cancleButtonHandler} onLogin={cancleButtonHandler} />
        </Modal>
      ) : signUpModalIsOpen ? (
        <Modal>
          <AuthSignup
            onCancle={cancleButtonHandler}
            onSignup={cancleButtonHandler}
          />
        </Modal>
      ) : null}
    </div>
  );
}

export default Home;

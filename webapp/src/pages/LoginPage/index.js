import React, { Fragment }  from "react";
import styles from "./LoginPage.module.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase";

function LoginPage() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
          console.log(result.user);
        }).catch((error) => {
          console.error(error);
        });
    };

    return (
        <Fragment>
            <div className={styles.loginpage}>
                <img src="" alt="Logo" />
                <button onClick={signInWithGoogle}>Sign In With Google</button>    
            </div>
        </Fragment>
    );
}

export default LoginPage;

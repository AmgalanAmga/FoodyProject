import { auth } from "../utils/Firebase";
import { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
export const FirebaseContext = createContext();
export const useAuthentication = () => {
  return useContext(FirebaseContext);
};

export const FirebaseProvider = ({ children }) => {
  const [verifyCodeSection, setVerifyCodeSection] = useState(false);
  const registerWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const registerWithPhone = (phoneNumber) => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "normal",
      },
      auth
    );
    const myPhoneNumber = "+976" + phoneNumber;
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, myPhoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setVerifyCodeSection(true);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const verifyMSGCode = (secretCode) => {
    let confirmationResult = window.confirmationResult;
    try {
      confirmationResult
        .confirm(secretCode)
        .then((res) => alert("Хэрэглэгч бүртгэгдлээ 😃"));
    } catch (error) {
      if (error) return alert("Таны оруулсан код буруу байна.");
    }
  };
  const emailLinkAuth = (userEmail) => {
    const actionCodeSettings = {
      url: "https://foody-483a1.web.app",
      handleCodeInApp: true,
    };
    
    sendSignInLinkToEmail(auth, userEmail, actionCodeSettings).then(() => {
      window.localStorage.setItem("emailForSignIn", userEmail);
      console.log(userEmail)
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });;
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("И-мэйл хаягаа оруулна уу?");
      }
      signInWithEmailLink(auth, userEmail, window.location.href)
        .then((result) => {
          window.localStorage.removeItem("emailForSignIn");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const value = {
    loginWithEmail,
    registerWithEmail,
    registerWithPhone,
    verifyCodeSection,
    setVerifyCodeSection,
    verifyMSGCode,
    emailLinkAuth,
  };
  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};

import { auth } from "../utils/Firebase";
import { createContext, useContext, useState } from "react";
import {
  signOut,
  RecaptchaVerifier,
  signInWithEmailLink,
  signInWithPhoneNumber,
  sendSignInLinkToEmail,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";

export const FirebaseContext = createContext();

export const useAuthentication = () => {
  return useContext(FirebaseContext);
};

export const FirebaseProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [verifyCodeSection, setVerifyCodeSection] = useState(false);

  /* Имэйл хаягаар бүртгэх */

  const registerWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /* Имэйл хаягаар нэвтрэх */

  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  /* Утасны дугаараа бүртгэх */

  const registerWithPhone = (phoneNumber) => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "normal"
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

  /* Утсанд ирсэн кодыг баталгаажуулах */

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

  /* Имэйлрүү линк яюуулж хэрэглэгч бүртгэх */

  const emailLinkAuth = (userEmail, code) => {
    const actionCodeSettings = {
      url: "https://foody-483a1.web.app",
      handleCodeInApp: true
    };

    sendSignInLinkToEmail(auth, userEmail, actionCodeSettings).then(() => {
      alert("И-мэйл хаягаа шалгаж баталгаажуулна уу?");
    });

    signInWithEmailLink(auth, userEmail, code).then((result) =>
      setCurrentUser(result.user)
    );
    signOut(auth).then(() => setCurrentUser(null));
  };
  const value = {
    emailLinkAuth,
    verifyMSGCode,
    loginWithEmail,
    registerWithEmail,
    registerWithPhone,
    verifyCodeSection,
    setVerifyCodeSection,
    currentUser
  };
  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};

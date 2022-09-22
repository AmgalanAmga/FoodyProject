const functions = require("firebase-functions");
const { user } = require("firebase-functions/v1/auth");
const admin = require("firebase-admin");
admin.initializeApp();

exports.newUserSignup = functions.auth.user().onCreate((user) => {
  console.log(user.uid);
  return admin.firestore().collection("users").doc(user.uid).set({
    displayImage: user.photoURL,
    email: user.email,
    orders: [],
  });
});

import React, { useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebaseui/dist/firebaseui.css';
import * as firebaseui from 'firebaseui';

const GoogleSignIn = () => {
  useEffect(() => {
    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      signUpConfig: {
        requireDisplayName: true,
        signInOptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
      },
    };
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
  }, []);

  return (
    <div id="firebaseui-auth-container" />
  );
};

export default GoogleSignIn;

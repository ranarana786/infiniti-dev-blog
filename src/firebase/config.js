import firebase from 'firebase/compat/app';
import '@firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD8hqaBCmBOh-5Ozfj096ERMYC-tdz1wgI',

  authDomain: 'infiniti-dev-blog.firebaseapp.com',

  projectId: 'infiniti-dev-blog',

  storageBucket: 'infiniti-dev-blog.appspot.com',

  messagingSenderId: '199740511151',

  appId: '1:199740511151:web:eafa7cce8f06483b99555a',
};

if (!firebase.apps.length) {
  var app = firebase.initializeApp(firebaseConfig);
  console.log('firebase has connected');
} else {
  console.log('firebase has not conneted');
}

export default app;

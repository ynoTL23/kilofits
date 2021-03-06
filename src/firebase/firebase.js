import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDFIcWurFS8EGcg8oDA22kQMHOu-Q-gmMU',
  authDomain: 'kilofits-db.firebaseapp.com',
  projectId: 'kilofits-db',
  storageBucket: 'kilofits-db.appspot.com',
  messagingSenderId: '426079362530',
  appId: '1:426079362530:web:bd0ebc3ead4ea6e2b1edbb'
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData })
    } catch (error) {
      console.log('Error creating user: ', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

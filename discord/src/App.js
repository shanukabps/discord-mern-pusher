import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Channel from './Channel';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import { login, logout } from './features/userSlice'



function App() {

  const dispatch = useDispatch()
  const user = useSelector(selectUser)



  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      // console.log("user", authUser)
      if (authUser) {
        //user login
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      } else {
        //logout
        dispatch(logout())
      }
    })

  }, [dispatch])


  return (

    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Channel />
        </>

      ) : (


          <Login />
        )}

    </div>
  );
}

export default App;

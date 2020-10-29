
import { auth, provider } from './firebase'
import React from 'react'
import './Login.css'




function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => {
            console.log(error)
        })
    }



    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Font_Awesome_5_brands_discord_color.svg/800px-Font_Awesome_5_brands_discord_color.svg.png" alt="" />

            </div>

            <button onClick={signIn}>Sign In</button>
            <h4>DISCORD CHAT</h4>
        </div>

    )
}

export default Login

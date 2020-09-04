import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

const dummyUser = {
    displayName: "Abey Thomas",
    email: "abeycodes@gmail.com",
    photoURL: "https://lh5.googleusercontent.com/-7o7wsKep4qg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxJphZJ-TnF-RCNDqSKjmHQQPzJw/photo.jpg",
}
function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = (dummy=false) => {
        if(dummy){
            dispatch({
                type: actionTypes.SET_USER, 
                user: dummyUser
            })
            return
        }
        auth.signInWithPopup(provider)
        .then((result)=>{
            dispatch({
                type: actionTypes.SET_USER, 
                user: result.user
            })
        })
        .catch(err => {
            alert(err.message)
        })
    }

    return (
        <div className="login">
            <div className="login__logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="logo"/>
            <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="fb-clone name"/>
            </div>
            <div className="login__buttons">
                <Button type="submit" onClick={signIn}>
                    Sign In
                </Button>
                <Button type="submit" onClick={()=>signIn(true)}>
                    Access without signin
                </Button>
            </div>
        </div>
    )
}

export default Login

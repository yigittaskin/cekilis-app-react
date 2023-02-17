import React from 'react'
import { auth, provider } from './firebase'
import './Login.css'

function Login(setUser) {
    const login = () => {
        auth.signInWithPopup(provider).cach((err) => alert(err.message))
    }
    return (
        <div className='login'>
            <button className='btn googleButton' onClick={login}><i class="fa-brands fa-google fa-2x mr-4"></i> <span className='h2'><span style={{ color: '#4285F4' }}>G</span><span style={{ color: '#DB4437' }}>o</span><span style={{ color: '#F4B400' }}>o</span><span style={{ color: '#4285F4' }}>g</span><span style={{ color: '#0F9D58' }}>l</span><span style={{ color: '#DB4437' }}>e</span> ile Giriş Yap</span></button>
        </div>
    )
}

export default Login

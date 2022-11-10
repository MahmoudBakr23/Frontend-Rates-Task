import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const fetchLogin = () => {
            fetch('http://localhost:3001/users/sign_in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    email: email,
                    password: password,
                },
            }),
        })
        .then((res) => {
            if(res.ok) {
                const data = res.json();
                return data;
            } else {
                throw new Error(res)
            }
        })
        .then((json) => {
            console.dir(json)
            localStorage.setItem('token', json.token)
        })
        .catch((err) => console.error(err))
    }

    const login = () => {
        fetchLogin();
        navigate('/')
    }

  return (
    <>
    <form onSubmit={login}>
        <input name="email" type="email" placeholder="example@email.com" onChange={(e) => setEmail(e.target.value)} />
        <input name="passowrd" type="password" placeholder="*******" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
    </form>
    <p>Don't have an account?</p>
    <a href="/signup">Signup Now</a>
    </>
  )
}

export default Login

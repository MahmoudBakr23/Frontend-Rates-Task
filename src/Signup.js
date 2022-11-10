import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [passwordConfirm, setPasswordConfirm] = useState()

    const navigate = useNavigate()

    const fetctSignup = () => {
    fetch('http://localhost:3001/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        user: {
            email: email,
            password: password,
            password_confirmation: passwordConfirm
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
    localStorage.setItem('token', json.token)
})
.catch((err) => console.error(err))
}

    const signUp = () => {
        fetctSignup();
        navigate('/login')
    }

  return (
    <>
    <form onSubmit={signUp}>
        <input name="email" type="email" placeholder="example@email.com" onChange={(e) => setEmail(e.target.value)} />
        <input name="passowrd" type="password" placeholder="*******" onChange={(e) => setPassword(e.target.value)} />
        <input name="password_confirmation" type="password" placeholder="*******" onChange={(e) => setPasswordConfirm(e.target.value)} />
        <button type="submit">Signup</button>
    </form>
    </>
  )
}

export default Signup

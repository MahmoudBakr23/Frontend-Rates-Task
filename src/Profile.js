import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [user, setUser] = useState();
    const navigate = useNavigate()

  useEffect(() => {
    if(localStorage.getItem('token') !== ''){
        const fetchLoggedInUser = async () => {
        const config = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `bearer ${localStorage.getItem('token')}`
            }
        }
        const response = await fetch('http://localhost:3001/logged_in', config);
        const data = await response.json();
        if (data.status === 200){
            setUser(data)
        }
        }
        fetchLoggedInUser()
    }
  }, [])

    const logout = async () => {
    const config = {
      method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${localStorage.getItem('token')}`
        }
    }
    const response = await fetch('http://localhost:3001/logout', config);
    await response.json();
    localStorage.setItem('token', '')
    navigate('/')
  }

  return (
    <div>
        {user ? (
            <div>
                <h3>{user.user.email}</h3>
                {user.rates.length > 0 ? user.rates.map((rate) => (
                    <div key={rate.id}>
                        <h4>{rate.date}</h4>
                        <h4>{rate.time}</h4>
                    </div>
                ))
                :
                (
                    <div>
                        There are no rates yet
                        <a href="/">Schedule a time here</a>
                    </div>
                )}
            </div>
        )
        :
        (
            <div>Some error happens!</div>
        )}
        <button type="button" onClick={logout}>Logout</button>
    </div>
  )
}

export default Profile
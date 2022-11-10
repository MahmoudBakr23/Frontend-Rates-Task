import React, { useState, useEffect } from 'react'
import { NavbarContainer, Image, Links } from './Styles/Navbar.styled'

const Navbar = () => {
    const [user, setUser] = useState();

  useEffect(() => {
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
      if (data.status == 200){
        setUser(data)
      }
    }
    fetchLoggedInUser()
  }, [])

  return (
    <NavbarContainer>
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUK74FMl93TX3GHo8NUBn1pknqD7kQFVeO0DyN52E&s' />
        {user && user.user.id ? (
            <Links href={`/user/${user.user.id}`}>My Profile</Links>
        )
        :
        (
            <Links href='/login'>Login</Links>
        )}
    </NavbarContainer>
  )
}

export default Navbar

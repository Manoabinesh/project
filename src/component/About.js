import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const About = () => {
   
  const [user, setuser] = useState([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setuser(res.data)

      })
      .catch(() => {
        setuser([])
      })
  },[])
  return (
   
    <div>
      <h1>Welcome to About page</h1>
      { user.map((e,index)=>{
      return(
        <Link to="/contact"><h2>{e.name}</h2></Link>
      )
    })}
      
    </div>

  )
}

export default About;
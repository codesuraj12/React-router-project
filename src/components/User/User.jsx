import React from 'react'
import {useParams} from 'react-router-dom'


const User = () => {
    const {userid} = useParams()
  return (
    <div className= "bg-gray-700 p-5 text-white text-center ">User: {userid}</div>
  )
}

export default User
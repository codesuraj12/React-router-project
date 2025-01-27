import React from 'react'
import { useEffect ,useState} from 'react'

const Follower = () => {
const [data, setData] = useState([])
  useEffect(() => {
fetch('https://dummyjson.com/test')
.then(response=> response.json())
.then(data =>{ console.log(data)
setData(data)})
  }, [])
  

  return (
    <div className ='p-4 bg-gray-700 text-white text-center'>
      Youtube Follower:{data.value}
      <img className='text-center h-72 m-auto' src="https://img.freepik.com/free-photo/illustration-anime-city_23-2151779682.jpg?ga=GA1.1.785194529.1737882354&semt=ais_hybrid" alt="follow img" />
    </div>
  )
}

export default Follower

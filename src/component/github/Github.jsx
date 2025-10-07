import React, { useEffect, useState } from 'react'

function Github() {
    const [Data, SetData] = useState({})
    useEffect(() => {
        console.log("Hello", userI);
        
        fetch("https://api.github.com/users/HARSHIT031204-ENG")
        .then(response => response.json())
        .then(data => {
            SetData(data)
        })
        .catch((e) => console.log("Error in fetching", e))
    }, [])

  return (
    <div className='w-full flex'>
        <h2>Github Follwers : {Data.followers} </h2>
        <img src={Data.avatar_url} alt="" />
    </div>
  )
}

export default Github
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const url = 'http://localhost:3000/posts'

const FirstRequest = () => {
    const fetchData = async () => {
        try {
            const response = await axios.get(url)
            const data = response.data
            console.log(data)
        } catch (err){
            console.log(err.response)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    
  return (
    <div>

    </div>
  )
}

export default FirstRequest
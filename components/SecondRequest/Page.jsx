

import React, { useState } from 'react'
import axios from 'axios'

const url = 'http://localhost:3000/posts/'

const SecondRequest = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const resp = await axios.post(url, {name, email})
            console.log(resp.data)
        } catch (err){
            console.log(err.resp)
        }
        setEmail('')
        setName('')
    }
   
  return (
    <section>
        <form onSubmit={handleSubmit} 
        className='flex flex-col w-1/4 text-center mx-auto gap-y-5'>
            <input type="text" placeholder='Name' value={name} id='name'
            onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='Email' value={email} id='email'
            onChange={(e) => setEmail(e.target.value)} />
            <button className='bg-blue-400 rounded-md'>Login</button>
        </form>
    </section>
  )
}

export default SecondRequest
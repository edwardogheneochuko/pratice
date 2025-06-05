import React from 'react' 
import {z} from "zod"
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'

const Form = () => {
    const schema = z.object({
        firstName: z.string().min(2).max(30),
        lastName: z.string().min(2).max(30),
        email: z.string().email(),
        age: z.number().min(18).max(70),
        password: z.string().min(5).max(20),
        confirmPassword: z.string().min(5).max(20),
      }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });

      const {register, handleSubmit, formState: {errors}}
       = useForm({ resolver: zodResolver(schema)})

      const submitData = (data) => {
        console.log('successful', data)
      }

  return (
    <div>
        <form onSubmit={handleSubmit(submitData)}
        className=' mx-20 gap-y-1 mt-5 flex flex-col'> 
            <label>First Name:</label>
            <input type="text" {...register("firstName")}  className='border py-1'/>
            {errors.firstName && <span
            className='text-red-500 text-xs'>{errors.firstName.message}</span>}
            <label>Last Name:</label>
            <input type="text" {...register("lastName")}
             className='border py-1' />
             {errors.lastName && <span className='text-red-500 text-xs'>
                {errors.lastName.message}</span>}
            <label>Email:</label>
            <input type="text" {...register('email')}
             className='border py-1' />
             {errors.email && <span className='text-red-500 text-xs'>
                {errors.email.message}</span>}
            <label>Age:</label>
            <input type="number" {...register('age', {valueAsNumber: true})}
             className='border py-1' />
             {errors.age && <span className='text-red-500 text-xs'>
                {errors.age.message}</span>}
            <label>Password:</label>
            <input type="password" {...register('password')}
             className='border py-1' />
             {errors.password && <span className='text-red-500 text-xs'>
                {errors.password.message}</span>}
            <label>Confirm Password:</label>
            <input type="password" {...register('confirmPassword')}
             className='border py-1' />
             {errors.confirmPassword && <span className='text-red-500 text-xs'>
                {errors.confirmPassword.message}</span>}
            <button className='bg-green-800 py-2 rounded-sm
            hover:bg-green-300'>Submit</button>
        </form>
    </div>
  )
}

export default Form
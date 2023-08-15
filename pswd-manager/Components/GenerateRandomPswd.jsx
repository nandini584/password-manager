import React from 'react'
import {useState} from 'react'
const GenerateRandomPswd = () => {
    const [disabled, setDisabled] = useState(false);
    const [password, setPassword]= useState('Press the button below to generate Password');
    const generatepswd = () => {
        setDisabled(true)
        const length = 32;
        const characters='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'
        let password=''
        for (let i=1; i<=length; i++){
            const random= Math.floor(Math.random()*characters.length)
            password+=characters[random];
        }
        setPassword(password)
    }
    const handleclick=()=>{
        const password= generatepswd();
        setDisabled(false)
    }
  return (
    <div className='flex flex-col items-center justify-center bg-purple-100 p-20 w-2/5 rounded-lg'>
        <div className='flex flex-row items-center justify-center mb-6'>
        <div className='text-purple-950 border-2 bg-white border-purple-800 rounded-lg text-base font-medium opacity-80 w-[500px] pl-2 py-2'>
           {password}
        </div>
        {/* icon */}

        </div>
        <button onClick={handleclick} disabled={disabled} className='bg-purple-800 text-white font-regular text-as py-2 px-8 border-2 hover:border-2 hover:border-purple-700 font-bold border-purple-400 rounded-full hover:bg-white hover:text-purple-800'>Generate Password</button>
    </div>
  )
}

export default GenerateRandomPswd
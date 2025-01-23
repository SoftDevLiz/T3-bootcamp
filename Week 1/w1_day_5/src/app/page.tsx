"use client"
import React, { useState } from 'react';

interface FormData {
  email: string,
  message: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>( {email: "", message: ""} )
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData, [name]: value,
    }))
  }

  const handleFocus = (field: string) => {
    setFocusedField(field);
  }

  const handleBlur = () => {
    setFocusedField(null);
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("yup");
  }

  return (
    <div className='flex flex-col bg-no-repeat min-h-screen bg-bodyGradient'>
      <header className='flex justify-center'>
        <h1 className='text-white p-12 text-4xl'>A T3 Stack Form ✨</h1>
      </header>
      <main className='flex-grow'>
      <form className='flex flex-col items-center space-y-5'>
        <input
          className='p-2'
          id='email'
          type='email'
          name='email'
          placeholder={focusedField === 'email' ? "" : "Email address"}
          value={formData.email}
          onChange={handleChange}
          onFocus={() => handleFocus('email')}
          onBlur={handleBlur}
        />
        <textarea
          className='p-2'
          id='message'
          name='message'
          placeholder={focusedField === 'message' ? "" : "Type your message here"}
          value={formData.message}
          onChange={handleChange}
          onFocus={() => handleFocus('message')}
          onBlur={handleBlur}
        />
        <button 
          className='text-white bg-black p-2 rounded-lg w-40 hover:bg-white hover:text-black'
          onClick={handleSubmit}
          >Submit</button>
      </form>
      <div className='flex flex-col items-center p-10 text-white'>
        <h1>Results:</h1>
        <h2>{formData.email}</h2>
        <h2>{formData.message}</h2>
      </div>
      </main>
      <footer>
        <div className='text-center text-white text-xl bg-green-800 ml-80 mt-auto mb-5 rounded-s-lg'>
          <h1>We'll be in touch!</h1>
        </div>
      </footer>
    </div>
  );
}

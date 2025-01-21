"use client"
import React, { useState } from 'react';

interface FormData {
  email: string,
  message: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>( {email: "", message: ""} )
  const [focusedField, setFocusedField] = useState<string | null>(null)

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

  return (
    <div>
      <header className='flex justify-center'>
        <h1 className='text-white p-12 text-4xl'>A T3 Stack Form ✨</h1>
      </header>
      <main>
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
        <button className='text-white'>Submit</button>
      </form>
      <div className='flex flex-col items-center p-10 text-white'>
        <h1>Results:</h1>
        <h2>{formData.email}</h2>
        <h2>{formData.message}</h2>
      </div>
      </main>
    </div>
  );
}

/*
TODO: 
- A simple contact form

- Email address (text input)
- Message (text input)
- Submit button (submit)
- "We'll be in touch" response

- Emails message to my gmail
*/
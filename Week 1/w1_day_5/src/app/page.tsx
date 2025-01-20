"use client"
import React, { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState( {email: "Email address", message: "Type your message here"} )

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData, [name]: value,
    }))
  }

  return (
    <div>
      <header className='flex justify-center'>
        <h1 className='text-white p-12 text-4xl'>A T3 Stack Form ✨</h1>
      </header>
      <main>
      <form className='flex flex-col items-center space-y-5'>
        <input
          id='email'
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <input
          id='message'
          type='text'
          name='message'
          value={formData.message}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
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
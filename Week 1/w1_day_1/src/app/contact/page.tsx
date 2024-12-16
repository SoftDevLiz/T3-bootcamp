'use client'

import { useState } from 'react'

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          if (response.ok) {
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
          } else {
            alert("Failed to send message.");
          }
        } catch (error) {
          console.error("Error submitting form:", error);
          alert("Something went wrong.");
        }
      };

    return (
        <div className='text-center mt-10'>
            <h1 className='text-4xl font-bold'>Contact us</h1>
            <form onSubmit={handleSubmit} className='flex flex-col mt-10 text-left space-y-4 max-w-md mx-auto'>
                <label htmlFor='name' className="block text-sm font-medium text-gray-700">Name</label>
                    <input 
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        required
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                <label htmlFor='email' className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type='text'
                        id='email'
                        name='email'
                        value={formData.email}
                        required
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                <label htmlFor='message' className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        rows={4}
                        required
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                <button type='submit' className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;
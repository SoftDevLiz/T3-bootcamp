"use client"

import { useState } from "react";

const Contact: React.FC = () => {
const [formData, setFormData] = useState({ email: "", subject: "", message: "" })

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value })
}

const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault()
  console.log(formData)
  
}

    return (
      <main className="min-h-screen">
        <div className="flex flex-col items-center gap-10 mt-10">
          <h1>Contact me</h1>
          <form className="flex flex-col gap-2 mt-40">
            <div className="flex gap-2">
              <input 
                className="border p-2"
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <input 
              className="border p-2"
              id="subject"
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={handleChange}
              />
            </div>
            <textarea 
              className="border h-40 p-2"
              id="message"
              name="message"
              placeholder="Type your message here"
              onChange={handleChange}
              />
            <button className="border p-2" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </main>
    );
  };
  
  export default Contact;
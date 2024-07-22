'use client'
import React, { FormEvent, useState } from "react";
import { Meteors } from "../../Components/ui/meteors";
function page() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit =(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('submmited: ', {email, message});
        
    }

  return (
    <div>
    <div className="min-h-screen bg-black py-12 pt-36">
    <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-[45rem]  mx-[25rem] p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-[45rem] mx-[25rem] p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          <div className="text-center">

          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
          </div>
        </form>
      
    </div>
    <Meteors number={100} />
    </div>
  )
}

export default page
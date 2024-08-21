import React from 'react'
import Layout from '../components/layout/Layout'
import Button from '../components/button/Button'

export default function Contact() {
  return (
    <Layout>
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="contact-form flex flex-col items-center gap-y-8 bg-white shadow-lg rounded-lg p-8 w-2/3">
        <img src="/images/login-images/login-logo.png" width={100} alt="" />
        <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
        <p className="text-gray-600 text-center">
          Fill out the form below to get in touch with our parking management system team.
        </p>
        <div className="contact-inputs flex flex-col gap-y-6 w-full">
          <div className="flex flex-col gap-y-3">
            <label htmlFor="name" className="uppercase font-semibold text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="outline-none border placeholder:text-gray-500 border-gray-300 rounded-md px-5 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <label htmlFor="email" className="uppercase font-semibold text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="outline-none border placeholder:text-gray-500 border-gray-300 rounded-md px-5 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <label htmlFor="subject" className="uppercase font-semibold text-gray-700">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Enter the subject"
              className="outline-none border placeholder:text-gray-500 border-gray-300 rounded-md px-5 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <label htmlFor="message" className="uppercase font-semibold text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              className="outline-none border placeholder:text-gray-500 border-gray-300 rounded-md px-5 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="btn flex justify-center">
            <Button
              title={"Submit"}
              bgcolor={"#1F51FF"}
              padL={10}
              padT={3}
              color={"white"}
              className="hover:bg-blue-700 transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
  )
}

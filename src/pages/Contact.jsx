import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 md:px-10 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Get in Touch</h1>
      {submitted ? (
        <p className="text-green-400 text-center mt-8">Thank you for your message! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4 bg-white p-5 rounded-md">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="px-4 py-3 rounded-lg text-gray-900 shadow-lg bg-gray-100"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="px-4 py-3 rounded-lg text-gray-900 shadow-lg my-3 bg-gray-100"
            required
          />
          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="px-4 py-3 rounded-lg text-gray-900 shadow-lg bg-gray-100"
            rows={5}
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg hover:from-purple-600 hover:to-blue-600 transition font-semibold"
          >
            Send Message
          </button>
        </form>
      )}
      <div className="mt-10 text-center text-gray-400">
        Email: info@movieexplorer.com | Phone: +92 300 1234567
      </div>
    </div>
  );
}

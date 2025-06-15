import { useState } from 'react';
import Head from 'next/head';
import { createClient } from '@supabase/supabase-js';

// Supabase client setup
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from('contacts').insert([form]);
    setLoading(false);
    if (!error) {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    } else {
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - BSNK Law Associates</title>
        <meta name="description" content="Get in touch with BSNK Law Associates" />
      </Head>

      <main className="py-20 px-4 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h1>
          
          {submitted ? (
            <p className="text-green-600 text-center text-lg">Thank you! We'll get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 mt-1 focus:outline-none focus:ring focus:border-red-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 mt-1 focus:outline-none focus:ring focus:border-red-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 mt-1 focus:outline-none focus:ring focus:border-red-400"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </main>
    </>
  );
}


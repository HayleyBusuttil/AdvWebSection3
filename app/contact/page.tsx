'use client';

import Link from 'next/link';
import { Header } from '@/components';
import { useState } from 'react';

export default function Contact() {
  const [cartCount] = useState(0);
  const [favoriteCount] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartCount={cartCount}
        favoriteCount={favoriteCount}
        onCartClick={() => {}}
        onFavoritesClick={() => {}}
      />

      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {/* Page Title */}
          <section>
            <h1 className="text-4xl font-light text-gray-900 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600">
              We'd love to hear from you. Get in touch with our team.
            </p>
          </section>

          {/* Contact Info & Form Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Have a question or feedback? We're here to help. Reach out to us and
                  we'll respond as soon as possible.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Email</h3>
                  <a
                    href="mailto:hello@luxe.com"
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                    hello@luxe.com
                  </a>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday - Sunday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-medium text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition font-medium"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition font-medium"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition font-medium"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 font-medium">
                    ✓ Thank you for your message! We'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Your message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="bg-gray-50 rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-light text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <details className="border-b border-gray-200 pb-4">
                <summary className="font-medium text-gray-900 cursor-pointer hover:text-gray-700">
                  What is your return policy?
                </summary>
                <p className="text-gray-600 mt-2">
                  We offer 30-day returns on most products. Items must be in original
                  condition with all packaging.
                </p>
              </details>

              <details className="border-b border-gray-200 pb-4">
                <summary className="font-medium text-gray-900 cursor-pointer hover:text-gray-700">
                  How long does shipping take?
                </summary>
                <p className="text-gray-600 mt-2">
                  Standard shipping takes 5-7 business days. Express shipping is available
                  for 2-3 business day delivery.
                </p>
              </details>

              <details className="border-b border-gray-200 pb-4">
                <summary className="font-medium text-gray-900 cursor-pointer hover:text-gray-700">
                  Do you ship internationally?
                </summary>
                <p className="text-gray-600 mt-2">
                  Yes, we ship to most countries. Shipping costs and times vary by location.
                </p>
              </details>

              <details className="pb-4">
                <summary className="font-medium text-gray-900 cursor-pointer hover:text-gray-700">
                  How do I track my order?
                </summary>
                <p className="text-gray-600 mt-2">
                  You'll receive a tracking number via email once your order ships. You can
                  use this to track your package in real-time.
                </p>
              </details>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-8">
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Back to Shop
            </Link>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; 2026 LUXE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

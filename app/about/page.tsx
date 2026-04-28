'use client';

import Link from 'next/link';
import { Header } from '@/components';
import { useState } from 'react';

export default function About() {
  const [cartCount] = useState(0);
  const [favoriteCount] = useState(0);

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
            <h1 className="text-4xl font-light text-gray-900 mb-4">About LUXE</h1>
            <p className="text-lg text-gray-600">
              Discover the story behind our premium product showcase
            </p>
          </section>

          {/* Mission Section */}
          <section className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-light text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At LUXE, we believe in curating exceptional products that enhance the lives of
              our customers. Our mission is to provide a seamless shopping experience where
              quality, design, and functionality converge.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We're committed to offering premium products with attention to detail and a
              focus on customer satisfaction. Every item in our collection is carefully
              selected to meet our high standards of excellence.
            </p>
          </section>

          {/* Values Section */}
          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-6">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Quality</h3>
                <p className="text-gray-600">
                  We prioritize quality in every aspect of our business, from product
                  selection to customer service.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We continually evolve our offerings to bring you the latest and greatest
                  products and experiences.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Customer Focus</h3>
                <p className="text-gray-600">
                  Your satisfaction is our top priority. We strive to exceed your expectations
                  in every interaction.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to ethical practices and environmental responsibility in
                  all our operations.
                </p>
              </div>
            </div>
          </section>

          {/* Technology Section */}
          <section className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-light text-gray-900 mb-4">Modern Technology</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This platform is built with cutting-edge web technologies including Next.js,
              TypeScript, and Tailwind CSS. We've implemented modern design patterns and
              state management to provide you with a smooth, responsive shopping experience.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our application features advanced filtering, cart management, and a beautifully
              designed interface optimized for all devices.
            </p>
          </section>

          {/* CTA Section */}
          <section className="text-center py-8">
            <h2 className="text-2xl font-light text-gray-900 mb-4">Ready to Explore?</h2>
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

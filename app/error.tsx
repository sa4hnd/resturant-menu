"use client";

import { useEffect } from 'react'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <>
      <Header />
      <main className="error-page">
        <section className="error-content" data-aos="fade-up">
          <h1>هەڵە ڕوویدا</h1>
          <p>ببورە، هەڵەیەک ڕوویدا. تکایە دووبارە هەوڵ بدەوە.</p>
          <div className="error-actions">
            <button onClick={() => reset()} className="retry-btn">
              دووبارە هەوڵ بدەوە
            </button>
            <Link href="/" className="home-btn">
              گەڕانەوە بۆ پەڕەی سەرەکی
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

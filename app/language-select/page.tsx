'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function LanguageSelect() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (localStorage.getItem('selectedLanguage')) {
      router.push('/')
    }
  }, [router])

  if (!mounted) return null

  const setLanguage = (lang: string) => {
    localStorage.setItem('selectedLanguage', lang)
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 border-orange-500 rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <Image src="/assets/logo.jpeg" alt="Sipan House Logo" width={100} height={100} className="mx-auto rounded-full border-2 border-orange-500" />
          <h1 className="text-2xl font-bold text-orange-500 mt-4">Welcome to Sipan House</h1>
          <p className="text-gray-300 mt-2">Experience the taste of Kurdistan and international cuisine</p>
        </div>
        <div className="space-y-4">
          <button 
            className="w-full py-2 px-4 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-300"
            onClick={() => setLanguage('en')}
          >
            <i className="fas fa-hamburger mr-2"></i> English
          </button>
          <button 
            className="w-full py-2 px-4 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-300"
            onClick={() => setLanguage('ar')}
          >
            <i className="fas fa-coffee mr-2"></i> عربی
          </button>
          <button 
            className="w-full py-2 px-4 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-300"
            onClick={() => setLanguage('ku')}
          >
            <i className="fas fa-drumstick-bite mr-2"></i> کوردی
          </button>
        </div>
      </div>
    </div>
  )
}

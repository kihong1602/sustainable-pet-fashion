'use client'

import { useRouter } from 'next/navigation'
import { Header } from '../../../components/Header'

export default function Material() {
  const router = useRouter()

  const handleChoice = (choice: 'provide' | 'service') => {
    if (choice === 'provide') {
      router.push('/custom/material-details')
    } else {
      router.push('/custom/customize')
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">재활용 의류 사용 여부</h1>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <p className="text-lg mb-6 text-center">
            재활용 의류를 직접 제공하시겠습니까, 아니면 저희 서비스의 소재를 사용하시겠습니까?
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => handleChoice('provide')}
              className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300"
            >
              직접 의류 제공
            </button>
            <button
              onClick={() => handleChoice('service')}
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              서비스 소재 사용
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}


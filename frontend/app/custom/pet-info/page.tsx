'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '../../../components/Header'

export default function PetInfo() {
  const router = useRouter()
  const [petInfo, setPetInfo] = useState({
    type: '',
    breed: '',
    gender: '',
    chestSize: '',
    backLength: '',
    activity: '',
    personality: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setPetInfo({ ...petInfo, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Pet Info:', petInfo)
    router.push('/custom/material')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">반려동물 정보 입력</h1>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
              반려동물 종류
            </label>
            <select
              id="type"
              name="type"
              value={petInfo.type}
              onChange={handleChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">선택해주세요</option>
              <option value="dog">강아지</option>
              <option value="cat">고양이</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="breed">
              품종
            </label>
            <input
              type="text"
              id="breed"
              name="breed"
              value={petInfo.breed}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
              성별
            </label>
            <select
              id="gender"
              name="gender"
              value={petInfo.gender}
              onChange={handleChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">선택해주세요</option>
              <option value="male">수컷</option>
              <option value="female">암컷</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="chestSize">
              가슴둘레 (cm)
            </label>
            <input
              type="number"
              id="chestSize"
              name="chestSize"
              value={petInfo.chestSize}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="backLength">
              등길이 (cm)
            </label>
            <input
              type="number"
              id="backLength"
              name="backLength"
              value={petInfo.backLength}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="activity">
              활동성
            </label>
            <select
              id="activity"
              name="activity"
              value={petInfo.activity}
              onChange={handleChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">선택해주세요</option>
              <option value="low">낮음</option>
              <option value="medium">보통</option>
              <option value="high">높음</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="personality">
              성격
            </label>
            <input
              type="text"
              id="personality"
              name="personality"
              value={petInfo.personality}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="예: 활발함, 조용함 등"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              다음
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}


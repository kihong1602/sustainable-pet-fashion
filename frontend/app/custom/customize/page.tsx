'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '../../../components/Header'

export default function Customize() {
  const router = useRouter()
  const [customOptions, setCustomOptions] = useState({
    embroidery: false,
    nameTag: false,
    color: '',
    pattern: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
    setCustomOptions({ ...customOptions, [e.target.name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Custom Options:', customOptions)
    router.push('/custom/checkout')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">커스터마이징 옵션</h1>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="embroidery"
                checked={customOptions.embroidery}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-gray-700 text-sm font-bold">자수 추가</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="nameTag"
                checked={customOptions.nameTag}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-gray-700 text-sm font-bold">이름 태그 추가</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="color">
              색상
            </label>
            <select
              id="color"
              name="color"
              value={customOptions.color}
              onChange={handleChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">선택해주세요</option>
              <option value="red">빨강</option>
              <option value="blue">파랑</option>
              <option value="green">초록</option>
              <option value="yellow">노랑</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pattern">
              패턴
            </label>
            <select
              id="pattern"
              name="pattern"
              value={customOptions.pattern}
              onChange={handleChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">선택해주세요</option>
              <option value="stripes">줄무늬</option>
              <option value="dots">도트</option>
              <option value="floral">꽃무늬</option>
              <option value="plain">무지</option>
            </select>
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


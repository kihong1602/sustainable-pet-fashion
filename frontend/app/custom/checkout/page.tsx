'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '../../../components/Header'

export default function Checkout() {
  const router = useRouter()
  const [orderInfo, setOrderInfo] = useState({
    name: '',
    address: '',
    paymentMethod: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setOrderInfo({ ...orderInfo, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Order Info:', orderInfo)
    // 여기에 결제 처리 로직을 추가합니다.
    router.push('/custom/confirmation')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">견적 및 결제</h1>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">주문 요약</h2>
            <p>맞춤 제작 반려동물 의류: ₩50,000</p>
            <p>커스터마이징 옵션: ₩10,000</p>
            <p className="text-xl font-bold mt-4">총 금액: ₩60,000</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                이름
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={orderInfo.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                배송 주소
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={orderInfo.address}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="paymentMethod">
                결제 방법
              </label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={orderInfo.paymentMethod}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">선택해주세요</option>
                <option value="creditCard">신용카드</option>
                <option value="bankTransfer">계좌이체</option>
                <option value="kakaoPay">카카오페이</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                결제하기
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}


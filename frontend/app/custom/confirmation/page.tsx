import { Header } from '../../../components/Header'

export default function Confirmation() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">주문 확인</h1>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">주문이 완료되었습니다!</h2>
          <p className="mb-4">주문번호: #12345</p>
          <p className="mb-4">
            주문하신 맞춤 제작 반려동물 의류는 현재 제작 중입니다. 제작이 완료되면 이메일로 알려드리겠습니다.
          </p>
          <p className="mb-8">예상 배송일: 7-10 영업일 이내</p>
          <a
            href="/"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            홈으로 돌아가기
          </a>
        </div>
      </main>
    </div>
  )
}


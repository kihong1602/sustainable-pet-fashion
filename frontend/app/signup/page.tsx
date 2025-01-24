"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-teal-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <Image
              src="https://picsum.photos/seed/ecopet-logo/200/200"
              alt="EcoPet Logo"
              width={80}
              height={80}
              className="mx-auto rounded-full"
            />
            <h1 className="text-2xl font-bold text-gray-900">회원가입</h1>
            <p className="text-gray-600">에코펫과 함께 시작하세요</p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">이름</label>
              <Input
                type="text"
                placeholder="이름을 입력하세요"
                className="w-full glass-input"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">이메일</label>
              <Input
                type="email"
                placeholder="이메일을 입력하세요"
                className="w-full glass-input"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">비밀번호</label>
              <Input
                type="password"
                placeholder="비밀번호를 입력하세요"
                className="w-full glass-input"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">비밀번호 확인</label>
              <Input
                type="password"
                placeholder="비밀번호를 다시 입력하세요"
                className="w-full glass-input"
              />
            </div>
            <Button className="w-full bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white">
              회원가입
            </Button>
          </form>

          <div className="text-center space-y-4">
            <p className="text-sm text-gray-600">
              이미 계정이 있으신가요?{" "}
              <Link href="/login" className="text-teal-600 hover:text-teal-700 font-medium">
                로그인
              </Link>
            </p>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white/80 text-gray-500">또는</span>
              </div>
            </div>
            <div className="space-y-2">
              <Button variant="outline" className="glass-button text-gray-700 w-full">
                <Image src="/google.svg" width={20} height={20} alt="Google logo" className="mr-2" />
                Google로 회원가입
              </Button>
              <Button variant="outline" className="glass-button text-gray-700 w-full">
                <Image src="/github.svg" width={20} height={20} alt="Github logo" className="mr-2" />
                Github로 회원가입
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

"use client";

import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { PencilIcon, CameraIcon, MapPinIcon, PhoneIcon, MailIcon } from "lucide-react";

interface UserProfile {
  name: string
  email: string
  address: string
  petName: string
  petType: string
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    // 실제 구현에서는 API를 호출하여 사용자 프로필 데이터를 가져옵니다.
    const mockProfile: UserProfile = {
      name: '홍길동',
      email: 'hong@example.com',
      address: '서울시 강남구',
      petName: '멍멍이',
      petType: '강아지'
    }
    setProfile(mockProfile)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (profile) {
      setProfile({ ...profile, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 실제 구현에서는 API를 호출하여 프로필을 업데이트합니다.
    console.log('Updated profile:', profile)
    setIsEditing(false)
  }

  if (!profile) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container max-w-4xl mx-auto space-y-8"
      >
        {/* 프로필 헤더 */}
        <div className="glass-card rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <Image
                src="https://picsum.photos/seed/profile/200/200"
                alt="Profile"
                width={120}
                height={120}
                className="rounded-full"
              />
              <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50">
                <CameraIcon className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
                <p className="text-gray-600">반려동물과 함께하는 친환경 라이프</p>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPinIcon className="w-4 h-4" />
                  <span>{profile.address}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <PhoneIcon className="w-4 h-4" />
                  <span>010-1234-5678</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MailIcon className="w-4 h-4" />
                  <span>{profile.email}</span>
                </div>
              </div>
            </div>
            
            <Button variant="outline" className="glass-button" onClick={() => setIsEditing(true)}>
              <PencilIcon className="w-4 h-4 mr-2" />
              프로필 수정
            </Button>
          </div>
        </div>

        {/* 프로필 콘텐츠 */}
        <Tabs defaultValue="pets" className="space-y-6">
          <TabsList className="glass-card">
            <TabsTrigger value="pets">반려동물</TabsTrigger>
            <TabsTrigger value="orders">주문내역</TabsTrigger>
            <TabsTrigger value="reviews">리뷰</TabsTrigger>
            <TabsTrigger value="settings">설정</TabsTrigger>
          </TabsList>

          <TabsContent value="pets" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((pet) => (
                <Card key={pet} className="glass-card p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={`https://picsum.photos/seed/pet${pet}/100/100`}
                      alt={`Pet ${pet}`}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{profile.petName} {pet}</h3>
                      <p className="text-gray-600">{profile.petType}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">몸무게</span>
                      <span>7.5kg</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">사이즈</span>
                      <span>M</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full glass-button">
                    정보 수정
                  </Button>
                </Card>
              ))}
              <Card className="glass-card p-6 flex items-center justify-center border-dashed">
                <Button variant="outline" className="glass-button">
                  반려동물 추가
                </Button>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            {/* 주문 내역은 별도로 구현 */}
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            {/* 리뷰 내역은 별도로 구현 */}
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="glass-card p-6 space-y-6">
              <h3 className="text-lg font-semibold">계정 설정</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">이름</label>
                  <Input type="text" name="name" value={profile.name} onChange={handleChange} disabled={!isEditing} className="glass-input" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">이메일</label>
                  <Input type="email" name="email" value={profile.email} onChange={handleChange} disabled={!isEditing} className="glass-input" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">주소</label>
                  <Input type="text" name="address" value={profile.address} onChange={handleChange} disabled={!isEditing} className="glass-input" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">반려동물 이름</label>
                  <Input type="text" name="petName" value={profile.petName} onChange={handleChange} disabled={!isEditing} className="glass-input" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">반려동물 종류</label>
                  <Input type="text" name="petType" value={profile.petType} onChange={handleChange} disabled={!isEditing} className="glass-input" />
                </div>
                {isEditing && (
                  <Button className="w-full bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white" onClick={handleSubmit}>
                    저장하기
                  </Button>
                )}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}

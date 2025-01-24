"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function CustomPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold gradient-text mb-4">
            맞춤 제작 시작하기
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            당신의 반려동물을 위한 특별한 의류를 디자인해보세요
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
              <h2 className="text-2xl font-semibold mb-6">기본 정보</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="pet-name">반려동물 이름</Label>
                  <Input id="pet-name" placeholder="예: 몽이" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pet-type">반려동물 종류</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="선택해주세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dog">강아지</SelectItem>
                      <SelectItem value="cat">고양이</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="size">사이즈</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="xs">XS</SelectItem>
                        <SelectItem value="s">S</SelectItem>
                        <SelectItem value="m">M</SelectItem>
                        <SelectItem value="l">L</SelectItem>
                        <SelectItem value="xl">XL</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="color">색상</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="natural">내추럴</SelectItem>
                        <SelectItem value="pastel">파스텔</SelectItem>
                        <SelectItem value="vivid">비비드</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="special-requests">특별 요청사항</Label>
                  <Textarea
                    id="special-requests"
                    placeholder="특별히 원하시는 디자인이나 요청사항을 적어주세요"
                    className="min-h-[100px]"
                  />
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
              <h2 className="text-2xl font-semibold mb-6">의류 선택</h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <Label>의류 제공 방식</Label>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="border border-border rounded-lg p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg mb-2">
                            본인 의류 제공
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            기존에 가지고 계신 의류를 업사이클링하여 새로운
                            디자인으로 제작
                          </p>
                        </div>
                        <Button variant="outline" className="hover-scale">
                          선택
                        </Button>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <ul className="list-disc list-inside space-y-1">
                          <li>기존 의류의 새로운 변신</li>
                          <li>친환경적인 선택</li>
                          <li>비용 절감 효과</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border border-border rounded-lg p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-lg">
                              회사 제공 의류
                            </h3>
                            <Badge variant="secondary">+39,000원</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            엄선된 친환경 소재로 제작된 새 의류 사용
                          </p>
                        </div>
                        <Button variant="outline" className="hover-scale">
                          선택
                        </Button>
                      </div>
                      <div className="space-y-4">
                        <div className="text-sm text-muted-foreground">
                          <ul className="list-disc list-inside space-y-1">
                            <li>프리미엄 친환경 소재</li>
                            <li>최적화된 원단 선택</li>
                            <li>전문가의 원단 케어</li>
                          </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <Button
                            variant="outline"
                            className="h-auto py-4 hover-scale"
                          >
                            <div className="text-left">
                              <div className="font-semibold">리사이클 코튼</div>
                              <div className="text-sm text-muted-foreground">
                                재활용 면 소재
                              </div>
                            </div>
                          </Button>
                          <Button
                            variant="outline"
                            className="h-auto py-4 hover-scale"
                          >
                            <div className="text-left">
                              <div className="font-semibold">
                                에코 폴리에스터
                              </div>
                              <div className="text-sm text-muted-foreground">
                                재활용 페트병 소재
                              </div>
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Button className="w-full hover-scale" size="lg">
              디자인 시작하기
            </Button>
          </motion.div>

          {/* Preview Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:sticky lg:top-24 space-y-8"
          >
            <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
              <h2 className="text-2xl font-semibold mb-6">미리보기</h2>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/eco-preview/800"
                  alt="맞춤 제작 미리보기"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 right-4">미리보기</Badge>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">예상 제작 기간</span>
                  <span className="font-semibold">7-10일</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">기본 가격</span>
                  <span className="font-semibold">89,000원</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

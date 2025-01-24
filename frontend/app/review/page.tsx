"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { StarIcon, ThumbsUpIcon, MessageCircleIcon, ImageIcon } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    productName: "에코 스웨터",
    productImage: "https://picsum.photos/seed/review1/400/400",
    rating: 5,
    date: "2024-01-15",
    author: "김에코",
    authorImage: "https://picsum.photos/seed/author1/100/100",
    content: "너무 좋아요! 재질도 부드럽고 우리 강아지가 매우 편안해하네요. 특히 친환경 소재를 사용한다는 점이 마음에 듭니다.",
    images: [
      "https://picsum.photos/seed/review1-1/400/400",
      "https://picsum.photos/seed/review1-2/400/400",
      "https://picsum.photos/seed/review1-3/400/400",
    ],
    likes: 24,
    comments: 5,
  },
  {
    id: 2,
    productName: "오가닉 레인코트",
    productImage: "https://picsum.photos/seed/review2/400/400",
    rating: 4,
    date: "2024-01-10",
    author: "박그린",
    authorImage: "https://picsum.photos/seed/author2/100/100",
    content: "비올 때 산책하기 정말 좋아요. 방수도 잘되고 디자인도 예뻐요. 다만 사이즈가 조금 크게 나와서 한 치수 작은 걸 고르시는 게 좋을 것 같아요.",
    images: [
      "https://picsum.photos/seed/review2-1/400/400",
      "https://picsum.photos/seed/review2-2/400/400",
    ],
    likes: 18,
    comments: 3,
  },
];

const ReviewCard = ({ review }: { review: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="glass-card p-6 space-y-6">
        {/* 제품 정보 */}
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-lg overflow-hidden">
            <Image
              src={review.productImage}
              alt={review.productName}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{review.productName}</h3>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm text-gray-600 ml-2">{review.date}</span>
            </div>
          </div>
        </div>

        {/* 작성자 정보 */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={review.authorImage}
              alt={review.author}
              fill
              className="object-cover"
            />
          </div>
          <span className="font-medium text-gray-900">{review.author}</span>
        </div>

        {/* 리뷰 내용 */}
        <p className="text-gray-600 leading-relaxed">{review.content}</p>

        {/* 리뷰 이미지 */}
        {review.images.length > 0 && (
          <div className="grid grid-cols-3 gap-2">
            {review.images.map((image: string, index: number) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`Review image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        )}

        {/* 액션 버튼 */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
          <Button variant="ghost" className="flex items-center gap-2">
            <ThumbsUpIcon className="w-4 h-4" />
            <span>{review.likes}</span>
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            <MessageCircleIcon className="w-4 h-4" />
            <span>{review.comments}</span>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default function ReviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 py-12 px-4">
      <div className="container max-w-4xl mx-auto space-y-8">
        {/* 리뷰 작성 카드 */}
        <Card className="glass-card p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">리뷰 작성</h2>
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className="w-6 h-6 text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors"
              />
            ))}
          </div>
          <Textarea
            placeholder="상품에 대한 솔직한 리뷰를 남겨주세요"
            className="glass-input min-h-[100px]"
          />
          <div className="flex justify-between items-center">
            <Button variant="outline" className="glass-button">
              <ImageIcon className="w-4 h-4 mr-2" />
              사진 추가
            </Button>
            <Button className="bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white">
              리뷰 등록
            </Button>
          </div>
        </Card>

        {/* 리뷰 목록 */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}

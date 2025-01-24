"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    author: "김민지",
    avatar: "https://picsum.photos/seed/user1/200",
    rating: 5,
    product: "에코 스웨터",
    date: "2024.01.15",
    content:
      "재활용 소재라고 믿기지 않을 만큼 부드럽고 따뜻해요! 우리 강아지가 매우 좋아합니다.",
    image: "https://picsum.photos/seed/review1/800",
  },
  {
    id: 2,
    author: "이준호",
    avatar: "https://picsum.photos/seed/user2/200",
    rating: 4,
    product: "오가닉 레인코트",
    date: "2024.01.14",
    content:
      "비 오는 날에도 산책할 수 있어서 좋아요. 생분해성 소재라 환경에도 좋고 디자인도 예뻐요!",
    image: "https://picsum.photos/seed/review2/800",
  },
  {
    id: 3,
    author: "박서연",
    avatar: "https://picsum.photos/seed/user3/200",
    rating: 5,
    product: "리사이클 티셔츠",
    date: "2024.01.13",
    content:
      "여름에 입히기 딱 좋은 두께예요. 쿨링 기능이 있어서 더운 날에도 우리 강아지가 편안해 보여요.",
    image: "https://picsum.photos/seed/review3/800",
  },
];

export function RecentReviews() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {reviews.map((review, index) => (
        <motion.div
          key={review.id}
          className="bg-card rounded-lg overflow-hidden card-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className="aspect-video relative">
            <Image
              src={review.image}
              alt={`${review.product} 리뷰 이미지`}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={review.avatar}
                  alt={review.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">{review.author}</h3>
                <p className="text-sm text-muted-foreground">{review.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <h4 className="font-medium text-sm text-muted-foreground mb-2">
              {review.product}
            </h4>

            <p className="text-sm leading-relaxed">{review.content}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

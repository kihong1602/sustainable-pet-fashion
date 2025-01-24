"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const designs = [
  {
    id: 1,
    title: "에코 스웨터",
    description: "재활용 원단으로 만든 따뜻한 스웨터",
    image: "https://picsum.photos/seed/eco-sweater/800",
    price: "49,900",
    category: "스웨터",
  },
  {
    id: 2,
    title: "오가닉 레인코트",
    description: "생분해성 소재의 방수 레인코트",
    image: "https://picsum.photos/seed/raincoat/800",
    price: "39,900",
    category: "아우터",
  },
  {
    id: 3,
    title: "리사이클 티셔츠",
    description: "페트병을 재활용한 쿨링 티셔츠",
    image: "https://picsum.photos/seed/tshirt/800",
    price: "29,900",
    category: "티셔츠",
  },
  {
    id: 4,
    title: "친환경 패딩",
    description: "재활용 충전재를 사용한 따뜻한 패딩",
    image: "https://picsum.photos/seed/padding/800",
    price: "69,900",
    category: "아우터",
  },
];

export function DesignGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {designs.map((design, index) => (
        <motion.div
          key={design.id}
          className="group relative bg-card rounded-lg overflow-hidden card-shadow hover-scale"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className="aspect-square relative">
            <Image
              src={design.image}
              alt={design.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold">{design.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {design.category}
                </p>
              </div>
              <p className="font-semibold">₩{design.price}</p>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {design.description}
            </p>
            <div className="flex gap-2">
              <Button size="sm" className="w-full">
                구매하기
              </Button>
              <Button size="sm" variant="outline" className="w-full">
                상세보기
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

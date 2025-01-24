"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { SearchIcon, FilterIcon, HeartIcon, ShoppingBagIcon } from "lucide-react";

const products = [
  {
    id: 1,
    name: "에코 스웨터",
    image: "https://picsum.photos/seed/product1/400/600",
    price: "49,000",
    category: "스웨터",
    tags: ["친환경", "수공예"],
    colors: ["그린", "베이지", "브라운"],
    sizes: ["S", "M", "L"],
    isNew: true,
    isBestSeller: true,
  },
  {
    id: 2,
    name: "오가닉 레인코트",
    image: "https://picsum.photos/seed/product2/400/600",
    price: "59,000",
    category: "아우터",
    tags: ["방수", "유기농"],
    colors: ["네이비", "블랙"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 3,
    name: "컴포트 티셔츠",
    image: "https://picsum.photos/seed/product3/400/600",
    price: "39,000",
    category: "티셔츠",
    tags: ["통기성", "친환경"],
    colors: ["화이트", "그레이", "블랙"],
    sizes: ["S", "M", "L"],
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 4,
    name: "데일리 하네스",
    image: "https://picsum.photos/seed/product4/400/600",
    price: "45,000",
    category: "액세서리",
    tags: ["편안함", "내구성"],
    colors: ["블랙", "브라운"],
    sizes: ["S", "M", "L"],
    isNew: false,
    isBestSeller: false,
  },
];

const categories = ["전체", "스웨터", "아우터", "티셔츠", "액세서리"];

const ProductCard = ({ product }: { product: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="glass-card group overflow-hidden">
        <div className="relative aspect-[2/3] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            {product.isNew && (
              <Badge className="bg-teal-500 text-white">NEW</Badge>
            )}
            {product.isBestSeller && (
              <Badge className="bg-amber-500 text-white">BEST</Badge>
            )}
          </div>
          <div className="absolute top-4 right-4">
            <Button size="icon" variant="ghost" className="rounded-full bg-white/80 hover:bg-white text-gray-600">
              <HeartIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <h3 className="font-medium text-gray-900">{product.name}</h3>
            <p className="text-gray-600">{product.price}원</p>
          </div>
          <div className="space-y-3">
            <div className="flex gap-1">
              {product.tags.map((tag: string) => (
                <Badge key={tag} variant="outline" className="text-xs text-gray-700 border-gray-300">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              {product.colors.map((color: string) => (
                <div
                  key={color}
                  className="w-4 h-4 rounded-full border border-gray-200"
                  title={color}
                  style={{ backgroundColor: color === "화이트" ? "white" : color === "블랙" ? "black" : color }}
                />
              ))}
            </div>
            <div className="flex gap-2">
              {product.sizes.map((size: string) => (
                <Badge
                  key={size}
                  variant="outline"
                  className="text-xs px-2 py-0.5 text-gray-700 border-gray-300"
                >
                  {size}
                </Badge>
              ))}
            </div>
          </div>
          <Button className="w-full bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white">
            <ShoppingBagIcon className="w-4 h-4 mr-2" />
            장바구니 담기
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default function BrowsePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 py-12 px-4">
      <div className="container max-w-7xl mx-auto space-y-8">
        {/* 검색 및 필터 */}
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="찾으시는 상품을 검색해보세요"
                className="pl-10 glass-input"
              />
            </div>
          </div>
          <Button variant="outline" className="glass-button text-gray-700">
            <FilterIcon className="w-4 h-4 mr-2" />
            필터
          </Button>
        </div>

        {/* 카테고리 */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="glass-button text-gray-700 whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* 상품 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

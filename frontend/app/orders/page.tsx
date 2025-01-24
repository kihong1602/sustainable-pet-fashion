"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { PackageIcon, TruckIcon, CheckCircleIcon, ClockIcon } from "lucide-react";

const orders = [
  {
    id: "ORD-2024-001",
    date: "2024-01-15",
    status: "배송완료",
    total: "89,000",
    items: [
      {
        name: "에코 스웨터",
        image: "https://picsum.photos/seed/order1/200/200",
        price: "49,000",
        size: "M",
        color: "그린",
      },
      {
        name: "오가닉 레인코트",
        image: "https://picsum.photos/seed/order2/200/200",
        price: "40,000",
        size: "L",
        color: "베이지",
      },
    ],
  },
  {
    id: "ORD-2024-002",
    date: "2024-01-10",
    status: "배송중",
    total: "59,000",
    items: [
      {
        name: "컴포트 티셔츠",
        image: "https://picsum.photos/seed/order3/200/200",
        price: "59,000",
        size: "S",
        color: "블루",
      },
    ],
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "배송완료":
      return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
    case "배송중":
      return <TruckIcon className="w-5 h-5 text-blue-500" />;
    default:
      return <ClockIcon className="w-5 h-5 text-gray-500" />;
  }
};

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container max-w-4xl mx-auto space-y-8"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">주문 내역</h1>
          <Button variant="outline" className="glass-button">
            <PackageIcon className="w-4 h-4 mr-2" />
            전체보기
          </Button>
        </div>

        <div className="space-y-6">
          {orders.map((order) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass-card p-6 space-y-6">
                <div className="flex flex-wrap justify-between items-center gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">주문번호: {order.id}</p>
                    <p className="text-sm text-gray-600">주문일자: {order.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(order.status)}
                    <span className="text-sm font-medium">{order.status}</span>
                  </div>
                </div>

                <div className="divide-y divide-gray-100">
                  {order.items.map((item, index) => (
                    <div key={index} className="py-4 first:pt-0 last:pb-0">
                      <div className="flex items-center gap-4">
                        <div className="relative w-20 h-20 overflow-hidden rounded-lg">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-gray-900">
                            {item.name}
                          </h3>
                          <div className="mt-1 flex flex-wrap gap-x-4 text-sm text-gray-600">
                            <span>사이즈: {item.size}</span>
                            <span>컬러: {item.color}</span>
                          </div>
                          <p className="mt-1 text-sm font-medium text-gray-900">
                            {item.price}원
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" className="glass-button">
                            리뷰 작성
                          </Button>
                          <Button variant="outline" className="glass-button">
                            재구매
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-600">총 결제금액</span>
                  <span className="text-lg font-medium text-gray-900">
                    {order.total}원
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

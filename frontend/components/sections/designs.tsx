"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const designs = [
  {
    image: "https://picsum.photos/seed/ecopet-design1/800/1200",
    title: "에코 스웨터",
    category: "스웨터",
    price: "49,000",
    tags: ["재활용 원단", "수공예"],
  },
  {
    image: "https://picsum.photos/seed/ecopet-design2/800/1200",
    title: "오가닉 레인코트",
    category: "아우터",
    price: "59,000",
    tags: ["유기농 면", "방수"],
  },
  {
    image: "https://picsum.photos/seed/ecopet-design3/800/1200",
    title: "컴포트 티셔츠",
    category: "티셔츠",
    price: "39,000",
    tags: ["친환경", "통기성"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Designs = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
      
      <div className="container mx-auto container-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
            ✨ 트렌디한 디자인
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            지속 가능한 스타일
          </h2>
          <p className="text-muted-foreground text-lg">
            환경을 생각하면서도 트렌디한 디자인으로
            <br />
            반려동물의 개성을 살려보세요
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {designs.map((design, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group"
            >
              <div className="glass-card overflow-hidden mb-4">
                <div className="relative h-[400px] transform transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={design.image}
                    alt={design.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{design.title}</h3>
                  <span className="text-primary font-medium">₩{design.price}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{design.category}</Badge>
                  {design.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="hover-scale">
            전체 컬렉션 보기
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Designs;

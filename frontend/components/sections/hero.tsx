"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium"
          >
            🌱 친환경 패션의 새로운 기준
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text leading-tight"
          >
            지속 가능한
            <br />
            반려동물 패션
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
          >
            환경을 생각하는 친환경 소재로 만든
            <br className="hidden md:block" />
            우리 아이들을 위한 특별한 패션을 만나보세요
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button size="lg" className="text-lg px-8 hover-scale">
              컬렉션 보기
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 hover-scale"
            >
              맞춤 제작
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative h-[400px] md:h-[600px] hidden lg:block"
        >
          <div className="absolute inset-0 glass-card overflow-hidden">
            <Image
              src="https://picsum.photos/seed/ecopet-hero/1200/800"
              alt="Sustainable Pet Fashion"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute -right-8 top-1/2 -translate-y-1/2 glass-card p-6 max-w-[280px]"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                🌿
              </div>
              <div>
                <p className="font-medium text-gray-900">재활용 소재</p>
                <p className="text-sm text-muted-foreground">100% 친환경 원단</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

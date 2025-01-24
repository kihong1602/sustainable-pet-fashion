"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";

const About = () => {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="glass-card overflow-hidden">
              <div className="relative h-[500px]">
                <Image
                  src="https://picsum.photos/seed/ecopet-about/1200/800"
                  alt="About Eco Pet"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 glass-card p-6 max-w-[280px]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  🌍
                </div>
                <div>
                  <p className="font-medium text-gray-900">환경 보호</p>
                  <p className="text-sm text-muted-foreground">
                    매년 10톤의 폐기물 절감
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
              💚 우리의 이야기
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              지속 가능한 미래를 위한
              <br />
              우리의 노력
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              에코펫은 반려동물 패션 산업의 지속 가능성을 새롭게 정의합니다.
              우리는 환경을 생각하는 소재 선택부터 제로 웨이스트 생산 방식까지,
              모든 과정에서 지구를 생각합니다.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="glass-card p-6">
                <div className="text-3xl font-bold gradient-text mb-2">95%</div>
                <p className="text-muted-foreground">
                  재활용 소재 사용률
                </p>
              </div>
              <div className="glass-card p-6">
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <p className="text-muted-foreground">
                  생분해성 패키징
                </p>
              </div>
            </div>

            <Button size="lg" className="hover-scale">
              더 알아보기
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

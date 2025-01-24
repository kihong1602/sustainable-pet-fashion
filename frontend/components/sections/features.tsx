"use client";

import { motion } from "framer-motion";
import { LeafIcon, RecycleIcon, ScissorsIcon } from "lucide-react";

const features = [
  {
    icon: <RecycleIcon className="w-8 h-8" />,
    title: "친환경 소재",
    description: "재활용 원단과 지속 가능한 소재만을 엄선하여 사용합니다",
  },
  {
    icon: <ScissorsIcon className="w-8 h-8" />,
    title: "맞춤 제작",
    description: "반려동물의 체형과 특성을 고려한 완벽한 핏을 제공합니다",
  },
  {
    icon: <LeafIcon className="w-8 h-8" />,
    title: "제로 웨이스트",
    description: "생산 과정에서 발생하는 모든 자투리를 재활용합니다",
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

const Features = () => {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
            🌟 특별한 가치
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            지속 가능한 가치 실현
          </h2>
          <p className="text-muted-foreground text-lg">
            환경을 생각하는 제작 방식으로 더 나은 미래를 만들어갑니다
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glass-card p-8 text-center group hover-scale"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

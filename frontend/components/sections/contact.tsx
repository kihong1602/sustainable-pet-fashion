"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { MapIcon, PhoneIcon, MailIcon } from "lucide-react";

const contactInfo = [
  {
    icon: <MapIcon className="w-6 h-6" />,
    title: "주소",
    content: "서울특별시 강남구 테헤란로 123",
    link: "https://maps.google.com",
  },
  {
    icon: <PhoneIcon className="w-6 h-6" />,
    title: "전화",
    content: "02-123-4567",
    link: "tel:02-123-4567",
  },
  {
    icon: <MailIcon className="w-6 h-6" />,
    title: "이메일",
    content: "contact@ecopet.kr",
    link: "mailto:contact@ecopet.kr",
  },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 제출 로직 구현
  };

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
            📞 문의하기
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            함께 이야기를 나눠요
          </h2>
          <p className="text-muted-foreground text-lg">
            궁금한 점이 있으시다면 언제든 문의해주세요
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 flex items-center gap-6 hover-scale"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{info.title}</h3>
                    <p className="text-muted-foreground">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">이름</label>
                  <Input placeholder="홍길동" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">이메일</label>
                  <Input type="email" placeholder="example@email.com" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">제목</label>
                <Input placeholder="문의 제목을 입력해주세요" required />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">내용</label>
                <Textarea
                  placeholder="문의하실 내용을 자세히 적어주세요"
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full hover-scale">
                문의하기
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

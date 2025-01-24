"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  const footerLinks = {
    "회사 소개": [
      { name: "브랜드 스토리", href: "/about" },
      { name: "지속가능성", href: "/sustainability" },
      { name: "채용 정보", href: "/careers" },
    ],
    "고객 지원": [
      { name: "자주 묻는 질문", href: "/faq" },
      { name: "배송 안내", href: "/shipping" },
      { name: "반품/교환", href: "/returns" },
      { name: "사이즈 가이드", href: "/size-guide" },
    ],
    "법적 고지": [
      { name: "이용약관", href: "/terms" },
      { name: "개인정보처리방침", href: "/privacy" },
    ],
  };

  return (
    <footer className="bg-muted/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="text-2xl font-bold gradient-text">
              EcoPet
            </Link>
            <p className="mt-4 text-muted-foreground">
              지속 가능한 패션으로
              <br />더 나은 미래를 만듭니다
            </p>
          </motion.div>

          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="border-t border-border pt-8 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>© 2024 EcoPet. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}

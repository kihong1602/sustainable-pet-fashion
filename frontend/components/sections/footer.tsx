"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "lucide-react";

const footerLinks = {
  company: [
    { name: "소개", href: "/about" },
    { name: "채용", href: "/careers" },
    { name: "블로그", href: "/blog" },
    { name: "지속가능성", href: "/sustainability" },
  ],
  support: [
    { name: "고객센터", href: "/help" },
    { name: "배송안내", href: "/shipping" },
    { name: "반품/교환", href: "/returns" },
    { name: "자주묻는질문", href: "/faq" },
  ],
  legal: [
    { name: "이용약관", href: "/terms" },
    { name: "개인정보처리방침", href: "/privacy" },
    { name: "쿠키정책", href: "/cookies" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: InstagramIcon, href: "https://instagram.com" },
  { name: "Facebook", icon: FacebookIcon, href: "https://facebook.com" },
  { name: "Twitter", icon: TwitterIcon, href: "https://twitter.com" },
  { name: "LinkedIn", icon: LinkedinIcon, href: "https://linkedin.com" },
];

const Footer = () => {
  return (
    <footer className="bg-secondary/20">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16 py-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-2">에코펫 뉴스레터</h2>
              <p className="text-muted-foreground mb-6">
                지속 가능한 반려동물 패션의 새로운 소식을 받아보세요
              </p>
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="이메일을 입력하세요"
                  className="max-w-xs"
                />
                <Button className="hover-scale">구독하기</Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12"
            >
              <h3 className="font-semibold mb-4">SNS</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8"
          >
            <div>
              <h3 className="font-semibold mb-4">회사</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">고객지원</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">법적고지</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="border-t py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p> 2025 에코펫. All rights reserved.</p>
            <p>
              Made with for a sustainable future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

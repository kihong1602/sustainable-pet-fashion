"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      className="fixed w-full z-50 glass-morphism"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-2xl font-bold gradient-text hover-scale"
          >
            EcoPet
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/browse"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              컬렉션
            </Link>
            <Link
              href="/custom"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              맞춤제작
            </Link>
            <Link
              href="/about"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              소개
            </Link>
            <Link
              href="/review"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              후기
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hover-scale">
              로그인
            </Button>
            <Button size="sm" className="hover-scale">
              회원가입
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

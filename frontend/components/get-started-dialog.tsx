"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function GetStartedDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>시작하기</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>에코펫과 함께하기</DialogTitle>
          <DialogDescription>
            지속 가능한 반려동물 패션의 새로운 여정을 시작해보세요.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              이름
            </Label>
            <Input id="name" placeholder="홍길동" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              이메일
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="pet-type" className="text-right">
              반려동물
            </Label>
            <Input
              id="pet-type"
              placeholder="강아지 / 고양이"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full">
            가입하고 시작하기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

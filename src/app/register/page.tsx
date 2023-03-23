"use client";

import Text, { textVariants } from "@/components/ui/Text";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import * as React from "react";
import CustomSwitch from "@/components/ui/Switch";
import Button from "@/components/ui/Button";

const Page: React.FC = ({}) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  return (
    <div className={cn("flex min-w-full")}>
      <div className={cn("bg-accent md:w-[55%] h-screen relative")}>
        <Image
          src={"/assets/avira.svg"}
          width={96}
          height={81}
          alt="avira"
          className={cn("ml-20 mt-14")}
        />
        <Image
          src={"/assets/illustratione.svg"}
          width={100}
          height={100}
          alt="illustrasione"
          className={cn("absolute bottom-0 -right-20 w-full")}
        />
      </div>
      <div className={cn("inline-flex flex-col justify-center mx-auto")}>
        <Text type="h1" variant="heading1" value="Create an Account" />
        <Text
          type="h2"
          variant="bodyB2"
          className="mb-6"
          value="Hello there, Let’s start your journey with us."
        />

        <Input className={cn("mb-6")} placeholder="Email or phone number" />
        <Input
          className={cn("mb-6")}
          placeholder="Enter Password"
          type={showPassword ? "text" : "password"}
        >
          <Image
            src={showPassword ? "/assets/eye.svg" : "/assets/eyeslash.svg"}
            width={20}
            height={20}
            alt="eye"
            onClick={() => setShowPassword(!showPassword)}
            className={cn("cursor-pointer")}
          />
        </Input>
        <div className={cn("flex items-center gap-3 mb-6")}>
          <CustomSwitch enabled={true} />
          <p className={cn(textVariants({ variant: "captionC1" }))}>
            I accept the{" "}
            <span className={cn("text-accent")}>Terms of Service</span> and{" "}
            <span className={cn("text-accent")}>Privacy Policy.</span>
          </p>
        </div>
        <Button>
          <Text type="span" variant="bodyB1" colors="light" value="Sign up" />
        </Button>
      </div>
    </div>
  );
};

export default Page;

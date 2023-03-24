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
    <div className={cn("flex min-w-full h-screen")}>
      <div
        className={cn(
          "bg-accent md:w-[55%] h-screen relative hidden md:inline-block"
        )}
      >
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
          className={cn("md:absolute bottom-0 -right-20 md:w-full")}
        />
      </div>
      <div
        className={cn(
          "inline-flex flex-col justify-center mx-auto w-full md:w-[330px] px-6 md:px-0 gap-6 md:gap-6 "
        )}
      >
        <Text type="h1" variant="heading1" value="Nice to see you again!" />
        <Input className={cn("")} placeholder="Email or phone number" />
        <Input
          className={cn("")}
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
        <div className={cn("flex items-center justify-between")}>
          <div className={cn("inline-flex gap-2")}>
            <CustomSwitch enabled={true} />
            <Text type="span" variant="captionC1" value="Remember me" />
          </div>
          <Text type="span" variant="captionC1" value="Forgot password?" />
        </div>
        <Button>
          <Text type="span" variant="bodyB1" colors="light" value="Sign up" />
        </Button>
        <div className="border"></div>
        <div className="flex items-center justify-center">
          <Text
            value="Don’t have an account?"
            variant="captionC1"
            className={cn("text-tertiary pr-2")}
            type="span"
          />
          <Text
            value="Get Started"
            variant="captionC1Semi"
            className={cn("cursor-pointer")}
            colors="accent"
            type="span"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;

"use client";

import Text, { textVariants } from "@/components/ui/Text";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import * as React from "react";
import CustomSwitch from "@/components/ui/Switch";
import Button from "@/components/ui/Button";
import Link from "next/link";

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
          "inline-flex flex-col justify-center mx-auto w-full md:w-[350px] px-6 md:px-0 gap-6 md:gap-6 "
        )}
      >
        <div>
          <Text type="h1" variant="heading1" value="Create an Account" />
          <Text
            type="h2"
            variant="bodyB2"
            value="Hello there, Let’s start your journey with us."
          />
        </div>
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
        <div className={cn("flex items-center gap-3")}>
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
        <div className="border"></div>
        <div className="flex items-center justify-center">
          <Text
            value="Already have an account? "
            variant="captionC1"
            className={cn("text-tertiary pr-2")}
            type="span"
          />
          <Link
            href="/login"
            className={cn(
              "cursor-pointer",
              textVariants({ variant: "captionC1Semi", colors: "accent" })
            )}
          >
            Login now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;

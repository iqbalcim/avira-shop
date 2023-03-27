"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Text, { textVariants } from "@/ui/Text";
import { usePathname } from "next/navigation";

interface NavbarProps {}

interface ItemProps {
  text: string;
  href: string;
}

const Item: FC<ItemProps> = ({ text, href }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        href !== path
          ? textVariants({ variant: "bodyB1" })
          : textVariants({ variant: "bodyB1Semi", colors: "accent" })
      )}
    >
      {text}
    </Link>
  );
};

const Navbar: FC<NavbarProps> = ({}) => {
  const path = usePathname();
  return (
    <>
      {path !== "/login" && path !== "/register" && (
        <nav
          className={cn(
            "w-full px-16 h-[10vh] flex items-center shadow-md bg-white z-10"
          )}
        >
          <div className={cn("inline-flex w-full")}>
            <Link href="/">
              <Image
                src={"/assets/aviranav.svg"}
                width={80}
                height={68}
                alt="avira"
                priority
              />
            </Link>
          </div>
          <div className={cn("inline-flex justify-center gap-10 w-full")}>
            <Item href="/" text="Home" />
            <Item href="/shop" text="Shop" />
            <Item href="/about" text="About" />
            <Item href="/contact" text="Contact" />
          </div>
          <div
            className={cn("inline-flex justify-end items-center gap-10 w-full")}
          >
            <div className={cn("inline-flex items-center gap-2")}>
              <Image
                src={"/assets/user.svg"}
                width={16}
                height={16}
                alt="user"
              />
              <Link
                href="/login"
                className={cn(
                  "cursor-pointer",
                  textVariants({ variant: "bodyB2Semi", colors: "accent" })
                )}
              >
                Login
              </Link>
              <span
                className={cn(
                  textVariants({ variant: "bodyB2Semi", colors: "accent" })
                )}
              >
                /
              </span>
              <Link
                href="/register"
                className={cn(
                  "cursor-pointer",
                  textVariants({ variant: "bodyB2Semi", colors: "accent" })
                )}
              >
                Register
              </Link>
            </div>
            <Image
              src={"/assets/search.svg"}
              width={20}
              height={20}
              alt="search"
            />
            <Image src={"/assets/cart.svg"} width={20} height={20} alt="cart" />
            <Image
              src={"/assets/whistlist.svg"}
              width={20}
              height={20}
              alt="whistlist"
            />
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;

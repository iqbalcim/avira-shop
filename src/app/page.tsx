import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={cn("p-16")}>
      <div className={cn("flex gap-8")}>
        <div className={cn("relative w-[40%]")}>
          <Image
            src="/assets/allproduct.svg"
            alt="all product"
            width={850}
            height={100}
            className={cn("object-cover w-full h-full")}
          />
          <div className={cn("absolute top-0 left-0 p-10")}>
            <Text
              type="h1"
              value="Brands Everyone’s Crushing on"
              colors="accent"
              variant="bodyB2Semi"
            />
            <Link href="/shop" className={cn("flex items-center gap-6")}>
              <Text type="h1" value="Explore All" variant="heading1" />
              <Image
                src={"/assets/rigth-arrow.svg"}
                alt="iconarrow"
                width={30}
                height={14}
                className={cn("cursor-pointer")}
              />
            </Link>
          </div>
        </div>
        <div className={cn("flex flex-col gap-8 w-[60%]")}>
          <div className={cn("relative w-full shadow-md")}>
            <Image
              src="/assets/footwear.svg"
              alt="footwear"
              width={1200}
              height={600}
            />
            <div className={cn("absolute top-0 left-0 p-10")}>
              <Text
                type="h1"
                value="456 items"
                colors="accent"
                variant="bodyB2Semi"
              />
              <Link href="/shop" className={cn("flex items-center gap-6")}>
                <Text type="h1" value="Footwear" variant="heading1" />
                <Image
                  src={"/assets/rigth-arrow.svg"}
                  alt="iconarrow"
                  width={30}
                  height={14}
                  className={cn("cursor-pointer")}
                />
              </Link>
            </div>
          </div>
          <div className={cn("flex items-center gap-8")}>
            <div className={cn("relative w-auto")}>
              <Image
                src="/assets/sweaters.svg"
                alt="sweaters"
                width={600}
                height={600}
              />
              <div className={cn("absolute top-0 left-0 p-10")}>
                <Text
                  type="h1"
                  value="680 items"
                  colors="accent"
                  variant="bodyB2Semi"
                />
                <Link href="/shop" className={cn("flex items-center gap-6")}>
                  <Text type="h1" value="Sweaters" variant="heading1" />
                  <Image
                    src={"/assets/rigth-arrow.svg"}
                    alt="iconarrow"
                    width={30}
                    height={14}
                    className={cn("cursor-pointer")}
                  />
                </Link>
              </div>
            </div>
            <div className={cn("relative w-auto")}>
              <Image
                src="/assets/demins.svg"
                alt="demins"
                width={600}
                height={600}
              />
              <div className={cn("absolute top-0 left-0 p-10")}>
                <Text
                  type="h1"
                  value="341 items"
                  colors="accent"
                  variant="bodyB2Semi"
                />
                <Link href="/shop" className={cn("flex items-center gap-6")}>
                  <Text type="h1" value="Demins" variant="heading1" />
                  <Image
                    src={"/assets/rigth-arrow.svg"}
                    alt="iconarrow"
                    width={30}
                    height={14}
                    className={cn("cursor-pointer")}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

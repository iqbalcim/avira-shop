import ItemProduct from "@/components/ItemProduct";
import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const listProduct = [
    {
      id: 1,
      brand: "ZARA",
      name: "Green High Neck Knit Sweater",
      image: "/assets/product1.svg",
      price: "300.000",
    },
    {
      id: 2,
      brand: "ONLY",
      name: "Plush Jogging Trousers",
      image: "/assets/product2.svg",
      price: "200.000",
    },
    {
      id: 3,
      brand: "HnM",
      name: "Black sweater with long sleeves",
      image: "/assets/product3.svg",
      price: "350.000",
    },
    {
      id: 4,
      brand: "Plush",
      name: "High Rise Jeans- Ankle Length",
      image: "/assets/product4.svg",
      price: "250.000",
    },
  ];

  return (
    <div className={cn("px-16 pt-16 pb-6")}>
      {/* Category */}
      <Text type="h1" value="SHOP BY CATEGORIES" variant="heading1" />
      <div className={cn("flex gap-8 pt-10")}>
        <div className={cn("relative w-[30%]")}>
          <Image
            src="/assets/men.svg"
            alt="men"
            width={850}
            height={100}
            className={cn("object-cover w-full h-full")}
          />
          <Link
            href="/category/men"
            className={cn("absolute bottom-0 left-0 p-7")}
          >
            <Text
              type="h1"
              value="MEN"
              variant="bodyB1Semi"
              className={cn("bg-white px-16 py-4")}
            />
          </Link>
        </div>

        <div className={cn("relative w-[25%]")}>
          <Image
            src="/assets/women.svg"
            alt="women"
            width={1200}
            height={600}
            className={cn("object-cover w-full h-full")}
          />
          <Link
            href="/category/women"
            className={cn("absolute bottom-0 left-0 p-7")}
          >
            <Text
              type="h1"
              value="WOMEN"
              variant="bodyB1Semi"
              className={cn("bg-white px-16 py-4")}
            />
          </Link>
        </div>

        <div className={cn("w-[23%] flex flex-col gap-8")}>
          <div className={cn("relative")}>
            <Image
              src="/assets/accessories.svg"
              alt="accessories"
              width={1200}
              height={600}
            />
            <Link
              href="/category/accessories"
              className={cn("absolute bottom-0 left-0 p-7")}
            >
              <Text
                type="h1"
                value="ACCESSORIES"
                variant="bodyB1Semi"
                className={cn("bg-white px-16 py-4")}
              />
            </Link>
          </div>

          <div className={cn("relative")}>
            <Image
              src="/assets/footwearp.svg"
              alt="footwearp"
              width={1200}
              height={600}
            />
            <Link
              href="/category/footwear"
              className={cn("absolute top-0 left-0 p-7")}
            >
              <Text
                type="h1"
                value="FOOTWEAR"
                variant="bodyB1Semi"
                className={cn("bg-white px-16 py-4")}
              />
            </Link>
          </div>
        </div>
        <div className={cn("w-[23%] flex flex-col gap-8")}>
          <div className={cn("relative")}>
            <Image
              src="/assets/kids.svg"
              alt="kids"
              width={1200}
              height={600}
            />
            <Link
              href="/category/kids"
              className={cn("absolute bottom-0 left-0 p-7")}
            >
              <Text
                type="h1"
                value="KIDS"
                variant="bodyB1Semi"
                className={cn("bg-white px-16 py-4")}
              />
            </Link>
          </div>
          <div className={cn("relative")}>
            <Image
              src="/assets/beauty.svg"
              alt="beauty"
              width={1200}
              height={600}
            />
            <Link
              href="/category/beauty"
              className={cn("absolute top-0 left-0 p-7")}
            >
              <Text
                type="h1"
                value="BEAUTY"
                variant="bodyB1Semi"
                className={cn("bg-white px-16 py-4")}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* PRESALE */}
      <div className={cn("mt-20")}>
        <Text type="h1" value="PRODUCTS AT SLASHED PRICES" variant="heading1" />
        <div className={cn("pt-10 md:flex gap-6 justify-between")}>
          {listProduct.map((item) => (
            <ItemProduct
              key={item.id}
              image={item.image}
              name={item.brand}
              desc={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

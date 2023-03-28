import ItemProduct from "@/components/ItemProduct";
import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import Image from "next/image";

const page = ({ params }: { params: { name: string } }) => {
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
    {
      id: 5,
      brand: "ZARA",
      name: "Green High Neck Knit Sweater",
      image: "/assets/product1.svg",
      price: "300.000",
    },
    {
      id: 6,
      brand: "ONLY",
      name: "Plush Jogging Trousers",
      image: "/assets/product2.svg",
      price: "200.000",
    },
    {
      id: 7,
      brand: "HnM",
      name: "Black sweater with long sleeves",
      image: "/assets/product3.svg",
      price: "350.000",
    },
    {
      id: 8,
      brand: "Plush",
      name: "High Rise Jeans- Ankle Length",
      image: "/assets/product4.svg",
      price: "250.000",
    },
    {
      id: 9,
      brand: "ZARA",
      name: "Green High Neck Knit Sweater",
      image: "/assets/product1.svg",
      price: "300.000",
    },
    {
      id: 10,
      brand: "ONLY",
      name: "Plush Jogging Trousers",
      image: "/assets/product2.svg",
      price: "200.000",
    },
    {
      id: 11,
      brand: "HnM",
      name: "Black sweater with long sleeves",
      image: "/assets/product3.svg",
      price: "350.000",
    },
    {
      id: 12,
      brand: "Plush",
      name: "High Rise Jeans- Ankle Length",
      image: "/assets/product4.svg",
      price: "250.000",
    },
  ];
  return (
    <div className={cn("px-16 pt-16 pb-6")}>
      <div className={cn("flex justify-between items-center")}>
        <div className={cn("flex items-center gap-4")}>
          <Text
            type="h1"
            value={params.name.toUpperCase()}
            variant="heading1"
          />
          <Text type="span" value="•" variant="heading1" colors="accent" />
          <Text
            type="span"
            value="456 items"
            variant="bodyB2Semi"
            colors="accent"
          />
        </div>
        <div className={cn("flex items-center cursor-pointer gap-3")}>
          <Image
            src={"/assets/filter.svg"}
            alt="filter"
            width={20}
            height={20}
          />
          <Text type="span" value="Filters" variant="bodyB1" colors="accent" />
        </div>
      </div>
      <div
        className={cn(
          "md:flex items-center justify-between mt-10 gap-20 flex-wrap"
        )}
      >
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
  );
};

export default page;

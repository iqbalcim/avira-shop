import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";
import Text, { textVariants } from "@/ui/Text";
import Button from "@/ui/Button";

interface ItemProductProps {
  image: string;
  name: string;
  desc: string;
  price: string;
}

const ItemProduct: FC<ItemProductProps> = ({ image, name, desc, price }) => {
  return (
    <div className={cn("flex flex-col w-[300px] h-[610px] justify-between")}>
      <div className={cn("relative w-full h-[400px]")}>
        <Image
          src={image}
          alt="product"
          width={300}
          height={300}
          className={cn("object-cover h-full")}
        />
        <div
          className={cn(
            "absolute bottom-0 left-0 p-4 flex justify-between items-center "
          )}
        >
          <div
            className={cn(
              "bg-white px-3 py-1 flex items-center justify-between rounded"
            )}
          >
            <Image src="/assets/stars.svg" alt="heart" width={18} height={18} />
            <Text type="span" value="4.5" variant="captionC1Semi" />
          </div>
        </div>
        <div
          className={cn(
            "absolute bottom-0 right-0 p-4 flex justify-between items-center"
          )}
        >
          <Image
            src="/assets/heart.svg"
            alt="heart"
            width={24}
            height={24}
            className=""
          />
        </div>
      </div>
      <div className={cn("inline-flex flex-col gap-2")}>
        <Text type="h2" value={name} variant="bodyB1Semi" />
        <Text type="p" value={desc} variant="bodyB2" />
      </div>
      <Text
        type="span"
        value={`Rp. ${price}`}
        variant="bodyB2Semi"
        colors="accent"
      />
      <Button
        size="lg"
        className={cn(textVariants({ variant: "bodyB2Semi", colors: "light" }))}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ItemProduct;

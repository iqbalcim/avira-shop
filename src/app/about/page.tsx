import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

const page: FC = ({}) => {
  return (
    <div className={cn("flex items-center")}>
      <div className={cn("w-[60%] flex justify-center")}>
        <div className={cn("w-[700px] text-justify")}>
          <Text type="h1" variant="display" value="ABOUT US." />
          <Text
            type="p"
            variant="bodyB1"
            value="Avira caters to thoughtful shoppers who appreciate unique designs and top quality pieces you just can’t find elsewhere. We are constantly curating fresh new collections and looking for the next big thing our customers will love. Founded in Vienna in 2019, we are proud to be your Online Clothing Shop that you can rely on for our expert service and care."
            className={cn("text-tertiary py-10")}
          />
          <Text
            type="p"
            variant="bodyB1"
            value="We are here to serve you and make sure you find the Perfect Look for every occasion. Our passion for fashion is the reason why we are here. We absolutely love what we do, and our goal is to help our customers by providing them with unique outfit and accessories that make them stand-out from the crowd."
            className={cn("text-tertiary")}
          />
          <div className={cn("flex items-center  justify-between mt-24")}>
            <div>
              <Text type="h2" variant="display" value="50k+" />
              <Text
                type="h3"
                variant="heading2"
                value="Happy Customers"
                colors="accent"
              />
            </div>
            <div>
              <Text type="h2" variant="display" value="60+" />
              <Text
                type="h3"
                variant="heading2"
                value="Total Partners"
                colors="accent"
              />
            </div>
            <div>
              <Text type="h2" variant="display" value="5+" />
              <Text
                type="h3"
                variant="heading2"
                value="Years of Trust"
                colors="accent"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={cn("w-[40%]")}>
        <Image
          src={"/assets/about.svg"}
          width={100}
          height={100}
          alt="about"
          className={cn("w-full h-[90vh] object-cover")}
        />
      </div>
    </div>
  );
};

export default page;

import { Cards2Data } from "@/constants/index";
import { CardContent, Card } from "./ui/card";
import MotionComponent1 from "./MotionComponent1";
import Image from "@/node_modules/next/image";

const Cards2 = ({
  title,
  data,
  text,
  cols,
}: {
  title: string;
  data: Cards2Data[];
  text: string[];
  cols: number;
}) => {
  return (
    <div className="">
      <div className="container md:px-4 mx-auto py-10 md:py-16 border-t-2 space-y-3 md:space-y-10">
        <h2 className="">{title}</h2>
        <div className="grid md:grid-cols-2 items-center justify-between bg-[hsl(34,50%,94%)] rounded-xl overflow-hidden">
          <div className="text-center space-y-3 px-2 md:px-10">
            {text.map((text, i) => {
              return (
                <p key={i} className=" py-3">
                  {text}
                </p>
              );
            })}
            {data.map((item) => {
              return (
                <MotionComponent1 key={item.id}>
                  <OneCard key={item.id} item={item} />
                </MotionComponent1>
              );
            })}
          </div>
          <div className="">
            <Image
              src={"/gojaznost.png"}
              width={300}
              height={300}
              alt="svi na vagu"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards2;

const OneCard = ({ item }: { item: Cards2Data }) => {
  return (
    <Card className="h-full">
      <CardContent className=" flex gap-3 items-center justify-center">
        <p className="">{item.title}</p>
        <p className="text-3xl md:text-4xl pr-5 font-semibold text-primary">
          ?
        </p>{" "}
      </CardContent>
    </Card>
  );
};

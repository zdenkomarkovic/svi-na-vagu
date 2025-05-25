import { Cards2Data } from "@/constants/index";
import { CardContent, Card } from "./ui/card";
import MotionComponent1 from "./MotionComponent1";

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
      <div className="container px-2 md:px-4 mx-auto py-10 md:py-16 border-t-2 space-y-3 md:space-y-10">
        <h2 className="">{title}</h2>
        <div>
          {text.map((text, i) => {
            return (
              <p key={i} className=" py-3">
                {text}
              </p>
            );
          })}
        </div>
        <div
          className={`grid md:grid-cols-${cols} text-center gap-6 md:gap-8 items-stretch`}
        >
          {data.map((item) => {
            return (
              <MotionComponent1 key={item.id}>
                <OneCard key={item.id} item={item} />
              </MotionComponent1>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards2;

const OneCard = ({ item }: { item: Cards2Data }) => {
  return (
    <Card className="h-full">
      <CardContent className="">
        <p className="text-4xl pr-5 font-semibold text-primary">?</p>{" "}
        <p className="">{item.title}</p>
      </CardContent>
    </Card>
  );
};

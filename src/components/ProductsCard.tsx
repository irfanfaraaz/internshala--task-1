import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface Props {
    title: string;
    price: number;
    category: string;
    image: string;
}
export default function ProductsCard({ title, price, category, image }: Props) {
    return (
        <Card className="w-full shadow-md shadow-blue-700 bg-slate-900 text-muted-foreground p-1">
            <CardHeader className="flex flex-row items-center justify-between  pb-2">
                <CardTitle className="p-2 font-bold text-2xl bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent hover:from-indigo-600 hover:to-cyan-300 hover:cursor-pointer">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className=" flex flex-col sm:flex-row  text-muted-foreground pt-1">
                <img
                    src={image}
                    alt="product"
                    className="w-80 h-48 rounded-2xl shadow-md shadow-gray-600"
                />
                <div className="pl-10 w-full mt-3">
                    <p className="w-[80%] pb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eius odio hic mollitia qui sequi. Vitae animi earum
                        repudiandae maxime repellendus.
                    </p>
                    <p className="font-bold text-amber-300">{category}</p>
                    <div className="flex justify-end text-zinc-100 text-lg">
                        ${price}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

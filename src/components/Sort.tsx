import { Dispatch, SetStateAction } from "react";
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectItem,
} from "./ui/select";

interface SortProps {
    selectedSort: string;
    setSelectedSort: Dispatch<SetStateAction<string>>;
}

const Sort = ({ selectedSort, setSelectedSort }: SortProps) => {
    const sorts: string[] = [
        "Clear",
        "Price-Low to High",
        "Price-High to Low",
        "Category",
    ];
    const handleSortChange = (value: string) => {
        value === "Clear" ? setSelectedSort("") : setSelectedSort(value);
    };
    return (
        <div className="">
            <Select onValueChange={handleSortChange} value={selectedSort}>
                <SelectTrigger className={` bg-gray-200  px-5 py-2.5 `}>
                    <div className="line-clamp-1 flex-1">
                        <SelectValue placeholder="Sort by..." />
                    </div>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup className="text-muted-foreground border">
                        {sorts.map((item) => (
                            <SelectItem key={item} value={item}>
                                {item}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default Sort;

import { Dispatch, SetStateAction } from "react";
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectItem,
} from "./ui/select";

interface FilterProps {
    selectedFilter: string;
    setSelectedFilter: Dispatch<SetStateAction<string>>;
}

const Filter = ({ selectedFilter, setSelectedFilter }: FilterProps) => {
    const filters: string[] = [
        "All",
        "Electronics",
        "Clothing",
        "Home Decor",
        "Sports",
        "Toys",
    ];
    const handleFilterChange = (value: string) => {
        value === "All" ? setSelectedFilter("") : setSelectedFilter(value);
    };
    return (
        <div className="">
            <Select onValueChange={handleFilterChange} value={selectedFilter}>
                <SelectTrigger className={` bg-gray-200  px-5 py-2.5 `}>
                    <div className="line-clamp-1 flex-1">
                        <SelectValue placeholder="Select a Filter" />
                    </div>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup className="text-muted-foreground border">
                        {filters.map((item) => (
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

export default Filter;

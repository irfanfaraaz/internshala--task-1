import { useState } from "react";
import data from "../data";
import ProductsCard from "./ProductsCard";
import Filter from "./Filters";
import { Button } from "./ui/button";
import Sort from "./Sort";

const Products = () => {
    const [selectedFilter, setSelectedFilter] = useState("");

    // sorting
    const [selectedSort, setSelectedSort] = useState("");

    const sortedProducts = data.slice().sort((a, b) => {
        switch (selectedSort) {
            case "Price-Low to High":
                return a.price - b.price;
            case "Price-High to Low":
                return b.price - a.price;
            case "Category":
                return a.category.localeCompare(b.category);
            default:
                return 0; // No sorting
        }
    });
    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5;
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    const filteredProducts = selectedFilter
        ? sortedProducts
              .filter((product) =>
                  selectedFilter === "All"
                      ? true
                      : product.category === selectedFilter
              )
              .slice(startIndex, endIndex)
        : sortedProducts.slice(startIndex, endIndex);

    const totalPages =
        selectedFilter === "All" || selectedFilter === ""
            ? Math.ceil(data.length / productsPerPage)
            : Math.ceil(filteredProducts.length / productsPerPage);
    return (
        <>
            <div className="mt-10 w-full h-full  flex  flex-wrap justify-center  items-center">
                <div className="mt-4 w-[90%] h-full  flex  flex-wrap  p-4 gap-10">
                    <Filter
                        selectedFilter={selectedFilter}
                        setSelectedFilter={setSelectedFilter}
                    />
                    <Sort
                        selectedSort={selectedSort}
                        setSelectedSort={setSelectedSort}
                    />
                    {filteredProducts.map((product) => (
                        <ProductsCard
                            key={product.id}
                            title={product.title}
                            price={product.price}
                            category={product.category}
                            image={product.image}
                        />
                    ))}
                </div>

                <div className="text-white">
                    <Button
                        onClick={() =>
                            setCurrentPage((prevPage) =>
                                Math.max(prevPage - 1, 1)
                            )
                        }
                        disabled={currentPage === 1}
                        className="mr-4"
                    >
                        Previous
                    </Button>
                    <span>{`Page ${currentPage} of ${totalPages}`}</span>
                    <Button
                        onClick={() =>
                            setCurrentPage((prevPage) =>
                                Math.min(prevPage + 1, totalPages)
                            )
                        }
                        disabled={currentPage === totalPages}
                        className="ml-4"
                    >
                        Next
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Products;

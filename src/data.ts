interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
}

const data: Product[] = [
    {
        id: 1,
        title: "Product 1",
        description: "Description for Product 1",
        price: 19.99,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        title: "Product 2",
        description: "Description for Product 2",
        price: 29.99,
        category: "Clothing",
        image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENsb3RoaW5nfGVufDB8fDB8fHww",
    },
    {
        id: 3,
        title: "Product 3",
        description: "Description for Product 3",
        price: 14.99,
        category: "Home Decor",
        image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww",
    },
    {
        id: 4,
        title: "Product 4",
        description: "Description for Product 4",
        price: 39.99,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1609900179380-6cf74a55a827?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHNwb3J0cyUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
    },
    {
        id: 5,
        title: "Product 5",
        description: "Description for Product 5",
        price: 24.99,
        category: "Toys",
        image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRveXN8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 6,
        title: "Product 6",
        description: "Description for Product 6",
        price: 49.99,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
    },
    {
        id: 7,
        title: "Product 7",
        description: "Description for Product 7",
        price: 34.99,
        category: "Clothing",
        image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 8,
        title: "Product 8",
        description: "Description for Product 8",
        price: 19.99,
        category: "Home Decor",
        image: "https://plus.unsplash.com/premium_photo-1674635139152-267f57d9845a?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 9,
        title: "Product 9",
        description: "Description for Product 9",
        price: 29.99,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    },
    {
        id: 10,
        title: "Product 10",
        description: "Description for Product 10",
        price: 39.99,
        category: "Toys",
        image: "https://images.unsplash.com/photo-1599623560574-39d485900c95?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRveXN8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 11,
        title: "Product 11",
        description: "Description for Product 11",
        price: 44.99,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1649515530664-7a3150983c7e?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVsZWN0cm9uaWNzJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 12,
        title: "Product 12",
        description: "Description for Product 12",
        price: 27.99,
        category: "Clothing",
        image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoaW5nJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 13,
        title: "Product 13",
        description: "Description for Product 13",
        price: 21.99,
        category: "Home Decor",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SG9tZSUyMGRlY29ycHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 14,
        title: "Product 14",
        description: "Description for Product 14",
        price: 32.99,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1609250291996-fdebe6020a8f?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNwb3J0cyUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
    },
    {
        id: 15,
        title: "Product 15",
        description: "Description for Product 15",
        price: 19.99,
        category: "Toys",
        image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHRveXN8ZW58MHx8MHx8fDA%3D",
    },
];

export default data;

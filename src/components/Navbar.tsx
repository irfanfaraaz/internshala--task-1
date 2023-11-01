const Navbar = () => {
    return (
        <nav className="bg-neutral-900 flex w-full h-12 p-5 fixed top-0 z-20 items-center">
            <p className="p-2 font-bold text-3xl bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent hover:from-indigo-600 hover:to-cyan-300 hover:cursor-pointer">
                Products
            </p>
        </nav>
    );
};

export default Navbar;

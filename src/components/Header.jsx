const Header = ()=>{
    return (
        <div className="bg-black h-[5%] lg:flex justify-between p-5 w-full">
            <div className="h-10 lg:h-24 ml-10 flex">
                <img src="./src/assets/Accolades_logo.png" alt="logo"/>
            </div>
            <div className="flex flex-wrap justify-center items-center mt-2 lg: text-white gap-10 list-none mr-10 cursor-pointer">
                    <li>Home</li>
                    <li>Aboutus</li>
                    <li>Services</li>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>Contact</li>
            </div>
        </div>
    )
}

export default Header;
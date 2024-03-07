import Logo from "../assets/img/Cooking-logo.png";

export default function LogoForBanner() {
    return (
        <div className="flex flex-col flex-wrap w-full justify-center items-center h-fit md:flex-row md:items-end">
            <img src={Logo} alt="Cooking Logo" className="mr-[20px] mb-2 w-[110px]"/>
            <span className="flex flex-col font-bold text-5xl md:text-6xl h-full uppercase w-max">
                <p>Masak Yang</p>
                <p className="text-tertiary">kamu mau</p>
            </span>
        </div>
    );
}
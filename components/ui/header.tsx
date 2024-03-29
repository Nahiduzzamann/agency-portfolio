import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
export interface handleClick {
  handleClick: (sectionId: string) => void;
}
export default function Header({handleClick }:handleClick) {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image height={40} width={40} src={require('../../public/sjs.svg')} alt="logo"></Image>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              
              {/* <li>
                <p className="font-medium text-purple-600 cursor-pointer hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Home
                </p>
              </li> */}
              <li onClick={() => handleClick("missionVision")}>
                <p className="font-medium text-purple-600 cursor-pointer hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Mission & Vission
                </p>
              </li>
              <li onClick={() => handleClick("solutionservices")}>
                <p className="font-medium text-purple-600 cursor-pointer hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  IT Solution/Services
                </p>
              </li>
              <li onClick={() => handleClick("contact")}>
                <p className="font-medium text-purple-600 cursor-pointer hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Contact
                </p>
              </li>
            </ul>
          </nav>

          <MobileMenu handleClick={handleClick}/>
        </div>
      </div>
    </header>
  );
}

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      {/*   /////////////////////////////////             AMrquee ///////////////////////////////*/}
      <div className="py-1 px-3 bg-stone-800">
        <div className="relative flex overflow-x-hidden text-white text-sm">
          <div className="animate-marquee whitespace-nowrap">
            <span className="mx-4">
              1st International Conference on Advances in Computing,
              Communication Control and Networking- ICAC3N
            </span>
            <span className="mx-2">•</span>
            <span className="mx-4">
              1st International Conference on Advances in Computing,
              Communication and Networking- ICAC2N
            </span>
            <span className="mx-2">•</span>
            <span className="mx-4">
              1st International Conference on Advances in Computing,
              Communication and Networking- ICAC2N
            </span>
            <span className="mx-2">•</span>
            <span className="mx-4">
              1st International Conference on Advances in Computing,
              Communication and Networking- ICAC2N
            </span>
            <span className="mx-2">•</span>
            <span className="mx-4">
              1st International Conference on Advances in Computing,
              Communication and Networking- ICAC2N
            </span>
            <span className="mx-2">•</span>
            <span className="mx-4">
              1st International Conference on Advances in Computing,
              Communication and Networking- ICAC2N
            </span>
            <span className="mx-2">•</span>
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
            <span className="mx-4">
              1st International Conference on Advances in Computing,
              Communication Control and Networking- ICAC2N
            </span>
            <span className="mx-2">•</span>
            <span className="mx-4">Conference Record Number #60023</span>
            <span className="mx-2">•</span>
            <span className="mx-4">IEEE XPLORE COMPLIANT ISBN No.</span>
            <span className="mx-2">•</span>
            <span className="mx-4">
              1st International Conference on Advances in Computing,
              Communication Control and Networking- ICAC3N
            </span>
            <span className="mx-2">•</span>
            //<span className="mx-4">Conference Record Number #60023</span>
            <span className="mx-2">•</span>
            {/**<span className="mx-4">
              IEEE XPLORE COMPLIANT ISBN No. 
            </span> */}
            <span className="mx-2">•</span>
          </div>
        </div>
      </div>
      {/* ////////////////////////////////// Navbar UpData////////////////////////////////////*/}
      <nav className="bg-red-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between gap-y-6 mx-auto p-4">
          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex items-center">
              <div className="h-12">
                <img
                  src="/Logo.jpeg"
                  alt=""
                  className="h-[50px] w-[50px] mr-3"
                />
              </div>
              <span className="font-semibold text-2xl tracking-tight text-white mr-3">
                ICAC2N
              </span>
              <div className="bg-gray-50 flex justify-center items-center pl-3 pr-4 pt-4 pb-3 rounded-md">
                <img
                  src="https://icac3n.in/_next/image?url=%2FIEEE_up.png&w=256&q=75"
                  alt=""
                  className="w-[75px] h-[26px]"
                />
              </div>
            </div>

            <div className="flex flex-row gap-1 justify-normal items-center">
              <Link
                to="/extra"
                className="px-4 h-fit py-2 bg-sky-600 mx-2 rounded-lg  md:block text-white cursor-pointer "
              >
                Submit Paper
              </Link>
            </div>
          </div>
          <div className=" md:block">
            <ul className="flex flex-col gap-3 md:text-sm lg:gap-5 justify-between md:items-center items-start font-medium md:p-0 rounded-lg md:flex-row md:mt-0 md:border-0">
              <div className="md:w-auto w-full">
                <li className="cursor-pointer text-white">
                  <Link to="/">HOME</Link>
                </li>
              </div>
              <div className="md:w-auto w-full">
                <li className="cursor-pointer text-white">
                  <Link to="/about">ABOUT</Link>
                </li>
              </div>
              <div className="md:w-auto w-full">
                <li className="cursor-pointer text-white">
                  <Link to="/guidelines">GUIDELINES</Link>
                </li>
              </div>
              <div className="md:w-auto w-full">
                <li className="cursor-pointer text-white">
                  <Link to="/speakers">SPEAKERS</Link>
                </li>
              </div>
              <div className="md:w-auto w-full">
                <li className="cursor-pointer text-white">
                  <Link to="/committee">COMMITTEE</Link>
                </li>
              </div>
              <div className="md:w-auto w-full">
                <li className="cursor-pointer text-white">
                  <Link to="/call-for-papers">CALL FOR PAPERS</Link>
                </li>
              </div>
              <div className="md:w-auto w-full">
                <li className="cursor-pointer text-white">
                  <Link to="/register">REGISTER</Link>
                </li>
              </div>
              <div className="md:w-auto w-full">
                <li className="cursor-pointer text-white">
                  <Link to="/contact">CONTACT</Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {/*////////////////////////////////////Data ..////////////////////////////////////..........*/}

      <div className="w-full md:block lg:w-auto"></div>
    </div>
  );
};
export default Navbar;

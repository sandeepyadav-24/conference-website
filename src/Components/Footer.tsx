const Footer = () => {
  return (
    <div className="bg-red-800 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6">
        <div className="md:flex md:justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="" className="flex items-center">
              <div className="h-8 mr-3">
                <img src="/Logo.jpeg" alt="Logo" className="h-9" />
              </div>
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                ICAC2N-24
              </span>
            </a>
            <p className="my-4 max-w-xs text-white">
              International Conference on Advances in Computing, Communication
              Control and Networking (ICAC2N–24)
            </p>
            <div className="w-fit bg-gray-50 flex justify-center items-center pl-3 pr-4 pt-4 pb-3 rounded-md">
              <img
                src="https://icac3n.in/_next/image?url=%2FIEEE_up.png&w=256&q=75"
                alt="IEEE UP Logo"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 font-semibold uppercase text-white underline">
                Important
              </h2>
              <ul className="text-gray-200 font-medium">
                <li className="mb-4">
                  <a className="hover:underline">Dates</a>
                </li>

                <li>
                  <a className="hover:underline">Downloads</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 font-semibold uppercase text-white underline">
                Resources
              </h2>
              <ul className="text-gray-200 font-medium">
                <li className="mb-4">
                  <a className="hover:underline">Register</a>
                </li>
                <li>
                  <a className="hover:underline">Guidelines</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 font-semibold uppercase text-white underline">
                Latest
              </h2>
              <ul className="text-gray-200 font-mediums">
                <li className="mb-4">
                  <a className="hover:underline">Speakers</a>
                </li>
                <li>
                  <a className="hover:underline">Committee</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-3 border-red-400 sm:mx-auto dark:border-gray-700" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-100">
            <a href="" className="hover:underline mt-2 py-3">
              Department of Computer Science and Engineering, ITSEC
            </a>
            <p className="py-1 block">
              Developed by
              <a href="https://github.com/sandeepyadav-24"> Sandeep Yadav, </a>
              <a href=""> Suyash Gautam</a>
            </p>
          </span>
          <div className="flex mt-4 space-x-6 text-2xl text-white sm:justify-center sm:mt-0">
            <a href="https://twitter.com/icac3n">T</a>
            <a href="https://twitter.com/icac3n">C</a>
            <a href="https://twitter.com/icac3n">F</a>
            <a href="https://twitter.com/icac3n">M</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

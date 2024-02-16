const Intro = () => {
  return (
    <div className="grid grid-cols-5 gap-5 items-center justify-center lg:text-start text-center mt-2">
      <div className="col-span-full lg:col-span-2 flex flex-col justify-between h-full self-start gap-2">
        <div className="flex items-center space-x-2 lg:justify-start justify-center">
          <p className="text-red-800 font-semibold">
            16th and 17th December 2024
          </p>
        </div>
        <div className=" lg:hidden flex items-center space-x-2 lg:justify-start justify-center">
          <div className="text-red-800">
            <p className="font-semibold text">
              Conference Record Number #60023
            </p>
          </div>
        </div>
        <div className=" lg:hidden flex items-center space-x-2 lg:justify-start justify-center">
          <div className="text-red-800">
            <p className="font-semibold text">
              IEEE XPLORE COMPLIANT ISBN No. <span>979-8-3503-3086-1</span>
            </p>
          </div>
        </div>
        <p className="text-3xl lg:text-4xl break-words my-3 lg:my-2 font-bold mx-2 lg:mx-0">
          1st International Conference on Advances in Computing, Communication
          and Networking- ICAC2N
        </p>
        <div className="hidden lg:flex items-center space-x-2 lg:justify-start justify-center">
          <div className="text-red-800">
            <p className="font-semibold text">
              Conference Record Number #60023
            </p>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-2 lg:justify-start justify-center">
          <div className="text-red-800">
            <p className="font-semibold text">
              IEEE XPLORE COMPLIANT ISBN No. <span>979-8-3503-3086-1</span>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 lg:justify-start justify-center">
          <div className="text-red-800">
            <p className="font-semibold text">
              Computer Science and Engineering Department
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 lg:justify-start justify-center">
          <div className="text-red-800">
            <p className="font-semibold texts">ITS Enginerring College</p>
            <p className="text-sm">Knowledge Park III, Greater Noida</p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <a
            href="www.google.com"
            className="px-4 h-fit py-2 bg-red-700 rounded-lg w-fit md:hidden block text-white cursor-pointer "
          >
            Submit Paper
          </a>
        </div>
        <div className="flex space-x-5 text-2xl text-red-800 mt-4 items-center lg:justify-start justify-center">
          <a aria-label="icac3n twitter" href="https://twitter.com/icac3n">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              className="cursor-pointer grow-on-hover hover:text-sky-500"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
              </g>
            </svg>
          </a>
          <a aria-label="icac3n phone" href="tel:+91-7835878146">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              className="cursor-pointer  grow-on-hover hover:text-emerald-500"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"></path>
              </g>
            </svg>
          </a>
          <a
            aria-label="icac3n facebook"
            href="https://www.facebook.com/IEEE.ICAC3N.21"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              className="cursor-pointer  grow-on-hover hover:text-indigo-700"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.19 19.19 0 0 0-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4.598z"></path>
              </g>
            </svg>
          </a>
          <a
            aria-label="icac3n mail"
            href="mailto:vishnu.sharma@galgotiacollege.edu"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              className="cursor-pointer  grow-on-hover hover:text-amber-400"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z"></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div className="col-span-full lg:col-span-3 flex h-full w-full px-1 rounded-lg overflow-hidden">
        <div className="relative w-full h-full overflow-x-hidden flex">
          <div
            draggable="false"
            className="w-full h-full inline-block flex-none left-0 right-0 transform-none select-none touch-action-pan-y"
          >
            <div className="flex h-full w-full cursor-grab active:cursor-grabbing">
              <img
                draggable="false"
                alt=""
                srcSet="https://icac3n.in/_next/image?url=%2Fimages%2Fslider%2Fimage2.jpg&w=3840&q=75 1x"
                src="https://icac3n.in/_next/image?url=%2Fimages%2Fslider%2Fimage2.jpg&w=3840&q=75"
                width="3000"
                height="2000"
                decoding="async"
                data-nimg="1"
                className=" h-full mx-auto object-cover rounded-md shadow-lg text-transparent"
                loading="lazy"
              />
            </div>
          </div>
          <div
            draggable="false"
            className="w-full h-full inline-block flex-none left-full right-full transform-none select-none touch-action-pan-y"
          >
            <div className="flex h-full w-full cursor-grab active:cursor-grabbing">
              <img
                draggable="false"
                alt=""
                srcSet="https://icac3n.in/_next/image?url=%2Fimages%2Fslider%2Fimage3.jpg&w=3840&q=75 1x"
                src="https://icac3n.in/_next/image?url=%2Fimages%2Fslider%2Fimage3.jpg&w=3840&q=75"
                width="3000"
                height="2000"
                decoding="async"
                data-nimg="1"
                className=" h-full mx-auto object-cover rounded-md shadow-lg text-transparent"
                loading="lazy"
              />
            </div>
          </div>
          <div
            draggable="false"
            className="w-full h-full inline-block flex-none left-200 right-200 transform-none select-none touch-action-pan-y"
          >
            <div className="flex h-full w-full cursor-grab active:cursor-grabbing">
              <img
                draggable="false"
                alt=""
                srcSet="https://icac3n.in/_next/image?url=%2Fimages%2Fslider%2Fimage4.jpg&w=3840&q=75 1x"
                src="https://icac3n.in/_next/image?url=%2Fimages%2Fslider%2Fimage4.jpg&w=3840&q=75"
                width="3000"
                height="2000"
                decoding="async"
                data-nimg="1"
                className=" h-full mx-auto object-cover rounded-md shadow-lg text-transparent"
                loading="lazy"
              />
            </div>
          </div>
          <div
            className="w-full h-full inline-block flex-none left-300 right-300 transform-none select-none touch-action-pan-y"
            draggable="false"
          >
            <div className="flex h-full w-full cursor-grab active:cursor-grabbing">
              <img
                draggable="false"
                alt=""
                srcSet="/_next/image?url=%2Fimages%2Fslider%2Fimage6.jpg&amp;w=3840&amp;q=75 1x"
                src="/_next/image?url=%2Fimages%2Fslider%2Fimage6.jpg&amp;w=3840&amp;q=75"
                width="3000"
                height="2000"
                decoding="async"
                data-nimg="1"
                className=" h-full mx-auto object-cover rounded-md shadow-lg text-transparent"
                loading="lazy"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-10 bg-gray-800 bg-opacity-20 flex flex-row gap-2 items-center justify-center rounded-lg">
            <div className="bg-amber-400 w-3 h-3  cursor-pointer hover:bg-red-600 transition duration-300 ease-in-out rounded-lg"></div>
            <div className="bg-white w-3 h-3  cursor-pointer hover:bg-red-600 transition duration-300 ease-in-out rounded-lg"></div>
            <div className="bg-white w-3 h-3  cursor-pointer hover:bg-red-600 transition duration-300 ease-in-out rounded-lg"></div>
            <div className="bg-white w-3 h-3  cursor-pointer hover:bg-red-600 transition duration-300 ease-in-out rounded-lg"></div>
          </div>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
};
export default Intro;

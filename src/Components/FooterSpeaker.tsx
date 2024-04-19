// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const FooterSpeaker = () => {
  return (
    <div className="select-none">
      <div className="flex flex-row items-center mx-5 md:mx-auto">
        <h1 className="text-2xl text-black font-extrabold my-5">
          Hon'ble Speakers
        </h1>
      </div>
      <div className="w-full bg-gray-100 p-4 rounded-lg">
        <div className="swiper mySwiper mx-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1713452018/ConferenceAssets/gvxgxu0hevraexehrjx3.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-amber-800">
                    National Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                  Prof. (Dr.) S. K. Singh
                </span>
                <span className="font-light text-xs text-center">
                  Vice Chancellor, Rajasthan Technical University, Kota
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526987/ConferenceAssets/xh1ay7h3tovn6vttzcwn.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-amber-800">
                    National Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                  Dr. Akhilesh Tiwari
                </span>
                <span className="font-light text-xs text-center">
                  Secretary IEEE and Associate Professor in IIIT Allahabad
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1713452019/ConferenceAssets/mpb5dwnyzjdrcghbkef0.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-amber-800">
                    National Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                  Dr. Virender Ranga
                </span>
                <span className="font-light text-xs text-center">
                  Associate Professor, Department of Information Technology,
                  Delhi Technological University
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526986/ConferenceAssets/irbpoz8ub3209wf4wjp5.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-amber-800">
                    National Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                  Prof. (Dr.) P. Nagabhushan
                </span>
                <span className="font-light text-xs text-center">
                  Vice-Chancellor, Vignan &#x27;s Foundation for Science,
                  Technology &amp;Research, Andhra Pradesh
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710528682/ConferenceAssets/n6q7ktwnnub0ommxgomd.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-amber-800">
                    National Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                  Prof. (Dr.) Satish K. Singh
                </span>
                <span className="font-light text-xs text-center">
                  IIIT Allahabad / Section Chair, IEEE UP Section.
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710528683/ConferenceAssets/yd7bayfsfws9uit52zmx.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-blue-800 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-blue-800">
                    International Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                  Prof. (Dr.) Shaymaa R. Tahhan
                </span>
                <span className="font-light text-xs text-center">
                  Laser and Optoelectronics Department, College of Engineering,
                  Al-Nahrain University, Baghdad, Iraq
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710528682/ConferenceAssets/l2cl874gzorwdjklangb.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-blue-800 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-blue-800">
                    International Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                  Prof. (Dr.) Anand Nayyar
                </span>
                <span className="font-light text-xs text-center">
                  School of Computer Science, Faculty of Information Technology,
                  Duy Tan University, Da Nang, Viet Nam
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526986/ConferenceAssets/gnadmkcrpkfc0fvonpej.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-blue-800 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-blue-800">
                    International Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                  Dr. Sandeep Kajal
                </span>
                <span className="font-light text-xs text-center">
                  Postdocotral Researcher at the Department of Mechanical and
                  Material Enginnering, University of Western Ontario, Canada
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526986/ConferenceAssets/hvaxgucrjogkzmmelhbq.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-blue-800 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-blue-800">
                    International Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                  Dr. Ajay Beniwal
                </span>
                <span className="font-light text-xs text-center">
                  Marie Curie Fellow at University of Glasgow, United Kingdom
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1713452018/ConferenceAssets/evctl9ybkyy4xdha0sqk.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-blue-800 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-blue-800">
                    International Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                  Prof. Dr. Neyara Radwan
                </span>
                <span className="font-light text-xs text-center">
                  Associate Professor Industrial Engineering Dept., College of
                  Applied Sciences, AL MAAREFA UNIVERSITY, Saudi Arabia
                  &amp;Mechanical Dept., Faculty of Engineering, Suez Canal
                  University,Egypt
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526984/ConferenceAssets/rvtqaqd2gl7wupnw8j0a.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-blue-800 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-blue-800">
                    International Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                  Dr. Ahmed A. Elngar
                </span>
                <span className="font-light text-xs text-center">
                  Associate Professor, Faculty of CS and AI, Beni-Suef
                  University, Beni-Suef City, 62511, Egypt
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526984/ConferenceAssets/mlctgifpndbsn1p2e9sg.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-blue-800 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-blue-800">
                    International Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                  Dr. Kashif Nisar
                </span>
                <span className="font-light text-xs text-center">
                  Swinburne University of Technology, Sydney, New South Wales,
                  Australia
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1713452018/ConferenceAssets/ci1vwoyuhrum4ashujvn.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-blue-800 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-blue-800">
                    International Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                  Dr. Ana Clarke
                </span>
                <span className="font-light text-xs text-center">
                  Founder and CEO of AC SmartData
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526983/ConferenceAssets/dggqlawqezcvneess62a.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-blue-800 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-blue-800">
                    International Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                  Prof. Nada Ratković
                </span>
                <span className="font-light text-xs text-center">
                  Assistant Professor, Department of Quantitative Methods on
                  Faculty of Economics, Business and Tourism, University Split.
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526986/ConferenceAssets/sbbsc4xwoc1l9qogy9tr.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-amber-800">
                    National Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                  Prof. (Dr.) Deepak Garg
                </span>
                <span className="font-light text-xs text-center">
                  Vice Chancellor @ SR University | PhD in AI | Founder
                  leadingindia.ai
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526985/ConferenceAssets/wzcnjyljg4jigusvcmhx.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-amber-800">
                    National Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                  Prof. (Dr.) Asheesh K. Singh
                </span>
                <span className="font-light text-xs text-center">
                  Professor EE Department, MNNIT, Allahabad / Immediate Past
                  Section Chair, IEEE UP Section
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526985/ConferenceAssets/ww12ga3i21esptn3ij7s.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-amber-800">
                    National Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                  Prof. (Dr.) Prabhakar Tiwari
                </span>
                <span className="font-light text-xs text-center">
                  MMMUT, Gorakhpur/ Secretary, IEEE U.P. Section
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526985/ConferenceAssets/u1sr91reu5ae1eqnjtmy.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-amber-800">
                    National Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                  Prof. (Dr.) Malay Kishore Dutta
                </span>
                <span className="font-light text-xs text-center">
                  Director, Centre for Artificial Intelligence &amp;Dean Student
                  Research, Amity University, Noida, India
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526984/ConferenceAssets/lcs6eejonbemwbeafix8.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-amber-800">
                    National Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                  Prof. (Dr.) Neetesh Purohit
                </span>
                <span className="font-light text-xs text-center">
                  Indian Institute of Information Technology, Allahabad (IIITA),
                  Prayagraj, UP
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526984/ConferenceAssets/zog1nzfyisblpai12ibq.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-amber-800">
                    National Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                  Prof. (Dr.) N. Badal
                </span>
                <span className="font-light text-xs text-center">
                  Director, REC, Bijnor (U.P.), India
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526984/ConferenceAssets/bysze53ht5kdi2hwicbo.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-amber-800">
                    National Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                  Prof. (Dr.) J Ramkumar
                </span>
                <span className="font-light text-xs text-center">
                  Professor, IIT Kanpur India, Ex Chair of IEEE UP
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dooi3sikb/image/upload/v1710526983/ConferenceAssets/agwdve3ak2bmgdfujfj0.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-amber-800">
                    National Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                  Prof. (Dr.) Rajiv Saxena
                </span>
                <span className="font-light text-xs text-center">
                  Vice Chancellor, Jaypee University, Anoopshahr
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="col-span-1 flex flex-col items-center gap-2 justify-center my-5">
        <div className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-sky-600 hover:bg-sky-700 shrink-on-hover focus:ring-4 focus:ring-sky-300 no-underline dark:focus:ring-sky-700">
          <Link to={"/speakers"}>View all</Link>
        </div>
      </div>
    </div>
  );
};

export default FooterSpeaker;

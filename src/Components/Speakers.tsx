const Speakers = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="my-8 min-h-[calc(100vh-28.8rem)]">
          <h1 className="text-3xl font-bold text-center mb-10">
            Speakers for ICACCN 2024
          </h1>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8 px-5">
            <div className="col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img
                  src="data:image/jpeg;base64,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"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) Sri Niwas Singh"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full font-semibold w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-lg">
                  Prof. (Dr.) Sri Niwas Singh
                </span>
                <span className="font-light text-xs pr-2">
                  Director, Atal Bihari Vajpayee- Indian Institute of
                  Information Technology and Management (ABV-IIITM), Gwalior,
                  India / Chairman, India Council, IEEE India.
                </span>
              </div>
            </div>
            <div className="col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img
                  src="https://icac3n.in/images/speakers/Prof.%20(Dr.)%20M.N.Doja.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) M.N.Doja"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full font-semibold w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-lg">
                  Prof. (Dr.) M.N.Doja
                </span>
                <span className="font-light text-xs pr-2">
                  Director IIIT, Sonepat
                </span>
              </div>
            </div>
            <div className="col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img
                  src="https://icac3n.in/images/speakers/Prof.%20(Dr.)%20S.%20K.%20Singh.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) S. K. Singh"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full font-semibold w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-lg">
                  Prof. (Dr.) S. K. Singh
                </span>
                <span className="font-light text-xs pr-2">
                  Vice Chancellor, Rajasthan Technical University, Kota
                </span>
              </div>
            </div>
            <div className="col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img
                  src="https://icac3n.in/images/speakers/Dr.%20Akhilesh%20Tiwari.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Dr. Akhilesh Tiwari"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full font-semibold w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-lg">
                  Dr. Akhilesh Tiwari
                </span>
                <span className="font-light text-xs pr-2">
                  Secretary IEEE and Associate Professor in IIIT Allahabad
                </span>
              </div>
            </div>
            <div className="col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img
                  src="https://icac3n.in/images/speakers/Dr.%20Virender%20Ranga.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Dr. Virender Ranga"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full font-semibold w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-lg">
                  Dr. Virender Ranga
                </span>
                <span className="font-light text-xs pr-2">
                  Associate Professor, Department of Information Technology,
                  Delhi Technological University
                </span>
              </div>
            </div>
            <div className="col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img
                  src="https://icac3n.in/images/speakers/Prof.%20(Dr.)%20P.%20Nagabhushan.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) P. Nagabhushan"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full font-semibold w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-lg">
                  Prof. (Dr.) P. Nagabhushan
                </span>
                <span className="font-light text-xs pr-2">
                  Vice-Chancellor, Vignan &#x27;s Foundation for Science,
                  Technology &amp;Research, Andhra Pradesh
                </span>
              </div>
            </div>
            <div className="col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img
                  src="https://icac3n.in/images/speakers/Prof.%20(Dr.)%20Satish%20K.%20Singh.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) Satish K. Singh"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full font-semibold w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-lg">
                  Prof. (Dr.) Satish K. Singh
                </span>
                <span className="font-light text-xs pr-2">
                  IIIT Allahabad / Section Chair, IEEE UP Section.
                </span>
              </div>
            </div>
            <div className="col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img
                  src="https://icac3n.in/images/speakers/Prof.%20(Dr.)%20Shaymaa%20R.%20Tahhan.jpeg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) Shaymaa R. Tahhan"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full w-fit font-semibold bg-blue-800 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-blue-800">
                      International Speaker
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-lg">
                  Prof. (Dr.) Shaymaa R. Tahhan
                </span>
                <span className="font-light text-xs pr-2">
                  Laser and Optoelectronics Department, College of Engineering,
                  Al-Nahrain University, Baghdad, Iraq
                </span>
              </div>
            </div>
            <div className="col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img
                  src="https://icac3n.in/images/speakers/Prof.%20(Dr.)%20Anand%20Nayyar.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) Anand Nayyar"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full w-fit font-semibold bg-blue-800 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-blue-800">
                      International Speaker
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-lg">
                  Prof. (Dr.) Anand Nayyar
                </span>
                <span className="font-light text-xs pr-2">
                  School of Computer Science, Faculty of Information Technology,
                  Duy Tan University, Da Nang, Viet Nam
                </span>
              </div>
            </div>
            <div className="col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img
                  src="https://media.licdn.com/dms/image/C5603AQHRbKVx1VgZ-Q/profile-displayphoto-shrink_800_800/0/1630743880556?e=2147483647&v=beta&t=jObyDvK_4ac14uauoTSrq7F8GaQgLP76DSNh2Uf6Y8s"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Dr. Sandeep Kajal"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full w-fit font-semibold bg-blue-800 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-blue-800">
                      International Speaker
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-lg">Dr. Sandeep Kajal</span>
                <span className="font-light text-xs pr-2">
                  Postdocotral Researcher at the Department of Mechanical and
                  Material Enginnering, University of Western Ontario, Canada
                </span>
              </div>
            </div>
            <div className="col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img
                  src="https://icac3n.in/images/speakers/Dr.%20Ajay%20Beniwal.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Dr. Ajay Beniwal"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full w-fit font-semibold bg-blue-800 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-blue-800">
                      International Speaker
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-lg">Dr. Ajay Beniwal</span>
                <span className="font-light text-xs pr-2">
                  Marie Curie Fellow at University of Glasgow, United Kingdom
                </span>
              </div>
            </div>
            <div className="col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img
                  src="https://icac3n.in/images/speakers/Dr.%20Neyara%20Radwan.jpeg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. Dr. Neyara Radwan"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full w-fit font-semibold bg-blue-800 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-blue-800">
                      International Speaker
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-lg">
                  Prof. Dr. Neyara Radwan
                </span>
                <span className="font-light text-xs pr-2">
                  Associate Professor Industrial Engineering Dept., College of
                  Applied Sciences, AL MAAREFA UNIVERSITY, Saudi Arabia
                  &amp;Mechanical Dept., Faculty of Engineering, Suez Canal
                  University, Egypt
                </span>
              </div>
            </div>
            <div className="col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img
                  src="https://icac3n.in/images/speakers/Dr.%20Ahmed%20A.%20Elngar.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Dr. Ahmed A. Elngar"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full w-fit font-semibold bg-blue-800 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-blue-800">
                      International Speaker
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-lg">
                  Dr. Ahmed A. Elngar
                </span>
                <span className="font-light text-xs pr-2">
                  Associate Professor, Faculty of CS and AI, Beni-Suef
                  University, Beni-Suef City, 62511, Egypt
                </span>
              </div>
            </div>
            <div className="col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img
                  src="https://icac3n.in/images/speakers/Dr.%20Kashif%20Nisar,%20SMIEEE.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Dr. Kashif Nisar"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full w-fit font-semibold bg-blue-800 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-blue-800">
                      International Speaker
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-lg">Dr. Kashif Nisar</span>
                <span className="font-light text-xs pr-2">
                  Swinburne University of Technology, Sydney, New South Wales,
                  Australia
                </span>
              </div>
            </div>
            <div className="col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img
                  src="https://icac3n.in/images/speakers/Dr.%20Ana%20Clarke.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Dr. Ana Clarke"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full w-fit font-semibold bg-blue-800 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-blue-800">
                      International Speaker
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-lg">Dr. Ana Clarke</span>
                <span className="font-light text-xs pr-2">
                  Founder and CEO of AC SmartData
                </span>
              </div>
            </div>
            <div className="col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img
                  src="https://icac3n.in/images/speakers/Prof.%20Nada%20Ratkovi%C4%87,%20Croatia.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. Nada Ratković"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full w-fit font-semibold bg-blue-800 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-blue-800">
                      International Speaker
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-lg">
                  Prof. Nada Ratković
                </span>
                <span className="font-light text-xs pr-2">
                  Assistant Professor, Department of Quantitative Methods on
                  Faculty of Economics, Business and Tourism, University Split.
                </span>
              </div>
            </div>
            <div className="col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img
                  src="https://icac3n.in/images/speakers/Prof.%20(Dr.)%20Deepak%20Garg.jpeg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) Deepak Garg"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full font-semibold w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-lg">
                  Prof. (Dr.) Deepak Garg
                </span>
                <span className="font-light text-xs pr-2">
                  Vice Chancellor @ SR University | PhD in AI | Founder
                  leadingindia.ai
                </span>
              </div>
            </div>
            <div className="col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img
                  src="https://icac3n.in/images/speakers/Prof.%20(Dr.)%20Asheesh%20K.%20Singh.jpeg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) Asheesh K. Singh"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full font-semibold w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-lg">
                  Prof. (Dr.) Asheesh K. Singh
                </span>
                <span className="font-light text-xs pr-2">
                  Professor EE Department, MNNIT, Allahabad / Immediate Past
                  Section Chair, IEEE UP Section
                </span>
              </div>
            </div>
            <div className="col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img
                  src="https://icac3n.in/images/speakers/Prof.%20(Dr.)%20Prabhakar%20Tiwari.jpeg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) Prabhakar Tiwari"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full font-semibold w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-lg">
                  Prof. (Dr.) Prabhakar Tiwari
                </span>
                <span className="font-light text-xs pr-2">
                  MMMUT, Gorakhpur/ Secretary, IEEE U.P. Section
                </span>
              </div>
            </div>
            <div className="col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img
                  src="https://icac3n.in/images/speakers/Prof.%20(Dr.)%20Malay%20Kishore%20Dutta.jpeg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) Malay Kishore Dutta"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full font-semibold w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-lg">
                  Prof. (Dr.) Malay Kishore Dutta
                </span>
                <span className="font-light text-xs pr-2">
                  Director, Centre for Artificial Intelligence &amp;Dean Student
                  Research, Amity University, Noida, India
                </span>
              </div>
            </div>
            <div className="col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img
                  src="https://icac3n.in/images/speakers/Prof.%20(Dr.)%20Neetesh%20Purohit.jpeg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) Neetesh Purohit"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full font-semibold w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-lg">
                  Prof. (Dr.) Neetesh Purohit
                </span>
                <span className="font-light text-xs pr-2">
                  Indian Institute of Information Technology, Allahabad (IIITA),
                  Prayagraj, UP
                </span>
              </div>
            </div>
            <div className="col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img
                  src="https://icac3n.in/images/speakers/Prof.%20(Dr.)%20N.%20Badal.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) N. Badal"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full font-semibold w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-lg">
                  Prof. (Dr.) N. Badal
                </span>
                <span className="font-light text-xs pr-2">
                  Director, REC, Bijnor (U.P.), India
                </span>
              </div>
            </div>
            <div className="col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img
                  src="https://icac3n.in/images/speakers/Prof.%20(Dr.)%20J%20Ramkumar.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) J Ramkumar"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full font-semibold w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-lg">
                  Prof. (Dr.) J Ramkumar
                </span>
                <span className="font-light text-xs pr-2">
                  Professor, IIT Kanpur India, Ex Chair of IEEE UP
                </span>
              </div>
            </div>
            <div className="col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg">
              <div className="col-span-1 w-full h-44">
                <img
                  src="https://icac3n.in/images/speakers/Prof.%20(Dr.)%20Rajiv%20Saxena.jpg"
                  className="h-full w-full object-cover rounded-lg "
                  alt="Prof. (Dr.) Rajiv Saxena"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 my-2">
                <div className="py-2">
                  <div className="rounded-full font-semibold w-fit bg-amber-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-amber-800">
                      National Speaker
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-lg">
                  Prof. (Dr.) Rajiv Saxena
                </span>
                <span className="font-light text-xs pr-2">
                  Vice Chancellor, Jaypee University, Anoopshahr
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Speakers;

const Contact = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="prose px-4 my-8">
          <h1 className="heading border-l-4 border-red-600 pl-4 pr-4  text-tw-prose-headings font-extrabold text-2xl mt-0 mb-2 leading-tight">
            Contact Us{" "}
          </h1>
          <p className="mt-5 mb-5">
            Please fill the provided form, and we will get back to you as soon
            as possible.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your email *
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
                placeholder="name@acme.com"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Your message *
              </label>
              <textarea
                id="message"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-700 sm:w-fit hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Submit
            </button>
          </form>
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <h1 className=" heading border-l-4 border-red-600 pl-4 pr-4  text-tw-prose-headings font-extrabold text-2xl mt-0 mb-2 leading-tight">
            Get in Touch
          </h1>
          <p className="mt-5 mb-5">
            You can contact us on any of the following platforms, and we will
            get back to you.
          </p>
          <table className="table-auto w-full text-left mt-8 mb-8 text-sm leading-7">
            <tbody>
              <tr>
                <td>Email</td>
                <td>
                  <a href="mailto:">icac2n.ieee@gmail.com</a>
                </td>
              </tr>
              <tr>
                <td>Contact No.</td>
                <td>
                  <a href="tel:">+91-7835878146</a>
                </td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>
                  <a href="mailto:">dean.cse@its.edu.in</a>
                </td>
              </tr>
            </tbody>
          </table>
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <h1 className="heading border-l-4 border-red-600 pl-4 pr-4  text-tw-prose-headings font-extrabold text-2xl mt-0 mb-2 leading-tight">
            Location
          </h1>
          <p>
            <strong>ITS Engineering College</strong>, 46, Knowledge Park III,
            Greater Noida, Uttar Pradesh 201310
          </p>
          <div className="shadow-md w-fit rounded-md overflow-clip my-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3507.3616437764367!2d77.4886966!3d28.4686536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea0bb627ba3f%3A0x98ceba75b8e54979!2sITS%20Engineering%20College!5e0!3m2!1sen!2sin!4v1708071307933!5m2!1sen!2sin"
              height="450"
              width="600"
              loading="lazy"
              className="max-w-[95vw]"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

//<iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

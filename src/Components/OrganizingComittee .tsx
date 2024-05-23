const OrganizingComittee = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="prose mx-4" itemType="https://schema.org/Organization">
        <h1
          className="heading text-prose-headings font-extrabold text-4xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
          itemProp="name"
        >
          ORGANISING COMMITTEE
        </h1>
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Chief Patron"
          >
            Chief Patron
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            <li
              itemProp="member"
              id="Dr. R. P. Chadha"
              className="pl-1.5 mt-2 mb-2 "
            >
              <span itemProp="name">Dr. R. P. Chadha</span>,{" "}
              <span itemProp="jobTitle">Chairman</span>
            </li>
            <li
              itemProp="member"
              id="Mr. Sohil Chadha"
              className="pl-1.5 mt-2 mb-2"
            >
              <span itemProp="name">Mr. Sohil Chadha</span>,{" "}
              <span itemProp="jobTitle">Vice Chairman</span>
            </li>
          </ul>
        </div>
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Patrons"
          >
            Patrons
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            <li
              itemProp="member"
              className="pl-1.5 mt-2 mb-2"
              id="Shri B. K. Arora, Secretary, ITSEC"
            >
              <span itemProp="name">Shri B. K. Arora</span>,{" "}
              <span itemProp="jobTitle">Secretary, ITSEC</span>
            </li>
            <li
              itemProp="member"
              className="pl-1.5 mt-2 mb-2"
              id="Prof. (Dr.) J. P. Pandey"
            >
              <span itemProp="name">Prof. (Dr.) J. P. Pandey</span>,{" "}
              <span itemProp="jobTitle">Vice Chancellor, AKTU</span>
            </li>
            <li
              itemProp="member"
              className="pl-1.5 mt-2 mb-2"
              id="Prof. (Dr.) S. N. Singh, ABV-IIITM Gwalior"
            >
              <span itemProp="name">Prof. (Dr.) S. N. Singh</span>,{" "}
              <span itemProp="jobTitle">ABV-IIITM Gwalior</span>
            </li>
          </ul>
        </div>
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Conference General Chair"
          >
            Conference General Chair
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            <li itemProp="member" id="Prof. (Dr.) Mayank Garg">
              <span itemProp="name">Prof. (Dr.) Mayank Garg</span>,{" "}
              <span itemProp="jobTitle">Director, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. (Dr.) S. K. Singh">
              <span itemProp="name">Prof. (Dr.) S. K. Singh</span>,{" "}
              <span itemProp="jobTitle">IIIT, Allahabad</span>
            </li>
          </ul>
        </div>
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Convener &amp; Conference Organising Chair"
          >
            Convener &amp;Conference Organising Chair
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            <li itemProp="member" id="Prof. (Dr.) Vishnu Sharma">
              <span itemProp="name">Prof. (Dr.) Vishnu Sharma</span>,{" "}
              <span itemProp="jobTitle">Dean, CSE, ITSEC</span>
            </li>
          </ul>
        </div>
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Conference Chair"
          >
            Conference Chair
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            <li itemProp="member" id="Prof. (Dr.) Vishnu Sharma">
              <span itemProp="name">Prof. (Dr.) Vishnu Sharma</span>,{" "}
              <span itemProp="jobTitle">Dean, CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. (Dr.) Ashish Gupta">
              <span itemProp="name">Prof. (Dr.) Ashish Gupta</span>,{" "}
              <span itemProp="jobTitle">HOD, CSE, ITSEC</span>
            </li>
          </ul>
        </div>
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Conference Publication Chair"
          >
            Conference Publication Chair
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            <li itemProp="member" id="Prof. (Dr.) Jaya Sinha">
              <span itemProp="name">Prof. (Dr.) Jaya Sinha</span>,
              <span itemProp="jobTitle"> CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof.(Dr.) Hariom Tyagi">
              <span itemProp="name">Prof.(Dr.) Hariom Tyagi</span>,
              <span itemProp="jobTitle"> CSE, ITSEC</span>
            </li>    
          </ul>
        </div>     
        
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Technical Program Chairs"
          >
            Technical Program Chairs
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            <li itemProp="member" id="Prof. (Dr.) Ashish Gupta">
              <span itemProp="name">Prof. (Dr.) Ashish Gupta</span>,{" "}
              <span itemProp="jobTitle">HOD, CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. (Dr.) Nitin Mishra">
              <span itemProp="name">Prof. (Dr.) Nitin Mishra</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. (Dr.) Kuldeep Malik">
              <span itemProp="name">Prof. (Dr.) Kuldeep Malik</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. (Dr.) Vrinda Sachdeva">
              <span itemProp="name">Prof. (Dr.) Vrinda Sachdeva</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. (Dr.) Arun Kumar">
              <span itemProp="name">Prof. (Dr.) Arun Kumar</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            {/**<li itemProp="member" id="Prof. (Dr.) Sachi Gupta">
              <span itemProp="name">Prof. (Dr.) Sachi Gupta</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
            <li itemProp="member" id="Prof. (Dr.) Arun Kumar">
              <span itemProp="name">Prof. (Dr.) Arun Kumar</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li> */}
          </ul>
        </div>
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Organizing Committee"
          >
            Organizing Committee
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            <li itemProp="member" id="Prof. (Dr.) Vrinda Sachdeva">
              <span itemProp="name">Prof. (Dr.) Vrinda Sachdeva</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Tarun Chug">
              <span itemProp="name">Prof. Tarun Chug</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Abhishek Shivhare">
              <span itemProp="name">Prof. Abhishek Shivhare</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Yogesh Sharma">
              <span itemProp="name">Prof. Yogesh Sharma</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Prachi Jain">
              <span itemProp="name">Prof. Prachi Jain</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Akansha Sharma">
              <span itemProp="name">Prof. Akansha Sharma</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
          </ul>
        </div>
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Publication Committee"
          >
            Publication Committee
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            <li itemProp="member" id="Prof. Bhupendra Bhadana">
              <span itemProp="name">Prof. Bhupendra Bhadana</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Ashish Shrivastava">
              <span itemProp="name">Prof. Ashish Shrivastava</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Shomil Bansal">
              <span itemProp="name">Prof. Shomil Bansal</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Rakhi Puri">
              <span itemProp="name">Prof. Rakhi Puri</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Shailja Vershney">
              <span itemProp="name">Prof. Shailja Vershney</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
          </ul>
        </div>
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Publicity Committee"
          >
            Publicity Committee
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            <li itemProp="member" id="Prof. (Dr.) Nitin Mishra">
              <span itemProp="name">Prof. (Dr.) Nitin Mishra</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Manik Chandra">
              <span itemProp="name">Prof. Manik Chandra</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Ghanshyam Yadav">
              <span itemProp="name">Prof. Ghanshyam Yadav</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Shomil Bansal">
              <span itemProp="name">Prof. Shomil Bansal</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
          </ul>
        </div>
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Finance Committee"
          >
            Finance Committee
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            <li itemProp="member" id="Prof. Abhishek Shivhare">
              <span itemProp="name">Prof. Abhishek Shivhare</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Yogesh Sharma, CSE, ITSEC">
              <span itemProp="name">Prof. Yogesh Sharma</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Ashish Shrivastava">
              <span itemProp="name">Prof. Ashish Shrivastava</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
          </ul>
        </div>
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Hospitality Committee"
          >
            Hospitality Committee
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            <li itemProp="member" id="Prof. Abhishek Shivhare">
              <span itemProp="name">Prof. Abhishek Shivhare</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Bhupendra Bhadana">
              <span itemProp="name">Prof. Bhupendra Bhadana</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Akansha Sharma">
              <span itemProp="name">Prof. Akansha Sharma</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
          </ul>
        </div>
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Transport and Accommodation Committee"
          >
            Transport and Accommodation Committee
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            <li itemProp="member" id="Prof. Tarun Chug">
              <span itemProp="name">Prof. Tarun Chug</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Vijay Kumar Tiwari">
              <span itemProp="name">Prof. Vijay Kumar Tiwari</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Prashant Kumar">
              <span itemProp="name">Prof. Prashant Kumar</span>,{" "}
              <span itemProp="jobTitle">ITSEC</span>
            </li>
            {/**<li itemProp="member" id="Prof. Mohit Chowdhary">
              <span itemProp="name">Prof. Mohit Chowdhary</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li> */}
          </ul>
        </div>
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Website Committee"
          >
            Website Committee
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            <li itemProp="member" id="Prof. Prachi Jain">
              <span itemProp="name">Prof. Prachi Jain</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Monika">
              <span itemProp="name">Prof. Monika</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Mr. Sandeep Yadav">
              <span itemProp="name">Mr. Sandeep Yadav</span>,{" "}
              <span itemProp="jobTitle">CSE Student, ITSEC</span>
            </li>
            <li itemProp="member" id="Moh Faizan">
              <span itemProp="name">Moh Faizan</span>,{" "}
              <span itemProp="jobTitle">CSE Student, ITSEC</span>
            </li>
            <li itemProp="member" id="Mr. Suyash Gautam">
              <span itemProp="name">Mr. Suyash Gautam</span>,{" "}
              <span itemProp="jobTitle">CSE-DS Student, ITSEC</span>
            </li>
          </ul>
        </div>
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Sponsorship/Media Committee"
          >
            Sponsorship/Media Committee
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            <li itemProp="member" id="Prof. Manik Chandra">
              <span itemProp="name">Prof. Manik Chandra</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Ghanshyam Yadav">
              <span itemProp="name">Prof. Ghanshyam Yadav</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. (Dr.) Arun Kumar">
              <span itemProp="name">Prof. (Dr.) Arun Kumar</span>,{" "}
              <span itemProp="jobTitle">CSE, ITSEC</span>
            </li>
            <li className="list-none">
              <h3 className="heading" itemProp="name">
                Student Co-Ordinator s
              </h3>
              <ul>
                <li itemProp="member" id="Mr. Krish Verma">
                  <span itemProp="name">Mr. Krish Verma</span>,{" "}
                  <span itemProp="jobTitle">CSE Student, ITSEC</span>
                </li>
                <li itemProp="member" id="Mr. Vipul Upadhyay">
                  <span itemProp="name">Mr. Vipul Upadhyay</span>,{" "}
                  <span itemProp="jobTitle">CSE Student, ITSEC</span>
                </li>
                <li itemProp="member" id="Ms. Vaishali Chaurasiya">
                  <span itemProp="name">Ms. Vaishali Chaurasiya</span>,{" "}
                  <span itemProp="jobTitle">CSE Student, ITSEC</span>
                </li>
                <li itemProp="member" id="Mr. Yatin Kasnyal">
                  <span itemProp="name">Mr. Yatin Kasnyal</span>,{" "}
                  <span itemProp="jobTitle">CSE Student, ITSEC</span>
                </li>
                <li itemProp="member" id="Mr. Devraj Singh">
                  <span itemProp="name">Mr. Devraj Singh</span>,{" "}
                  <span itemProp="jobTitle">CSE Student, ITSEC</span>
                </li>
                <li itemProp="member" id="Ms. Nirbhika Khajuriya">
                  <span itemProp="name">Ms. Nirbhika Khajuriya</span>,{" "}
                  <span itemProp="jobTitle">CSE Student, ITSEC</span>
                </li>
                <li itemProp="member" id="Ms. Prinshi Paliwal">
                  <span itemProp="name">Ms. Prinshi Paliwal</span>,{" "}
                  <span itemProp="jobTitle">CSE Student, ITSEC</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default OrganizingComittee;

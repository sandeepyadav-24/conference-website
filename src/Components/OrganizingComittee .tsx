const OrganizingComittee = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="prose mx-4" itemType="https://schema.org/Organization">
        <h1
          className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
          itemProp="name"
        >
          ORGANISING COMMITTEE
        </h1>
        <div itemProp="department">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Chief Patron"
          >
            Chief Patron
          </h2>
          <ul className="mb-5 pl-6.5 list-disc">
            <li
              itemProp="member"
              id="Shri Suneel Galgotia"
              className="pl-1.5 mt-2 mb-2"
            >
              <span itemProp="name">Shri Suneel Galgotia</span>,{" "}
              <span itemProp="jobTitle">Chairman</span>
            </li>
            <li
              itemProp="member"
              id="Dr. Dhruv Galgotia"
              className="pl-1.5 mt-2 mb-2"
            >
              <span itemProp="name">Dr. Dhruv Galgotia</span>,{" "}
              <span itemProp="jobTitle">CEO</span>
            </li>
          </ul>
        </div>
        <div itemProp="department">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Patrons"
          >
            Patrons
          </h2>
          <ul className="mb-5 pl-6.5 list-disc">
            <li
              itemProp="member"
              className="pl-1.5 mt-2 mb-2"
              id="Gp. Capt. (R) Dr. P K Chopra, VSM"
            >
              <span itemProp="name">Gp. Capt. (R) Dr. P K Chopra, VSM</span>,{" "}
              <span itemProp="jobTitle">Director General</span>
            </li>
            <li
              itemProp="member"
              className="pl-1.5 mt-2 mb-2"
              id="Prof. (Dr.) S.N. Singh"
            >
              <span itemProp="name">Prof. (Dr.) S.N. Singh</span>,{" "}
              <span itemProp="jobTitle">ABV-IIITM, Gwalior</span>
            </li>
          </ul>
        </div>
        <div itemProp="department">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Conference General Chair"
          >
            Conference General Chair
          </h2>
          <ul className="mb-5 pl-6.5 list-disc">
            <li itemProp="member" id="Prof. (Dr.) Avadhesh Kumar">
              <span itemProp="name">Prof. (Dr.) Avadhesh Kumar</span>,{" "}
              <span itemProp="jobTitle">PVC, GU</span>
            </li>
            <li itemProp="member" id="Prof.(Dr.) MOHD. ASIM QADRI">
              <span itemProp="name">Prof.(Dr.) MOHD. ASIM QADRI</span>,{" "}
              <span itemProp="jobTitle">Director, GCET</span>
            </li>
            <li itemProp="member" id="Prof. (Dr.) S. K. Singh">
              <span itemProp="name">Prof. (Dr.) S. K. Singh</span>,{" "}
              <span itemProp="jobTitle">IIIT, Allahabad</span>
            </li>
          </ul>
        </div>
        <div itemProp="department">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Convener &amp; Conference Organising Chair"
          >
            Convener &amp;Conference Organising Chair
          </h2>
          <ul className="mb-5 pl-6.5 list-disc">
            <li itemProp="member" id="Prof. (Dr.) Vishnu Sharma">
              <span itemProp="name">Prof. (Dr.) Vishnu Sharma</span>,{" "}
              <span itemProp="jobTitle">HOD, CSE, GCET</span>
            </li>
          </ul>
        </div>
        <div itemProp="department">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Conference Chair"
          >
            Conference Chair
          </h2>
          <ul className="mb-5 pl-6.5 list-disc">
            <li itemProp="member" id="Prof. (Dr.) Vishnu Sharma">
              <span itemProp="name">Prof. (Dr.) Vishnu Sharma</span>,{" "}
              <span itemProp="jobTitle">HOD, CSE, GCET</span>
            </li>
            <li itemProp="member" id="Prof. (Dr.) Manjeet Singh">
              <span itemProp="name">Prof. (Dr.) Manjeet Singh</span>,{" "}
              <span itemProp="jobTitle">GCBK, Sonipat</span>
            </li>
          </ul>
        </div>
        <div itemProp="department">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Technical Program Chairs"
          >
            Technical Program Chairs
          </h2>
          <ul className="mb-5 pl-6.5 list-disc">
            <li itemProp="member" id="Prof. (Dr.) Sachin Kumar">
              <span itemProp="name">Prof. (Dr.) Sachin Kumar</span>,{" "}
              <span itemProp="jobTitle">Dean (R &amp;D), CSE, GCET</span>
            </li>
            <li itemProp="member" id="Prof. (Dr.) S. K. Singh">
              <span itemProp="name">Prof. (Dr.) S. K. Singh</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
            <li itemProp="member" id="Prof. (Dr.) Jaya Sinha">
              <span itemProp="name">Prof. (Dr.) Jaya Sinha</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
            <li itemProp="member" id="Prof. (Dr.) S. K. Singh">
              <span itemProp="name">Prof. (Dr.) S. K. Singh</span>,{" "}
              <span itemProp="jobTitle">HOD-IT, GCET</span>
            </li>
            <li itemProp="member" id="Prof. (Dr.) Vinit Kumar">
              <span itemProp="name">Prof. (Dr.) Vinit Kumar</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
            <li itemProp="member" id="Prof. (Dr.) Sachi Gupta">
              <span itemProp="name">Prof. (Dr.) Sachi Gupta</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
            <li itemProp="member" id="Prof. (Dr.) Arun Kumar">
              <span itemProp="name">Prof. (Dr.) Arun Kumar</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
          </ul>
        </div>
        <div itemProp="department">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Organizing Committee"
          >
            Organizing Committee
          </h2>
          <ul className="mb-5 pl-6.5 list-disc">
            <li itemProp="member" id="Prof. (Dr.) Ratna Nitin Patil">
              <span itemProp="name">Prof. (Dr.) Ratna Nitin Patil</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
            <li itemProp="member" id="Prof. (Dr.) Youddha Beer Singh">
              <span itemProp="name">Prof. (Dr.) Youddha Beer Singh</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
            <li itemProp="member" id="Prof. (Dr.) Mayank Dixit">
              <span itemProp="name">Prof. (Dr.) Mayank Dixit</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
            <li itemProp="member" id="Prof. Aparna Singh">
              <span itemProp="name">Prof. Aparna Singh</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
            <li itemProp="member" id="Prof. Ravindra Kumar">
              <span itemProp="name">Prof. Ravindra Kumar</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
          </ul>
        </div>
        <div itemProp="department">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Publication Committee"
          >
            Publication Committee
          </h2>
          <ul className="mb-5 pl-6.5 list-disc">
            <li itemProp="member" id="Prof. (Dr.) Vandna Rani Verma">
              <span itemProp="name">Prof. (Dr.) Vandna Rani Verma</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
            <li itemProp="member" id="Prof. (Dr.) Manjeet Singh">
              <span itemProp="name">Prof. (Dr.) Manjeet Singh</span>,{" "}
              <span itemProp="jobTitle">GCBK, Sonipat</span>
            </li>
            <li itemProp="member" id="Prof. (Dr.) Inderpreet Kaur">
              <span itemProp="name">Prof. (Dr.) Inderpreet Kaur</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
            <li itemProp="member" id="Prof. (Dr.) Kavita Sharma">
              <span itemProp="name">Prof. (Dr.) Kavita Sharma</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
          </ul>
        </div>
        <div itemProp="department">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Publicity Committee"
          >
            Publicity Committee
          </h2>
          <ul className="mb-5 pl-6.5 list-disc">
            <li itemProp="member" id="Prof. Manish Sharma">
              <span itemProp="name">Prof. Manish Sharma</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
            <li itemProp="member" id="Prof. Mukesh Kumar Singh">
              <span itemProp="name">Prof. Mukesh Kumar Singh</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
          </ul>
        </div>
        <div itemProp="department">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Finance Committee"
          >
            Finance Committee
          </h2>
          <ul className="mb-5 pl-6.5 list-disc">
            <li itemProp="member" id="Prof. (Dr.) Aditya Dev Mishra">
              <span itemProp="name">Prof. (Dr.) Aditya Dev Mishra</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
            <li
              itemProp="member"
              id="Prof. (Dr.) Krishan Kumar Saraswat, CSE, GCET"
            >
              <span itemProp="name">
                Prof. (Dr.) Krishan Kumar Saraswat, CSE, GCET
              </span>
              , <span itemProp="jobTitle">CSE, GCET</span>
            </li>
            <li itemProp="member" id="Prof. M. Chandraprabha">
              <span itemProp="name">Prof. M. Chandraprabha</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
          </ul>
        </div>
        <div itemProp="department">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Hospitality Committee"
          >
            Hospitality Committee
          </h2>
          <ul className="mb-5 pl-6.5 list-disc">
            <li itemProp="member" id="Prof. (Dr.) Rupali Khare">
              <span itemProp="name">Prof. (Dr.) Rupali Khare</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
            <li itemProp="member" id="Prof. Ritu Dewan">
              <span itemProp="name">Prof. Ritu Dewan</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
            <li itemProp="member" id="Prof. Mamta Narwaria">
              <span itemProp="name">Prof. Mamta Narwaria</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
          </ul>
        </div>
        <div itemProp="department">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Transport and Accommodation Committee"
          >
            Transport and Accommodation Committee
          </h2>
          <ul className="mb-5 pl-6.5 list-disc">
            <li itemProp="member" id="Prof. Rajiv Kumar Nath">
              <span itemProp="name">Prof. Rajiv Kumar Nath</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
            <li itemProp="member" id="Prof. Ravikant Nirala">
              <span itemProp="name">Prof. Ravikant Nirala</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
            <li itemProp="member" id="Prof. Pramit Samant">
              <span itemProp="name">Prof. Pramit Samant</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
            <li itemProp="member" id="Prof. Mohit Chowdhary">
              <span itemProp="name">Prof. Mohit Chowdhary</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
          </ul>
        </div>
        <div itemProp="department">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Website Committee"
          >
            Website Committee
          </h2>
          <ul className="mb-5 pl-6.5 list-disc">
            <li itemProp="member" id="Prof. Ajeet Kumar Bhartee">
              <span itemProp="name">Prof. Ajeet Kumar Bhartee</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
            <li itemProp="member" id="Mr. Hardik Prakash">
              <span itemProp="name">Mr. Hardik Prakash</span>,{" "}
              <span itemProp="jobTitle">CSE-AI Student, GCET</span>
            </li>
            <li itemProp="member" id="Mr. Prakhar Shukla">
              <span itemProp="name">Mr. Prakhar Shukla</span>,{" "}
              <span itemProp="jobTitle">CSE-AI Student, GCET</span>
            </li>
            <li itemProp="member" id="Mr. Areeb ur Rub">
              <span itemProp="name">Mr. Areeb ur Rub</span>,{" "}
              <span itemProp="jobTitle">CSE-AI Student, GCET</span>
            </li>
          </ul>
        </div>
        <div itemProp="department">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Sponsorship/Media Committee"
          >
            Sponsorship/Media Committee
          </h2>
          <ul className="mb-5 pl-6.5 list-disc">
            <li itemProp="member" id="Prof. (Dr.) Pallavi Goel">
              <span itemProp="name">Prof. (Dr.) Pallavi Goel</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
            <li itemProp="member" id="Prof. Shikha Singh">
              <span itemProp="name">Prof. Shikha Singh</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
            <li itemProp="member" id="Prof. Arti Ranjan">
              <span itemProp="name">Prof. Arti Ranjan</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
            <li className="list-none">
              <h3 className="heading" itemProp="name">
                Student Co-Ordinator s
              </h3>
              <ul>
                <li itemProp="member" id="Mr. Raunak Gupta">
                  <span itemProp="name">Mr. Raunak Gupta</span>,{" "}
                  <span itemProp="jobTitle">CSE, GCET</span>
                </li>
                <li itemProp="member" id="Mr. Yash Gupta">
                  <span itemProp="name">Mr. Yash Gupta</span>,{" "}
                  <span itemProp="jobTitle">CSE-AI, GCET</span>
                </li>
                <li itemProp="member" id="Mr. Pratyaksh Kumar">
                  <span itemProp="name">Mr. Pratyaksh Kumar</span>,{" "}
                  <span itemProp="jobTitle">CSE, GCET</span>
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

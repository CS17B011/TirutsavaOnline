import React, { useState } from "react";
import Header from "./Header";
import FAQ from "./FAQ";
import "./index.css";
import { MDBContainer, MDBJumbotron } from "mdbreact";
import { Link } from "react-router-dom";
import Search from "./searchbar/search";

const App = () => {
  const [faqs, setfaqs] = useState([
    {
      question: "How do I register for tirutsava?",
      answer: "You can register for tirutsava by going to the Register page on our website.",
      open: false
    },
    {
      question: "What are the dates for tirutsava?",
      answer: "Tirutsava will be held from 31 January 2020 to 2 February 2020.",
      open: false
    },
    {
      question:"Am I eligible to register for events at Tirutsava?",
      answer: "Any college/school student with a valid ID card can register for events",
      open: false
    },
    {
      question: "Are on-spot registrations allowed during the fest?",
      answer: "On-spot registrations may or may not be allowed depending on the number of already registered participants. We suggest that you register online as soon as possible to prevent any unforeseen circumstances.",
      open: false
    },
    {
      question: "Why should I give my information in registration?",
      answer: "All the details asked are relevant and are used to keep you updated about events at Tirutsava. All the information is kept safe.",
      open: false
    },
    {
      question: "What is the artist lineup for pro nites at Tirutsava?",
      answer: "",
      open: false
    },
    {
      question: "How can I buy passes for pro nite?",
      answer: "",
      open: false
    },
    {
      question: "Am I eligible to attend the pro nites?",
      answer: "",
      open: false
    },
    {
      question:"Should I carry some ID card everytime?",
      answer: "Yes, as security check are done at random intervals",
      open: false
    },

    {
      question: "Will I get a certificate for participation in competitions?",
      answer: "Winners and finalists of each event will get an online certificate after Tirutsava",
      open: false
    },
    {
      question: "Will accommodation be provided by team tirutsava?",
      answer: "Yes, accommodation will be provided.",
      open: false
    },
    {
      question:"What is the cost of accommodation facility?",
      answer: "We charge on a night basis and we charge INR 200 for Non AC room and INR 250 for AC room.",
      open: false
    },
    {
      question: "What all does the accommodation facilities include?",
      answer: "It includes basic hospitality facilities.",
      open: false
    },
    {
      question: "Does accommodation fee include food facility as well?",
      answer: "No, accomodation fee doesn't include food facility.",
      open: false
    },
    {
      question: "What are the entry and exit timings of IIT-TP campus during Tirutsava?",
      answer: "",
      open: false
    },
    {
      question: "Will parking spots be available?",
      answer: "Yes,parking spots are available in the campus itself.",
      open: false
    }
  ]);

  const [showfaqs] = useState(faqs);

  const toggleFAQ = index => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  const handleChange = e => {
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (e.target.value !== "") {
      // Assign the original list to currentList
      currentList = showfaqs;

      // Use .filter() to determine which items should be displayed
      // based on the search terms

      newList = currentList.filter(item => {
        // change current item to lowercase
        const lc = item.question.toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = showfaqs;
    }
    // Set the filtered state based on what our rules added to newList

    setfaqs(newList);
  };
  return (
    <div>
      <div className="bcgrnd">
        <div className="App" style={{ display: "inline" }}>
          <Header />
          <Search handleChange={handleChange} />
          <div className="scroll">
            <div className="faqs">
              {faqs.map((faq, i) => (
                <FAQ faq={faq} index={i} key={i} toggleFAQ={toggleFAQ} />
              ))}
            </div>
          </div>
        </div>
        <MDBJumbotron className="bg-light mt-5 mb-0">
          <MDBContainer className=" bg-light">
            <h2 className="display-4 text-center">Can't Find Your Doubt ?</h2>
            <h6 className="text-center">
              No worries just send your doubt
              <Link className="text-white" to="/query">
                {" "}
                <div className="buttons">
                  {" "}
                  <button className="bt-hover color-7">HERE</button>
                </div>
              </Link>
            </h6>
            <h6 className="text-center">
              <i className="fas fa-laugh-beam" /> We will contact you soon.
            </h6>
          </MDBContainer>
        </MDBJumbotron>
        {/* <Link to="/query">Submit Yor Question here</Link> */}
      </div>
    </div>
  );
};

export default App;

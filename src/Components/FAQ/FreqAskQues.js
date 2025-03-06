import React, { useState } from "react";
import "./FreqAskQuesStyles.css";
import Fobana_Logo from "../../Assets/Cover/Fobana_Logo.png";

const FreqAskQues = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // If clicked on the same question, hide the answer
    } else {
      setActiveIndex(index); // Show the clicked answer
    }
  };

  const faqData = [
    {
      question: "Who designed the FOBANA LOGO ?",
      answer:
        "The FOBANA logo was designed by renowned graphics designer Tajul Imam. In the past, FOBANA used to design a logo for the convention every year, then during FOBANA 2006 in Atlanta, Georgia, the Executive Committee decided to select one permanent logo. Mr. Tajul Imam submitted five logos and the current logo was chosen. The “shapla” in the middle of the logo was carried forward from the previous FOBANA logo.",
    },
    {
      question: "How does FOBANA view politics ?",
      answer:
        "FOBANA is a non-political organization. However, it actively promotes participation and involvement in mainstream politics. It promotes voter registration, census and forming caucus in local mainstream politics and organizes informative seminars during the annual convention.",
    },
    {
      question: "What is FOBANA doing about our youth ?",
      answer: (
        <>
          <p>
            FOBANA has a number of programs specifically geared for our young
            generation. First of all, the Executive Committee amended the
            constitution to pave the way to allow more activities for the youth.
            The amended constitution says,
          </p>
          <p>
            “Promote participation of youths in social, cultural, educational
            and scientific activities in North America and Bangladesh. Encourage
            and assist the youths for future leadership role.”
          </p>
          <p>
            Then the organization guided the host organizations for the past
            couple of years to include more and more programs for young
            children. For instance,
          </p>
          <ul>
            <li>Talent competition</li>
            <li>Essay Competition</li>
            <li>Usher and Volunteer Program</li>
          </ul>
          <p>
            During the 2009-2010 term, the FOBANA Executive Committee formed a
            Youth Sub-Committee and empowered the committee to work solely on
            the Youth Program. In the coming years, the Youth Sub-Committee will
            launch a number of programs for our young generations.
          </p>
        </>
      ),
    },
    {
      question: "Who composed the FOBANA theme song ?",
      answer: (
        <>
          <p>
            Talented musician Rommel Hossain (Atlanta, GA) composed the FOBANA
            theme song. The theme song was first introduced during the FOBANA
            2006 in Atlanta, Georgia. Click on
            <a
              href="https://www.youtube.com/watch?v=zxoS6wqAXVM"
              target="_blank"
              rel="noreferrer"
              className="inline-link"
            >
              FOBANA Theme Song
            </a>
            for more details.
          </p>
        </>
      ),
    },
    {
      question: "How many FOBANA are there in North America ?",
      answer:
        "There is only one FOBANA organizaiton in the North America. Because of its immense popularity there are groups who uses the name FOBANA for their convention. Their act is not only unethical, it is also illegal because the word FOBANA is a registered trademark and owned by the organization. FOBANA has no problem if any other group wants to have one or multiple conventions through out the year, the organization only wants that no one else uses the name FOBANA.",
    },
    {
      question: "When was FOBANA established ?",
      answer:
        "The Federation of Bangladeshi Associations in North America (FOBANA), is one of the oldest Bangladeshi organizations in North America. Established in 1987, the organization's primary goal is to organize annual conventions across the country hosted by various member Bangladeshi associations.",
    },
  ];

  return (
    <div className="faq-container">
      <h2>FREQUENTLY ASKED QUESTIONS</h2>
      <div className="Fobana_logo">
        <img id="Fobana-logo" src={Fobana_Logo}></img>
      </div>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h4>{item.question}</h4>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreqAskQues;

import React, { useState } from "react";
const Faq = () => {

  const faqData = [
    {
      question: "Why UX/UI and Product Design?",
      answer: "In a world driven by technology, design is the bridge between users and the products they love. My journey into UX/UI and Product Design was a natural progression stemming from my curiosity about how people interact with technology. I believe that exceptional design goes beyond aesthetics; it's about empathy, problem-solving, and enhancing the way people connect with the digital world.",
    },
    {
      question: "What’s My Approach to A New Idea I’m Not Familiar With?",
      answer: "In every project, I follow a holistic design process that begins with understanding the user's needs and culminates in a polished, user-friendly product. I'm a firm believer in the iterative nature of design, constantly seeking feedback, and refining until we achieve perfection.",
    },
    {
      question: "What Sets Me Apart?",
      answer: "What sets me apart as a designer is my ability to bridge the gap between creative design and strategic thinking. I've had the privilege of working on diverse projects, from mobile apps to complex web platforms, where I've had the opportunity to blend innovative aesthetics with exceptional usability. My multidisciplinary background also allows me to understand the bigger picture, ensuring that design aligns seamlessly with business goals.",
    },
   
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="max-w-7xl mx-auto mt-8  px-6 py-24 sm:py-32 lg:px-8">
       <div className="pb-20 ">
        <h2 className="text-3xl  tracking-tight text-white sm:text-4xl">Frequently Asked Questions</h2>
        <p className="mt-2 text-lg leading-8 text-darktext">
       Here are common question that i get asked a lot by my clients.
        </p>
      </div>
      {/* <h1 className="text-3xl mb-24">Frequently Asked Questions</h1> */}
      <div className="space-y-12">
        {faqData.map((faq, index) => (
          <div key={index} className="border-l-2 border-b-2 border-tertiary rounded-lg">
            <div
              className="p-4 cursor-pointer flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-lg ">{faq.question}</h2>
              <svg
                className={`w-6 h-6 transition-transform transform ${
                  activeIndex === index ? "rotate-45" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={activeIndex === index ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </div>
            {activeIndex === index && (
              <div className="px-4 pb-4">
                <p className="text-white">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};



export default Faq
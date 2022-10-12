const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

let accordianBody = document.querySelector(".accordian_body");

function createFaq() {
  //console.log(faqData[i].answer);
  const faqs = document.createElement("div");
  faqs.setAttribute("class", "faq");

  // Create Faq header contrainer
  const faqHeader = document.createElement("div");
  faqHeader.setAttribute("class", "faq_header");

  // Create Heading
  const faqHeading = document.createElement("h3");
  //const faqHeadingText = document.createTextNode("");

  // Create Pluse icon
  const faqBtn = document.createElement("a");
  faqBtn.innerText = "+";
  faqBtn.style.display = "flex";
  faqBtn.style.justifyContent = "center";
  faqBtn.style.alignItems = "center";
  faqBtn.setAttribute("class", "show_btn");

  // Create Paragraph
  const faqContentContainer = document.createElement("p");
  faqContentContainer.style.display = "none";

  let faqValues = { faqs, faqHeader, faqHeading, faqBtn, faqContentContainer };
  return faqValues;
}

faqData.forEach((ele) => {
  let faqContainer = createFaq();
  faqContainer.faqBtn.setAttribute("id", ele.id);
  faqContainer.faqHeading.innerHTML = ele.question;
  faqContainer.faqContentContainer.innerHTML = ele.answer;

  // Append header to  FAQ container

  faqContainer.faqHeader.append(faqContainer.faqHeading);
  faqContainer.faqHeader.append(faqContainer.faqBtn);
  faqContainer.faqs.append(faqContainer.faqHeader);

  // Append Paragraph text
  faqContainer.faqContentContainer.append(faqContainer.faqContentNode);
  faqContainer.faqs.append(faqContainer.faqContentContainer);

  // Append FAQ container
  accordianBody.append(faqContainer.faqs);
});

function showFaq(button, index) {
  if (document.querySelectorAll(".faq p")[index].style.display == "none") {
    document.querySelectorAll(".faq p")[index].style.display = "block";
    button.innerText = "—";
  } else {
    document.querySelectorAll(".faq p")[index].style.display = "none";
    button.innerText = "+";
  }
}

function btnStatusUpdate() {
  const pulseBtns = document.querySelectorAll(".show_btn");
  pulseBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      showFaq(btn, i);
    });
  });
}

btnStatusUpdate();

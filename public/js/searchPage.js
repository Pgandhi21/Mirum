// Empty JS for your own code to be here
const clickButtonHandler = function (event) {
  event.preventDefault();

  const languageID = event.target.textContent.toLowerCase();
  console.log(event.target);
  console.log(languageID);

  // await fetch(`/dashboard/${languageID}`);

  document.location.replace(`/dashboard/${languageID}`);
};

const customTagHandler = async function (event) {
  event.preventDefault();

  const customLanguageID = document.querySelector(
    'input[name="languageBox"]'
  ).value;

  await fetch(`/dashboard/${customLanguageID}`);

  document.location.replace(`/dashboard/${customLanguageID}`);
};

document
  .querySelector("#custom-tag")
  .addEventListener("submit", customTagHandler);

const customQuestionHandler = async function (event) {
  event.preventDefault();

  const QuestionID = document.querySelector(
    'input[name="customQuestion"]'
  ).value;

  const customQuestionID = QuestionID.replaceAll(" ", "+");

  // await fetch(`/question/${customQuestionID}`);

  document.location.replace(`/question/${customQuestionID}`);
};

document
  .querySelector("#custom-question")
  .addEventListener("submit", customQuestionHandler);

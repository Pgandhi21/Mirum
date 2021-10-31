// Empty JS for your own code to be here
const editFormHandler = async function (event) {
  event.preventDefault();

  const languageID = event.target.textContent.toLowerCase();
  console.log(event.target);
  console.log(languageID);

  await fetch(`/dashboard/${languageID}`);

  document.location.replace("/dashboard/${languageID}");
};

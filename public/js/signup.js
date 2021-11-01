const signupFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#inputEmail1");
  const passwordEl = document.querySelector("#inputPassword1");

  const response = await fetch("/", {
    method: "POST",
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/search");
  } else {
    alert("Failed to sign up");
  }
};

document
  .querySelector("#signUpPitch")
  .addEventListener("submit", signupFormHandler);

const loginFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#inputEmail2");
  const passwordEl = document.querySelector("#inputPassword2");

  const response = await fetch("/login", {
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
    alert("Failed to login");
  }
};

document.querySelector("#logIn").addEventListener("submit", loginFormHandler);

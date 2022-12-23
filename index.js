const buttonAnswer = document.querySelector('.question');
const buttonLink = document.querySelector('.link');

buttonAnswer.addEventListener("click", (event) => {
  const link = document.createElement("input");
  const inputContainer = document.querySelector(".input-container");

  if (inputContainer.children.length === 0) {
    inputContainer.appendChild(link);
  }

  buttonLink.addEventListener("click", (event) => {
    const { target } = event;
    target.removeAttribute("href");

    if (link.value) {
      const linkToLowerCase = link.value.toLowerCase();
      let isHttp = linkToLowerCase.indexOf("http://");
      let isHttps = linkToLowerCase.indexOf("https://");

      if (isHttp === 0 || isHttps === 0) {
        target.href = linkToLowerCase;
      } else {
        target.href = `https://${linkToLowerCase}`;
      }

      link.style.border = "1px solid black";
      link.value = "";
    } else {
      link.style.border = "1px solid red";
    }
  });
});
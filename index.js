const buttonAnswer = document.querySelector('.question');
const buttonLink = document.querySelector('.link');

buttonAnswer.addEventListener('click', (event) => {
  let link = prompt('Enter link');
  if (link) {
    let isHttp = link.indexOf("http://");
    let isHttps = link.indexOf("https://");

    if (isHttp === 0 || isHttps === 0) {
      buttonLink.href = link;
      return;
    }
    buttonLink.href = `https://${link}`;
  }
});

function trimExcerpts(maxLength = 200, linkText = "Read more") {
  const excerptElements = document.querySelectorAll("#excerpt");

  excerptElements.forEach(excerptElement => {
    const excerptText = excerptElement.textContent;
    const trimmedExcerpt = excerptText.substring(0, maxLength).trim();

    excerptElement.innerHTML = `${trimmedExcerpt}... <a href="#">${linkText}</a>`;
  });
}

trimExcerpts();

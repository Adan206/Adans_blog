const titleInput = document.querySelector("#article-title");
const contentInput = document.querySelector("#article-content");
const articleSection = document.querySelector("#article-section");

const createArticle = (event) => {
  event.preventDefault();

  const article = document.createElement("ARTICLE");
  const newCard = document.createElement("DIV");
  const newCardBody = document.createElement("DIV");
  const deleteX = document.createElement("DIV");
  const cardHeading = document.createElement("H5");
  const cardText = document.createElement("P");

  // the variables are now inserted in to the parents div according to bootstrap class

  newCard.append(newCardBody);
  newCardBody.append(deleteX);
  newCardBody.append(cardHeading);
  newCardBody.append(cardText);
  article.append(newCard);
  articleSection.append(article);

  //appending and deleting list

  //bootstrap classes are needed for style
  newCard.className = "card mb-3 mt-4 text-center bg-light";
  newCardBody.className = "card-body";
  deleteX.className = "deletecard";
  cardHeading.className = "card-title";
  cardText.className = "card-text";

  //the value of the title and text-area input are inserted in the h5 and p elements
  //created an x symbol for deleting cards in the next step

  cardHeading.innerText = titleInput.value;
  cardText.innerText = contentInput.value;
  deleteX.innerText = "X";

  // following click event listener will delete blog card from page.

  articleSection.addEventListener("click", function (e) {
    if (e.target.classList.contains("deletecard")) {
      e.target.closest("article").remove();
    }
  });

  //set the value of the inputs to empty after submit
  titleInput.value = "";
  contentInput.value = "";
};

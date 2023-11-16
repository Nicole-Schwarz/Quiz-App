const firstBookmark = document.querySelector(
  '[data-js="bookmark-first-question"]'
);
const iconFirstBookmark = document.querySelector(
  '[data-js="icon-bookmark-first-question"]'
);

const secondBookmark = document.querySelector(
  '[data-js="bookmark-second-question"]'
);
const iconSecondBookmark = document.querySelector(
  '[data-js="icon-bookmark-second-question"]'
);
const thirdBookmark = document.querySelector(
  '[data-js="bookmark-third-question"]'
);
const iconThirdBookmark = document.querySelector(
  '[data-js="icon-bookmark-third-question"]'
);

firstBookmark.addEventListener("click", () => {
  changeBookmarks(iconFirstBookmark);
});

secondBookmark.addEventListener("click", () => {
  changeBookmarks(iconSecondBookmark);
});

thirdBookmark.addEventListener("click", () => {
  changeBookmarks(iconThirdBookmark);
});

function changeBookmarks(bookmarkIcon) {
  if (bookmarkIcon.classList.contains("fa-bookmark-o")) {
    bookmarkIcon.classList.remove("fa-bookmark-o");
    bookmarkIcon.classList.add("fa-bookmark");
  } else {
    bookmarkIcon.classList.remove("fa-bookmark");
    bookmarkIcon.classList.add("fa-bookmark-o");
  }
}
